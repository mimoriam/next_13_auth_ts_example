import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { backendURL } from "@/constants/constants";
import type { NextAuthOptions } from "next-auth";
import { User } from "next-auth";
import { JWT } from "next-auth/jwt";
import { AdapterUser } from "next-auth/adapters";

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "email-login",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        const response = await fetch(`${backendURL}/auth/login`, {
          cache: "no-store",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const user = await response.json();

        if (response.ok && user) {
          return user;
        }
        return null;
      },
    }),
  ],
  // secret: "SECRETFROMENV",
  pages: {
    signIn: "/login",
    newUser: "/",
  },
  secret: "test",
  jwt: {},
  callbacks: {
    // @ts-ignore
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    // @ts-ignore
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
};

// @ts-ignore
export default NextAuth(authOptions);
