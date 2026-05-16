"use client";
import { motion } from "framer-motion";
export default function VideoGallery() {
  const videos = [
    { title: "Official Video 1", id: "YOUR_YT_ID_1" },
    { title: "Official Video 2", id: "YOUR_YT_ID_2" }
  ];
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] text-center mb-8 glow">Visuals</h2>
      <div className="flex gap-6 overflow-x-auto pb-4 snap-x">
        {videos.map((v, i) => (
          <motion.div key={i} initial={{ scale: 0.95 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
            className="min-w-[300px] md:min-w-[400px] snap-center rounded-xl overflow-hidden glass">
            <iframe className="w-full aspect-video" src={`https://www.youtube.com/embed/${v.id}`} allowFullScreen loading="lazy" />
            <p className="p-3 font-medium">{v.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
