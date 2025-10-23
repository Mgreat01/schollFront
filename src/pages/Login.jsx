import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(form);
      if (res?.token) nav("/");
      else setError(res?.message || "Erreur de connexion");
    } catch (err) {
      setError("Erreur serveur");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-24 bg-white p-6 rounded shadow">
      <h1 className="text-2xl mb-4">Connexion</h1>
      {error && <div className="mb-3 text-sm text-red-600">{error}</div>}
      <form onSubmit={submit} className="flex flex-col gap-3">
        <input className="p-2 border rounded" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
        <input className="p-2 border rounded" placeholder="Mot de passe" type="password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} />
        <button className="bg-blue-600 text-white py-2 rounded">Se connecter</button>
      </form>
    </div>
  );
}
