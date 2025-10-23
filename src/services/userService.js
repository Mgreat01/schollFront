import api from "./api";

export const fetchUsers = async () => {
  const res = await api.get("/users");
  return res.data;
};

export const createUser = async (payload) => {
  const res = await api.post("/users", payload);
  return res.data;
};

export const authorizeUser = async (id, canManageUsers) => {
  const res = await api.put(`/users/${id}/authorize`, { canManageUsers });
  return res.data;
};
