import {
    FaTint,
    FaFacebookF,
    FaTwitter,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
} from "react-icons/fa";
import { Link, NavLink } from "react-router";

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
        <footer className="bg-secondary text-secondary-content font-secondary">

            {/* NEWSLETTER */}
            <div className="bg-base-200 text-base-content py-8 px-4" data-aos="fade-up">
                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <h2 className="text-xl sm:text-2xl font-semibold">
                        Subscribe to our Newsletter
                    </h2>
                    <p className="text-sm text-neutral">
                        Get updates about donation campaigns and community impact.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full sm:w-80"
                        />
                        <button className="btn btn-primary">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* MAIN GRID */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                {/* BRAND */}
                <div data-aos="fade-up" className="text-center md:text-left">
                    <div className="flex justify-center md:justify-start items-center gap-2 text-xl font-bold mb-3">
                        <span className="bg-primary text-white p-2 rounded-lg">
                            <FaTint />
                        </span>
                        Life<span className="text-primary">Flow</span>
                    </div>
                    <p className="text-sm text-neutral-content max-w-xs mx-auto md:mx-0">
                        Connecting blood donors with those in need. Every donation saves up
                        to three lives.
                    </p>

                    <div className="flex justify-center md:justify-start gap-3 mt-4">
                        <a className="btn btn-sm btn-circle bg-base-300 border-none">
                            <FaFacebookF />
                        </a>
                        <a className="btn btn-sm btn-circle bg-base-300 border-none">
                            <FaTwitter />
                        </a>
                    </div>
                </div>

                {/* QUICK LINKS */}
                <div data-aos="fade-up">
                    <h3 className="font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">{quickLinks}</ul>
                </div>

                {/* ACCOUNT */}
                <div data-aos="fade-up">
                    <h3 className="font-semibold mb-3">Account</h3>
                    <ul className="space-y-2 text-sm">
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
                    <ul className="space-y-3 text-sm">
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
            <div className="max-w-7xl mx-auto border-t border-base-300 py-4 text-sm px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left" data-aos="fade-up">
                    <p>© 2026 LifeFlow. All rights reserved.</p>
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