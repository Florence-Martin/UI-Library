"use client";

import dynamic from "next/dynamic";

// Import dynamique du composant Login (désactive le SSR)
const Login = dynamic(() => import("@/components/auth/Login"), { ssr: false });

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="absolute top-0 right-0 p-4">
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
