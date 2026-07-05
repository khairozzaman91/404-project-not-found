import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

function Card({ children }: CardProps) {
  return (
    <div className="w-full max-w-md rounded-2xl bg-white border border-slate-200 shadow-xl px-8 py-10">
      {children}
    </div>
  );
}

export default Card;