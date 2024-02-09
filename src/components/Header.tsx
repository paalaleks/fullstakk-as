import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import Navbar from "./Navbar";

interface NavbarProps {
  locale: string;
}

export default async function Header({ locale }: NavbarProps) {
  const t = await getTranslations("Index");

  return (
    <header className="relative z-10 min-h-screen grid grid-flow-row">
      <nav className="h-12 flex items-center justify-between my-6">
        <h4 className=" flex items-center flex-wrap text-foreground text-xl">
          <span>Fullstakk AS</span>
          <span className="font-mono text-sm pl-2">ctrl+alt+webdev</span>
        </h4>
        <Navbar locale={locale} />
      </nav>
      <div className="flex flex-col relative w-full">
        <div className="grid grid-cols-12">
          <Image
            priority
            className="col-span-4 object-contain hidden min-[555px]:block shadow-xl rounded-full border-2 border-backgroundShade"
            src="/assets/me.png"
            alt="Hero image"
            width={208}
            height={208}
          />
          <Image
            priority
            className="col-span-12 w-full object-contain mb-2 block min-[555px]:hidden mt-20 shadow-xl border-2 border-backgroundShade rounded-[2rem]"
            src="/assets/me_2.png"
            alt="Hero image"
            width={414}
            height={269}
          />
          <div className="relative my-auto pt-2 right-0 min-[555px]:right-14 sm:right-16">
            <h1 className="font-flyover text-foreground whitespace-nowrap text-[1.5rem] min-[300px]:text-2xl min-[380px]:text-3xl min-[450px]:text-4xl sm:text-[2.60rem]">
              Paal Aleksander Kaasa
            </h1>
            <div className="h-min flex font-bold space-x-2 mt-0 min-[555px]:mt-2">
              <Link
                className={`whitespace-nowrap ${hoverStyle}`}
                href="#projects"
              >
                {t("menuProjects")}
              </Link>
              <Link className={`whitespace-nowrap ${hoverStyle}`} href="#art">
                {t("menuArt")}
              </Link>
              <Link
                className={`whitespace-nowrap ${hoverStyle}`}
                href="#other-projects"
              >
                {t("menuIdeas")}
              </Link>
            </div>
          </div>
        </div>
        <p className="text-foreground_2 mt-6">{t("bio")}</p>
        <h3 className="mt-9 mb-1">{t("experience")}</h3>
        <p>
          Next.js, React, Typescript, Zustand, Tailwind CSS, SCSS, Headless UI,
          Radix UI, Daisy UI, Sanity, Strapi, Notion API, Headless wordpress,
          Headless ecommerce, Stripe, Firebase, Node.js, Mjml, Sendgrid, Adobe
          XD, Adobe Photoshop, Adobe Illustrator, Canva, ProCreate & ChatGPT /
          Dall-E.
        </p>
      </div>
    </header>
  );
}

const hoverStyle =
  "px-2 py-1 rounded-xl hover:bg-accent hover:shadow transition-all duration-300 ease-in-out flex";
