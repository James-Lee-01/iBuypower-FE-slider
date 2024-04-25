import Card from "../components/Card";
import ArrowButton from "../components/ArrowButton";


export default function Home() {
  return (
    <main className="flex flex-col px-8 md:px-36 lg:px-36">
      <section className="title-section flex flex-col justify-center items-center mt-8 xs:mt-12 lg:mt-24 gap-1.5 text-center">
        <div className="main-title">
          <p className="font-gothamBold text-xl xs:text-2xl md:text-4xl lg:text-[46px] lg:leading-[51px]">Best Seller Gaming PC</p>
        </div>
        <div className="second-title">
          <p className="font-gothamBold md:text-2xl lg:text-[30px] lg:leading-[33px]">Prebuilt & Custom</p>
        </div>
      </section>

      <section className="arrow-button-group flex justify-end gap-3 ">
        <ArrowButton direction="left" />
        <ArrowButton direction="right" />
      </section>

      <section className="card-section">
        <div className="card-list flex gap-4 items-center justify-center mt-5 mb-36">
          
          <Card />
          <Card />
          <Card />
          <Card />
          
        </div>
        
      </section>
      
    </main>
  );
}
