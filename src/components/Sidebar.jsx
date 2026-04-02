import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    MessageCircle,
    CalendarDays,
    Settings,
} from "lucide-react";

const menu = [
    {
        name: "Dashboard",
        path: "/",
        icon: LayoutDashboard,
    },
    {
        name: "Suhbatlar",
        path: "/chat",
        icon: MessageCircle,
        badge: 3,
    },
    {
        name: "Qabullar",
        path: "/acceptance",
        icon: CalendarDays,
    },
    {
        name: "Sozlamalar",
        path: "/settings",
        icon: Settings,
    },
];

export default function Sidebar() {
    return (
        <div className="w-65 h-screen bg-gray-50 border-r flex flex-col justify-between p-4">
            <div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center text-xl font-bold">
                        M
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg">MedLife Admin</h2>
                        <p className="text-sm text-gray-500">
                            Bot boshqaruv paneli
                        </p>
                    </div>
                </div>

                <div className="space-y-2">
                    {menu.map((item) => {
                        const Icon = item.icon;

                        return (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    cn(
                                        "flex items-center justify-between px-4 py-3 rounded-xl transition-all",
                                        isActive
                                            ? "bg-blue-100 text-blue-600"
                                            : "text-gray-600 hover:bg-gray-100"
                                    )
                                }
                            >
                                <div className="flex items-center gap-3">
                                    <Icon size={18} />
                                    <span>{item.name}</span>
                                </div>

                                {/* {item.badge && (
                                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                                        {item.badge}
                                    </span>
                                )} */}
                            </NavLink>
                        );
                    })}
                </div>
            </div>

            <div className="flex items-center gap-2 text-gray-600 text-sm">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
                Bot faol
            </div>
        </div>
    );
}
