import Sidebar from "@/components/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="flex gap-3">
            <Sidebar />
            <div>{<Outlet />}</div>
        </div>
    );
}
