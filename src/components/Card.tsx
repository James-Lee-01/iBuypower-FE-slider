import Image from "next/image";
import Affirm from "../../public/images/icon-affirm.svg"

export default function Card() {
  return (
    <div className="card w-auto flex flex-col justify-between bg-white rounded-[15px] shadow-[0_0_20px_#00000029]">
            <div className="card-info px-5 xs:px-6 py-4 xs:py-5">
              <div className="tag-container px-[10px] py-[5px] w-fit border rounded-full border-grey">
                <p className="font-gothamBold text-grey text-[8px] md:text-[9px] lg:text-[11px]">Prebuilt PC</p>
              </div>
              <div className="card-image flex justify-center items-center">
                <Image src="/images/gaming-pc-01-Y40P001-main-kbm-2400.webp" alt="RDY Y40P 003 image" className="w-44 md:w-52 aspect-square" width={230} height={230} priority/>
              </div>
              <div className="card-pc-text">
                <h4 className="card-pc-title font-gothamBold mt-4 text-base xs:text-[20px] md:text-lg">RDY Y40P 003</h4>
                <span><br/></span>
                <ul className="card-pc-description-list flex flex-col gap-1 text-xs md:text-sm">
                  <li className="card-pc-description">Windows 11 Home</li>
                  <li className="card-pc-description">Intel® Core™ i7-14700KF CPU</li>
                  <li className="card-pc-description">GeForce RTX 4070 Ti SUPER - 16GB</li>
                  <li className="card-pc-description">2TB M.2 NVMe SSD</li>
                  <li className="card-pc-description">32GB DDR5-6000MHz RGB RAM</li>
                </ul>
              </div>
              
              
            </div>
            <div className="card-price bg-light-blue flex flex-col justify-between rounded-b-[10px] px-5 xs:px-6 pt-3 pb-5 xs:pb-8">
              <div className="flex flex-col">
                <div className="tag-container px-[8px] xs:px-[10px] py-[6px] xs:py-[5px] border-0 rounded-full bg-red flex w-fit  text-white gap-1 text-[10px] xs:text-[12px]">
                    <span>SAVE</span>
                    <span>$650</span>
                </div>
                <div className="card-price-text flex gap-2 mt-1 items-end">
                  <p className="font-gothamBold text-[20px] xs:text-[30px]">$1,849</p>
                  <p className="relative  text-light-grey line-through bottom-1 text-[12px] xs:text-[16px]">$2,499</p>
                </div>
                <p className="price-installment relative flex flex-wrap items-center text-[12px] xs:text-[14px]">
                  Starting at&nbsp;
                  <span className="text-blue">$172.07/mo&nbsp;</span>
                  <span> with&nbsp;</span>
                  <span className="relative flex items-center">
                    <Affirm className="h-8 xs:h-9 w-auto -my-3 -translate-y-0.5 xs:-translate-y-1" />
                  </span>
                </p>

                <div className="shipping-and-buy flex justify-between items-end mt-4 md:gap-3 lg:gap-5">
                  <div className="price-shipping flex flex-col mr-1 xs:mr-4">
                    <p className="font-gothamBold text-[12px] xs:text-[14px]">Free Shipping</p>
                    <p className="text-[12px] xs:text-[14px]">Delivery By Thursday, Apr 25</p>
                  </div>
                  <div className="button-container flex justify-center items-center border border-red rounded-full px-5 xs:px-4 py-[10px] xs:py-2 text-red text-[14px] xs:text-[16px] whitespace-nowrap h-[35px] xs:h-fit">Buy Now</div>
                </div>
              </div>
            </div>
          </div>
  )
}