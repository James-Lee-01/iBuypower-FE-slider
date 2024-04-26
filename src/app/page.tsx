import ArrowButton from "../components/ArrowButton";
import Carousel from "@/components/Carousel";


const Home: React.FC = () => {

  return (
    <main className="flex flex-col px-8 xs:px-6 md:px-8 lg:px-12 2xl:px-[140px]">
      <section className="title-section flex-col justify-center items-center mt-8 xs:mt-24 gap-1.5 text-center hidden xs:flex">
        <div className="main-title">
          <p className="font-gothamBold text-xl xs:text-2xl md:text-4xl lg:text-[46px] lg:leading-[51px]">Best Seller Gaming PC</p>
        </div>
        <div className="second-title">
          <p className="font-gothamBold md:text-2xl lg:text-[30px] lg:leading-[33px]">Prebuilt & Custom</p>
        </div>
      </section>

      <section className="arrow-button-group justify-end gap-3 hidden xs:flex">
        <ArrowButton direction="left" />
        <ArrowButton direction="right" />
      </section>

      <section className="card-section">
        <div className="card-list flex items-center justify-center mt-5 mb-36">
          <Carousel />
        </div>
      </section>
    </main>
  );
}

export default Home;