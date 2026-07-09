import type { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100 px-6 py-10">
      {children}
    </main>
  );
}

export default AuthLayout;