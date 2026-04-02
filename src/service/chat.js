import request from "./request";

export const getChats = () => {
    return request({ method: "get", url: "/api/chats" });
};
export const getByIdChats = (id) => {
    return request({ method: "get", url: `/api/chats/${id}/messages` });
};
