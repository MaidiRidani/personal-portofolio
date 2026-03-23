'use client'

import Navbar from "../components/Navbar";
import Toogle from "../components/sub/Toogle";

export default function ProjectLayout({ children }) {
  return (
    <Toogle>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
    </Toogle>
  );
}