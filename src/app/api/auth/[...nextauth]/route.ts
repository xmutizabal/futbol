import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { supabase } from "@/lib/supabase";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "example@email.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const { email, password } = credentials!;
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });

        if (error || !data.user) return null;

        return { id: data.user.id, email: data.user.email };
      }
    })
  ],
  callbacks: {
    async session({ session, token }) {
      if (!session.user) return session; // Verifica que session.user existe antes de modificarlo

      session.user.id = token.sub ?? ""; // Usa un string vacío como fallback para evitar `undefined`
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    }
  }
});

export { handler as GET, handler as POST };