import Image from "next/image";

const SmallWhyCheckoutCard = ({ img, title, subtitle, span }) => {
  return (
    <div className="group relative inline-block p-[5px] w-full rounded-[20px] transition-all duration-300 hover:bg-gradient-to-br hover:from-[#FFD729] hover:to-[#FF8629]">
      <div className="bg-white group-hover:bg-black rounded-[15px] w-full h-full pl-3 flex justify-center items-center gap-3 transition-colors duration-300">
        <div className="flex justify-start">
          <Image src={img} alt={title} width={100} height={100} />
        </div>

        <div className="w-full flex flex-col justify-start items-start py-8">
          <h3 className="small-why-card-title mb-2 text-black group-hover:text-white transition-colors duration-300">
            {title} <span className="small-why-card-span">{span}</span>
          </h3>
          <p
            className="small-why-card-subtitle text-start text-black group-hover:text-white transition-colors duration-300"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        </div>
      </div>
    </div>
  );
};

export default SmallWhyCheckoutCard;
