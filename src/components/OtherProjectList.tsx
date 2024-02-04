import { getTranslations } from "next-intl/server";

export default async function OtherProjectList() {
  const t = await getTranslations("Index");
  return (
    <section className="h-96" id="other-projects">
      <h2 className="relative z-10 text-center pt-12 mb-14">{t("header3")}</h2>
      <h1 className="text-center text-xl">{t("commingSoonText")}..</h1>
    </section>
  );
}
