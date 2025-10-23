import React, { useState } from "react";

export default function UserForm({ onClose, onSubmit }) {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "teacher" });

  const submit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-96">
        <h3 className="mb-4">Créer utilisateur</h3>
        <form className="flex flex-col gap-3" onSubmit={submit}>
          <input placeholder="Nom" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="p-2 border rounded" />
          <input placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="p-2 border rounded" />
          <input placeholder="Mot de passe" type="password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} className="p-2 border rounded" />
          <select value={form.role} onChange={e=>setForm({...form,role:e.target.value})} className="p-2 border rounded">
            <option value="teacher">Enseignant</option>
            <option value="parent">Parent</option>
            <option value="gestionnaire">Gestionnaire</option>
          </select>

          <div className="flex justify-end gap-2">
            <button type="button" className="px-3 py-1 border rounded" onClick={onClose}>Annuler</button>
            <button type="submit" className="px-3 py-1 bg-blue-600 text-white rounded">Créer</button>
          </div>
        </form>
      </div>
    </div>
  );
}
