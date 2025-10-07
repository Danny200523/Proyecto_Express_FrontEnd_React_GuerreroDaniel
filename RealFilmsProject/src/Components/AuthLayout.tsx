import React from "react";

interface AuthLayoutProps {
  backgroundUrl: string;
  children: React.ReactNode;
}

export default function AuthLayout({ backgroundUrl, children }: AuthLayoutProps) {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        {children}
      </div>
    </section>
  );
}
