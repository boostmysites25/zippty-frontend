import ourmission from "../assets/images/ourmission.jpeg";
const OurMission = () => {
  return (
    <div className="paddingTop paddingBottom">
      <div className="wrapper ">
        <div className="grid md:grid-cols-2 items-center justify-items-center min-h-[40vh]">
          <div>
            <h1 className="title-heading">Our Mission</h1>
            <p className="mt-3 leading-8">
              Our mission at Zippty is simple: to make pet care easy,
              affordable, and enjoyable. We’re here to provide you with the best
              products that cater to your pet’s unique needs, whether that’s
              nutrition, play, or grooming. We aim to be your go-to source for
              everything your pet needs to lead a happy, healthy life. Your
              pet’s well-being is our top priority, and we’ll continue to offer
              only the best products and expert guidance to help you care for
              them.
            </p>
          </div>
          <div className="w-full h-full">
            <img
              src={ourmission}
              alt="ourmission"
              className="h-full object-cover w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
