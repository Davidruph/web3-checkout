import Image from "next/image";

const WhyCheckoutCard = ({ img, title, subtitle, borderColor, span }) => {
  return (
    <div
      className={`${
        borderColor
          ? "relative inline-block p-[5px] bg-gradient-to-br from-[#FFD729] to-[#FF8629]"
          : ""
      } w-auto rounded-[20px]`}
    >
      <div
        className={`${
          borderColor ? "bg-black" : "bg-white"
        } rounded-[15px] w-full h-full p-5 pl-8 lg:pl-10`}
      >
        <div className="w-full flex justify-start mt-5">
          <Image src={img} alt={title} width={100} height={100} />
        </div>

        <div className="w-full flex flex-col justify-start items-start pt-10">
          <h3
            className={`why-card-title mb-5 ${
              borderColor ? "text-white" : "text-black"
            }`}
          >
            {title} <span className="why-card-span">{span}</span>
          </h3>
          <p
            className={`why-card-subtitle text-start mb-5 ${
              borderColor ? "text-white" : "text-black"
            }`}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyCheckoutCard;
