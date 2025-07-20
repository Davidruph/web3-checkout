import Image from "next/image";

const SmallFooterCard = ({ img, title, subtitle, borderColor }) => {
  return (
    <div className="w-[250px] shrink-0 snap-start p-[3px] bg-gradient-to-br border border-[#00000024] rounded-[20px]">
      <div className="bg-white rounded-[15px] w-full h-full p-4">
        <div className="w-full flex justify-center pt-5">
          <Image src={img} alt={title} width={100} height={100} />
        </div>

        <div className="w-full flex flex-col justify-start items-start footer-card-content text-center pt-10">
          <h3 className="footer-card-title text-[12px] lg:text-[19px] font-semibold text-black">
            {title}
          </h3>
          <p className="footer-card-subtitle text-[12px] lg:text-[19px] text-black">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmallFooterCard;
