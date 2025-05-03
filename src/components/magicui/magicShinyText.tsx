import { ArrowRightIcon } from "@radix-ui/react-icons";
import { AnimatedShinyText } from "./animated-shiny-text";

export default function AnimatedShinyTextDemo({ text }: { text: string }) {
  return (
    <div className="z-10 mt-8 flex items-center justify-center">
      <div className="relative group rounded-full p-[1px] bg-gradient-to-r from-[#ffaa40] to-[#9c40ff] hover:cursor-pointer transition-all ease-in">
        <div className="rounded-full bg-neutral-100 dark:bg-black text-white text-base transition-all ease-in hover:bg-neutral-200 dark:hover:bg-black/90">
          <AnimatedShinyText className="inline-flex text-xs sm:text-base items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:dark:text-neutral-400">
            <span>✨ {text}</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
      </div>
    </div>
  );
}
