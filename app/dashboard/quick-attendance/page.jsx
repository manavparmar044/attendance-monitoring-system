"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Page() {
  const [count, setCount] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const [studentCount, setStudentCount] = useState([]);
  const [absentStudents, setAbsentStudents] = useState(new Set());
  const [presentStudents, setPresentStudents] = useState([]);

  const [className, setClassName] = useState("");

  const [isAttendanceCompleted, setIsAttendanceCompleted] = useState(false);

  const [todaysDate,setTodaysDate] = useState('')

  // const formatDate = (date)=>{
  //   const options = {
  //     year:"numeri"
  //   }
  // }

  // const currentDate = formatDate(new Date())


  const onGenerateHandler = () => {
    const updatedStudentCount = [];
    for (let i = 1; i <= count; i++) {
      updatedStudentCount.push(i);
    }
    setStudentCount(updatedStudentCount);
    setIsVisible(true);
  };

  const handleInputChange = (e) => {
    setCount(e.target.value);
  };

  const handleClassNameChange = (e) => {
    setClassName(e.target.value);
  };

  const toggleAttendanceCompleted = () => {
    setIsAttendanceCompleted((prev) => !prev);
    const updatedPresentStudentsList = studentCount.filter(
      (student) => !absentStudents.has(student)
    );
    setPresentStudents(updatedPresentStudentsList);
  };

  const handleStudentClick = (student) => {
    setAbsentStudents((prevAbsentStudents) => {
      const updatedAbsentList = new Set(prevAbsentStudents);
      if (updatedAbsentList.has(student)) {
        updatedAbsentList.delete(student);
      } else {
        updatedAbsentList.add(student);
        console.log(student);
      }
      return updatedAbsentList;
    });
  };

  useEffect(() => {
    const date = new Date()
    let currentDate = date.toLocaleDateString('ig-ng')
    setTodaysDate(currentDate)
    const updatedPresentStudentsList = studentCount.filter(
      (student) => !absentStudents.has(student)
    );
    setPresentStudents(updatedPresentStudentsList);
  }, [absentStudents, studentCount]);

  const sortedAbsentStudents = Array.from(absentStudents).sort((a, b) => a - b);

  return (
    <div className="p-4 flex-col gap-2">
      <h2 className="text-2xl font-semibold">Quick Attendance</h2>
      <div className="mt-12 sm:w-full w-2/3 flex flex-col gap-2">
        <label>Class Details</label>
        <div className="flex w-full sm:max-w-full max-w-lg items-center space-x-2">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Class Name"
              value={className}
              onChange={handleClassNameChange}
            />
            <Input
              type="number"
              placeholder="Enter total Students"
              value={count}
              onChange={handleInputChange}
            />
          </div>
          <Button onClick={onGenerateHandler} type="submit">
            Generate
          </Button>
        </div>
      </div>
      {isVisible && (
        <div className="flex flex-wrap gap-2 mt-12">
          {studentCount.map((item, index) => (
            <div
              key={index}
              className={`px-6 py-4 w-12 h-12 flex items-center justify-center rounded-sm text-white cursor-pointer ${
                absentStudents.has(item) ? "bg-slate-300" : "bg-[#163665]"
              }`}
              onClick={() => handleStudentClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
      {isAttendanceCompleted && (
        <div className="flex flex-col mt-6 gap-2 bg-slate-300 rounded-md">
          <h1 className="text-xl font-bold px-4 pt-4">{className} Attendance({todaysDate}): </h1>
          <div className="flex flex-col bg-slate-300 rounded-md px-4">
            <h1 className="text-xl font-medium">Present Students:</h1>
            <div className="flex gap-2 flex-wrap">
              {presentStudents.map((roll, index) => (
                <div key={index} className="">
                  {roll}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col rounded-md bg-slate-300 px-4 pb-4">
            <h1 className="text-xl font-medium">Absent Students:</h1>
            <div className="flex gap-2 flex-wrap">
              {sortedAbsentStudents.map((roll, index) => (
                <div key={index} className="">
                  {roll}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <Button className="mt-4" onClick={toggleAttendanceCompleted}>
        {" "}
        {isAttendanceCompleted
          ? "Undo Attendance Completion"
          : "Complete Attendance"}
      </Button>
    </div>
  );
}

export default Page;
