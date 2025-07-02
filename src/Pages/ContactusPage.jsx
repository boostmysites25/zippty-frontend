import React from "react";
import contactuspetimage from "../assets/images/contactuspetimage.png";
import Banner from "../Component /Banner";
import ContactForm from "../Component /LeadForm";
import MapComponent from "../Component /MapComponent";

const ContactusPage = () => {
  const homeBannerDetails = {
    mainHeading: "If animals could talk, they’d talk about us!",
    paragraph: `Have a question about our products? Need help with your order? We're ready to assist you.`,
    image: contactuspetimage,
    isHome: false,
    isButton: true,
  };
  return (
    <div>
      <Banner bannerDetails={homeBannerDetails} />
      <ContactForm />
      <MapComponent />
    </div>
  );
};

export default ContactusPage;
