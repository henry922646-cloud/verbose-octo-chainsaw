// https://authjs.dev/getting-started/session-management/protecting

import NextAuth from "next-auth";
import { Provider } from "next-auth/providers";
import Google from "next-auth/providers/google";

const providers: Provider[] = [Google];

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers,
    pages: { signIn: "/login", signOut: "/dashboard/logout" },
    callbacks: {
        authorized: async ({ auth }) => {
            return !!auth;
        },
    },
});
