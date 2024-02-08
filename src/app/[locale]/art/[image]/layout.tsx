import { X } from "lucide-react";
import Link from "next/link";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <Link href={`/#art`} className="flex justify-end py-8">
        <X size={20} className="" />
      </Link>
      {children}
    </>
  );
}
