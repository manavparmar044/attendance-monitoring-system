"use client";
import {
  LayoutDashboard,
  Menu,
  School,
  Settings,
  Vote,
  Zap,
} from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const pathName = usePathname();

  const navList = [
    { id: 1, name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { id: 2, name: "Classes", icon: School, path: "/dashboard/classes" },
    { id: 3, name: "Attendance", icon: Vote, path: "/dashboard/attendance" },
    {
      id: 4,
      name: "Quick Attendance",
      icon: Zap,
      path: "/dashboard/quick-attendance",
    },
    { id: 5, name: "Settings", icon: Settings, path: "/dashboard/settings" },
  ];

  const isActive = (path) => {
    // Check if the current pathname exactly matches or starts with the nav path
    // but make sure that /dashboard itself is only active if the pathname is exactly /dashboard
    return (
      pathName === path || 
      (path !== "/dashboard" && pathName.startsWith(path))
    );
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex flex-col bg-[#163665] pt-2 text-white h-[100vh] ${
        isOpen ? "w-64" : "w-20"
      } transition-all duration-300 md:relative overflow-hidden`}
    >
      <div className="flex items-center justify-between p-4">
        <h2 className={`text-2xl font-semibold ${isOpen ? "block" : "hidden"}`}>
          Attendance System
        </h2>
        <div
          className={`flex ${isOpen ? "justify-end" : "justify-center"} w-full`}
        >
          <button
            onClick={toggleSidebar}
            className="p-2 bg-slate-800 rounded-md"
          >
            <Menu />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {navList.map((nav) => {
          const active = isActive(nav.path);
          return (
            <Link
              href={nav.path}
              key={nav.id}
              className={`flex items-center w-full p-3 gap-5 my-2 cursor-pointer hover:bg-[#0d2447] hover:text-white rounded-md ${
                active ? "bg-white text-secondary" : ""
              }`}
            >
              <nav.icon strokeWidth={1.5} />
              {isOpen && <span>{nav.name}</span>}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
