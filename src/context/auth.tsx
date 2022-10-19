import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import api from "../services/api";

interface IUser {
  id: string;
  name: string;
  email: string;
  photo: string;
  cpf: string;
  password: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface SignUpCredentials {
  name: string;
  email: string;
  password: string;
  cpf: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextData {
  user: IUser;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  // signOut: () => Promise<void>;
  // updatedUser: (user: User) => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post("/sessions", {
        email,
        password,
      });

      console.log(response.data, "my response");

      const { user } = response.data;

      // inclui o token no "cabecario" do user
      // api.defaults.headers.common["Authorization"] = `Bearer ${user.email}`;

      AsyncStorage.setItem("@fallalert:user", JSON.stringify(user));

      setData(user);
    } catch (err) {
      console.log(err);
      Alert.alert("Opa", "Ocorreu um erro ao verificar credenciais");
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user: data,
        signIn,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// esse vai ser o hook em si

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
