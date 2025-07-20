import Image from "next/image";

const FooterCard = ({ img, title, subtitle, borderColor, backgroundColor }) => {
  return (
    <div
      className={`${
        borderColor
          ? "relative inline-block p-[5px] bg-gradient-to-br from-[#FFD729] to-[#FF8629]"
          : "relative inline-block p-[3px] bg-gradient-to-br border-[#00000024] border"
      } w-auto rounded-[20px]`}
    >
      <div
        className={`${
          borderColor ? "bg-black" : "bg-white"
        } rounded-[15px] w-full h-full p-4`}
      >
        <div className="w-full flex justify-center pt-5">
          <Image src={img} alt={title} width={100} height={100} />
        </div>

        <div className="w-full flex flex-col justify-start items-start footer-card-content text-center pt-10">
          <h3
            className={`footer-card-title text-[12px] lg:text-[19px] font-semibold ${
              borderColor ? "text-white" : "text-black"
            }`}
          >
            {title}
          </h3>
          <p
            className={`footer-card-subtitle text-[12px] lg:text-[19px] ${
              borderColor ? "text-white" : "text-black"
            }`}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterCard;
