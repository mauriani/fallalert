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

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextData {
  user: IUser;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<IUser>({} as IUser);

  const [loading, setLoading] = useState(false);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      setLoading(true);
      await api
        .post("/sessions", {
          email,
          password,
        })
        .then(async (response) => {
          if (response && response.data) {
            await AsyncStorage.setItem(
              "@fallalert:user",
              JSON.stringify(response.data)
            );
          }
        });
    } catch (err) {
      console.log(err);
      Alert.alert("Opa", "Ocorreu um erro ao verificar credenciais");
    } finally {
      setLoading(false);
    }
  }

  async function getUser() {
    try {
      if (await AsyncStorage.getItem("@fallalert:user")) {
        const dataUser = JSON.parse(
          await AsyncStorage.getItem("@fallalert:user")
        );

        setData(dataUser);
      }
    } catch (e) {
      console.log(e);
    } finally {
    }
  }

  useEffect(() => {
    getUser();
  }, []);

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
