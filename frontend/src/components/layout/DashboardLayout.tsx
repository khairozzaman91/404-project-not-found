import type { ReactNode } from "react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface DashboardLayoutProps {
  title: string;
  children: ReactNode;
}

function DashboardLayout({
  title,
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex h-screen">

      <Sidebar />

      <div className="flex flex-1 flex-col">

        <Navbar title={title} />

        <main className="flex-1 overflow-auto bg-slate-50 p-6">
          {children}
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;