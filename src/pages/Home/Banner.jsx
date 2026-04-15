import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

/* ─────────────────────────────────────────────
   SVG Background Illustrations
   Each slide has a unique hand-drawn SVG scene
───────────────────────────────────────────── */

const BgSlide1 = () => (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        {/* Deep background */}
        <rect width="1440" height="600" fill="#0F172A" />
        {/* Diagonal accent band */}
        <polygon points="0,600 400,0 600,0 200,600" fill="#DC2626" opacity="0.15" />
        <polygon points="0,600 300,0 360,0 60,600" fill="#DC2626" opacity="0.08" />
        {/* Large blood drop hero */}
        <path d="M 1100 80 C 1100 80 1000 220 1000 300 C 1000 355 1044 400 1100 400 C 1156 400 1200 355 1200 300 C 1200 220 1100 80 1100 80 Z" fill="#DC2626" opacity="0.25" />
        <path d="M 1105 100 C 1105 100 1015 228 1015 305 C 1015 354 1055 394 1105 394 C 1155 394 1195 354 1195 305 C 1195 228 1105 100 1105 100 Z" fill="#DC2626" opacity="0.18" />
        {/* Small scattered drops */}
        <path d="M 850 150 C 850 150 820 200 820 225 C 820 242 833 255 850 255 C 867 255 880 242 880 225 C 880 200 850 150 850 150 Z" fill="#EF4444" opacity="0.3" />
        <path d="M 920 320 C 920 320 900 360 900 378 C 900 390 909 400 920 400 C 931 400 940 390 940 378 C 940 360 920 320 920 320 Z" fill="#EF4444" opacity="0.2" />
        {/* Heartbeat line */}
        <polyline points="0,300 200,300 240,220 270,380 300,300 380,300 420,240 460,360 500,300 700,300 740,260 760,340 780,300 1440,300" fill="none" stroke="#DC2626" strokeWidth="2" opacity="0.2" />
        {/* Grid dots */}
        {[...Array(8)].map((_, row) =>
            [...Array(14)].map((_, col) => (
                <circle key={`${row}-${col}`} cx={col * 110 + 55} cy={row * 88 + 44} r="1.5" fill="#DC2626" opacity="0.12" />
            ))
        )}
        {/* Radial glow */}
        <radialGradient id="glow1" cx="30%" cy="50%" r="40%">
            <stop offset="0%" stopColor="#DC2626" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
        </radialGradient>
        <rect width="1440" height="600" fill="url(#glow1)" />
    </svg>
);

const BgSlide2 = () => (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <rect width="1440" height="600" fill="#1E293B" />
        {/* Concentric circles */}
        <circle cx="1200" cy="300" r="400" fill="none" stroke="#DC2626" strokeWidth="1" opacity="0.1" />
        <circle cx="1200" cy="300" r="300" fill="none" stroke="#DC2626" strokeWidth="1" opacity="0.12" />
        <circle cx="1200" cy="300" r="200" fill="none" stroke="#DC2626" strokeWidth="1.5" opacity="0.15" />
        <circle cx="1200" cy="300" r="120" fill="#DC2626" opacity="0.08" />
        <circle cx="1200" cy="300" r="60" fill="#DC2626" opacity="0.15" />
        {/* Blood cells floating */}
        <ellipse cx="300" cy="180" rx="40" ry="25" fill="none" stroke="#EF4444" strokeWidth="2" opacity="0.25" />
        <ellipse cx="300" cy="180" rx="20" ry="12" fill="none" stroke="#EF4444" strokeWidth="1" opacity="0.2" />
        <ellipse cx="700" cy="420" rx="35" ry="22" fill="none" stroke="#EF4444" strokeWidth="2" opacity="0.2" />
        <ellipse cx="700" cy="420" rx="17" ry="11" fill="none" stroke="#EF4444" strokeWidth="1" opacity="0.15" />
        <ellipse cx="500" cy="100" rx="28" ry="18" fill="none" stroke="#EF4444" strokeWidth="1.5" opacity="0.18" />
        <ellipse cx="900" cy="480" rx="32" ry="20" fill="none" stroke="#EF4444" strokeWidth="1.5" opacity="0.15" />
        <ellipse cx="150" cy="400" rx="22" ry="14" fill="none" stroke="#EF4444" strokeWidth="1" opacity="0.2" />
        {/* DNA-like helix lines */}
        <path d="M 80 0 Q 120 100 80 200 Q 40 300 80 400 Q 120 500 80 600" fill="none" stroke="#DC2626" strokeWidth="1.5" opacity="0.2" />
        <path d="M 120 0 Q 80 100 120 200 Q 160 300 120 400 Q 80 500 120 600" fill="none" stroke="#DC2626" strokeWidth="1.5" opacity="0.15" />
        {[50, 150, 250, 350, 450, 550].map(y => (
            <line key={y} x1="80" y1={y} x2="120" y2={y + 20} stroke="#DC2626" strokeWidth="1" opacity="0.15" />
        ))}
        <radialGradient id="glow2" cx="80%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#DC2626" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
        </radialGradient>
        <rect width="1440" height="600" fill="url(#glow2)" />
    </svg>
);

const BgSlide3 = () => (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <rect width="1440" height="600" fill="#0F172A" />
        {/* Large heart outline */}
        <path d="M 1050 120 C 1050 120 950 60 880 120 C 810 180 840 260 960 340 C 1050 400 1050 400 1050 400 C 1050 400 1050 400 1140 340 C 1260 260 1290 180 1220 120 C 1150 60 1050 120 1050 120 Z" fill="#DC2626" opacity="0.12" />
        <path d="M 1050 140 C 1050 140 965 87 903 140 C 841 193 866 262 973 333 C 1050 385 1050 385 1050 385 C 1050 385 1050 385 1127 333 C 1234 262 1259 193 1197 140 C 1135 87 1050 140 1050 140 Z" fill="#DC2626" opacity="0.1" stroke="#DC2626" strokeWidth="1.5" />
        {/* Pulse/ECG line big */}
        <polyline
            points="0,350 150,350 200,350 230,200 255,480 275,350 380,350 420,290 455,400 490,350 650,350 680,320 700,380 720,350 1440,350"
            fill="none" stroke="#EF4444" strokeWidth="2.5" opacity="0.25"
        />
        {/* Horizontal lines texture */}
        {[100, 150, 200, 250, 300, 400, 450, 500].map(y => (
            <line key={y} x1="0" y1={y} x2="1440" y2={y} stroke="#334155" strokeWidth="1" opacity="0.4" />
        ))}
        {/* Vertical lines texture */}
        {[200, 400, 600, 800].map(x => (
            <line key={x} x1={x} y1="0" x2={x} y2="600" stroke="#334155" strokeWidth="1" opacity="0.3" />
        ))}
        {/* Corner accent */}
        <path d="M 0 0 L 200 0 L 0 200 Z" fill="#DC2626" opacity="0.1" />
        <path d="M 1440 600 L 1240 600 L 1440 400 Z" fill="#DC2626" opacity="0.1" />
        <radialGradient id="glow3" cx="20%" cy="60%" r="45%">
            <stop offset="0%" stopColor="#DC2626" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
        </radialGradient>
        <rect width="1440" height="600" fill="url(#glow3)" />
    </svg>
);

/* ─────────────────────────────────────────────
   Slide Data
───────────────────────────────────────────── */
const slides = [
    {
        bg: <BgSlide1 />,
        tag: "Be a Hero Today",
        heading: ["Give Blood,", "Give Life"],
        sub: "One donation takes just 10 minutes and can save up to 3 lives. Bangladesh needs 7 lakh units of blood every year — you can help fill that need.",
        stat1: { value: "3", label: "Lives saved per donation" },
        stat2: { value: "10 min", label: "Time to donate" },
    },
    {
        bg: <BgSlide2 />,
        tag: "Every Drop Matters",
        heading: ["Your Blood,", "Their Survival"],
        sub: "Every 2 seconds someone in Bangladesh needs blood. Accident victims, cancer patients, mothers in childbirth — they all rely on voluntary donors like you.",
        stat1: { value: "2 sec", label: "Someone needs blood" },
        stat2: { value: "56%", label: "Shortage unfilled" },
    },
    {
        bg: <BgSlide3 />,
        tag: "Join the Movement",
        heading: ["Connect Donors,", "Save Families"],
        sub: "LifeFlow bridges the gap between willing donors and those in critical need across all 64 districts of Bangladesh. Find a request near you today.",
        stat1: { value: "64", label: "Districts covered" },
        stat2: { value: "Free", label: "Always & forever" },
    },
];

/* ─────────────────────────────────────────────
   Banner Component
───────────────────────────────────────────── */
const Banner = () => {
    return (
        <section className="w-full">
            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                className="w-full"
                style={{ height: "auto" }}
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative w-full min-h-130 sm:min-h-145 lg:min-h-155 flex items-center overflow-hidden">

                            {/* ── SVG Background ── */}
                            {slide.bg}

                            {/* ── Dark overlay for text legibility ── */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/70 to-transparent" />

                            {/* ── Content ── */}
                            <div className="relative z-10 w-11/12 max-w-7xl mx-auto py-16 sm:py-20">
                                <div className="max-w-2xl">

                                    {/* Tag pill */}
                                    <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-4 py-1.5 mb-5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block animate-pulse" />
                                        <span className="font-secondary text-xs font-semibold uppercase tracking-widest text-primary">
                                            {slide.tag}
                                        </span>
                                    </div>

                                    {/* Heading */}
                                    <h1 className="font-primary text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5">
                                        {slide.heading[0]}
                                        <br />
                                        <span className="text-primary">{slide.heading[1]}</span>
                                    </h1>

                                    {/* Subtext */}
                                    <p className="font-secondary text-sm sm:text-base text-white/65 leading-relaxed mb-8 max-w-lg">
                                        {slide.sub}
                                    </p>

                                    {/* CTA Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-3 mb-10">
                                        <Link
                                            to="/register"
                                            className="btn btn-primary text-primary-content font-secondary font-semibold px-6 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow"
                                        >
                                            {/* Drop icon */}
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M 12 2 C 12 2 4 10 4 15 C 4 19.418 7.582 23 12 23 C 16.418 23 20 19.418 20 15 C 20 10 12 2 12 2 Z" />
                                            </svg>
                                            Join as a Donor
                                        </Link>
                                        <Link
                                            to="/search"
                                            className="btn font-secondary font-semibold px-6 rounded-xl border border-white/30 text-white bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
                                        >
                                            {/* Search icon */}
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="11" cy="11" r="8" />
                                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                            </svg>
                                            Search Donors
                                        </Link>
                                    </div>

                                    {/* Stat pills */}
                                    <div className="flex flex-wrap gap-3">
                                        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-sm">
                                            <span className="font-primary text-2xl font-bold text-primary leading-none">{slide.stat1.value}</span>
                                            <span className="font-secondary text-xs text-white/50 leading-tight max-w-[80px]">{slide.stat1.label}</span>
                                        </div>
                                        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-sm">
                                            <span className="font-primary text-2xl font-bold text-primary leading-none">{slide.stat2.value}</span>
                                            <span className="font-secondary text-xs text-white/50 leading-tight max-w-[80px]">{slide.stat2.label}</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* ── Slide number indicator ── */}
                            <div className="absolute bottom-16 right-6 sm:right-10 z-10 font-secondary text-white/20 text-xs font-medium tracking-widest hidden sm:block">
                                0{i + 1} / 0{slides.length}
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* ─── Swiper pagination dot styles ─── */}
            <style>{`
                .swiper-pagination {
                    bottom: 20px !important;
                }
                .swiper-pagination-bullet {
                    width: 8px;
                    height: 8px;
                    background: rgba(255,255,255,0.3);
                    opacity: 1;
                    transition: all 0.3s ease;
                }
                .swiper-pagination-bullet-active {
                    background: #DC2626;
                    width: 24px;
                    border-radius: 4px;
                }
            `}</style>
        </section>
    );
};

export default Banner;