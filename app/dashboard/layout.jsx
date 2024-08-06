import React from "react";
import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";

function layout({ children }) {
  return (
    <div className="h-full flex flex-row justify-start">
      <div className="overflow-y-hidden">
        <Sidebar />
      </div>
      <div className="w-[100vw] flex flex-col flex-1 overflow-y-scroll h-screen">
        <Header />{children}</div>
    </div>
  );
}

export default layout;

