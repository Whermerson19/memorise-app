import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";

interface SignInCredentials {
  loginField: string;
  password: string;
}

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  avatarURL: string;
}

interface AuthContextData {
  token: string;
  user: User;
  signIn(data: SignInCredentials): Promise<void>;
  signOut(): Promise<void>;
}

interface AuthState {
  token: string;
  user: User;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) throw new Error("Invalid context");

  return context;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<AuthState>({} as AuthState);

  const loadData = useCallback(async () => {
    const [token, user] = await AsyncStorage.multiGet([
      "@MemoRise:token",
      "@MemoRise:user",
    ]);

    if (token[1] && user[1]) {
      api.defaults.headers.authorization = `Bearer ${token[1]}`;

      setData({
        token: token[1],
        user: JSON.parse(user[1]),
      });
    }
  }, []);

  const signIn = useCallback(async ({ loginField, password }) => {
    const response = await api.post("/session", {
      loginField,
      password,
    });

    const { token, user } = response.data;

    await AsyncStorage.multiSet([
      ["@MemoRise:token", token],
      ["@MemoRise:user", JSON.stringify(user)],
    ]);

    api.defaults.headers.authorization = `Bearer ${token}`;
    setData({
      token,
      user,
    });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(["@MemoRise:token", "@MemoRise:user"]);

    setData({} as AuthState);
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ token: data.token, user: data.user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}
