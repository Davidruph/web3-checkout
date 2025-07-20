import Image from "next/image";

const SmallWhyCheckoutCard = ({ img, title, subtitle, borderColor, span }) => {
  return (
    <div
      className={`${
        borderColor
          ? "relative inline-block p-[5px] bg-gradient-to-br from-[#FFD729] to-[#FF8629]"
          : ""
      } w-full rounded-[20px]`}
    >
      <div
        className={`${
          borderColor ? "bg-black" : "bg-white"
        } rounded-[15px] w-full h-full pl-3 flex justify-center items-center gap-3`}
      >
        <div className="flex justify-start">
          <Image src={img} alt={title} width={100} height={100} />
        </div>

        <div className="w-full flex flex-col justify-start items-start py-8">
          <h3
            className={`small-why-card-title mb-2 ${
              borderColor ? "text-white" : "text-black"
            }`}
          >
            {title} <span className="small-why-card-span">{span}</span>
          </h3>
          <p
            className={`small-why-card-subtitle text-start ${
              borderColor ? "text-white" : "text-black"
            }`}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        </div>
      </div>
    </div>
  );
};

export default SmallWhyCheckoutCard;
