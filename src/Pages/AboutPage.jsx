import React, { useState } from "react";
import Banner from "../Component/Banner";
import Experience from "../Component/Experience";
import WhyChooseUs from "../Component/WhyChooseUs";
import OurMission from "../Component/OurMission";
import aboutvideo from "../assets/video/aboutsectionvideo.mp4";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";
import Testimonials from "../Component/Testimonials";
import aboutuspetsimage from "../assets/images/aboutuspetsimage.png";
import AboutStore from "../Component/AboutStore";

const AboutPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  const handleVideoEnd = () => {
    setIsPlaying(false);
  };
  const aboutBannerDetails = {
    mainHeading: "Welcome to Zippty – Where Your Pet's Entertainment Comes First",
    paragraph: `At Zippty, we understand that pets are more than just animals—they're family members who deserve the best interactive experiences. We specialize in premium interactive toys that keep your furry friends engaged, active, and happy. Our carefully selected range includes the innovative Interactive Cat Toy with 2-speed adjustment and the Joyzzz Automatic Laser Toy, designed to provide endless entertainment for your curious and energetic pets.
`,
    image: aboutuspetsimage,
    isButton: true,
  };
  return (
    <div>
      <Banner bannerDetails={aboutBannerDetails} />
      <div className="wrapper paddingTop paddingBottom" data-aos="fade-up">
        <h2 className="title-heading">About our store</h2>
        <div className="grid md:grid-cols-2 mt-8 md:gap-10 gap-5">
          <p className="">
            At Zippty, we understand that pets are more than just
            animals—they're cherished family members who need mental stimulation and physical activity to thrive. Our passion for pet enrichment drives us to provide the highest quality interactive toys that keep your pets engaged, entertained, and healthy. Whether you have a playful young pet, an energetic adult, or a wise senior companion, we're here to offer innovative solutions that satisfy their natural instincts and curiosity.
          </p>
          <p>
            With years of experience in understanding pet behavior, we've seen the transformative impact that the right interactive toys can have on a pet's well-being. That's why we've carefully selected our premium toy range, featuring the advanced Interactive Cat Toy with its 2-speed adjustment and remote control capabilities, and the Joyzzz Automatic Laser Toy with its 5-angle patterns and USB power system. At Zippty, we believe every pet deserves engaging entertainment, and we're committed to making that a reality for you and your beloved companions.
          </p>
        </div>
      </div>
      <Experience />
      <WhyChooseUs />
      <OurMission />
      <AboutStore />
      <div className="wrapper paddingTop paddingBottom" data-aos="fade-up">
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
