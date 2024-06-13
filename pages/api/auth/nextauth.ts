import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '../../../lib/prisma';
import EmailProvider from 'next-auth/providers/email';

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      if (user) {
        session.userId = user.id;
      }
      return session;
    },
    async signIn({ user, account, profile }) {
      return true;
    },
  },
});
