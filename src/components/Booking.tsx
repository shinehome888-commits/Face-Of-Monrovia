"use client";
import { useState } from "react";
import { CONFIG } from "@/lib/config";
import { motion } from "framer-motion";

export default function Booking() {
  const [form, setForm] = useState({ name: "", whatsapp: "", type: "", budget: "", message: "" });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `🎤 BOOKING INQUIRY\nName: ${form.name}\nWhatsApp: ${form.whatsapp}\nEvent: ${form.type}\nBudget: ${form.budget}\nMessage: ${form.message}`;
    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };
  return (
    <section className="py-16 px-6 max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] text-center mb-6 glow">Book Face Of Monrovia</h2>
      <motion.form onSubmit={handleSubmit} className="glass rounded-xl p-6 space-y-4"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        {["name", "whatsapp", "type", "budget"].map((f) => (
          <input key={f} type={f === "whatsapp" || f === "budget" ? "text" : "text"}
            placeholder={f === "name" ? "Full Name" : f === "whatsapp" ? "WhatsApp Number" : f === "type" ? "Event Type" : "Budget (USD)"}
            className="w-full bg-black/30 border border-[#FFD700]/20 p-3 rounded-lg text-white focus:outline-none focus:border-[#FFD700]"
            value={(form as any)[f]} onChange={(e) => setForm({ ...form, [f]: e.target.value })} required />
        ))}
        <textarea placeholder="Message / Details" rows={3} className="w-full bg-black/30 border border-[#FFD700]/20 p-3 rounded-lg text-white focus:outline-none focus:border-[#FFD700]"
          value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
        <button type="submit" className="w-full bg-[#FFD700] text-black font-bold py-3 rounded-lg hover:bg-white transition">Send to WhatsApp</button>
      </motion.form>
    </section>
  );
}
