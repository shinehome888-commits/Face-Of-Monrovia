"use client";
import { motion } from "framer-motion";
export default function Music() {
  const embeds = [
    { title: "Spotify", url: "https://open.spotify.com/embed/track/YOUR_TRACK_ID", color: "#1DB954" },
    { title: "Audiomack", url: "https://audiomack.com/embed/YOUR_ARTIST/YOUR_SONG?background=1", color: "#FFA600" },
    { title: "YouTube", url: "https://www.youtube.com/embed/YOUR_VIDEO_ID", color: "#FF0000" }
  ];
  return (
    <section id="music" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] text-center mb-10 glow">Latest Drops</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {embeds.map((e, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="card-3d rounded-xl overflow-hidden glass p-2">
            <div className="rounded-lg overflow-hidden aspect-[4/3]">
              <iframe src={e.url} width="100%" height="100%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media" loading="lazy" />
            </div>
            <p className="mt-2 font-semibold text-[#FFD700]">{e.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
