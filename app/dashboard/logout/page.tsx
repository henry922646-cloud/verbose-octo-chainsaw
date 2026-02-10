import { signOut } from "@/auth";

export default async function Page() {
    return (
        <div className="flex h-screen flex-col items-center justify-center gap-3">
            <form
                action={async () => {
                    "use server";
                    await signOut({ redirectTo: "/login" });
                }}
            >
                <button>Log out</button>
            </form>
        </div>
    );
}
