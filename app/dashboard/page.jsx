"use client"
import { db } from '@/config/FirebaseConfig'
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import {collection, doc, getDoc, getDocs, getFirestore, query, where} from "firebase/firestore"
import React, { useEffect } from 'react'

 function Page() {
  
  const {user} = useUser()

  useEffect(()=>{
    user && isUserRegistered()
  },[user])



  const isUserRegistered = async ()=> {
    console.log(user.primaryEmailAddress.emailAddress);
    // const docRef = doc(db,"users",user.primaryEmailAddress.emailAddress)
    // const docSnap = await getDoc(docRef)
    // if(docSnap.exists()){
    //   console.log(docSnap.data());
    // }
    // else{
    //   console.log("No data");
    // }

    const docRef = collection(db,"users")
    const q = query(docRef,where("email","==",user.primaryEmailAddress.emailAddress))

    const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <UserButton />
      <Button>Hello</Button>
      {/* <Button>Hello</Button> */}
    </div>
  )
}

export default Page