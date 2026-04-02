import React from "react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { getAcceptanceQuery } from "@/queries";
import StatusBadge from "@/components/StatusBadge";
import ActionButton from "@/components/ActionButton";

export default function AcceptancePage() {
    const { data, isLoading } = useQuery({
        ...getAcceptanceQuery(),
    });

    if (isLoading) return <h2>Loading...</h2>;

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            {/* HEADER */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-xl font-semibold">Qabul jadvali</h1>
                    <p className="text-sm text-gray-500">
                        Barcha qabul so'rovlari
                    </p>
                </div>

                <Button className="bg-blue-500 hover:bg-blue-600">
                    + Yangi qabul
                </Button>
            </div>

            {/* TABLE CARD */}
            <div className="bg-white rounded-xl border">
                {/* TOP */}
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="font-medium">Barcha so'rovlar</h2>

                    <div className="flex gap-2">
                        <Button variant="outline">Hammasi</Button>
                        <Button className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200">
                            Kutilmoqda (2)
                        </Button>
                    </div>
                </div>

                {/* TABLE */}
                <div>
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50 text-gray-500">
                            <tr>
                                <th className="text-left p-4">#</th>
                                <th className="text-left p-4">Bemor</th>
                                <th className="text-left p-4">Telefon</th>
                                <th className="text-left p-4">Shifokor</th>
                                <th className="text-left p-4">Sana & vaqt</th>
                                <th className="text-left p-4">Holat</th>
                                <th className="text-left p-4">Harakat</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data?.map((item, index) => (
                                <tr key={item.id} className="border-t">
                                    <td className="p-4 text-gray-500">
                                        #{String(index + 1).padStart(3, "0")}
                                    </td>

                                    <td className="p-4 font-medium">
                                        {item.full_name}
                                    </td>

                                    <td className="p-4">{item.phone}</td>

                                    <td className="p-4">{item.doctor}</td>

                                    <td className="p-4">
                                        {item.preferred_time}
                                    </td>

                                    <td className="p-4">
                                        <StatusBadge status={item.status} />
                                    </td>

                                    <td className="p-4">
                                        <ActionButton
                                            status={item.status}
                                            id={item.id}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
