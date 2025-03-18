import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className=" bg-primary-50 bg-cover bg-center min-h-screen flex flex-col pt-32 lg:pt-4">
      <Link className="flex items-center gap-2 mx-auto pb-8 lg:pb-16 " href={"/"}>
        <Image src='/images/gigidknails.png' alt="Agrinet logo" className="" width={180} height={126}/>
      </Link>
      {children}
    </main>
  );
}