import api from "./api";
export const fetchClasses = async () => (await api.get("/classes")).data;
export const createClass = async (payload) => (await api.post("/classes", payload)).data;
