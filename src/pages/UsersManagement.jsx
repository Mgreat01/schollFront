import React, { useEffect, useState } from "react";
import { fetchUsers, createUser, authorizeUser } from "../services/userService";
import Table from "../components/Table";
import UserForm from "../components/UserForm";
import { useAuth } from "../context/AuthContext";
import { canCreateUser } from "../utils/roleCheck";

export default function UsersManagement() {
  const [users, setUsers] = useState([]);
  const { user } = useAuth();
  const [openForm, setOpenForm] = useState(false);

  const load = async () => {
    const data = await fetchUsers();
    setUsers(data);
  };
  useEffect(()=>{ load(); }, []);

  const handleCreate = async (payload) => {
    await createUser(payload);
    setOpenForm(false);
    load();
  };

  const toggleAuth = async (u) => {
    await authorizeUser(u.id, !u.canManageUsers);
    load();
  };

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="text-xl">Utilisateurs</h2>
        {canCreateUser(user) && <button className="btn" onClick={()=>setOpenForm(true)}>Créer utilisateur</button>}
      </div>

      <Table
        columns={[
          { key: "id", title: "ID" },
          { key: "name", title: "Nom" },
          { key: "email", title: "Email" },
          { key: "role", title: "Rôle" },
        ]}
        data={users}
        renderRowActions={(row)=>(
          <div className="flex gap-2">
            {row.role === "gestionnaire" && user.role === "admin" && (
              <button onClick={()=>toggleAuth(row)} className="px-2 py-1 border text-sm">
                {row.canManageUsers ? "Révoquer" : "Autoriser"}
              </button>
            )}
          </div>
        )}
      />

      {openForm && <UserForm onClose={()=>setOpenForm(false)} onSubmit={handleCreate} />}
    </div>
  );
}
