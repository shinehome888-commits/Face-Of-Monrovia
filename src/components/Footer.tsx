import { Instagram, Youtube, Twitter, Music2, Globe, Camera } from "lucide-react";
import { CONFIG } from "@/lib/config";

export default function Footer() {
  const icons = { instagram: Instagram, tiktok: Camera, youtube: Youtube, spotify: Music2, x: Twitter, snapchat: Globe };
  return (
    <footer className="border-t border-[#FFD700]/10 py-10 px-6 text-center">
      <div className="flex justify-center gap-5 mb-6 flex-wrap">
        {Object.entries(CONFIG.socials).map(([k, v], i) => {
          const Icon = icons[k as keyof typeof icons];
          return <a key={i} href={v} target="_blank" className="text-gray-400 hover:text-[#FFD700] transition"><Icon size={20} /></a>;
        })}
      </div>
      <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Face Of Monrovia. All Rights Reserved.</p>
      <p className="text-xs text-gray-600 mt-1">Powered by KS1 Empire Global Foundation</p>
    </footer>
  );
}
