import { getAcceptance } from "@/service/acceptance";
import { getByIdChats, getChats } from "@/service/chat";

export function getChatsQuery() {
    return {
        queryKey: ["chats"],
        queryFn: async () => getChats(),
    };
}

export function getByIdChatsQuery(id) {
    return {
        queryKey: ["chats-id", id],
        queryFn: async () => getByIdChats(id),
    };
}

export function getAcceptanceQuery() {
    return {
        queryKey: ["acceptance"],
        queryFn: async () => getAcceptance(),
    };
}
