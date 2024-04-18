import { getTranslations } from "next-intl/server";

import Link from "next/link";
import Image from "next/image";
import Titaniumgear from "../../public/project-titaniumgear.png";
import Bookokay from "../../public/bookokay.png";

export default async function ProjectList() {
  const t = await getTranslations("Index");

  const projects = [
    {
      _id: "1",
      url: "https://www.titaniumgear.no",
      image: Titaniumgear,
      alt: "Titanium Gear",
      header: t("project1Header"),
      text: t("project1Text"),
      comingSoon: false,
      commingSoonText: t("commingSoonText"),
    },
    {
      _id: "1",
      url: "https://www.bookokay.app",
      image: Bookokay,
      alt: "Book okay",
      header: t("project2Header"),
      text: t("project2Text"),
      comingSoon: true,
      commingSoonText: t("commingSoonText"),
    },
  ];

  return (
    <section className="min-h-screen relative" id="projects">
      <h2 className="relative z-10 text-center pt-12 mb-14">{t("header1")}</h2>

      <div className="grid grid-cols-1 min-[590px]:grid-cols-2 gap-6">
        {projects.map((project) => (
          <article key={project._id} className="max-w-xl w-full h-min relative">
            {project.comingSoon ? (
              <span className="absolute -top-3 -right-2 bg-accent px-2 py-1 text-xs rounded-xl shadow">
                {project.commingSoonText}
              </span>
            ) : null}
            <Image
              src={project.image}
              alt={project.alt}
              className="object-contain rounded-xl w-full bg-[#1a1816]"
            />

            <h3 className="pt-3">{project.header}</h3>
            <Link
              href={project.url}
              className="relative z-20 hover:underline text-foreground transition-all duration-300 ease-in-out font-semibold my-2 block"
            >
              {project.url}
            </Link>
            <p className=" mt-1">{project.text}</p>
          </article>
        ))}
      </div>
      <Image
        src="/assets/flower_2.svg"
        alt="Hero image"
        width={430}
        height={277}
        className="absolute -bottom-24 right-0 -z-10 mix-blend-multiply"
      />
    </section>
  );
}
