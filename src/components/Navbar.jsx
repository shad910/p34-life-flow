import { Link, NavLink } from "react-router";
import ThemeController from "./ThemeController";
import logo from "../assets/logo.png";
// import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
    // const { user, handleLogOut } = useAuth();
    const user = {
        displayName: "Shad",
        email: "shad@example.com",
        role: "donor",
        photoURL: null,
    };
    const handleLogOut = () => { };

    const navLinks = (
        <>
            <li>
                <NavLink to="/" end>Home</NavLink>
            </li>
            <li>
                <NavLink to="/donation-requests">Donation Requests</NavLink>
            </li>
            <li>
                <NavLink to="/blogs">Blogs</NavLink>
            </li>
            {user && (
                <li>
                    <NavLink to="/funding">Funding</NavLink>
                </li>
            )}
        </>
    );

    return (
        <nav className="navbar bg-base-100 border-b border-base-300 sticky top-0 z-50 px-4 lg:px-8 min-h-16">

            {/* ══════════════════════════════
                Left Side — Logo only
            ══════════════════════════════ */}
            <section className="navbar-start">
                <Link to="/" className="flex items-center gap-1">
                    <div className="w-10 h-10  rounded-xl flex items-center justify-center shrink-0">
                       <img src={logo} alt="LifeFlow Logo" />
                    </div>
                    <span className="font-primary text-lg font-bold text-base-content">
                        Life<span className="text-primary">Flow</span>
                    </span>
                </Link>
            </section>

            {/* ══════════════════════════════
                Center Side — Desktop nav links
            ══════════════════════════════ */}
            <section className="navbar-center hidden lg:flex">
                <ul
                    id="nav-links"
                    className="menu menu-horizontal gap-2 font-secondary text-sm font-medium p-0"
                >
                    {navLinks}
                </ul>
            </section>

            {/* ══════════════════════════════
                Right Side — Theme + Auth + Hamburger
            ══════════════════════════════ */}
            <section className="navbar-end gap-2">

                {/* Theme toggle — always visible */}
                <ThemeController />

                {/* ── Avatar dropdown (sm and up) ── */}
                {user ? (
                    <div className="dropdown dropdown-end hidden sm:block">
                        <div
                            tabIndex={0}
                            role="button"
                            className="flex items-center gap-2 px-2.5 py-1.5 border border-base-300 rounded-xl cursor-pointer hover:bg-base-200 transition-colors"
                        >
                            <div className="avatar">
                                <div className="w-7 h-7 rounded-full overflow-hidden">
                                    {user.photoURL ? (
                                        <img
                                            src={user.photoURL}
                                            alt={user.displayName}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="bg-primary/10 text-primary text-xs font-bold flex items-center justify-center w-full h-full font-secondary">
                                            {user.displayName?.charAt(0).toUpperCase()}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <span className="hidden md:block font-secondary text-sm font-medium text-base-content max-w-28 truncate">
                                {user.displayName}
                            </span>
                            <svg
                                width="14" height="14" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2"
                                className="text-base-content/40"
                            >
                                <path d="M 6 9 L 12 15 L 18 9" />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="dropdown-content z-50 mt-2 p-2 bg-base-100 border border-base-300 rounded-xl shadow-lg w-52"
                        >
                            {/* User info — non-clickable header */}
                            <li className="px-3 py-2.5 border-b border-base-300 mb-1 cursor-default">
                                <p className="font-primary font-semibold text-sm text-base-content truncate">
                                    {user.displayName}
                                </p>
                                <p className="font-secondary text-xs text-base-content/50 truncate mt-0.5">
                                    {user.email}
                                </p>
                                <span className="inline-block mt-1.5 font-secondary text-[10px] font-semibold uppercase tracking-wide bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                                    {user.role}
                                </span>
                            </li>
                            <li>
                                <Link
                                    to="/dashboard"
                                    className="flex items-center gap-2 font-secondary text-sm"
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="3" width="7" height="7" />
                                        <rect x="14" y="3" width="7" height="7" />
                                        <rect x="14" y="14" width="7" height="7" />
                                        <rect x="3" y="14" width="7" height="7" />
                                    </svg>
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={handleLogOut}
                                    className="flex items-center gap-2 w-full font-secondary text-sm text-primary hover:bg-primary/10"
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M 9 21 H 5 a 2 2 0 0 1 -2 -2 V 5 a 2 2 0 0 1 2 -2 h 4 M 16 17 l 5 -5 -5 -5 M 21 12 H 9" />
                                    </svg>
                                    Log out
                                </button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    /* Auth buttons (sm and up) */
                    <div className="hidden sm:flex items-center gap-2">
                        <Link
                            to="/login"
                            className="btn btn-sm btn-ghost border border-base-300 font-secondary font-medium"
                        >
                            Log in
                        </Link>
                        <Link
                            to="/register"
                            className="btn btn-sm btn-primary text-primary-content font-secondary font-medium"
                        >
                            Register
                        </Link>
                    </div>
                )}

                {/* ══════════════════════════════
                    Hamburger — far right, mobile only (below lg)
                    - Nav links shown always in dropdown
                    - Auth buttons shown only on xs (below sm)
                      because sm+ already shows avatar/auth above
                ══════════════════════════════ */}
                <div className="dropdown dropdown-end lg:hidden">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-sm p-1.5"
                        aria-label="Open menu"
                    >
                        <svg
                            width="20" height="20" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth="2"
                        >
                            <path d="M 3 12 H 21 M 3 6 H 21 M 3 18 H 21" />
                        </svg>
                    </div>

                    {/* Dropdown panel — near full width on small screens */}
                    <div
                        tabIndex={0}
                        className="dropdown-content bg-base-100 border border-base-300 rounded-box mt-2 shadow-lg p-3 z-50 w-[calc(100vw-2rem)] max-w-xs"
                    >
                        {/* Nav links — full width with border per CSS */}
                        <ul
                            id="sm-nav-links"
                            className="menu menu-sm p-0 mb-1 w-full"
                        >
                            {navLinks}
                        </ul>

                        {/* Auth section — only on xs screens (avatar handles sm+) */}
                        <div className="sm:hidden mt-2 flex flex-col gap-2 w-full">
                            {user ? (
                                <>
                                    {/* ── Profile card ── */}
                                    <div className="flex items-center gap-2.5 px-2.5 mb-1 border-y border-base-300 py-3">
                                        <div className="shrink-0">
                                            {user.photoURL ? (
                                                <div className="avatar">
                                                    <div className="w-12 h-12 rounded-full">
                                                        <img src={user.photoURL} alt={user.displayName} className="object-cover" />
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-secondary text-sm font-bold text-primary">
                                                    {user.displayName?.charAt(0).toUpperCase()}
                                                </div>
                                            )}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="font-primary text-sm font-semibold text-base-content truncate leading-tight">
                                                {user.displayName}
                                            </p>
                                            <p className="font-secondary text-xs text-base-content/50 truncate mt-0.5">
                                                {user.email}
                                            </p>
                                            <span className="inline-block mt-1 font-secondary text-[8px] font-semibold uppercase tracking-wide bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                                                {user.role}
                                            </span>
                                        </div>
                                    </div>

                                    {/* ── Actions ── */}
                                    <Link
                                        to="/dashboard"
                                        className="btn btn-ghost btn-sm justify-start font-secondary font-medium w-full"
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="3" y="3" width="7" height="7" />
                                            <rect x="14" y="3" width="7" height="7" />
                                            <rect x="14" y="14" width="7" height="7" />
                                            <rect x="3" y="14" width="7" height="7" />
                                        </svg>
                                        Dashboard
                                    </Link>
                                    <button
                                        onClick={handleLogOut}
                                        className="btn btn-ghost btn-sm justify-start text-primary font-secondary font-medium w-full"
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M 9 21 H 5 a 2 2 0 0 1 -2 -2 V 5 a 2 2 0 0 1 2 -2 h 4 M 16 17 l 5 -5 -5 -5 M 21 12 H 9" />
                                        </svg>
                                        Log out
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        className="btn btn-sm btn-ghost border border-base-300 font-secondary font-medium w-full"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="btn btn-sm btn-primary text-primary-content font-secondary font-medium w-full"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>

            </section>
        </nav>
    );
};

export default Navbar;