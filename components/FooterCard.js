import Image from "next/image";

const FooterCard = ({ imgLight, imgDark, title, subtitle }) => {
  return (
    <div className="group relative w-[316px] h-[325px] rounded-[20px] transition-all duration-300">
      {/* Gradient border wrapper - appears on hover */}
      <div
        className={`
          p-[3px] rounded-[20px] h-full w-full
          bg-gray-300 group-hover:bg-[linear-gradient(308.69deg,#FF8629_63.74%,#FFD729_92.78%)]
          transition-all duration-300
        `}
      >
        {/* Inner content card */}
        <div
          className={`
            bg-white group-hover:bg-black
            rounded-[15px] w-full h-full p-4
            transition-colors duration-300
            flex flex-col justify-between
          `}
        >
          {/* Image Layer */}
          <div className="w-full flex justify-center pt-10 relative">
            <Image
              src={imgLight || "/placeholder.svg"}
              alt={title}
              width={100}
              height={100}
              className="block group-hover:hidden transition-opacity duration-300"
            />
            <Image
              src={imgDark || "/placeholder.svg"}
              alt={title}
              width={100}
              height={100}
              className="hidden group-hover:block transition-opacity duration-300"
            />
          </div>

          {/* Text Content */}
          <div className="w-full flex flex-col justify-start pt-6 text-black group-hover:text-white transition-colors duration-300">
            <h3 className="footer-card-title text-[12px] lg:text-[19px] font-semibold">
              {title}
            </h3>
            <p className="footer-card-subtitle text-[12px] lg:text-[19px]">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCard;
