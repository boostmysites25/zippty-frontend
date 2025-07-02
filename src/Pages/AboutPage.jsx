import React, { useState } from "react";
import Banner from "../Component /Banner";
import Experience from "../Component /Experience";
import WhyChooseUs from "../Component /WhyChooseUs";
import OurMission from "../Component /OurMission";
import OurTeam from "../Component /OurTeam";
import aboutvideo from "../assets/video/aboutsectionvideo.mp4";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";
import Testimonials from "../Component /Testimonials";
import aboutuspetsimage from "../assets/images/aboutuspetsimage.png";
import AboutStore from "../Component /AboutStore";

const AboutPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  const handleVideoEnd = () => {
    setIsPlaying(false);
  };
  const aboutBannerDetails = {
    mainHeading: "Welcome to Zippty – Where Your Pets’ Happiness Comes First",
    paragraph: `At Zippty, we know your pets are more than just animals—they’re family. Whether you have a curious kitten or an energetic dog, we’re here to offer everything you need to ensure they’re well cared for. From nutritious food and interactive toys to cozy beds and grooming essentials, we’ve got a wide range of products to meet the unique needs of both cats and dogs.
`,
    image: aboutuspetsimage,
    isButton: true,
  };
  return (
    <div>
      <Banner bannerDetails={aboutBannerDetails} />
      <div className="wrapper paddingTop paddingBottom">
        <h2 className="title-heading">About our store</h2>
        <div className="grid md:grid-cols-2 mt-8 md:gap-10 gap-5">
          <p className="">
            At Zippty, we understand that pets are more than just
            animals—they're cherished members of the family. Our passion for
            animals drives us to provide top-quality pet care products that help
            your furry friends live their healthiest, happiest lives. Whether
            you have a playful puppy, a wise senior dog, or an adventurous
            kitten, we’re here to offer everything you need to make sure your
            pets feel loved, cared for, and comfortable.
          </p>
          <p>
            With years of experience in the pet care industry, we’ve seen the
            difference the right products can make. That’s why we’ve dedicated
            ourselves to offering premium pet food, fun toys, reliable grooming
            supplies, and effective health solutions for both cats and dogs. At
            Zippty, we believe every pet deserves the very best, and we’re
            committed to making that a reality for you.
          </p>
        </div>
      </div>
      <Experience />
      <WhyChooseUs />
      <OurMission />
      <AboutStore />
      <OurTeam />
      <div className="wrapper paddingTop paddingBottom">
        <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden">
          <ReactPlayer
            url={aboutvideo}
            playing={isPlaying}
            controls={false}
            muted={false}
            width="100%"
            height="100%"
            className="aspect-video"
            onClick={togglePlayPause}
            onEnded={handleVideoEnd}
          />

          {!isPlaying ? (
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/40"
              onClick={togglePlayPause}
            >
              <div className="w-16 h-16 bg-orange-500 rounded-full flex justify-center items-center">
                <FaPlay className="text-white w-8 h-8" />
              </div>
            </div>
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/10"
              onClick={togglePlayPause}
            />
          )}
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default AboutPage;
