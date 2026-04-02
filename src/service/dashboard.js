import request from "./request";

export const getDashboard = () => {
    return request({ method: "get", url: "/api/stats" });
};