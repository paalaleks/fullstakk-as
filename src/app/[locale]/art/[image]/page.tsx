import Image from "next/image";

export default function page({
  params,
}: {
  params: { locale: string; image: string };
}) {
  const parseImageParam = (imageParam: string) => {
    // First, decode the URI component to handle encoded characters
    const decodedImageParam = decodeURIComponent(imageParam);

    // Use a more specific pattern to extract the width, height, and img
    const widthMatch = decodedImageParam.match(/w=(\d+)/);
    const heightMatch = decodedImageParam.match(/h=(\d+)/);
    const imgMatch = decodedImageParam.match(/img=(.+)/);

    return {
      width: widthMatch ? widthMatch[1] : null,
      height: heightMatch ? heightMatch[1] : null,
      img: imgMatch ? imgMatch[1] : null,
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
      className="relative z-20 max-h-screen py-10 h-full object-contain"
    />
  );
}
