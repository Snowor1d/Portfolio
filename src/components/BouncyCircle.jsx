import { motion } from "framer-motion";

const BouncyCircle = () => (
  <motion.div
    style={{
      width: 100,
      height: 100,
      borderRadius: "50%",
      backgroundColor: "#007BFF",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "20px",
    }}
    whileHover={{ scale: 1.2, transition: { type: "spring", stiffness: 300 } }}
    whileTap={{ scale: 0.9 }}
  >
    글쓰기
  </motion.div>
);

export default BouncyCircle;