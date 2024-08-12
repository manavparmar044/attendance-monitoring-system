"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/config/FirebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Plus, Search, Trash2 } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function Page() {
  const { class_id } = useParams();
  const [classData, setClassData] = useState(null);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [roll, setRoll] = useState('');
  const [alertOpen, setAlertOpen] = useState(false);
  const [deleteRoll, setDeleteRoll] = useState(null);

  const pagination = true;
  const paginationPageSize = 500;
  const paginationPageSizeSelector = [10, 50, 100];
  const [searchData, setSearchData] = useState('');

  const deleteButton = (props) => {
    return (
      <button 
        className="p-2 bg-slate-800 rounded-md text-white" 
        onClick={() => {
          setDeleteRoll(props.data.roll);
          setAlertOpen(true);
        }}>
        <Trash2 />
      </button>
    );
  };

  // const [colDefs, setColDefs] = useState();
  const colDefs = [
    { field: "roll", headerName: "Roll Number",width: 200},
    { field: "name", headerName: "Name" ,width: 300},
    {
      field: "attendance",
      headerName: "Attendance",
      width: 200,
      valueGetter: params => {
        if (classData && classData.attendance) {
          const totalAttendanceRecords = classData.attendance.length;
          const attendedDatesCount = params.data.attendedDates ? params.data.attendedDates.length : 0;
          const attendancePercentage = totalAttendanceRecords
            ? (attendedDatesCount / totalAttendanceRecords * 100).toFixed(2)
            : '0.00';
          return attendancePercentage;
        }
        return '0.00';
      }
    },
    { 
      field: "isDefaulter", 
      headerName: "Defaulter", 
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
    { field: "delete", cellRenderer: deleteButton, headerName: "Delete" },
  ]

  const getClass = async () => {
    try {
      const docRef = doc(db, "classes", class_id);
      const classDoc = await getDoc(docRef);
      if (classDoc.exists()) {
        setClassData(classDoc.data());
      } else {
        console.log("No such document!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (class_id) {
      getClass();
    }
  }, [class_id]);

  const saveStudent = async () => {
    try {
      const studentRef = doc(db, "classes", class_id);
      const newStudent = {
        name,
        roll: parseInt(roll),
        attendance: 0, // Initialize with 0 attendance
        isDefaulter: true // Default to true, will be updated based on attendance
      };
  
      // Determine if the student is a defaulter
      if (newStudent.attendance > 75) {
        newStudent.isDefaulter = false;
      }
  
      const updatedStudents = classData?.students
        ? [...classData.students, newStudent]
        : [newStudent];
  
      await updateDoc(studentRef, {
        students: updatedStudents
      });
  
      setOpen(false);
      setName('');
      setRoll('');
      await getClass();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteStudent = async (roll) => {
    try {
      const updatedStudents = classData.students.filter(student => student.roll !== roll);
      await updateDoc(doc(db, "classes", class_id), {
        students: updatedStudents
      });
      setClassData(prev => ({ ...prev, students: updatedStudents }));
      setAlertOpen(false);
      setDeleteRoll(null);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">{classData?.className}</h2>
        <button
          onClick={() => setOpen(true)}
          className="bg-primary rounded-md px-3 py-2 text-white flex justify-between gap-2 cursor-pointer"
        >
          Add Student <Plus />
        </button>
      </div>
      <div className="mt-4 py-2 px-3 rounded-md max-w-sm flex border gap-2">
        <Search className="" />
        <input className="outline-none w-full text-sm" placeholder="Search" value={searchData} onChange={(e) => setSearchData(e.target.value)} />
      </div>
      <div className="ag-theme-alpine mt-4" style={{ height: 400, width: '100%' }}>
        <AgGridReact
          rowData={classData?.students || []}
          columnDefs={colDefs}
          domLayout='autoHeight'
          quickFilterText={searchData}
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}
        />
      </div>
      <Dialog open={open}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Student</DialogTitle>
            <DialogDescription>
              <div className="py-3">
                <label className="mb-2">Full Name</label>
                <Input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Enter name"
                />
              </div>
              <div className="py-3">
                <label className="mb-2">Roll Number</label>
                <Input
                  onChange={(e) => setRoll(e.target.value)}
                  value={roll}
                  type="number"
                  placeholder="Enter roll number"
                />
              </div>

              <div className="flex gap-2 items-center justify-end mt-4">
                <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={saveStudent}>Save</Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Do you want to delete the Student?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the student from the database.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => deleteStudent(deleteRoll)}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default Page;
