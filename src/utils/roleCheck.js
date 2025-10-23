export const isAdmin = (user) => user?.role === "admin";
export const isGestionnaireAuthorized = (user) => user?.role === "gestionnaire" && user?.canManageUsers;
export const canCreateUser = (user) => isAdmin(user) || isGestionnaireAuthorized(user);
