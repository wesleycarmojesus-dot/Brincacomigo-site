import { useState, useEffect } from "react";
import { client, urlFor } from "./sanityClient";

const colors = {
  primary: "#6B9ECE",
  primaryDark: "#4A7BAD",
  secondary: "#F4A6B8",
  secondaryLight: "#FDE8EE",
  accent: "#FFD166",
  accentWarm: "#FFB347",
  navy: "#2C3E6B",
  navyLight: "#3D5280",
  light: "#EEF5FC",
  lightest: "#F7FAFF",
  white: "#FFFFFF",
  textDark: "#1E2A4A",
  textMuted: "#5A6B8A",
  cloudBg: "#E8F1FA",
};

// Mascot
const Mascot = ({ pose = "wave", size = 100, style = {} }) => {
  const s = size;
  const poses = {
    wave: (
      <svg width={s} height={s} viewBox="0 0 120 120" style={{ ...style, pointerEvents: "none" }}>
        <ellipse cx="60" cy="85" rx="28" ry="25" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5"/>
        <ellipse cx="60" cy="88" rx="18" ry="16" fill="#FFFAF0"/>
        <circle cx="60" cy="52" r="24" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5"/>
        <ellipse cx="47" cy="22" rx="9" ry="22" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5"/>
        <ellipse cx="47" cy="22" rx="5" ry="16" fill={colors.secondaryLight}/>
        <ellipse cx="73" cy="22" rx="9" ry="22" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5"/>
        <ellipse cx="73" cy="22" rx="5" ry="16" fill={colors.secondaryLight}/>
        <circle cx="51" cy="49" r="4" fill={colors.navy}/>
        <circle cx="69" cy="49" r="4" fill={colors.navy}/>
        <circle cx="52.5" cy="47.5" r="1.5" fill="white"/>
        <circle cx="70.5" cy="47.5" r="1.5" fill="white"/>
        <ellipse cx="60" cy="56" rx="3" ry="2.5" fill={colors.secondary}/>
        <path d="M56 59 Q60 64 64 59" fill="none" stroke={colors.secondary} strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="43" cy="56" r="5" fill={colors.secondaryLight} opacity="0.6"/>
        <circle cx="77" cy="56" r="5" fill={colors.secondaryLight} opacity="0.6"/>
        <g style={{ transformOrigin: "88px 72px", animation: "mascotWave 1.5s ease-in-out infinite" }}>
          <ellipse cx="92" cy="65" rx="8" ry="6" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5" transform="rotate(-30 92 65)"/>
        </g>
        <ellipse cx="32" cy="80" rx="8" ry="6" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5" transform="rotate(20 32 80)"/>
        <ellipse cx="47" cy="108" rx="10" ry="6" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5"/>
        <ellipse cx="73" cy="108" rx="10" ry="6" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5"/>
      </svg>
    ),
    peek: (
      <svg width={s} height={s * 0.6} viewBox="0 0 120 72" style={{ ...style, pointerEvents: "none" }}>
        <circle cx="60" cy="52" r="24" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5"/>
        <ellipse cx="47" cy="22" rx="9" ry="22" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5"/>
        <ellipse cx="47" cy="22" rx="5" ry="16" fill={colors.secondaryLight}/>
        <ellipse cx="76" cy="26" rx="9" ry="20" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5" transform="rotate(15 76 26)"/>
        <ellipse cx="76" cy="26" rx="5" ry="14" fill={colors.secondaryLight} transform="rotate(15 76 26)"/>
        <circle cx="51" cy="48" r="5" fill={colors.navy}/>
        <circle cx="69" cy="48" r="5" fill={colors.navy}/>
        <circle cx="53" cy="46" r="2" fill="white"/>
        <circle cx="71" cy="46" r="2" fill="white"/>
        <ellipse cx="60" cy="55" rx="3" ry="2.5" fill={colors.secondary}/>
        <path d="M55 58 Q60 63 65 58" fill="none" stroke={colors.secondary} strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="43" cy="54" r="5" fill={colors.secondaryLight} opacity="0.6"/>
        <circle cx="77" cy="54" r="5" fill={colors.secondaryLight} opacity="0.6"/>
        <ellipse cx="45" cy="72" rx="8" ry="5" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5"/>
        <ellipse cx="75" cy="72" rx="8" ry="5" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5"/>
      </svg>
    ),
    read: (
      <svg width={s} height={s} viewBox="0 0 120 120" style={{ ...style, pointerEvents: "none" }}>
        <ellipse cx="60" cy="85" rx="28" ry="25" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5"/>
        <ellipse cx="60" cy="88" rx="18" ry="16" fill="#FFFAF0"/>
        <circle cx="60" cy="52" r="24" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5"/>
        <ellipse cx="47" cy="22" rx="9" ry="22" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5"/>
        <ellipse cx="47" cy="22" rx="5" ry="16" fill={colors.secondaryLight}/>
        <ellipse cx="73" cy="22" rx="9" ry="22" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5"/>
        <ellipse cx="73" cy="22" rx="5" ry="16" fill={colors.secondaryLight}/>
        <path d="M46 48 Q51 44 56 48" fill="none" stroke={colors.navy} strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M64 48 Q69 44 74 48" fill="none" stroke={colors.navy} strokeWidth="2.5" strokeLinecap="round"/>
        <ellipse cx="60" cy="55" rx="3" ry="2.5" fill={colors.secondary}/>
        <path d="M53 58 Q60 66 67 58" fill="none" stroke={colors.secondary} strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="43" cy="54" r="5" fill={colors.secondaryLight} opacity="0.6"/>
        <circle cx="77" cy="54" r="5" fill={colors.secondaryLight} opacity="0.6"/>
        <rect x="35" y="75" width="50" height="8" rx="2" fill={colors.primary} opacity="0.3"/>
        <rect x="35" y="72" width="24" height="12" rx="2" fill={colors.primary} opacity="0.2"/>
        <rect x="61" y="72" width="24" height="12" rx="2" fill={colors.primaryDark} opacity="0.2"/>
        <ellipse cx="34" cy="78" rx="7" ry="5" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5"/>
        <ellipse cx="86" cy="78" rx="7" ry="5" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5"/>
        <ellipse cx="47" cy="108" rx="10" ry="6" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5"/>
        <ellipse cx="73" cy="108" rx="10" ry="6" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5"/>
      </svg>
    ),
    love: (
      <svg width={s} height={s} viewBox="0 0 120 120" style={{ ...style, pointerEvents: "none" }}>
        <ellipse cx="60" cy="85" rx="28" ry="25" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5"/>
        <ellipse cx="60" cy="88" rx="18" ry="16" fill="#FFFAF0"/>
        <circle cx="60" cy="52" r="24" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5"/>
        <ellipse cx="47" cy="22" rx="9" ry="22" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5"/>
        <ellipse cx="47" cy="22" rx="5" ry="16" fill={colors.secondaryLight}/>
        <ellipse cx="73" cy="22" rx="9" ry="22" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5"/>
        <ellipse cx="73" cy="22" rx="5" ry="16" fill={colors.secondaryLight}/>
        <path d="M47 46 L49 44 L51 46 L49 50 Z" fill={colors.secondary}/>
        <path d="M45 46 L47 44 L49 46 L47 50 Z" fill={colors.secondary}/>
        <path d="M67 46 L69 44 L71 46 L69 50 Z" fill={colors.secondary}/>
        <path d="M65 46 L67 44 L69 46 L67 50 Z" fill={colors.secondary}/>
        <ellipse cx="60" cy="55" rx="3" ry="2.5" fill={colors.secondary}/>
        <path d="M54 58 Q60 65 66 58" fill="none" stroke={colors.secondary} strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="43" cy="54" r="6" fill={colors.secondaryLight} opacity="0.7"/>
        <circle cx="77" cy="54" r="6" fill={colors.secondaryLight} opacity="0.7"/>
        <g style={{ animation: "floatHeart 2s ease-in-out infinite" }}>
          <path d="M18 30 C18 26, 24 26, 24 30 C24 34, 18 38, 18 38 C18 38, 12 34, 12 30 C12 26, 18 26, 18 30" fill={colors.secondary} opacity="0.6"/>
        </g>
        <g style={{ animation: "floatHeart 2s ease-in-out 0.5s infinite" }}>
          <path d="M98 25 C98 22, 103 22, 103 25 C103 28, 98 31, 98 31 C98 31, 93 28, 93 25 C93 22, 98 22, 98 25" fill={colors.secondary} opacity="0.4"/>
        </g>
        <ellipse cx="34" cy="82" rx="8" ry="6" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5" transform="rotate(-10 34 82)"/>
        <ellipse cx="86" cy="82" rx="8" ry="6" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5" transform="rotate(10 86 82)"/>
        <ellipse cx="47" cy="108" rx="10" ry="6" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5"/>
        <ellipse cx="73" cy="108" rx="10" ry="6" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5"/>
      </svg>
    ),
    sleep: (
      <svg width={s} height={s * 0.7} viewBox="0 0 120 84" style={{ ...style, pointerEvents: "none" }}>
        <ellipse cx="60" cy="65" rx="35" ry="18" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5"/>
        <ellipse cx="60" cy="67" rx="22" ry="12" fill="#FFFAF0"/>
        <circle cx="35" cy="45" r="22" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5"/>
        <ellipse cx="22" cy="22" rx="8" ry="18" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5" transform="rotate(-15 22 22)"/>
        <ellipse cx="22" cy="22" rx="4.5" ry="12" fill={colors.secondaryLight} transform="rotate(-15 22 22)"/>
        <ellipse cx="46" cy="20" rx="8" ry="18" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5" transform="rotate(10 46 20)"/>
        <ellipse cx="46" cy="20" rx="4.5" ry="12" fill={colors.secondaryLight} transform="rotate(10 46 20)"/>
        <path d="M26 42 Q30 39 34 42" fill="none" stroke={colors.navy} strokeWidth="2" strokeLinecap="round"/>
        <path d="M38 41 Q42 38 46 41" fill="none" stroke={colors.navy} strokeWidth="2" strokeLinecap="round"/>
        <ellipse cx="36" cy="48" rx="2.5" ry="2" fill={colors.secondary}/>
        <path d="M32 51 Q36 54 40 51" fill="none" stroke={colors.secondary} strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="23" cy="48" r="4" fill={colors.secondaryLight} opacity="0.5"/>
        <text x="58" y="28" fontSize="14" fill={colors.primary} opacity="0.5" fontWeight="bold" style={{ animation: "floatHeart 3s ease-in-out infinite" }}>Z</text>
        <text x="68" y="20" fontSize="11" fill={colors.primary} opacity="0.4" fontWeight="bold" style={{ animation: "floatHeart 3s ease-in-out 0.5s infinite" }}>z</text>
        <text x="76" y="14" fontSize="9" fill={colors.primary} opacity="0.3" fontWeight="bold" style={{ animation: "floatHeart 3s ease-in-out 1s infinite" }}>z</text>
        <ellipse cx="90" cy="72" rx="9" ry="6" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5" transform="rotate(-10 90 72)"/>
        <ellipse cx="95" cy="62" rx="9" ry="6" fill="#FFF5E6" stroke="#E8D5C0" strokeWidth="1.5" transform="rotate(5 95 62)"/>
      </svg>
    ),
  };
  return poses[pose] || poses.wave;
};

// Icons
const Icons = {
  Clock: () => (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
  Balloon: () => (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={colors.secondary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 4.97 7 13 7 13s7-8.03 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5" fill={colors.secondaryLight}/></svg>),
  Moon: () => (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={colors.navyLight} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>),
  Sun: () => (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={colors.accentWarm} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>),
  Book: () => (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>),
  Backpack: () => (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={colors.secondary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10z"/><path d="M9 6V4a3 3 0 0 1 6 0v2"/><path d="M8 14h8"/><path d="M8 18h8"/></svg>),
  Users: () => (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
  Mail: () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>),
  Instagram: () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>),
  MapPin: () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>),
  Menu: () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>),
  X: () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>),
  GraduationCap: () => (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/></svg>),
  MessageCircle: () => (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>),
  Puzzle: () => (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={colors.secondary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.452-.968-.908a2.5 2.5 0 0 0-4.76 1.528c.128.442.048.895-.264 1.207L11.4 19.88a2.41 2.41 0 0 1-1.704.706 2.41 2.41 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-1.528-4.76c.538-.161.904-.555.904-1.107V12c0-.552-.366-.946-.904-1.107a2.5 2.5 0 0 1 1.528-4.76c.18.464.527.894 1.02.968.352.053.694-.062.877-.29L7.996 5.244a2.41 2.41 0 0 1 1.704-.706c.617 0 1.233.235 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 4.76 1.528c-.161.538-.104 1.113.104 1.197z"/></svg>),
  Check: () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>),
  Send: () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>),
};

const CloudSVG = ({ style, size = 80, opacity = 0.15 }) => (
  <svg width={size} height={size * 0.6} viewBox="0 0 100 60" style={{ position: "absolute", ...style, opacity, pointerEvents: "none" }}>
    <ellipse cx="50" cy="40" rx="45" ry="18" fill={colors.primary} />
    <ellipse cx="30" cy="30" rx="22" ry="20" fill={colors.primary} />
    <ellipse cx="60" cy="25" rx="28" ry="24" fill={colors.primary} />
    <ellipse cx="75" cy="35" rx="18" ry="15" fill={colors.primary} />
  </svg>
);

const RainbowSVG = ({ style, size = 100 }) => (
  <svg width={size} height={size * 0.55} viewBox="0 0 120 66" style={{ position: "absolute", ...style, opacity: 0.2, pointerEvents: "none" }}>
    <path d="M10 60 A50 50 0 0 1 110 60" fill="none" stroke="#F4A6B8" strokeWidth="8" />
    <path d="M18 60 A42 42 0 0 1 102 60" fill="none" stroke="#FFD166" strokeWidth="8" />
    <path d="M26 60 A34 34 0 0 1 94 60" fill="none" stroke="#A8D8EA" strokeWidth="8" />
  </svg>
);

const FloatingHeart = ({ delay, left, size = 16 }) => (
  <div style={{ position: "absolute", left: `${left}%`, bottom: "-20px", fontSize: `${size}px`, opacity: 0.3, animation: `floatUp 8s ease-in-out ${delay}s infinite`, pointerEvents: "none" }}>&#9829;</div>
);

const SpeechBubble = ({ text, style = {} }) => (
  <div style={{ position: "relative", background: colors.white, borderRadius: 16, padding: "10px 16px", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", border: `1px solid ${colors.primary}20`, fontSize: 13, fontWeight: 600, color: colors.navy, maxWidth: 180, textAlign: "center", fontFamily: "'Quicksand', sans-serif", ...style }}>
    {text}
    <div style={{ position: "absolute", bottom: -8, left: "50%", marginLeft: -8, width: 0, height: 0, borderLeft: "8px solid transparent", borderRight: "8px solid transparent", borderTop: `8px solid ${colors.white}` }} />
  </div>
);

// Default team data (used when Sanity has no data yet)
const defaultTeam = [
  { _id: "1", name: "Margarida Antunes", location: "Torres Vedras", description: "Formação em Ação Educativa e estudante de CTeSP em Intervenção em Espaços Educativos.", photo: null },
  { _id: "2", name: "Catarina Soares", location: "Peniche", description: "Formação em Ação Educativa e estudante de CTeSP em Intervenção em Espaços Educativos.", photo: null },
];

export default function BrincaComigo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [team, setTeam] = useState(defaultTeam);
  const [formData, setFormData] = useState({
    parentName: "", childAge: "", date: "", startTime: "", endTime: "",
    location: "", zone: "", serviceType: "", numChildren: "1", notes: "",
  });
  const [formSent, setFormSent] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch team from Sanity
  useEffect(() => {
    client.fetch('*[_type == "teamMember"] | order(_createdAt asc)')
      .then((data) => {
        if (data && data.length > 0) setTeam(data);
      })
      .catch(() => {});
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleFormChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const buildEmailText = () => {
    const { parentName, childAge, date, startTime, endTime, location, zone, serviceType, numChildren, notes } = formData;
    return `Ol\u00e1 BrincaComigo!\n\nGostaria de pedir um or\u00e7amento para o seguinte:\n\nNome do Pai/M\u00e3e: ${parentName || "(n\u00e3o preenchido)"}\nIdade da(s) crian\u00e7a(s): ${childAge || "(n\u00e3o preenchido)"}\nN\u00famero de crian\u00e7as: ${numChildren || "1"}\nTipo de servi\u00e7o: ${serviceType || "(n\u00e3o selecionado)"}\nData pretendida: ${date || "(n\u00e3o preenchida)"}\nHor\u00e1rio: ${startTime || "?"} \u2014 ${endTime || "?"}\nZona: ${zone || "(n\u00e3o selecionada)"}\nMorada/Local: ${location || "(n\u00e3o preenchido)"}\n\nInforma\u00e7\u00f5es adicionais:\n${notes || "(sem informa\u00e7\u00f5es adicionais)"}\n\nObrigado/a!`;
  };

  const handleSubmit = () => {
    const text = buildEmailText();
    const subject = encodeURIComponent("Pedido de Or\u00e7amento \u2014 BrincaComigo");
    const body = encodeURIComponent(text);
    window.open(`mailto:infobrincacomigo@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  const handleCopy = async () => {
    const text = `Para: infobrincacomigo@gmail.com\nAssunto: Pedido de Or\u00e7amento \u2014 BrincaComigo\n\n${buildEmailText()}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const navItems = [
    { label: "In\u00edcio", id: "inicio" },
    { label: "Quem Somos", id: "quem-somos" },
    { label: "Servi\u00e7os", id: "servicos" },
    { label: "Porqu\u00ea N\u00f3s", id: "diferencial" },
    { label: "Zonas", id: "zonas" },
    { label: "Or\u00e7amento", id: "orcamento" },
  ];

  const services = [
    { icon: <Icons.Clock />, title: "Babysitting em Part-time", desc: "Manh\u00e3, tarde ou noite \u2014 para as rotinas do dia a dia.", color: colors.primary },
    { icon: <Icons.Balloon />, title: "Babysitting Ocasional", desc: "Para momentos pontuais e compromissos especiais.", color: colors.secondary },
    { icon: <Icons.Moon />, title: "Babysitting Noturno", desc: "Para que possa desfrutar de uma noite tranquila.", color: colors.navyLight },
    { icon: <Icons.Sun />, title: "F\u00e9rias Escolares", desc: "Acompanhamento divertido e educativo nas pausas letivas.", color: colors.accentWarm },
  ];

  const activities = [
    { icon: <Icons.Book />, title: "Atividades L\u00fadicas e Educativas", desc: "Brincadeiras, jogos, hist\u00f3rias, pinturas e muito mais." },
    { icon: <Icons.GraduationCap />, title: "Apoio nos Trabalhos de Casa", desc: "Acompanhamos e ajudamos nos estudos." },
    { icon: <Icons.Backpack />, title: "Apoio nas Rotinas Di\u00e1rias", desc: "Refei\u00e7\u00f5es, higiene, organiza\u00e7\u00e3o e muito carinho." },
  ];

  const differentials = [
    { icon: <Icons.Book />, title: "Apoio Educativo", desc: "Forma\u00e7\u00e3o em A\u00e7\u00e3o Educativa e estudantes de CTeSP em Interven\u00e7\u00e3o em Espa\u00e7os Educativos." },
    { icon: <Icons.MessageCircle />, title: "Comunica\u00e7\u00e3o com os Pais", desc: "Mantemos os pais sempre informados sobre o bem-estar e as atividades dos seus filhos." },
    { icon: <Icons.Users />, title: "Cuidado Personalizado", desc: "Cada crian\u00e7a \u00e9 \u00fanica e merece aten\u00e7\u00e3o adaptada \u00e0s suas necessidades." },
    { icon: <Icons.Puzzle />, title: "Atividades por Idade", desc: "Atividades pensadas e adaptadas \u00e0 faixa et\u00e1ria de cada crian\u00e7a." },
  ];

  const inputStyle = { width: "100%", padding: "14px 16px", borderRadius: 14, border: `2px solid ${colors.primary}20`, fontSize: 15, fontFamily: "'Nunito', sans-serif", color: colors.textDark, background: colors.white, outline: "none", transition: "border-color 0.2s" };
  const labelStyle = { fontSize: 13, fontWeight: 700, color: colors.navy, marginBottom: 6, display: "block", fontFamily: "'Quicksand', sans-serif" };

  return (
    <div style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif", color: colors.textDark, overflowX: "hidden", background: colors.white }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Nunito:wght@400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        @keyframes floatUp { 0% { transform: translateY(0) rotate(0deg); opacity: 0; } 10% { opacity: 0.3; } 90% { opacity: 0.1; } 100% { transform: translateY(-500px) rotate(45deg); opacity: 0; } }
        @keyframes mascotWave { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(-20deg); } 75% { transform: rotate(15deg); } }
        @keyframes floatHeart { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes gentleBob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in { animation: fadeInUp 0.8s ease-out forwards; }
        .fade-in-d1 { animation: fadeInUp 0.8s ease-out 0.1s forwards; opacity: 0; }
        .fade-in-d2 { animation: fadeInUp 0.8s ease-out 0.2s forwards; opacity: 0; }
        .fade-in-d3 { animation: fadeInUp 0.8s ease-out 0.3s forwards; opacity: 0; }
        .service-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(107,158,206,0.18); }
        .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(107,158,206,0.35); }
        .cta-btn-secondary:hover { transform: translateY(-2px); background: ${colors.secondaryLight}; }
        .nav-link:hover { color: ${colors.primary}; }
        .diff-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(107,158,206,0.15); }
        .form-input:focus { border-color: ${colors.primary} !important; box-shadow: 0 0 0 3px ${colors.primary}15; }
        .form-select:focus { border-color: ${colors.primary} !important; box-shadow: 0 0 0 3px ${colors.primary}15; }
        .submit-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 28px ${colors.primary}40; }
        @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }
        .desktop-nav { display: flex !important; }
        .mobile-menu-btn { display: none !important; }
        @media (max-width: 768px) { .desktop-nav { display: none !important; } .mobile-menu-btn { display: block !important; } }
      `}</style>

      {/* Nav */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: scrolled ? "rgba(255,255,255,0.97)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none", transition: "all 0.3s ease", padding: scrolled ? "12px 0" : "20px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => scrollTo("inicio")}>
            <span style={{ fontSize: 28, fontFamily: "'Quicksand', sans-serif", fontWeight: 700, color: colors.navy }}>Brinca<span style={{ color: colors.primary }}>Comigo</span></span>
          </div>
          <div style={{ display: "flex", gap: 28, alignItems: "center" }} className="desktop-nav">
            {navItems.map((item) => (<button key={item.id} onClick={() => scrollTo(item.id)} className="nav-link" style={{ background: "none", border: "none", cursor: "pointer", fontSize: 15, fontWeight: 600, color: colors.textMuted, fontFamily: "'Nunito', sans-serif", transition: "color 0.2s" }}>{item.label}</button>))}
            <button onClick={() => scrollTo("orcamento")} className="cta-btn" style={{ background: colors.primary, color: colors.white, border: "none", borderRadius: 24, padding: "10px 24px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "'Nunito', sans-serif", transition: "all 0.3s ease" }}>Pedir Or&#231;amento</button>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: colors.navy, padding: 8 }} className="mobile-menu-btn">{menuOpen ? <Icons.X /> : <Icons.Menu />}</button>
        </div>
        {menuOpen && (<div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: colors.white, boxShadow: "0 8px 32px rgba(0,0,0,0.1)", padding: "16px 24px", display: "flex", flexDirection: "column", gap: 12 }}>{navItems.map((item) => (<button key={item.id} onClick={() => scrollTo(item.id)} style={{ background: "none", border: "none", textAlign: "left", fontSize: 16, fontWeight: 600, color: colors.textDark, padding: "8px 0", cursor: "pointer", fontFamily: "'Nunito', sans-serif" }}>{item.label}</button>))}</div>)}
      </nav>

      {/* Hero */}
      <section id="inicio" style={{ position: "relative", background: `linear-gradient(165deg, ${colors.lightest} 0%, ${colors.light} 40%, ${colors.cloudBg} 100%)`, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: "100px 24px 60px" }}>
        <CloudSVG style={{ top: "8%", left: "-3%" }} size={160} opacity={0.1} />
        <CloudSVG style={{ top: "15%", right: "5%" }} size={120} opacity={0.08} />
        <RainbowSVG style={{ top: "10%", right: "8%" }} size={140} />
        <FloatingHeart delay={0} left={10} size={14} />
        <FloatingHeart delay={2} left={25} size={18} />
        <FloatingHeart delay={4} left={70} size={12} />
        <FloatingHeart delay={6} left={85} size={16} />
        <div style={{ textAlign: "center", maxWidth: 700, position: "relative", zIndex: 2 }}>
          <div className="fade-in" style={{ display: "inline-block", background: `linear-gradient(135deg, ${colors.secondaryLight}, ${colors.white})`, borderRadius: 50, padding: "8px 24px", marginBottom: 24, fontSize: 14, fontWeight: 600, color: colors.secondary, border: `1px solid ${colors.secondary}33` }}>&#10024; Babysitting &amp; Anima&#231;&#227;o Infantil</div>
          <h1 className="fade-in-d1" style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "clamp(40px, 8vw, 68px)", fontWeight: 700, color: colors.navy, lineHeight: 1.1, marginBottom: 8 }}>Brinca<span style={{ color: colors.primary }}>Comigo</span></h1>
          <p className="fade-in-d1" style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "clamp(16px, 3vw, 22px)", color: colors.textMuted, fontWeight: 600, marginBottom: 20, letterSpacing: "3px" }}>Cuidar &bull; Brincar &bull; Aprender</p>
          <p className="fade-in-d2" style={{ fontSize: "clamp(16px, 2.5vw, 20px)", color: colors.textMuted, lineHeight: 1.7, maxWidth: 520, margin: "0 auto 36px" }}>Servi&#231;os de babysitting com carinho, seguran&#231;a e divers&#227;o para crian&#231;as de <strong style={{ color: colors.navy }}>1 a 10 anos</strong> em Torres Vedras e Peniche.</p>
          <div className="fade-in-d3" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => scrollTo("orcamento")} className="cta-btn" style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryDark})`, color: colors.white, border: "none", borderRadius: 30, padding: "16px 36px", fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "'Nunito', sans-serif", transition: "all 0.3s ease", boxShadow: `0 4px 16px ${colors.primary}44` }}>Pedir Or&#231;amento</button>
            <button onClick={() => scrollTo("servicos")} className="cta-btn-secondary" style={{ background: colors.white, color: colors.primary, border: `2px solid ${colors.primary}33`, borderRadius: 30, padding: "16px 36px", fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "'Nunito', sans-serif", transition: "all 0.3s ease" }}>Os Nossos Servi&#231;os</button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 40, animation: "gentleBob 3s ease-in-out infinite" }}>
            <SpeechBubble text="Ol&#225;! Vamos brincar? &#127880;" style={{ marginBottom: 8 }} />
            <Mascot pose="wave" size={120} />
          </div>
        </div>
      </section>

      {/* Quem Somos - SANITY INTEGRATED */}
      <section id="quem-somos" style={{ padding: "100px 24px", background: colors.white, position: "relative" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: colors.secondary, display: "block", marginBottom: 12 }}>Quem Somos</span>
            <h2 style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 700, color: colors.navy }}>Duas apaixonadas por crian&#231;as</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
            {team.map((person, i) => (
              <div key={person._id} style={{ background: `linear-gradient(145deg, ${colors.lightest}, ${colors.white})`, borderRadius: 24, padding: 36, textAlign: "center", border: `1px solid ${colors.primary}15` }}>
                <div style={{ width: 120, height: 120, borderRadius: "50%", background: `linear-gradient(135deg, ${i === 0 ? colors.primary : colors.secondary}25, ${i === 0 ? colors.secondary : colors.primary}25)`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", overflow: "hidden", border: `3px solid ${i === 0 ? colors.primary : colors.secondary}30` }}>
                  {person.photo ? (
                    <img src={urlFor(person.photo).width(240).height(240).url()} alt={person.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  ) : (
                    <span style={{ fontSize: 48 }}>&#128105;&#8205;&#127979;</span>
                  )}
                </div>
                <h3 style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 22, fontWeight: 700, color: colors.navy, marginBottom: 8 }}>{person.name}</h3>
                <p style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, color: colors.secondary, fontSize: 14, fontWeight: 600, marginBottom: 12 }}>&#128205; {person.location}</p>
                <p style={{ color: colors.textMuted, fontSize: 15, lineHeight: 1.7 }}>{person.description}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Mascot pose="love" size={90} />
              <p style={{ fontSize: 14, color: colors.secondary, fontWeight: 600, fontFamily: "'Quicksand', sans-serif", marginTop: 4 }}>Cuidamos com todo o amor! &#128149;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicos */}
      <section id="servicos" style={{ padding: "100px 24px", background: `linear-gradient(180deg, ${colors.light} 0%, ${colors.lightest} 100%)`, position: "relative" }}>
        <CloudSVG style={{ top: "5%", right: "-5%" }} size={140} opacity={0.06} />
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: colors.primary, display: "block", marginBottom: 12 }}>Os Nossos Servi&#231;os</span>
            <h2 style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 700, color: colors.navy, marginBottom: 12 }}>O que oferecemos?</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24, marginBottom: 64 }}>
            {services.map((s, i) => (
              <div key={i} className="service-card" style={{ background: colors.white, borderRadius: 20, padding: "32px 24px", textAlign: "center", transition: "all 0.3s ease", border: `1px solid ${s.color}20`, boxShadow: `0 4px 16px ${s.color}10`, cursor: "default" }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: `${s.color}15`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 17, fontWeight: 700, color: colors.navy, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: colors.textMuted, fontSize: 14, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <h3 style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "clamp(22px, 4vw, 30px)", fontWeight: 700, color: colors.navy }}>Durante o Babysitting</h3>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, position: "relative" }}>
            {activities.map((a, i) => (
              <div key={i} style={{ background: colors.white, borderRadius: 20, padding: "28px 24px", display: "flex", gap: 16, alignItems: "flex-start", border: `1px solid ${colors.primary}12`, boxShadow: `0 2px 12px ${colors.primary}08` }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: `${colors.primary}12`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{a.icon}</div>
                <div>
                  <h4 style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 16, fontWeight: 700, color: colors.navy, marginBottom: 6 }}>{a.title}</h4>
                  <p style={{ color: colors.textMuted, fontSize: 14, lineHeight: 1.6 }}>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}><Mascot pose="read" size={100} /></div>
        </div>
      </section>

      {/* Diferencial */}
      <section id="diferencial" style={{ padding: "100px 24px", background: colors.white, position: "relative" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: colors.accent, display: "block", marginBottom: 12 }}>Porqu&#234; N&#243;s</span>
            <h2 style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 700, color: colors.navy }}>O que nos diferencia?</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {differentials.map((d, i) => (
              <div key={i} className="diff-card" style={{ background: `linear-gradient(155deg, ${colors.lightest}, ${colors.white})`, borderRadius: 20, padding: "32px 24px", textAlign: "center", transition: "all 0.3s ease", border: `1px solid ${colors.primary}12` }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: `linear-gradient(135deg, ${colors.primary}18, ${colors.secondary}18)`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>{d.icon}</div>
                <h3 style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 17, fontWeight: 700, color: colors.navy, marginBottom: 8 }}>{d.title}</h3>
                <p style={{ color: colors.textMuted, fontSize: 14, lineHeight: 1.6 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zonas */}
      <section id="zonas" style={{ padding: "100px 24px", background: `linear-gradient(180deg, ${colors.light} 0%, ${colors.cloudBg} 100%)`, position: "relative" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: colors.primary, display: "block", marginBottom: 12 }}>Onde Estamos</span>
            <h2 style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 700, color: colors.navy }}>Zonas de Atua&#231;&#227;o</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
            <div style={{ background: colors.white, borderRadius: 24, padding: 36, border: `1px solid ${colors.primary}15`, boxShadow: `0 4px 20px ${colors.primary}08` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: `${colors.primary}15`, display: "flex", alignItems: "center", justifyContent: "center", color: colors.primary }}><Icons.MapPin /></div>
                <h3 style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 22, fontWeight: 700, color: colors.navy }}>Torres Vedras</h3>
              </div>
              <p style={{ color: colors.textMuted, fontSize: 15, lineHeight: 1.8 }}>Torres Vedras e arredores, incluindo A dos Cunhados, Campelos, Ramalhal, Silveira, Ponte do Rol, S. Pedro e Santiago, Ventosa, Freiria, Turcifal, Dois Portos, Runa, Matac&#227;es, Monte Redondo, Maxial e Carvoeira.</p>
            </div>
            <div style={{ background: colors.white, borderRadius: 24, padding: 36, border: `1px solid ${colors.secondary}15`, boxShadow: `0 4px 20px ${colors.secondary}08` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: `${colors.secondary}15`, display: "flex", alignItems: "center", justifyContent: "center", color: colors.secondary }}><Icons.MapPin /></div>
                <h3 style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 22, fontWeight: 700, color: colors.navy }}>Peniche</h3>
              </div>
              <p style={{ color: colors.textMuted, fontSize: 15, lineHeight: 1.8 }}>Peniche e arredores, incluindo Ferrel, Atouguia da Baleia, Serra d'El-Rei e localidades envolventes.</p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}><Mascot pose="peek" size={100} /></div>
        </div>
      </section>

      {/* Orcamento Form */}
      <section id="orcamento" style={{ padding: "100px 24px", background: colors.white, position: "relative" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: colors.secondary, display: "block", marginBottom: 12 }}>Or&#231;amento Gratuito</span>
            <h2 style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 700, color: colors.navy, marginBottom: 12 }}>Pedir Or&#231;amento</h2>
            <p style={{ color: colors.textMuted, fontSize: 17, maxWidth: 500, margin: "0 auto" }}>Preencha o formul&#225;rio abaixo e receber&#225; resposta o mais breve poss&#237;vel!</p>
          </div>
          <div style={{ background: `linear-gradient(155deg, ${colors.lightest}, ${colors.white})`, borderRadius: 28, padding: "40px 32px", border: `1px solid ${colors.primary}15`, boxShadow: `0 8px 40px ${colors.primary}10`, position: "relative" }}>
            <div style={{ position: "absolute", top: -50, right: -10, animation: "gentleBob 3s ease-in-out infinite" }}><Mascot pose="wave" size={80} /></div>
            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>&#128100; Nome do Pai/M&#227;e</label>
              <input className="form-input" type="text" placeholder="Ex: Ana Silva" value={formData.parentName} onChange={(e) => handleFormChange("parentName", e.target.value)} style={inputStyle} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
              <div>
                <label style={labelStyle}>&#128118; Idade da(s) crian&#231;a(s)</label>
                <input className="form-input" type="text" placeholder="Ex: 3 e 5 anos" value={formData.childAge} onChange={(e) => handleFormChange("childAge", e.target.value)} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>&#128103; N.&#186; de crian&#231;as</label>
                <select className="form-select" value={formData.numChildren} onChange={(e) => handleFormChange("numChildren", e.target.value)} style={{ ...inputStyle, cursor: "pointer", appearance: "auto" }}>
                  <option value="1">1 crian&#231;a</option>
                  <option value="2">2 crian&#231;as</option>
                  <option value="3">3 crian&#231;as</option>
                  <option value="4+">4 ou mais</option>
                </select>
              </div>
            </div>
            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>&#127919; Tipo de Servi&#231;o</label>
              <select className="form-select" value={formData.serviceType} onChange={(e) => handleFormChange("serviceType", e.target.value)} style={{ ...inputStyle, cursor: "pointer", appearance: "auto" }}>
                <option value="">Selecione...</option>
                <option value="Part-time (manh&#227;)">Part-time &#8212; Manh&#227;</option>
                <option value="Part-time (tarde)">Part-time &#8212; Tarde</option>
                <option value="Part-time (noite)">Part-time &#8212; Noite</option>
                <option value="Ocasional">Ocasional</option>
                <option value="Noturno">Noturno</option>
                <option value="F&#233;rias Escolares">F&#233;rias Escolares</option>
              </select>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 20 }}>
              <div><label style={labelStyle}>&#128197; Data</label><input className="form-input" type="date" value={formData.date} onChange={(e) => handleFormChange("date", e.target.value)} style={inputStyle} /></div>
              <div><label style={labelStyle}>&#128336; Hora in&#237;cio</label><input className="form-input" type="time" value={formData.startTime} onChange={(e) => handleFormChange("startTime", e.target.value)} style={inputStyle} /></div>
              <div><label style={labelStyle}>&#128341; Hora fim</label><input className="form-input" type="time" value={formData.endTime} onChange={(e) => handleFormChange("endTime", e.target.value)} style={inputStyle} /></div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
              <div>
                <label style={labelStyle}>&#128205; Zona</label>
                <select className="form-select" value={formData.zone} onChange={(e) => handleFormChange("zone", e.target.value)} style={{ ...inputStyle, cursor: "pointer", appearance: "auto" }}>
                  <option value="">Selecione...</option>
                  <option value="Torres Vedras">Torres Vedras e arredores</option>
                  <option value="Peniche">Peniche e arredores</option>
                </select>
              </div>
              <div><label style={labelStyle}>&#127968; Morada / Local</label><input className="form-input" type="text" placeholder="Ex: Rua das Flores, 12" value={formData.location} onChange={(e) => handleFormChange("location", e.target.value)} style={inputStyle} /></div>
            </div>
            <div style={{ marginBottom: 28 }}>
              <label style={labelStyle}>&#128172; Informa&#231;&#245;es adicionais</label>
              <textarea className="form-input" placeholder="Alergias, medica&#231;&#227;o, necessidades especiais, ou qualquer outra informa&#231;&#227;o relevante..." value={formData.notes} onChange={(e) => handleFormChange("notes", e.target.value)} rows={4} style={{ ...inputStyle, resize: "vertical" }} />
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button onClick={handleSubmit} className="submit-btn" style={{ flex: 1, minWidth: 200, padding: "18px 32px", background: formSent ? "#4CAF50" : `linear-gradient(135deg, ${colors.primary}, ${colors.primaryDark})`, color: colors.white, border: "none", borderRadius: 18, fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "'Quicksand', sans-serif", transition: "all 0.3s ease", boxShadow: `0 4px 20px ${colors.primary}30`, display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                {formSent ? (<><Icons.Check /> Email preparado!</>) : (<><Icons.Send /> Enviar por Email</>)}
              </button>
              <button onClick={handleCopy} style={{ flex: 1, minWidth: 200, padding: "18px 32px", background: copied ? "#4CAF50" : colors.white, color: copied ? colors.white : colors.primary, border: `2px solid ${copied ? "#4CAF50" : colors.primary}`, borderRadius: 18, fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "'Quicksand', sans-serif", transition: "all 0.3s ease", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                {copied ? (<><Icons.Check /> Copiado!</>) : (<>&#128203; Copiar Informa&#231;&#245;es</>)}
              </button>
            </div>
            <p style={{ textAlign: "center", fontSize: 13, color: colors.textMuted, marginTop: 14, lineHeight: 1.6 }}>"Enviar por Email" abre a sua aplica&#231;&#227;o de email. Se n&#227;o funcionar, clique em "Copiar Informa&#231;&#245;es" e cole no email para <strong>infobrincacomigo@gmail.com</strong></p>
          </div>
          <div style={{ marginTop: 32, display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
            <a href="mailto:infobrincacomigo@gmail.com" style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 24px", borderRadius: 16, background: `${colors.primary}08`, border: `1px solid ${colors.primary}15`, textDecoration: "none", color: colors.navy, fontWeight: 600, fontSize: 14 }}><span style={{ color: colors.primary }}><Icons.Mail /></span>infobrincacomigo@gmail.com</a>
            <a href="https://www.instagram.com/brincacomigobabysitters" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 24px", borderRadius: 16, background: `${colors.secondary}08`, border: `1px solid ${colors.secondary}15`, textDecoration: "none", color: colors.navy, fontWeight: 600, fontSize: 14 }}><span style={{ color: colors.secondary }}><Icons.Instagram /></span>@brincacomigobabysitters</a>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={{ padding: "80px 24px", background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryDark})`, textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -20, right: -20, width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />
        <div style={{ position: "absolute", bottom: -30, left: -30, width: 140, height: 140, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
        <div style={{ maxWidth: 600, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}><Mascot pose="sleep" size={120} /></div>
          <h3 style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "clamp(22px, 4vw, 28px)", fontWeight: 700, color: colors.white, marginBottom: 12 }}>Ambiente seguro, acolhedor e cheio de amor para os seus filhos! &#128149;</h3>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, marginBottom: 28 }}>Juntas, tornamos a inf&#226;ncia ainda mais feliz!</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:infobrincacomigo@gmail.com" style={{ background: colors.white, color: colors.primary, borderRadius: 30, padding: "14px 32px", fontSize: 15, fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 16px rgba(0,0,0,0.1)" }}>&#9993;&#65039; Enviar E-mail</a>
            <a href="https://www.instagram.com/brincacomigobabysitters" target="_blank" rel="noopener noreferrer" style={{ background: "rgba(255,255,255,0.15)", color: colors.white, border: "2px solid rgba(255,255,255,0.4)", borderRadius: 30, padding: "14px 32px", fontSize: 15, fontWeight: 700, textDecoration: "none" }}>&#128248; Instagram</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: colors.navy, color: "rgba(255,255,255,0.7)", padding: "48px 24px 32px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h3 style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 28, fontWeight: 700, color: colors.white, marginBottom: 8 }}>Brinca<span style={{ color: colors.primary }}>Comigo</span></h3>
          <p style={{ fontSize: 14, marginBottom: 24, letterSpacing: 2 }}>Cuidar &bull; Brincar &bull; Aprender</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 32 }}>
            <a href="mailto:infobrincacomigo@gmail.com" style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.8)", textDecoration: "none" }}><Icons.Mail /></a>
            <a href="https://www.instagram.com/brincacomigobabysitters" target="_blank" rel="noopener noreferrer" style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.8)", textDecoration: "none" }}><Icons.Instagram /></a>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap", fontSize: 14 }}>
            <span>&#128205; Torres Vedras e arredores</span>
            <span>&#128205; Peniche e arredores</span>
          </div>
          <p style={{ fontSize: 13, marginTop: 20, opacity: 0.5 }}>&copy; 2025 BrincaComigo &#8212; Babysitting &amp; Anima&#231;&#227;o Infantil. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
