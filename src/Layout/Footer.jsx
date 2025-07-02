import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import ParticleFooter from "./FooterBubbles";
import { useEffect, useState } from "react";
import logo from "../assets/images/logo/logo.png";

// Add this CSS to your global stylesheet or CSS module
const styles = `
@keyframes bubbleFloat {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  10% {
    transform: translate(var(--move-x1), var(--move-y1)) rotate(var(--rotate1));
  }
  20% {
    transform: translate(var(--move-x2), var(--move-y2)) rotate(var(--rotate2));
  }
  30% {
    transform: translate(var(--move-x3), var(--move-y3)) rotate(var(--rotate3));
  }
  40% {
    transform: translate(var(--move-x4), var(--move-y4)) rotate(var(--rotate4));
  }
  50% {
    transform: translate(var(--move-x5), var(--move-y5)) rotate(var(--rotate5));
  }
  60% {
    transform: translate(var(--move-x6), var(--move-y6)) rotate(var(--rotate6));
  }
  70% {
    transform: translate(var(--move-x7), var(--move-y7)) rotate(var(--rotate7));
  }
  80% {
    transform: translate(var(--move-x8), var(--move-y8)) rotate(var(--rotate8));
  }
  90% {
    transform: translate(var(--move-x9), var(--move-y9)) rotate(var(--rotate9));
  }
}

.bubble {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, var(--bubble-color-light) 10%, var(--bubble-color) 60%, var(--bubble-color-dark));
  box-shadow: 0 0 15px var(--bubble-glow);
  z-index: var(--z-index);
  animation: bubbleFloat var(--duration) infinite ease-in-out;
  animation-direction: alternate-reverse;
}

.bubble::after {
  content: '';
  position: absolute;
  top: 20%;
  left: 25%;
  width: 20%;
  height: 20%;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
}
`;

const Footer = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    generateBubbles();

    // Regenerate a few bubbles occasionally to keep the animation fresh
    const interval = setInterval(() => {
      updateSomeBubbles();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const generateBubbles = () => {
    const newBubbles = [];
    const bubbleCount = 30; // More bubbles for a fuller effect

    for (let i = 0; i < bubbleCount; i++) {
      newBubbles.push(createBubble(i));
    }

    setBubbles(newBubbles);
  };

  const updateSomeBubbles = () => {
    setBubbles((prevBubbles) => {
      // Replace about 20% of bubbles to keep scene dynamic
      const updatedBubbles = [...prevBubbles];
      const bubblesCount = prevBubbles.length;
      const replaceCount = Math.ceil(bubblesCount * 0.2);

      for (let i = 0; i < replaceCount; i++) {
        const replaceIndex = Math.floor(Math.random() * bubblesCount);
        updatedBubbles[replaceIndex] = createBubble(replaceIndex);
      }

      return updatedBubbles;
    });
  };

  const createBubble = (index) => {
    // Generate vibrant colors
    const hue = Math.floor(Math.random() * 360); // Full color spectrum
    const saturation = 80 + Math.floor(Math.random() * 20); // High saturation (80-100%)
    const lightness = 50 + Math.floor(Math.random() * 30); // Medium to high lightness (50-80%)
    const alpha = 0.4 + Math.random() * 0.5; // Semi-transparent (0.4-0.9)

    const baseColor = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
    const lightColor = `hsla(${hue}, ${saturation}%, ${lightness + 15}%, ${
      alpha + 0.1
    })`;
    const darkColor = `hsla(${hue}, ${saturation}%, ${Math.max(
      lightness - 15,
      30
    )}%, ${alpha})`;
    const glowColor = `hsla(${hue}, ${saturation}%, ${lightness + 20}%, 0.6)`;

    // Generate random movement in all directions
    const genRandomPos = () => `${Math.random() * 300 - 150}px`;
    const genRandomRotate = () => `${Math.random() * 360 - 180}deg`;

    return {
      id: `bubble-${Date.now()}-${index}`,
      size: Math.floor(Math.random() * 80) + 20, // 20-100px
      left: `${Math.random() * 95}%`,
      top: `${Math.random() * 90}%`, // Allow bubbles throughout the footer
      baseColor: baseColor,
      lightColor: lightColor,
      darkColor: darkColor,
      glowColor: glowColor,
      duration: `${Math.random() * 25 + 20}s`, // 20-45s for slower, more drifting movement
      zIndex: Math.floor(Math.random() * 5),
      // Movement coordinates for complex path
      moveX1: genRandomPos(),
      moveY1: genRandomPos(),
      moveX2: genRandomPos(),
      moveY2: genRandomPos(),
      moveX3: genRandomPos(),
      moveY3: genRandomPos(),
      moveX4: genRandomPos(),
      moveY4: genRandomPos(),
      moveX5: genRandomPos(),
      moveY5: genRandomPos(),
      moveX6: genRandomPos(),
      moveY6: genRandomPos(),
      moveX7: genRandomPos(),
      moveY7: genRandomPos(),
      moveX8: genRandomPos(),
      moveY8: genRandomPos(),
      moveX9: genRandomPos(),
      moveY9: genRandomPos(),
      // Add slight rotation for more natural movement
      rotate1: genRandomRotate(),
      rotate2: genRandomRotate(),
      rotate3: genRandomRotate(),
      rotate4: genRandomRotate(),
      rotate5: genRandomRotate(),
      rotate6: genRandomRotate(),
      rotate7: genRandomRotate(),
      rotate8: genRandomRotate(),
      rotate9: genRandomRotate(),
    };
  };

  return (
    <footer className="relative bg-white py-[7rem] overflow-hidden">
      <style>{styles}</style>
      <div className="absolute w-full h-full !overflow-hidden z-10">
        <ParticleFooter />
      </div>

      {/* Bubble container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="bubble"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: bubble.left,
              top: bubble.top,
              "--bubble-color": bubble.baseColor,
              "--bubble-color-light": bubble.lightColor,
              "--bubble-color-dark": bubble.darkColor,
              "--bubble-glow": bubble.glowColor,
              "--duration": bubble.duration,
              "--z-index": bubble.zIndex,
              "--move-x1": bubble.moveX1,
              "--move-y1": bubble.moveY1,
              "--move-x2": bubble.moveX2,
              "--move-y2": bubble.moveY2,
              "--move-x3": bubble.moveX3,
              "--move-y3": bubble.moveY3,
              "--move-x4": bubble.moveX4,
              "--move-y4": bubble.moveY4,
              "--move-x5": bubble.moveX5,
              "--move-y5": bubble.moveY5,
              "--move-x6": bubble.moveX6,
              "--move-y6": bubble.moveY6,
              "--move-x7": bubble.moveX7,
              "--move-y7": bubble.moveY7,
              "--move-x8": bubble.moveX8,
              "--move-y8": bubble.moveY8,
              "--move-x9": bubble.moveX9,
              "--move-y9": bubble.moveY9,
              "--rotate1": bubble.rotate1,
              "--rotate2": bubble.rotate2,
              "--rotate3": bubble.rotate3,
              "--rotate4": bubble.rotate4,
              "--rotate5": bubble.rotate5,
              "--rotate6": bubble.rotate6,
              "--rotate7": bubble.rotate7,
              "--rotate8": bubble.rotate8,
              "--rotate9": bubble.rotate9,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {/* Company Info */}
          <div className="">
            <Link to={"/"} className="text-xl font-bold ml-3">
              <img src={logo} alt="logo" className="w-[4.5rem] sm:w-[6rem]" />
            </Link>{" "}
            <p className="text-gray-600 mb-6 max-w-[18rem]">
              At Zippty, we know your pets are more than just animals—they're
              family. Whether you have a curious kitten or an energetic dog,
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-600 hover:text-gray-900">
                <FaFacebook size={20} />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-gray-900">
                <FaInstagram size={20} />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-gray-900">
                <FaTwitter size={20} />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-gray-900">
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 flex flex-col items-center">
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-600 hover:text-gray-900"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/cartitems"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-600 hover:text-gray-900">
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-conditions"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/cancellation-refund"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Cancellation & Refund
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping-delivery"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Shipping & Delivery
                </Link>
              </li>
            </ul>
          </div>

          {/* Store Info */}
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-lg mb-4">Store</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">
                JP Colony, Shastri Nagar,
                <br /> Jaipur, Rajasthan - 302016
              </li>
              <li className="text-gray-600">+91-XXXXX XXXXX</li>
              <li className="text-gray-600">info@domain.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
