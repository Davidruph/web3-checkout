import Image from "next/image";

const WhyCheckoutCard = ({ img, title, subtitle, span }) => {
  return (
    <div className="group relative inline-block p-[5px] w-auto rounded-[20px] transition-all duration-300 hover:bg-gradient-to-br hover:from-[#FFD729] hover:to-[#FF8629]">
      <div className="bg-white group-hover:bg-black rounded-[15px] w-full h-full p-5 pl-8 lg:pl-10 transition-colors duration-300">
        <div className="w-full flex justify-start mt-5">
          <Image src={img} alt={title} width={100} height={100} />
        </div>

        <div className="w-full flex flex-col justify-start items-start pt-10">
          <h3 className="why-card-title mb-5 text-black group-hover:text-white transition-colors duration-300">
            {title} <span className="why-card-span">{span}</span>
          </h3>
          <p
            className="why-card-subtitle text-start mb-5 text-black group-hover:text-white transition-colors duration-300"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyCheckoutCard;
