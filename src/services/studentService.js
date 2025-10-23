import api from "./api";
export const fetchStudents = async () => (await api.get("/students")).data;
export const createStudent = async (payload) => (await api.post("/students", payload)).data;
