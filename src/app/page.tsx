import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="title-section flex flex-col justify-center items-center mt-24 gap-1.5">
        <div className="main-title">
          <p className="text-[46px] font-gothamBold leading-[51px]">Best Seller Gaming PC</p>
        </div>
        <div className="second-title">
          <p className="text-[30px] font-gothamBold leading-[33px]">Prebuilt & Custom</p>
        </div>
      </section>
      <section className="card-section"></section>
    </main>
  );
}
