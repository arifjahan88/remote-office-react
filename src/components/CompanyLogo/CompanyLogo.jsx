import { motion } from "framer-motion";

const CompanyLogo = () => {
  const MarqueeLogo = [
    "/company/logo 11.png",
    "/company/logo 12.png",
    "/company/logo 13.png",
    "/company/logo 14.png",
    "/company/logo 15.png",
    "/company/logo 16.png",
    "/company/logo 17.png",
    "/company/logo 18.png",
    "/company/logo 19.png",
    "/company/logo 110.png",
    "/company/logo 111.png",
    "/company/logo 112.png",
    "/company/logo 113.png",
    "/company/logo 114.png",
  ];

  return (
    <div className="relative w-full overflow-hidden border-t-2 border-b-2 border-secondary py-[2rem]">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex space-x-24"
        style={{ willChange: "transform" }}
      >
        {/* Duplicate content for seamless looping */}
        {MarqueeLogo.concat(MarqueeLogo).map((image, index) => (
          <img
            className="h-[3rem] object-contain"
            src={image}
            alt={`Logo ${index + 1}`}
            key={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default CompanyLogo;
