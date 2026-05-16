"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const images = [
  "https://images.unsplash.com/photo-1516280440614-6697288d5d38?auto=format&fit=crop&w=600",
  "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&w=600",
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600",
  "https://images.unsplash.com/photo-1514525253440-1b82a9b7d7c3?auto=format&fit=crop&w=600"
];

export default function PhotoGallery() {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] text-center mb-8 glow">Gallery</h2>
      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((img, i) => (
          <motion.img key={i} src={img} alt="Artist" onClick={() => setSelected(img)}
            className="w-full rounded-xl glass cursor-zoom-in card-3d" loading="lazy" />
        ))}
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6">
            <img src={selected} alt="Full" className="max-h-[80vh] rounded-lg shadow-2xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
