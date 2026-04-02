import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "./page/DashboardPage";
import ChatPage from "./page/ChatPage";
import AcceptancePage from "./page/AcceptancePage";
import SettingsPage from "./page/SettingsPage";
import MainLayout from "./layout/MainLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<DashboardPage />} />
                    <Route path="/chat" element={<ChatPage />} />
                    <Route path="/acceptance" element={<AcceptancePage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                </Route>
            </Routes>
        </QueryClientProvider>
    );
}
