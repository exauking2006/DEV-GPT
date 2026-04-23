import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔥 écouter Firebase (login auto)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const formattedUser = {
          uid: firebaseUser.uid,
          name: firebaseUser.displayName,
          email: firebaseUser.email,
          photo: firebaseUser.photoURL,
        };

        setUser(formattedUser);
        localStorage.setItem("user", JSON.stringify(formattedUser));
      } else {
        setUser(null);
        localStorage.removeItem("user");
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // 🔐 login manuel (si besoin)
  const login = (data) => {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  // 🚪 logout
  const logout = async () => {
    await signOut(auth);
    setUser(null);
    localStorage.removeItem("user");
  };

  // 🔄 restore si refresh
  useEffect(() => {
    const saved = localStorage.getItem("user");

    if (saved && !user) {
      setUser(JSON.parse(saved));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser: login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// 🧠 hook propre
export const useAuth = () => useContext(AuthContext);
