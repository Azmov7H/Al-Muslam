import Sidebar from "@/components/dashboard/sidebar";

export default function LayoutDashboard({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="dashboard">
            <Sidebar />
            {children}

        </div>
    )

}