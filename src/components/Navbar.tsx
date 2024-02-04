"use client";

import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { PhoneIcon, Mail, Languages, Linkedin } from "lucide-react";
import Link from "next/link";

interface NavbarProps {
  locale: string;
}

export default function Navbar({ locale }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Menu as={"div"} className="pl-4">
      {({ open }) => (
        <>
          <Menu.Button
            as="button"
            onClick={handleClick}
            className={`flex flex-col justify-center items-center rounded-full p-3 ${
              open ? "bg-backgroundShade_3  shadow-md" : ""
            }`}
          >
            <span
              className={`bg-foreground_2 block transition-all duration-300 ease-out
                    h-0.5 w-5 rounded-sm ${
                      open
                        ? "rotate-45 translate-y-1 bg-foreground"
                        : "-translate-y-0.5"
                    }`}
            ></span>
            <span
              className={`bg-foreground_2 block transition-all duration-300 ease-out
                      h-0.5 w-5 rounded-sm my-0.5 ${
                        open ? "opacity-0" : "opacity-100"
                      }`}
            ></span>
            <span
              className={`bg-foreground_2 block transition-all duration-300 ease-out
                      h-0.5 w-5 rounded-sm ${
                        open
                          ? "-rotate-45 -translate-y-1 bg-foreground"
                          : "translate-y-0.5"
                      }`}
            ></span>
          </Menu.Button>
          <Menu.Items className="absolute z-20 right-0 mt-6 w-56 origin-top-right rounded-xl bg-backgroundShade_3 shadow-lg focus:outline-none space-y-2 pb-4 px-4 border-2 border-backgroundShade">
            <Menu.Item as="div" className="my-4 ">
              {locale === "no" ? (
                <Link
                  className={` text-center items-center px-2 py-1 flex hover:text-foreground`}
                  href="/en"
                >
                  <Languages className="mr-2 " size={14} /> Norsk
                </Link>
              ) : (
                <Link
                  className={` text-center items-center px-2 py-1 flex hover:text-foreground`}
                  href="/no"
                >
                  <Languages className="mr-2 " size={14} /> English
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              <Link
                href="tel:+4748347323"
                className={`items-center px-2 py-1 flex hover:text-foreground`}
              >
                <PhoneIcon className="mr-2 " size={14} />
                48347323
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                href="mailto:paalakaasa@gmail.com"
                className={`items-center flex px-2 py-1 hover:text-foreground`}
              >
                <Mail className="mr-2 " size={14} /> paal@fullstakk.as
              </Link>
            </Menu.Item>

            <Menu.Item>
              <Link
                href="https://www.linkedin.com/in/fullstakk/"
                className={`items-center flex px-2 py-1 hover:text-foreground`}
              >
                <Linkedin className="mr-2" size={14} /> LinkedIn
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                href="https://github.com/paalaleks"
                className={`items-center flex px-2 py-1 hover:text-foreground`}
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
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}

{
  /* <div className="space-x-2 flex">
<Link href="tel:+4748347323" className={`items-center ${hoverStyle}`}>
  <PhoneIcon className="mr-2 " size={14} />
  48347323
</Link>
<Link
  href="mailto:paalakaasa@gmail.com"
  className={`items-center ${hoverStyle}`}
>
  <Mail className="mr-2 " size={14} /> paal@fullstakk.as
</Link>
</div>
<div>
{locale === "no" ? (
  <Link className={`w-9 text-center ${hoverStyle}`} href="/en">
    NO
  </Link>
) : (
  <Link className={`w-9 text-center ${hoverStyle}`} href="/no">
    EN
  </Link>
)}
</div> */
}
