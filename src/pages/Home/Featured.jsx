const stats = [
    { value: "1,248", label: "Registered Donors", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" },
    { value: "342", label: "Lives Saved", icon: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" },
    { value: "64", label: "Districts Covered", icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" },
    { value: "৳84,500", label: "Total Funding", icon: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" },
];

const steps = [
    {
        step: "01",
        title: "Register as Donor",
        desc: "Create your free account with your blood group, district, and upazila. Takes less than 2 minutes.",
        icon: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M8.5 7a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0zM20 8v6M23 11h-6",
    },
    {
        step: "02",
        title: "Find a Request",
        desc: "Browse urgent donation requests near you by blood group and location across all 64 districts.",
        icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
    },
    {
        step: "03",
        title: "Donate & Save a Life",
        desc: "Head to the hospital, donate, and mark the request as fulfilled. One donation, up to 3 lives saved.",
        icon: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
    },
];

const bloodGroups = [
    { type: "A+", urgency: "high", available: 12 },
    { type: "A-", urgency: "critical", available: 3 },
    { type: "B+", urgency: "medium", available: 18 },
    { type: "B-", urgency: "critical", available: 2 },
    { type: "AB+", urgency: "low", available: 24 },
    { type: "AB-", urgency: "high", available: 7 },
    { type: "O+", urgency: "medium", available: 15 },
    { type: "O-", urgency: "critical", available: 1 },
];

const urgencyConfig = {
    critical: { label: "Critical", class: "bg-error/10 text-error border-error/30" },
    high:     { label: "High",     class: "bg-warning/10 text-warning border-warning/30" },
    medium:   { label: "Needed",   class: "bg-info/10 text-info border-info/30" },
    low:      { label: "Stable",   class: "bg-success/10 text-success border-success/30" },
};

const Featured = () => {
    return (
        <section className="bg-base-100">

            {/* ═══════════════════════════════════
                1. STATS ROW
            ═══════════════════════════════════ */}
            <div className="bg-primary">
                <div className="w-11/12 max-w-7xl mx-auto py-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((s, i) => (
                        <div
                            key={s.label}
                            className="flex flex-col items-center text-center gap-2"
                            data-aos="fade-up"
                            data-aos-delay={i * 80}
                        >
                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-1">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    {s.icon.split(" M").map((seg, j) => (
                                        <path key={j} d={j === 0 ? seg : "M" + seg} />
                                    ))}
                                </svg>
                            </div>
                            <span className="font-primary text-2xl sm:text-3xl font-bold text-white">{s.value}</span>
                            <span className="font-secondary text-xs text-white/70 uppercase tracking-wide">{s.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ═══════════════════════════════════
                2. HOW IT WORKS
            ═══════════════════════════════════ */}
            <div className="w-11/12 max-w-7xl mx-auto py-16 sm:py-20">

                {/* Section header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <span className="inline-block font-secondary text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                        How It Works
                    </span>
                    <h2 className="font-primary text-2xl sm:text-3xl font-bold text-base-content">
                        Donate in 3 simple steps
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                    {/* Connector line — desktop only */}
                    <div className="hidden md:block absolute top-8 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-base-300 z-0" />

                    {steps.map((s, i) => (
                        <div
                            key={s.step}
                            className="relative z-10 bg-base-200 rounded-2xl p-6 flex flex-col gap-4 border border-base-300 hover:border-primary/30 transition-colors duration-300"
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        {s.icon.split(" M").map((seg, j) => (
                                            <path key={j} d={j === 0 ? seg : "M" + seg} />
                                        ))}
                                    </svg>
                                </div>
                                <span className="font-primary text-3xl font-bold text-base-300">{s.step}</span>
                            </div>
                            <div>
                                <h3 className="font-primary text-base font-bold text-base-content mb-1">{s.title}</h3>
                                <p className="font-secondary text-sm text-base-content/60 leading-relaxed">{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ═══════════════════════════════════
                3. BLOOD AVAILABILITY BOARD
            ═══════════════════════════════════ */}
            <div className="bg-base-200 py-16 sm:py-20">
                <div className="w-11/12 max-w-7xl mx-auto">

                    <div className="text-center mb-10" data-aos="fade-up">
                        <span className="inline-block font-secondary text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                            Live Availability
                        </span>
                        <h2 className="font-primary text-2xl sm:text-3xl font-bold text-base-content">
                            Blood group availability
                        </h2>
                        <p className="font-secondary text-sm text-base-content/50 mt-2">
                            Current donor availability across Bangladesh — updated in real time
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                        {bloodGroups.map((bg, i) => {
                            const cfg = urgencyConfig[bg.urgency];
                            return (
                                <div
                                    key={bg.type}
                                    className="bg-base-100 rounded-2xl p-5 border border-base-300 flex flex-col items-center gap-3 hover:shadow-md transition-shadow duration-300"
                                    data-aos="zoom-in"
                                    data-aos-delay={i * 60}
                                >
                                    <span className="font-primary text-3xl font-bold text-base-content">{bg.type}</span>
                                    <div className="flex flex-col items-center gap-1">
                                        <span className="font-secondary text-xs text-base-content/40">Available donors</span>
                                        <span className="font-primary text-xl font-bold text-primary">{bg.available}</span>
                                    </div>
                                    <span className={`font-secondary text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full border ${cfg.class}`}>
                                        {cfg.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* ═══════════════════════════════════
                4. TRUST BAND
            ═══════════════════════════════════ */}
            <div className="w-11/12 max-w-7xl mx-auto py-14">
                <div
                    className="rounded-2xl bg-base-200 border border-base-300 p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-8"
                    data-aos="fade-up"
                >
                    <div className="text-center sm:text-left max-w-lg">
                        <h2 className="font-primary text-xl sm:text-2xl font-bold text-base-content mb-2">
                            Why donate with LifeFlow?
                        </h2>
                        <p className="font-secondary text-sm text-base-content/55 leading-relaxed">
                            100% free, no middlemen. We connect donors directly with patients — quickly, safely, and transparently across all 64 districts of Bangladesh.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                        {[
                            { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Verified donors" },
                            { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", label: "Safe & private" },
                            { icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z", label: "Instant matching" },
                        ].map((f, i) => (
                            <div
                                key={f.label}
                                className="flex items-center gap-2 bg-base-100 border border-base-300 rounded-xl px-4 py-3"
                                data-aos="fade-up"
                                data-aos-delay={i * 80}
                            >
                                <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d={f.icon} />
                                    </svg>
                                </div>
                                <span className="font-secondary text-sm font-medium text-base-content whitespace-nowrap">{f.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Featured;