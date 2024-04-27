
import ScrollTop from "@/components/ScrollTop";
import Image from "next/image";
import Link from "next/link";
import navLink from "../constant/nav"
import SectionContainer from "@/provides/SectionContainer";
export default function Home({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SectionContainer>
      <main className="mb-auto">{children}</main>
    </SectionContainer>
  );
}
