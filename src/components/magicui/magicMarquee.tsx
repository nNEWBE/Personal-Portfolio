import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import { MagicCard } from "./magic-card";

const reviews = [
  {
    name: "Jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
}: {
  img: string;
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full cursor-pointer overflow-hidden rounded-md font-poppins border px-2 py-1.5",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center justify-center gap-2">
        <Image
          className="rounded-full"
          width="20"
          height="20"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export default function MarqueeDemo() {
  return (
    <MagicCard className="w-[40rem] p-2 md:rounded-3xl md:p-3">
      <div className="border-0.75 h-full flex-col overflow-hidden rounded-xl py-20 px-10  dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
        <div className="relative flex flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:5s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:5s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </MagicCard>
  );
}
