"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import { motion } from "framer-motion";
import { CONFIG } from "@/lib/config";

function Particles() {
  const g = useRef<any>();
  useFrame((s) => g.current.rotation.y = s.clock.getElapsedTime() * 0.04);
  return (
    <group ref={g}>
      <Sparkles count={120} scale={6} size={1.8} speed={0.3} color="#FFD700" />
      <Sparkles count={80} scale={4} size={2.2} speed={0.2} color="#8B0000" />
    </group>
  );
}

export default function Hero3D() {
  const waBooking = `https://wa.me/${CONFIG.whatsappNumber}?text=Hi%20Face%20Of%20Monrovia!%20I'd%20like%20to%20book%20you.`;
  const waJoin = `https://wa.me/${CONFIG.whatsappNumber}?text=Hi!%20I%20want%20to%20join%20the%20Face%20Of%20Monrovia%20community.`;

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4 text-center">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[2, 2, 2]} intensity={1.2} color="#FFD700" />
          <Float speed={1} rotationIntensity={0.4} floatIntensity={0.8}><Particles /></Float>
        </Canvas>
      </div>
      <div className="relative z-10 space-y-6 max-w-2xl">
        <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-wider text-[#FFD700] glow">FACE OF MONROVIA</motion.h1>
        <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300">“From Liberia to the World” 🌍</motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 pt-2">
          <a href="#music" className="px-6 py-3 rounded-full border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition">Listen Now</a>
          <a href={waBooking} target="_blank" className="px-6 py-3 rounded-full bg-[#FFD700] text-black font-medium hover:bg-white transition">Book Now</a>
          <a href={waJoin} target="_blank" className="px-6 py-3 rounded-full border border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000] hover:text-white transition">Join WhatsApp</a>
        </motion.div>
      </div>
    </section>
  );
}
