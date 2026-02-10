import Header from "./Header";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex w-full flex-col">
            <Header />
            <main>{children}</main>
        </div>
    );
}
