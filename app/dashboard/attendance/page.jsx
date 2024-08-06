"use client"
import { Plus, Trash2 } from "lucide-react";
import React, { useState, useEffect } from "react";
import { db } from "@/config/FirebaseConfig";
import { collection, getDocs, doc, getDoc, query, where, updateDoc } from "firebase/firestore";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

function Page() {
  const [classes, setClasses] = useState([]);
  const [selectedClassId, setSelectedClassId] = useState("");
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      fetchClasses();
    }
  }, [user]);

  useEffect(() => {
    if (selectedClassId) {
      fetchAttendanceRecords(selectedClassId);
    }
  }, [selectedClassId]);

  const fetchClasses = async () => {
    try {
      const classesRef = collection(db, "classes");
      const q = query(
        classesRef,
        where("email", "==", user.primaryEmailAddress.emailAddress)
      );
      const querySnapshot = await getDocs(q);

      const fetchedClasses = [];
      querySnapshot.forEach((doc) => {
        fetchedClasses.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setClasses(fetchedClasses);
      if (fetchedClasses.length > 0) {
        setSelectedClassId(fetchedClasses[0].id);
      }
    } catch (error) {
      console.error("Error fetching classes: ", error);
    }
  };

  const fetchAttendanceRecords = async (classId) => {
    try {
      const classDocRef = doc(db, "classes", classId);
      const classDoc = await getDoc(classDocRef);

      if (classDoc.exists()) {
        const classData = classDoc.data();
        setAttendanceRecords(classData.attendance || []);
      } else {
        console.log("No such document!");
        setAttendanceRecords([]);
      }
    } catch (error) {
      console.error("Error fetching attendance records: ", error);
      setAttendanceRecords([]);
    }
  };

  const handleRecordAttendanceClick = () => {
    if (selectedClassId) {
      router.push(`/dashboard/attendance/${selectedClassId}`);
    }
  };

  const handleDeleteRecord = async (recordIndex) => {
    try {
      const updatedRecords = [...attendanceRecords];
      updatedRecords.splice(recordIndex, 1);

      const classDocRef = doc(db, "classes", selectedClassId);
      await updateDoc(classDocRef, { attendance: updatedRecords });

      setAttendanceRecords(updatedRecords);
    } catch (error) {
      console.error("Error deleting attendance record: ", error);
    }
  };

  return (
    <div className="p-6 flex flex-col">
      <h2 className="text-2xl font-semibold">Attendance</h2>
      <div className="mt-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">Select a Class</h2>
          <select className="rounded-sm"
            value={selectedClassId}
            onChange={(e) => setSelectedClassId(e.target.value)}
          >
            {classes.map((cls) => (
              <option key={cls.id} value={cls.id}>
                {cls.className}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleRecordAttendanceClick}
          className="bg-primary rounded-md px-3 py-2 text-white flex justify-between gap-2 cursor-pointer"
        >
          Record Attendance <Plus />
        </button>
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Previously Recorded Attendance</h2>
        {attendanceRecords.length === 0 ? (
          <p>No attendance records found for this class.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
            {attendanceRecords.map((record, index) => (
              <div
                key={index}
                className="cursor-pointer"
              >
                <div className="bg-slate-100 text-primary rounded-md px-4 py-6 flex flex-col items-center justify-center text-center">
                  <div className="flex justify-between w-full items-center">
                    <h2 className="font-bold text-[#163665]">{record.date}</h2>
                    <button 
                      className="text-white bg-primary p-1 rounded-xl"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteRecord(index);
                      }}
                    >
                      <Trash2 strokeWidth="1.50" />
                    </button>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-full mt-2">
                    <p className="text-sm">
                      Present Students: <span className="font-semibold">{record.presentStudents.length}</span>
                    </p>
                    <p className="text-sm">
                      Absent Students: <span className="font-semibold">{record.absentStudents.length}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;

// [#163665]
