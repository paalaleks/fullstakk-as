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
    <div>
      <Link href={`/#art`} className="flex justify-end pt-8">
        <X size={20} className="" />
      </Link>
      {children}
    </div>
  );
}
