"use client";

import { db } from '@/config/FirebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { DatePicker } from '@/components/DatePicker';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

function Page() {
  const router = useRouter()
  const { class_id } = useParams();
  const [classData, setClassData] = useState(null);
  const [date, setDate] = useState(null);
  const [students, setStudents] = useState([]);
  const [presentStudents, setPresentStudents] = useState([]);

  const getClass = async () => {
    try {
      const docRef = doc(db, "classes", class_id);
      const classDoc = await getDoc(docRef);
      if (classDoc.exists()) {
        const classData = classDoc.data();
        console.log("Fetched class data:", classData); // Check this output
        setClassData(classData);
        setStudents(classData.students || []);
      } else {
        console.log("No such document!");
      }
    } catch (err) {
      console.log("Error fetching class data:", err);
    }
  };

  useEffect(() => {
    if (class_id) {
      getClass();
    }
  }, [class_id]);

  const handleRecordAttendance = async () => {
    if (!date) {
      console.log("Please select a date.");
      return;
    }
  
    const dateStr = date.toISOString().split('T')[0]; // format date as YYYY-MM-DD
  
    // Determine present and absent students
    const presentStudentRolls = presentStudents;
    const absentStudentRolls = students
      .filter(student => !presentStudentRolls.includes(student.roll))
      .map(student => student.roll);
  
    // Update students' attendedDates
    const updatedStudents = students.map(student => {
      if (presentStudentRolls.includes(student.roll)) {
        return {
          ...student,
          attendedDates: student.attendedDates ? [...student.attendedDates, dateStr] : [dateStr],
        };
      }
      // Ensure attendedDates is initialized
      return {
        ...student,
        attendedDates: student.attendedDates || [],
      };
    });
  
    // Create new attendance record
    const newAttendanceRecord = {
      id: new Date().getTime(),
      date: dateStr,
      presentStudents: presentStudentRolls,
      absentStudents: absentStudentRolls,
    };
  
    try {
      // Update the class document with the new attendance record and students' data
      const classDocRef = doc(db, "classes", class_id);
      await updateDoc(classDocRef, {
        students: updatedStudents,
        attendance: classData.attendance ? [...classData.attendance, newAttendanceRecord] : [newAttendanceRecord],
      });
  
      console.log("Attendance recorded:", newAttendanceRecord);
  
      // Refetch the class data to ensure the latest state is updated
      await getClass(); // Fetch the updated class data
  
      setDate(null); // Clear the date after saving
      router.push('/dashboard/attendance');
    } catch (err) {
      console.log("Error recording attendance:", err);
    }
  };

  const attendanceButton = (props) => {
    const isPresent = presentStudents.includes(props.data.roll);
  
    return (
      <button 
        className={`p-2 rounded-md text-white ${isPresent ? 'bg-primary' : 'bg-gray-400'}`} 
        onClick={() => {
          const roll = props.data.roll;
          setPresentStudents((prev) => 
            prev.includes(roll) ? prev.filter(r => r !== roll) : [...prev, roll]
          );
        }}>
        {isPresent ? <Check /> : <X />}
      </button>
    );
  };

  const colDefs = [
    { field: "roll", headerName: "Roll Number" },
    { field: "name", headerName: "Name", width: 300 },
    {
      field: "attendance",
      headerName: "Attendance",
      width: 150,
      valueGetter: params => {
        if (classData && classData.attendance) {
          const totalAttendanceRecords = classData.attendance.length;
          const attendedDatesCount = params.data.attendedDates ? params.data.attendedDates.length : 0;
          return totalAttendanceRecords ? ((attendedDatesCount / totalAttendanceRecords) * 100).toFixed(2) : '0.00';
        }
        return '0.00';
      }
    },
    { 
      field: "isDefaulter", 
      headerName: "Defaulter", 
      width: 200,
      valueGetter: params => {
        if (classData && classData.attendance) {
          const totalAttendanceRecords = classData.attendance.length;
          const attendedDatesCount = params.data.attendedDates ? params.data.attendedDates.length : 0;
          const attendancePercentage = totalAttendanceRecords ? (attendedDatesCount / totalAttendanceRecords) * 100 : 0;
          return attendancePercentage < 75;
        }
        return true;
      }
    },
    { field: "present", cellRenderer: attendanceButton, headerName: "Present", width: 250 },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">Record Attendance</h2>
      <div className="mt-6">
        <DatePicker date={date} setDate={setDate} />
      </div>
      {date && (
        <div className="mt-6">
          <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
            <AgGridReact
              rowData={students}
              columnDefs={colDefs}
              domLayout='autoHeight'
            />
          </div>
        </div>
      )}
      <Button
        onClick={handleRecordAttendance}
        className="mt-4 bg-slate-800 rounded-md px-3 py-2 text-white"
      >
        Save Attendance
      </Button>
    </div>
  );
}

export default Page;
