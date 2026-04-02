import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { getByIdChatsQuery, getChatsQuery } from "@/queries";

export default function ChatPage() {
    const [id, setId] = useState(1);
    const { data, isLoading } = useQuery({ ...getChatsQuery() });
    const { data: userData } = useQuery({
        ...getByIdChatsQuery(id),
        enabled: !!id,
    });

    if (isLoading) return <h2>Loading...</h2>;
    return (
        <div className="flex h-screen bg-gray-100">
            <div className="w-75 bg-white border-r">
                <div className="p-4 border-b">
                    <h2 className="font-semibold">Foydalanuvchilar</h2>
                </div>

                <div>
                    {data?.map((user, i) => (
                        <div
                            key={i}
                            className={`p-4 border-b cursor-pointer flex justify-between ${
                                user.active ? "bg-blue-50" : "hover:bg-gray-50"
                            }`}
                            onClick={() => setId(user.id)}
                        >
                            <div>
                                <p className="font-medium">{user.name}</p>
                                <p className="text-sm text-gray-500 line-clamp-1">
                                    {user.message}
                                </p>
                            </div>

                            <div className="text-right text-xs text-gray-400">
                                <p>{user.time}</p>
                                {user.unread && (
                                    <span className="inline-block mt-1 bg-blue-500 text-white text-xs px-2 rounded-full">
                                        {user.unread}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex-1 flex flex-col">
                <div className="p-4 border-b bg-white flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
                        {data?.find((u) => u.id === id)?.name?.slice(0, 2)}
                    </div>
                    <div>
                        <p className="font-medium">
                            {data?.find((u) => u.id === id)?.name}
                        </p>
                        <p className="text-sm text-gray-500">Telegram orqali</p>
                    </div>
                </div>

                <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                    {userData?.map((msg) => {
                        const isUser = msg.role === "user";

                        return (
                            <div
                                key={msg.id}
                                className={`flex ${
                                    isUser ? "justify-end" : "justify-start"
                                }`}
                            >
                                <div
                                    className={`max-w-md p-3 rounded-xl ${
                                        isUser
                                            ? "bg-blue-500 text-white"
                                            : "bg-white shadow-sm text-black"
                                    }`}
                                >
                                    <p className="text-sm">{msg.content}</p>

                                    <p
                                        className={`text-xs mt-1 ${
                                            isUser
                                                ? "text-right opacity-80"
                                                : "text-gray-400"
                                        }`}
                                    >
                                        {isUser
                                            ? msg.time
                                            : `Bot • ${msg.time}`}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
