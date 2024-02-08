import Image from "next/image";
import Header from "@/components/Header";
import ProjectList from "@/components/ProjectList";
import ArtList from "@/components/ArtList";
import OtherProjectList from "@/components/OtherProjectList";

interface HomeProps {
  params: {
    locale: string;
  };
}

export default async function Home({ params }: HomeProps) {
  return (
    <>
      <Header locale={params.locale} />
      <Image
        src="/assets/flower.svg"
        alt="Hero image"
        width={781}
        height={723}
        className="absolute -top-32 -left-32 z-0 mix-blend-multiply"
      />
      <ProjectList />
      <ArtList locale={params.locale} />
      <OtherProjectList />
    </>
  );
}
