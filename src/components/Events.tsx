"use client";
import { CONFIG } from "@/lib/config";
import { motion } from "framer-motion";
const events = [
  { date: "Dec 15, 2024", venue: "Accra Nights Festival", city: "Accra, GH" },
  { date: "Jan 10, 2025", venue: "Monrovia Homecoming Show", city: "Monrovia, LR" }
];
export default function Events() {
  const waLink = (ev: string, ct: string) => `https://wa.me/${CONFIG.whatsappNumber}?text=Hi!%20I%20want%20tickets%20for%20${encodeURIComponent(ev)}%20in%20${encodeURIComponent(ct)}.`;
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] text-center mb-8 glow">Shows & Events</h2>
      <div className="space-y-4">
        {events.map((e, i) => (
          <motion.div key={i} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
            className="glass rounded-xl p-5 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="font-bold text-[#FFD700]">{e.date}</p>
              <p className="text-white">{e.venue}</p>
              <p className="text-gray-400 text-sm">{e.city}</p>
            </div>
            <a href={waLink(e.venue, e.city)} target="_blank" className="px-5 py-2 rounded-full bg-[#8B0000] hover:bg-[#a00] text-white font-medium transition text-sm">Get Tickets</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
