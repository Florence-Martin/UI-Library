"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth); // Vérifie l'état de connexion Firebase
  const router = useRouter();

  useEffect(() => {
    // Vérifie si l'application est en local
    if (process.env.NODE_ENV !== "development") {
      alert("Cette page est uniquement accessible en local.");
      router.push("/"); // Redirige si l'environnement n'est pas local
      return;
    }

    // Redirige vers /login si l'utilisateur n'est pas connecté
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) return <p>Chargement...</p>; // Affiche un état de chargement si l'utilisateur est en train d'être vérifié

  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">Tableau de Bord</h1>
        <p>Bienvenue sur mon tableau de bord sécurisé en local !</p>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
