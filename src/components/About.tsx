"use client";
import { motion } from "framer-motion";
export default function About() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto text-center">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-4 glow">The Artist</motion.h2>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="text-gray-300 leading-relaxed text-lg">
        Face Of Monrovia is a rising West African artist blending Afrobeat, Afro-fusion, and soulful storytelling. 
        Rooted in Liberian culture and inspired by Ghana’s vibrant creative scene, she creates music that connects identity, ambition, love, and culture.
      </motion.p>
    </section>
  );
}
