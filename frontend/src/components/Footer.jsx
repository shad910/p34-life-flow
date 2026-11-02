import {
    FaTint,
    FaFacebookF,
    FaTwitter,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
} from "react-icons/fa";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.webp";

const Footer = () => {
    const user = {
        name: "shad",
        email: "shad@example.com"
    };
    // const user = null;

    const quickLinks = <>
        <li><NavLink to="/" className="hover:text-primary">Home</NavLink></li>
        <li><NavLink to="/donation-requests" className="hover:text-primary">Donation Requests</NavLink></li>
        <li><NavLink to="/search-donors" className="hover:text-primary">Search Donors</NavLink></li>
        <li><NavLink to="/blogs" className="hover:text-primary">Blog</NavLink></li>
        <li><NavLink to="/funding" className="hover:text-primary">Funding</NavLink></li>
    </>;

    return (
        <footer style={{ backgroundColor: "#1E293B", color: "#F1F5F9" }} className="font-secondary">

            {/* MAIN GRID */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                {/* BRAND */}
                <div data-aos="fade-up" className="text-center md:text-left">
                    <div className="flex justify-center md:justify-start items-center gap-1 text-xl font-bold mb-3">
                        <div className="w-10 h-10  rounded-xl flex items-center justify-center shrink-0">
                            <img src={logo} alt="LifeFlow Logo" />
                        </div>
                        <span>
                            Life<span className="text-primary">Flow</span>
                        </span>
                    </div>
                    <p className="text-sm max-w-xs mx-auto md:mx-0" style={{ color: "#94A3B8" }}>
                        Connecting blood donors with those in need. Every donation saves up
                        to three lives.
                    </p>

                    <div className="flex justify-center md:justify-start gap-3 mt-4">
                        <a
                            href="https://www.facebook.com/shadshs91"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-circle bg-base-300 border-none">
                            <FaFacebookF />
                        </a>
                        <a
                            href="https://x.com/shadshs91"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-circle bg-base-300 border-none">
                            <FaTwitter />
                        </a>
                    </div>
                </div>

                {/* QUICK LINKS */}
                <div data-aos="fade-up">
                    <h3 className="font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm" style={{ color: "#94A3B8" }}>{quickLinks}</ul>
                </div>

                {/* ACCOUNT */}
                <div data-aos="fade-up">
                    <h3 className="font-semibold mb-3">Account</h3>
                    <ul className="space-y-2 text-sm" style={{ color: "#94A3B8" }}>
                        {!user ? (
                            <>
                                <li><Link className="hover:text-primary">Register</Link></li>
                                <li><Link className="hover:text-primary">Log in</Link></li>
                            </>
                        ) : (
                            <>
                                <li><Link className="hover:text-primary">Dashboard</Link></li>
                                <li><Link className="hover:text-primary">Profile</Link></li>
                            </>
                        )}
                    </ul>
                </div>

                {/* CONTACT */}
                <div data-aos="fade-up">
                    <h3 className="font-semibold mb-3">Contact</h3>
                    <ul className="space-y-3 text-sm" style={{ color: "#94A3B8" }}>
                        <li className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-primary" />
                            Dhaka, Bangladesh
                        </li>
                        <li className="flex items-center gap-2">
                            <FaPhoneAlt className="text-primary" />
                            +880 1700-000000
                        </li>
                        <li className="flex items-center gap-2">
                            <FaEnvelope className="text-primary" />
                            hello@lifeflow.com
                        </li>
                    </ul>
                </div>
            </div>

            {/* BOTTOM */}
            <div className="max-w-7xl mx-auto py-4 text-sm px-4" style={{ borderTop: "1px solid #334155" }}>
                <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left" style={{ color: "#64748B" }}>
                    <p>&copy;2026 LifeFlow. All rights reserved.</p>
                    <p className="text-success">● All systems operational</p>
                    <div className="flex gap-3">
                        <p className="hover:text-primary cursor-pointer">Privacy Policy</p>
                        <p className="hover:text-primary cursor-pointer">Terms of Service</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;