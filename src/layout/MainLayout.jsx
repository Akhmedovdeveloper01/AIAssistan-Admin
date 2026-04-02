import Sidebar from "@/components/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />

            <div className="flex-1 flex flex-col overflow-hidden">
                <div className="flex-1 overflow-auto bg-slate-50 p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
