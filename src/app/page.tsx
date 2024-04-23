import Image from "next/image";
import Affirm from "../../public/images/icon-affirm.svg"


export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="title-section flex flex-col justify-center items-center mt-24 gap-1.5 text-center">
        <div className="main-title">
          <p className="text-[46px] font-gothamBold leading-[51px]">Best Seller Gaming PC</p>
        </div>
        <div className="second-title">
          <p className="text-[30px] font-gothamBold leading-[33px]">Prebuilt & Custom</p>
        </div>
      </section>
      <section className="card-section">
        <div className="card-list flex gap-4 items-center justify-center m-[68px]">
          <div className="card w-[398px] h-[682px] flex flex-col justify-between bg-white rounded-[15px] shadow-[0_0_20px_#00000029]">
            <div className="card-info p-6">
              <div className="tag-container px-[10px] py-[5px] w-fit border rounded-full border-grey">
                <p className="text-[11px] font-gothamBold text-grey">Prebuilt PC</p>
              </div>
              <div className="card-image flex justify-center items-center">
                <Image src="/images/gaming-pc-01-Y40P001-main-kbm-2400.webp" alt="RDY Y40P 003 image" width={230} height={230} />
              </div>
              <div className="card-pc-text">
                <h4 className="card-pc-title font-gothamBold text-[20px]">RDY Y40P 003</h4>
                <span><br/></span>
                <ul>
                  <li className="card-pc-description">Windows 11 Home</li>
                  <li className="card-pc-description">Intel® Core™ i7-14700KF CPU</li>
                  <li className="card-pc-description">GeForce RTX 4070 Ti SUPER - 16GB</li>
                  <li className="card-pc-description">2TB M.2 NVMe SSD</li>
                  <li className="card-pc-description">32GB DDR5-6000MHz RGB RAM</li>
                </ul>
              </div>
              
              
            </div>
            <div className="card-price bg-light-blue flex flex-col justify-between rounded-b-[10px] p-6">
              <div className="flex flex-col">
                <div className="tag-container px-[10px] py-[5px] border-0 rounded-full bg-red flex w-fit  text-white gap-1 text-[11px]">
                    <span>SAVE</span>
                    <span>$650</span>
                </div>
                <div className="card-price-text flex gap-2 mt-1 items-end">
                  <p className="font-gothamBold text-[30px]">$1,849</p>
                  <p className="relative text-[16px] text-light-grey line-through bottom-1">$2,499</p>
                </div>
                <p className="price-installment relative flex items-center">
                  Starting at&nbsp;
                  <span className="text-blue">$172.07/mo&nbsp;</span>
                  <span> with&nbsp;</span>
                  <span className="relative">
                    <Affirm className="h-10 w-auto -my-3 absolute top-[-0.6rem]" />
                  </span>
                </p>

                <div className="shipping-and-buy flex justify-between mt-5">
                  <div className="price-shipping flex flex-col">
                    <p className="font-gothamBold text-[14px]">Free Shipping</p>
                    <p className="text-[14px]">Delivery By Thursday, Apr 25</p>
                  </div>
                  
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
      </section>
    </main>
  );
}
