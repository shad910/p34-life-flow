import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const contactInfo = [
    {
        icon: <FaMapMarkerAlt className="text-primary" size={16} />,
        label: "Address",
        value: "Dhaka, Bangladesh",
    },
    {
        icon: <FaPhoneAlt className="text-primary" size={14} />,
        label: "Phone",
        value: "+880 1700-000000",
        href: "tel:+8801700000000",
    },
    {
        icon: <FaEnvelope className="text-primary" size={14} />,
        label: "Email",
        value: "hello@lifeflow.com",
        href: "mailto:hello@lifeflow.com",
    },
    {
        icon: <FaClock className="text-primary" size={14} />,
        label: "Support Hours",
        value: "Sat – Thu, 9 AM – 6 PM",
    },
];

const Contacts = () => {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: wire to your backend / EmailJS / etc.
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        setForm({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <section className="bg-base-200 py-16 sm:py-20">
            <div className="w-11/12 max-w-7xl mx-auto">

                {/* ── Section header ── */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <span className="inline-block font-secondary text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                        Get in Touch
                    </span>
                    <h2 className="font-primary text-2xl sm:text-3xl font-bold text-base-content">
                        Contact Us
                    </h2>
                    <p className="font-secondary text-sm text-base-content/50 mt-2 max-w-md mx-auto">
                        Have a question about blood donation or the platform? We&apos;re here to help.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

                    {/* ── Left: contact info ── */}
                    <div
                        className="lg:col-span-2 bg-primary rounded-2xl p-8 flex flex-col justify-between gap-8"
                        data-aos="fade-right"
                    >
                        <div>
                            <h3 className="font-primary text-xl font-bold text-white mb-2">
                                Contact Information
                            </h3>
                            <p className="font-secondary text-sm text-white/60 leading-relaxed">
                                Reach out to us directly or fill the form and we&apos;ll get back to you within 24 hours.
                            </p>
                        </div>

                        <ul className="flex flex-col gap-5">
                            {contactInfo.map((item) => (
                                <li key={item.label} className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                                        {/* Re-colour icon to white inside red bg */}
                                        <span className="[&>*]:text-white">{item.icon}</span>
                                    </div>
                                    <div>
                                        <p className="font-secondary text-[10px] text-white/40 uppercase tracking-widest mb-0.5">
                                            {item.label}
                                        </p>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="font-secondary text-sm text-white hover:text-white/80 transition-colors"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="font-secondary text-sm text-white">{item.value}</p>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {/* Decorative blood drop */}
                        <div className="flex justify-end opacity-20 pointer-events-none select-none">
                            <svg width="80" height="100" viewBox="0 0 80 100" fill="white">
                                <path d="M 40 5 C 40 5 5 45 5 65 C 5 83.5 21 97 40 97 C 59 97 75 83.5 75 65 C 75 45 40 5 40 5 Z" />
                            </svg>
                        </div>
                    </div>

                    {/* ── Right: contact form ── */}
                    <div
                        className="lg:col-span-3 bg-base-100 rounded-2xl p-8 border border-base-300"
                        data-aos="fade-left"
                    >
                        {sent ? (
                            <div className="h-full flex flex-col items-center justify-center gap-4 py-10 text-center">
                                <div className="w-14 h-14 bg-success/10 rounded-full flex items-center justify-center">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-primary text-lg font-bold text-base-content mb-1">Message Sent!</h3>
                                    <p className="font-secondary text-sm text-base-content/50">We&apos;ll get back to you within 24 hours.</p>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                                {/* Name + Email row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="font-secondary text-xs font-semibold text-base-content/60 uppercase tracking-wide">
                                            Full Name <span className="text-primary">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Rafiq Islam"
                                            className="input input-bordered w-full font-secondary text-sm bg-base-200 focus:border-primary focus:outline-none"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="font-secondary text-xs font-semibold text-base-content/60 uppercase tracking-wide">
                                            Email Address <span className="text-primary">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="rafiq@example.com"
                                            className="input input-bordered w-full font-secondary text-sm bg-base-200 focus:border-primary focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Subject */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-secondary text-xs font-semibold text-base-content/60 uppercase tracking-wide">
                                        Subject <span className="text-primary">*</span>
                                    </label>
                                    <select
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        required
                                        className="select select-bordered w-full font-secondary text-sm bg-base-200 focus:border-primary focus:outline-none"
                                    >
                                        <option value="" disabled>Select a topic…</option>
                                        <option>I want to become a donor</option>
                                        <option>I need blood urgently</option>
                                        <option>Question about my account</option>
                                        <option>Report an issue</option>
                                        <option>Partnership enquiry</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-secondary text-xs font-semibold text-base-content/60 uppercase tracking-wide">
                                        Message <span className="text-primary">*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Tell us how we can help…"
                                        className="textarea textarea-bordered w-full font-secondary text-sm bg-base-200 focus:border-primary focus:outline-none resize-none"
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="btn btn-primary text-primary-content font-secondary font-semibold w-full sm:w-auto sm:self-end px-8 rounded-xl"
                                >
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="22" y1="2" x2="11" y2="13" />
                                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                    </svg>
                                    Send Message
                                </button>

                            </form>
                        )}
                    </div>
                </div>

                {/* ── Emergency band ── */}
                <div
                    className="mt-6 rounded-2xl bg-error/5 border border-error/20 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3"
                    data-aos="fade-up"
                >
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-error animate-pulse shrink-0" />
                        <p className="font-secondary text-sm text-base-content/70">
                            <span className="font-semibold text-error">Blood Emergency?</span> Call us directly for urgent requests — we respond within minutes.
                        </p>
                    </div>
                    <a
                        href="tel:+8801700000000"
                        className="btn btn-sm border border-error/30 text-error bg-error/5 hover:bg-error/10 font-secondary font-semibold shrink-0 rounded-xl"
                    >
                        <FaPhoneAlt size={12} />
                        +880 1700-000000
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Contacts;