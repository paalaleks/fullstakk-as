import { PhoneIcon, Mail, Languages, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-backgroundShade_3 absolute z-10 left-0 right-0 bottom-0 w-full p-4 ">
      <div className="flex justify-center items-center h-full flex-wrap space-x-4  text-sm">
        <p className="p-1 select-none">© 2024 Fullstakk AS</p>
        <Link href="tel:+4748347323" className="items-center flex p-1">
          <PhoneIcon className="mr-2 " size={14} />
          48347323
        </Link>
        <Link
          href="mailto:paalakaasa@gmail.com"
          className="items-center flex p-1"
        >
          <Mail className="mr-2 " size={14} /> paal@fullstakk.as
        </Link>
        <Link
          href="https://www.linkedin.com/in/fullstakk/"
          className="items-center flex p-1"
        >
          <Linkedin className="mr-2 " size={14} /> LinkedIn
        </Link>
        <Link
          href="https://github.com/paalaleks"
          className="items-center flex p-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-github mr-2"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
          Github
        </Link>
      </div>
    </footer>
  );
}
