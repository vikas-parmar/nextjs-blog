import Header from "@/components/layout/Header";

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Header />
      <section>{children}</section>
    </>
  );
}
