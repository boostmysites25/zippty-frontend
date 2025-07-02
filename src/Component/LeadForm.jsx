import { useForm } from "react-hook-form";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Here you would typically send the data to your API
      console.log(data);
      reset(); // Reset form after successful submission
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Form Section */}
        <div className="w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 bg-gray-100 p-8 rounded-2xl"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="text-xl font-bold">
                  First Name
                </label>
                <input
                  {...register("firstName", { required: true })}
                  placeholder="First name"
                  className="w-full p-3 rounded bg-gray-50 border border-gray-200"
                />
              </div>
              <div>
                <label htmlFor="firstName" className="text-xl font-bold">
                  Last Name
                </label>
                <input
                  {...register("lastName", { required: true })}
                  placeholder="Last name"
                  className="w-full p-3 rounded bg-gray-50 border border-gray-200"
                />
              </div>
            </div>
            <div>
              <label htmlFor="firstName" className="text-xl font-bold">
                Email Address
              </label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                placeholder="E-mail address"
                className="w-full p-3 rounded bg-gray-50 border border-gray-200"
              />
            </div>
            <div>
              <label htmlFor="firstName" className="text-xl font-bold">
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                placeholder="Your message..."
                rows={6}
                className="w-full p-3 rounded bg-gray-50 border border-gray-200"
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-[#F47B20] text-white rounded hover:bg-[#e06a10] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Feel free to contact us</h2>
            <p className="text-gray-600">
              We'd love to hear from you! Whether you have a question about our
              products, need assistance with an order, or simply want to share
              your feedback, we're here to help.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F47B20] flex items-center justify-center">
                <FaMapMarkerAlt className="w-5 h-5 text-white" />
              </div>
              <span>JP Colony, Shastri Nagar, Jaipur, Rajasthan -302016</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F47B20] flex items-center justify-center">
                <FaEnvelope className="w-5 h-5 text-white" />
              </div>
              <span>info@zippty.in</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F47B20] flex items-center justify-center">
                <FaPhoneAlt className="w-5 h-5 text-white" />
              </div>
              <span>+91- XXXXX XXXXX</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F47B20] flex items-center justify-center">
                <FaClock className="w-5 h-5 text-white" />
              </div>
              <span>Mon - Fri: 10AM - 10PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
