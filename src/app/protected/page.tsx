"use client";
import { useSession, signOut } from "next-auth/react";

export default function Protected() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Cargando...</p>;
  }

  if (!session?.user) {
    return <p>No estás autenticado.</p>;
  }

  return (
    <div>
      <h1>Bienvenido, {session.user.email}</h1>
      <button onClick={() => signOut()}>Cerrar sesión</button>
    </div>
  );
}
