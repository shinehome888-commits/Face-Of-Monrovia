"use client";
import { CONFIG } from "@/lib/config";
import { motion } from "framer-motion";
import { MessageCircle, Users } from "lucide-react";

export default function Community() {
  return (
    <section className="py-16 px-6 text-center bg-gradient-to-b from-[#0B0B0B] to-[#111]">
      <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-4 glow">Join the Face Of Monrovia Community</h2>
      <p className="text-gray-300 max-w-xl mx-auto mb-8">Exclusive music updates, new releases, upcoming shows, behind-the-scenes content, and fan interactions.</p>
      <motion.div className="flex flex-col sm:flex-row justify-center gap-4" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}>
        <a href={CONFIG.waCommunity.group} target="_blank" className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 rounded-full font-medium transition">
          <Users size={18} /> Join WhatsApp Group
        </a>
        <a href={CONFIG.waCommunity.channel} target="_blank" className="flex items-center justify-center gap-2 px-6 py-3 border border-green-600 text-green-400 hover:bg-green-600/20 rounded-full font-medium transition">
          <MessageCircle size={18} /> Follow WhatsApp Channel
        </a>
      </motion.div>
    </section>
  );
}
