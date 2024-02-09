import Image from "next/image";

export default function page({
  params,
}: {
  params: { locale: string; image: string };
}) {
  const parseImageParam = (imageParam: string) => {
    const decodedImageParam = decodeURIComponent(imageParam);

    const [size, img] = decodedImageParam.split("img=");
    const [width, height] = size.split("x");

    return {
      width,
      height,
      img,
    };
  };

  const image = parseImageParam(params.image);
  const { width, height, img } = image;

  return (
    <Image
      src={`/${img}`}
      alt={img || ""}
      width={parseInt(width || "0")}
      height={parseInt(height || "0")}
      className="relative z-20 mt-8 object-contain shadow-xl"
    />
  );
}
