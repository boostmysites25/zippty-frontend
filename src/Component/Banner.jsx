import backgroundbg from "../assets/images/imagebg.png";
import homebackgroundbg from "../assets/images/homebg.png";
import { Link, useLocation } from "react-router-dom";
const Banner = ({ bannerDetails }) => {
  const { mainHeading, paragraph, image, isHome, isButton } = bannerDetails;
  const { pathname } = useLocation();

  return (
    <div className="relative">
      <div className="wrapper grid md:grid-cols-2 px-6 py-16 items">
        <div className="w-full relative">
          <img
            src={backgroundbg}
            alt="bgimage"
            className="w-[8rem] absolute right-0 -top-10 z-0"
          />
          <div className="h-full flex flex-col gap-5 relative z-10">
            <span className="text-lg">Zippty</span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {mainHeading}{" "}
            </h1>
            <p className="text-gray-600 max-w-md">{paragraph}</p>
            {isButton && (
              <Link
                to={"/shop"}
                className="bg-black w-fit text-white px-8 py-3 rounded-md hover:bg-primary transition-colors duration-300"
              >
                Shop Now
              </Link>
            )}
          </div>
        </div>

        <div className="w-full flex justify-center items-end  mt-8 md:mt-0">
          <div
            className={`w-full h-[20rem]  md:h-[30rem] bg-no-repeat bg-center bg-contain bg-white flex justify-center ${
              isHome ? `items-end` : `items-end`
            }`}
            style={{
              backgroundImage: `url(${
                isHome ? homebackgroundbg : homebackgroundbg
              })`,
            }}
          >
            <img
              src={image}
              alt="Collection of happy pet faces"
              className={`relative z-10 h-[15rem] ${
                pathname === "/contact-us"
                  ? "h-[12rem] md:h-[22rem]"
                  : "md:h-[27rem]"
              } object-cover `}
            />
          </div>
        </div>
      </div>
      <img
        src={backgroundbg}
        alt="bgimage"
        className="w-[8rem] absolute -left-16 bottom-[40%] z-0"
      />
    </div>
  );
};

export default Banner;
