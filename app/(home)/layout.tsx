

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="pt-16 min-h-screen">{children}</main>
    );
  }
  