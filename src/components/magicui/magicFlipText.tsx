import { FlipText } from "./flip-text";

export default function FlipTextDemo({ text }: { text: string }) {
  return (
    <FlipText className="text-2xl font-poppins font-bold -tracking-widest text-black dark:text-white md:text-4xl md:leading-[5rem]">
      {text}
    </FlipText>
  );
}
