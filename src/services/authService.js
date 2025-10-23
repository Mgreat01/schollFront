import api, { setAuthToken } from "./api";

const login = async ({ email, password }) => {
  const res = await api.post("/auth/login", { email, password });
  const data = res.data;
  if (data.token) setAuthToken(data.token);
  return data;
};

const registerSchool = async (payload) => {
  const res = await api.post("/auth/register-school", payload);
  return res.data;
};

const setToken = (token) => setAuthToken(token);

export default { login, registerSchool, setToken };
