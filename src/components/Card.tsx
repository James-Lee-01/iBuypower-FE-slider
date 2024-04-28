import Image from "next/image";
import Affirm from "../../public/images/icon-affirm.svg"

export interface Product {
  id: number;
  name: string;
  image: string;
  tag: string;
  description: string[];
  price: number;
  originalPrice: number;
  installment: {
    monthly: number;
  };
  shipping: {
    fee: string;
    deliveryDate: string;
  };
}

interface CardProps {
  readonly product: Readonly<Product>;
}

export default function Card({ product }: CardProps) {
  const buttonText = product.tag === "Custom PC" ? "Customize" : "Buy Now";
  const saveAmount = product.originalPrice - product.price;
  const formattedPrice = product.price.toLocaleString();
  const formattedOriginalPrice = product.originalPrice.toLocaleString();


  return (
    <div className="card w-auto flex flex-col justify-between bg-white rounded-[15px] shadow-[0_0_20px_#00000029] h-[640px] xs:h-[680px] md:h-[700px] lg:h-[730px] lg:min-w-[295px] lg:max-w-[315px] 2xl:w-min-[315px] 2xl:max-w-none">
      <div className="card-info h-full flex flex-col px-5 xs:px-6 py-4 xs:py-5">
        <div className="tag-container px-[10px] py-[5px] w-fit border rounded-full border-grey">
          <p className="font-gothamBold text-grey text-[8px] md:text-[9px] lg:text-[11px]">{product.tag}</p>
        </div>
        <div className="card-image flex justify-center items-center">
          <Image src={product.image} alt={product.name} className="w-44 md:w-52 lg:w-52 aspect-square" width={230} height={230} priority/>
        </div>
        <div className="card-pc-text grow">
          <h4 className="card-pc-title font-gothamBold h-[30%] mt-4 text-base md:text-lg lg:text-[20px]">{product.name}</h4>
          <ul className="card-pc-description-list mt-3 flex flex-col gap-1 text-xs md:text-sm lg:text-sm 2xl:text-base">
            {product.description.map((description) => (
              <li className="card-pc-description" key={`${product.id}-${description}`}>{description}</li>
            ))}
          </ul>
        </div>
        
        
      </div>
      <div className="card-price bg-light-blue flex flex-col justify-between rounded-b-[10px] px-5 xs:px-6 pt-3 pb-5 xs:pb-8">
        <div className="flex flex-col">
          <div className="tag-container px-[8px] xs:px-[10px] py-[6px] xs:py-[5px] border-0 rounded-full bg-red flex w-fit  text-white gap-1 text-[10px] xs:text-[12px]">
              <span>SAVE</span>
              <span>${saveAmount}</span>
          </div>
          <div className="card-price-text flex gap-2 mt-1 items-end">
            <p className="font-gothamBold text-[20px] xs:text-[30px]">${formattedPrice}</p>
            <p className="relative  text-light-grey line-through bottom-1 text-[12px] xs:text-[16px]">${formattedOriginalPrice}</p>
          </div>
          <div className="price-installment relative flex flex-wrap items-center text-[12px] xs:text-[14px]">
            <span>Starting at&nbsp;</span>
            <span className="text-blue">${product.installment.monthly}/mo&nbsp;</span>
            <span>with</span>
            <span className="relative flex items-center">
              <Affirm className="h-8 xs:h-9 w-auto -my-3 -translate-y-0.5 xs:-translate-y-1" />
            </span>
          </div>

          <div className="shipping-and-buy flex justify-between items-end mt-4 md:gap-3 lg:gap-4">
            <div className="price-shipping flex flex-col mr-1 xs:mr-4">
              <p className="font-gothamBold text-[12px] xs:text-[14px]">${product.shipping.fee}</p>
              <p className="text-[12px] xs:text-[14px]">{product.shipping.deliveryDate}</p>
            </div>
            <div className="button-container flex justify-center items-center border border-red rounded-full px-5 xs:px-4 py-[10px] xs:py-2 text-red text-[14px] xs:text-[16px] whitespace-nowrap h-[35px] xs:h-fit">{buttonText}</div>
          </div>
        </div>
      </div>
    </div>
  )
}