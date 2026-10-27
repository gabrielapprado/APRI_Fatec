import { createContext, useContext, useState, type ReactNode } from "react";

export type UserType = "guest" | "associado" | "administrador";

interface AuthContextType {
  userType: UserType;
  isAuthenticated: boolean;
  login: (usuario: string, senha: string) => UserType | null;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const usuarios: { usuario: string; senha: string; tipo: UserType }[] = [
  { usuario: "administrador@email.com", senha: "1234", tipo: "administrador" },
  { usuario: "associado@email.com", senha: "1234", tipo: "associado" },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [userType, setUserType] = useState<UserType>(() => {
    const salvo = sessionStorage.getItem("userType");
    return salvo === "associado" || salvo === "administrador" ? salvo : "guest";
  });

  const login = (usuario: string, senha: string): UserType | null => {
    const encontrado = usuarios.find(
      (u) => u.usuario === usuario && u.senha === senha
    );
    if (!encontrado) return null;

    setUserType(encontrado.tipo);
    sessionStorage.setItem("userType", encontrado.tipo);
    return encontrado.tipo;
  };

  const logout = () => {
    setUserType("guest");
    sessionStorage.removeItem("userType");
  };

  return (
    <AuthContext.Provider
      value={{ userType, isAuthenticated: userType !== "guest", login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de AuthProvider");
  }
  return context;
}