import { ReactComponent as Logo } from "./Logo2.svg";

export default function Header() {
  return (
    <header className="text-center shadow-md mb-1" id="__navbar">
      <div className=" flex flex-row items-center justify-center py-4">
        <Logo className="w-16 h-16 inline-block mr-10 mt-1" />
        <h1 className="inline-block h-min scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
          Mecha Puzzle <span className="font-normal text-sm">V 1.0</span>
        </h1>
      </div>
    </header>
  );
}
