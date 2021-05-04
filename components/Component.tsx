import { motion } from "framer-motion";

export function Component() {
  return (
    <motion.div
      animate={{ rotate: 45 }}
      transition={{ duration: 2 }}
      style={{ background: "--color-red-400", height: "300px", width: "300px" }}
    />
  );
}
