import { loginWithGoogle } from "../firebase";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const user = await loginWithGoogle();

      // sauvegarder user
      setUser(user);

      // redirection
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Erreur connexion Google");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>DEV-GPT</h1>

      <button onClick={handleGoogleLogin}>
        Continuer avec Google
      </button>
    </div>
  );
    }
