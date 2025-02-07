"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      setError(null); // Réinitialise les erreurs
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard"); // Redirige vers le tableau de bord
    } catch {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="p-4 space-y-4 max-w-sm mx-auto">
      <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full rounded"
      />
      {error && <p className="text-red-500 text-center">{error}</p>}
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
