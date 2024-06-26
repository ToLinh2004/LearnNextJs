import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Product",
  description: "Product",
};
export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    {children}
    </>
  );
}
