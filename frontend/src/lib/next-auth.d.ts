import NextAuth from "next-auth";
import { DefaultSession, DefaultUser, JWT } from "next-auth";

// Étendez l'interface `User` si nécessaire
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
    };
    accessToken: string;
    refreshToken: string;
  }

  interface User {
    id: string;
    email: string;
    name: string;
    backendTokens: {
      accessToken: string;
      refreshToken: string;
    };
  }
}

// Étendez l'interface `JWT` si nécessaire
declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: string;
      email: string;
      name: string;
    };
    accessToken: string;
    refreshToken: string;
  }
}
