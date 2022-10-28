import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

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

      if (response && response.data) {
        await AsyncStorage.setItem(
          "@fallalert:user",
          JSON.stringify(response.data)
        );
      }

      setData(response.data);
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
