import Image from "next/image";

const FooterCard = ({ imgLight, imgDark, title, subtitle }) => {
  return (
    <div className="group relative inline-block w-auto rounded-[20px] transition-all duration-300">
      {/* Outer Border Layer */}
      <div
        className={`
          p-[3px] rounded-[20px]
          bg-[linear-gradient(308.69deg,#FF8629_63.74%,#FFD729_92.78%)]
          group-hover:bg-transparent
          border border-transparent group-hover:border-gray-400
          transition-all duration-300
        `}
      >
        {/* Inner Card */}
        <div
          className={`
            rounded-[15px] w-full h-full p-4
            bg-black group-hover:bg-white
            transition-colors duration-300
          `}
        >
          {/* Image Layer */}
          <div className="w-full flex justify-center pt-5 relative h-[100px]">
            <Image
              src={imgDark || "/placeholder.svg"}
              alt={title}
              width={100}
              height={100}
              className="block group-hover:hidden transition-opacity duration-300"
            />
            <Image
              src={imgLight || "/placeholder.svg"}
              alt={title}
              width={100}
              height={100}
              className="hidden group-hover:block transition-opacity duration-300 absolute top-0 left-1/2 -translate-x-1/2"
            />
          </div>
          {/* Text Content */}
          <div className="w-full flex flex-col justify-start items-start footer-card-content text-center pt-10">
            <h3 className="footer-card-title text-[12px] lg:text-[19px] font-semibold text-white group-hover:text-black transition-colors duration-300">
              {title}
            </h3>
            <p className="footer-card-subtitle text-[12px] lg:text-[19px] text-white group-hover:text-black transition-colors duration-300">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCard;
