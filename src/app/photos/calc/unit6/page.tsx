
import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";

export const metadata = {
  title: "Unit 6",
  description: "Photos from Calculus Unit 6.",
};

const BLUR_FADE_DELAY = 0.04;

export default function PhotoPage() {
  const photos = [
    "/calc/6/photo-282_singular_display_fullPicture.jpeg",
    "/calc/6/photo-298_singular_display_fullPicture.jpeg",
    "/calc/6/photo-345_singular_display_fullPicture.jpeg",
    "/calc/6/photo-349_singular_display_fullPicture.jpeg",
  ];

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">Unit 6 Photos</h1>
      </BlurFade>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={id}>
            <Image
              src={photo}
              alt={`Photo ${id + 1}`}
              width={400}
              height={400}
              className="rounded-lg"
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
