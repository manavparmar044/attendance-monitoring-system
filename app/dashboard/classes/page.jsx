"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/config/FirebaseConfig";
import { useUser } from "@clerk/nextjs";
import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Plus, Trash2 } from "lucide-react";
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
    const router = useRouter();
    const [classes, setClasses] = useState([]);
    const [className, setClassName] = useState("");
    const [deleteClassId, setDeleteClassId] = useState(null);
    const { user } = useUser();
    const [open, setOpen] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false);

    useEffect(() => {
        if (user) {
            getClasses();
        }
    }, [user]);

    const getClasses = async () => {
        const classesRef = collection(db, "classes");
        const q = query(
            classesRef,
            where("email", "==", user.primaryEmailAddress.emailAddress)
        );
        const querySnapShot = await getDocs(q);

        const fetchedClasses = [];
        querySnapShot.forEach((doc) => {
            const data = doc.data();
            fetchedClasses.push({
                id: doc.id,
                ...data,
                studentsCount: data.students?.length || 0,
                attendanceCount: data.attendance?.length || 0
            });
        });
        setClasses(fetchedClasses);
    };

    const addClass = async () => {
        try {
            await addDoc(collection(db, "classes"), {
                className: className,
                email: user.primaryEmailAddress.emailAddress,
                students: [],
                attendance: [] // Initialize attendance as well
            });
            setClassName("");
            setOpen(false);
            getClasses();
        } catch (err) {
            console.log(err);
        }
    };

    const handleClassClick = (id) => {
        router.push(`/dashboard/classes/${id}`);
    };

    const deleteClass = async () => {
        try {
            if (deleteClassId) {
                await deleteDoc(doc(db, "classes", deleteClassId));
                setDeleteClassId(null);
                setAlertOpen(false);
                getClasses();
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Classes</h2>
                <button
                    onClick={() => setOpen(true)}
                    className="bg-primary rounded-md px-3 py-2 text-white flex justify-between gap-2 cursor-pointer"
                >
                    Add Class <Plus />
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                {classes.map((cls, index) => (
                    <div
                        onClick={() => handleClassClick(cls.id)}
                        key={index}
                        className="cursor-pointer"
                    >
                        <div className="bg-slate-100 text-primary rounded-md px-4 py-6 flex flex-col items-center justify-center text-center">
                            <div className="flex justify-between w-full items-center">
                                <h2 className="font-bold text-[#163665]">{cls.className}</h2>
                                <button 
                                    className="text-white p-1 rounded-xl bg-primary"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setDeleteClassId(cls.id);
                                        setAlertOpen(true);
                                    }}
                                >
                                    <Trash2 strokeWidth="1.50" />
                                </button>
                            </div>
                            <div className="flex flex-col gap-2 items-start justify-start w-full mt-2">
                                <p className="text-sm">Total Students: <span className="font-semibold">{cls.studentsCount}</span></p>
                                <p className="text-sm">Total Attendance: <span className="font-semibold">{cls.attendanceCount}</span></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add Class</DialogTitle>
                        <DialogDescription>
                            <div className="py-3">
                                <label className="mb-2">Class Name</label>
                                <Input
                                    type="text"
                                    placeholder="Enter class name"
                                    value={className}
                                    onChange={(e) => setClassName(e.target.value)}
                                />
                            </div>
                            <div className="flex gap-2 items-center justify-end mt-4">
                                <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
                                <Button onClick={addClass}>Save</Button>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

            <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete Class</AlertDialogTitle>
                        <AlertDialogDescription>
                            Are you sure you want to delete this class? This action cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={deleteClass}>Delete</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}

export default Page;



