import request from "./request";

export const getAcceptance = () => {
    return request({ method: "get", url: "/api/appointments" });
};

export const updateAcceptance = (id, data) => {
    return request({ method: "patch", url: `/api/appointments/${id}`, data });
};
