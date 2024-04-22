import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-2">
      <p className="text-3xl font-gothamBold">Gotham Bold Font</p>
      <p className="text-3xl">Gotham Font Test</p>
      <div className="color-test flex gap-1">
        <div className="w-10 h-10 bg-white"></div>
        <div className="w-10 h-10 bg-light-grey"></div>
        <div className="w-10 h-10 bg-grey"></div>
        <div className="w-10 h-10 bg-black"></div>
        <div className="w-10 h-10 bg-light-blue"></div>
        <div className="w-10 h-10 bg-blue"></div>
        <div className="w-10 h-10 bg-red"></div>
      </div>
    </main>
  );
}
