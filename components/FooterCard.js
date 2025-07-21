import Image from "next/image";

const FooterCard = ({ img, title, subtitle }) => {
  return (
    <div className="group relative inline-block p-[3px] w-auto rounded-[20px] border border-[#00000024] hover:bg-gradient-to-br hover:from-[#FFD729] hover:to-[#FF8629] transition-all duration-300">
      <div className="bg-white group-hover:bg-black rounded-[15px] w-full h-full p-4 transition-colors duration-300">
        <div className="w-full flex justify-center pt-5">
          <Image src={img} alt={title} width={100} height={100} />
        </div>

        <div className="w-full flex flex-col justify-start items-start footer-card-content text-center pt-10">
          <h3 className="footer-card-title text-[12px] lg:text-[19px] font-semibold text-black group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
          <p className="footer-card-subtitle text-[12px] lg:text-[19px] text-black group-hover:text-white transition-colors duration-300">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterCard;
