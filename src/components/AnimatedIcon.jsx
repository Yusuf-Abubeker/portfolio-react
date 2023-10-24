import { motion } from "framer-motion";
const AnimatedIcon = ({ icon, color, text }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0,rotate:'0deg' }}
      whileHover={{ scale: 1.1,rotate:'15deg'  }}
      className="icon"
      style={{ color}}
    >
      {icon}
      <p>{text}</p>
    </motion.div>
  );
};
export default AnimatedIcon;
