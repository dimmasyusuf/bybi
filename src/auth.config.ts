import type { NextAuthConfig } from 'next-auth';
import Google from 'next-auth/providers/google';
import GitHub from 'next-auth/providers/github';

export default {
  providers: [Google, GitHub],
} satisfies NextAuthConfig;
