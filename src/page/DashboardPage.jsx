import React from "react";
import { ArrowUp, Eye } from "lucide-react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { useQuery } from "@tanstack/react-query";
import { getAcceptanceQuery, getDashboardQuery } from "@/queries";
import ActionButton from "@/components/ActionButton";
import StatusBadge from "@/components/StatusBadge";

const DashboardPage = () => {
    const { data: dashboardData, isLoading: dashboardLoading } = useQuery({
        ...getDashboardQuery(),
    });

    const { data: appointments, isLoading: appointmentsLoading } = useQuery({
        ...getAcceptanceQuery(),
    });

    if (dashboardLoading || appointmentsLoading) {
        return (
            <div className="flex items-center justify-center h-96">
                <p className="text-slate-500">Yuklanmoqda...</p>
            </div>
        );
    }

    return (
        <div className="min-h-full">
            <div className="max-w-7xl mx-auto space-y-8 pb-12">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">
                            Dashboard
                        </h1>
                        {/* <p className="text-muted-foreground mt-1">
                            Bugungi holat — 1 Aprel, 2026
                        </p> */}
                    </div>

                    {/* <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-medium transition-all active:scale-95">
                        <ArrowUp className="w-5 h-5" />{" "}

                        Hisobot yuklab olish
                    </button> */}
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                        <p className="text-sm text-slate-500 font-medium">
                            BUGUNGI XABARLAR
                        </p>
                        <div className="mt-4 flex items-baseline gap-2">
                            <span className="text-5xl font-bold text-slate-900">
                                {dashboardData?.today_messages || 0}
                            </span>
                        </div>
                        <div className="flex items-center text-emerald-600 mt-3 text-sm">
                            <ArrowUp className="w-4 h-4 mr-1" />
                            12% kechagidan
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                        <p className="text-sm text-slate-500 font-medium">
                            YANGI FOYDALANUVCHILAR
                        </p>
                        <div className="mt-4 flex items-baseline gap-2">
                            <span className="text-5xl font-bold text-slate-900">
                                {dashboardData?.total_users || 0}
                            </span>
                        </div>
                        <div className="flex items-center text-emerald-600 mt-3 text-sm">
                            <ArrowUp className="w-4 h-4 mr-1" /> 3 ta yangi
                            bugun
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                        <p className="text-sm text-slate-500 font-medium">
                            QABUL SO'ROVLARI
                        </p>
                        <div className="mt-4 flex items-baseline gap-2">
                            <span className="text-5xl font-bold text-slate-900">
                                {dashboardData?.total_appointments || 0}
                            </span>
                        </div>
                        <p className="text-sm text-slate-500 mt-3">
                            {dashboardData?.pending_appointments || 0} ta
                            kutilmoqda
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                        <p className="text-sm text-slate-500 font-medium">
                            JAVOB VAQTI
                        </p>
                        <div className="mt-4 flex items-baseline gap-1">
                            <span className="text-5xl font-bold text-slate-900">
                                1.2
                            </span>
                            <span className="text-2xl text-slate-400">s</span>
                        </div>
                        <div className="flex items-center text-emerald-600 mt-3 text-sm">
                            <ArrowUp className="w-4 h-4 mr-1" />
                            Ajoyib
                        </div>
                    </div>
                </div>

                {/* Haftalik faollik */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold">
                            Haftalik faollik
                        </h2>
                        <span className="text-sm text-slate-500">
                            Xabarlar soni
                        </span>
                    </div>

                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={dashboardData?.weekly || []}>
                                <XAxis
                                    dataKey="day"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: "#64748b", fontSize: 13 }}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: "#64748b", fontSize: 13 }}
                                />
                                <Tooltip />
                                <Bar
                                    dataKey="count"
                                    fill="#2563eb"
                                    radius={[8, 8, 0, 0]}
                                    barSize={45}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Oxirgi qabul so'rovlari */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold">
                            Oxirgi qabul so'rovlari
                        </h2>
                        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                            Barchasini ko'rish →
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full min-w-full">
                            <thead>
                                <tr className="border-b border-slate-200">
                                    <th className="text-left py-4 px-4 font-medium text-slate-500">
                                        BEMOR
                                    </th>
                                    <th className="text-left py-4 px-4 font-medium text-slate-500">
                                        SHIFOKOR
                                    </th>
                                    <th className="text-left py-4 px-4 font-medium text-slate-500">
                                        VAQT
                                    </th>
                                    <th className="text-left py-4 px-4 font-medium text-slate-500">
                                        HOLAT
                                    </th>
                                    <th className="text-right py-4 px-4 font-medium text-slate-500">
                                        HARAKAT
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {appointments?.map((app) => (
                                    <tr
                                        key={app.id}
                                        className="hover:bg-slate-50 transition-colors"
                                    >
                                        <td className="py-5 px-4">
                                            <div className="font-medium text-slate-900">
                                                {app.full_name}
                                            </div>
                                            <div className="text-sm text-slate-500 mt-0.5">
                                                {app.phone}
                                            </div>
                                        </td>
                                        <td className="py-5 px-4 text-slate-700">
                                            {app.doctor}
                                        </td>
                                        <td className="py-5 px-4 text-slate-700">
                                            {app.preferred_time}
                                        </td>
                                        <td className="py-5 px-4">
                                            <StatusBadge status={app.status} />
                                        </td>
                                        <td className="py-5 px-4 text-right">
                                            {app.status === "Tasdiqlangan" ||
                                            app.buttonText === "Ko'rish" ? (
                                                <button className="flex items-center gap-2 px-5 py-2 border border-slate-300 rounded-xl hover:bg-slate-100 transition-colors">
                                                    <Eye className="w-4 h-4" />
                                                    Ko'rish
                                                </button>
                                            ) : (
                                                <ActionButton
                                                    status={app.status}
                                                    id={app.id}
                                                />
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
