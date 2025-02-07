"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      console.log("Utilisateur connecté :", user);
      // Vérifie si l'application est en production
      if (process.env.NODE_ENV !== "development") {
        alert("Le tableau de bord est uniquement accessible en local.");
        router.push("/"); // Redirige en production
        return;
      }

      // Vérifie si l'utilisateur est connecté
      if (!user) {
        router.push("/login"); // Redirige vers /login si non connecté
      }
    }
  }, [user, loading, router]);

  if (loading) return <p>Chargement...</p>; // Affiche un état de chargement si l'utilisateur est en cours de vérification
  return <>{children}</>;
};

export default ProtectedRoute;
