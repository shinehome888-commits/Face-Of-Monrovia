"use client";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { CONFIG } from "@/lib/config";

export default function FloatingPlayer() {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const audio = useRef<HTMLAudioElement>(null);

  useEffect(() => { if (audio.current) audio.current.volume = 0.3; }, []);

  const togglePlay = () => { if (audio.current) { playing ? audio.current.pause() : audio.current.play(); setPlaying(!playing); } };
  const toggleMute = () => { if (audio.current) { audio.current.muted = !muted; setMuted(!muted); } };

  return (
    <>
      <audio ref={audio} loop src={CONFIG.ambientTrack} preload="none" />
      <div className="fixed bottom-6 left-6 z-40 glass px-3 py-2 rounded-full flex items-center gap-3">
        <button onClick={togglePlay} className="text-[#FFD700] hover:text-white transition">{playing ? <Pause size={20} /> : <Play size={20} fill="currentColor" />}</button>
        <span className="text-xs text-gray-300 hidden sm:inline">Ambient</span>
        <button onClick={toggleMute} className="text-[#FFD700] hover:text-white transition">{muted ? <VolumeX size={18} /> : <Volume2 size={18} />}</button>
      </div>
    </>
  );
}
