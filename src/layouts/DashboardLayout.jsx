import { Link, NavLink, Outlet, useNavigate } from "react-router";
import { FiHome, FiUser, FiPlusCircle, FiList, FiUsers, FiFileText, FiDollarSign } from "react-icons/fi";
import { FaTint } from "react-icons/fa";
import ThemeController from "../components/ThemeController";
import logo from "../assets/logo.webp";
// import { useAuth } from "../contexts/AuthContext";
// import useUserRole from "../hooks/useUserRole";

/* ─── Logo (inline — no extra import needed) ─── */
const Logo = () => (
    <Link to="/" className="flex items-center gap-1 px-2 py-1">
        <div className="w-10 h-10  rounded-xl flex items-center justify-center shrink-0">
            <img src={logo} alt="LifeFlow Logo" className="w-full h-full object-contain" />
        </div>
        <span className="font-primary text-lg font-bold text-base-content">
            Life<span className="text-primary">Flow</span>
        </span>
    </Link>
);

/* ─── Nav link helper ─── */
const SideLink = ({ to, icon: Icon, label, end = false }) => (
    <li>
        <NavLink
            to={to}
            end={end}
            className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl font-secondary text-sm font-medium transition-colors duration-150 ${
                    isActive
                        ? "bg-primary/10 text-primary"
                        : "text-base-content/60 hover:bg-base-300 hover:text-base-content"
                }`
            }
        >
            <Icon size={15} className="shrink-0" />
            {label}
        </NavLink>
    </li>
);

/* ─── Section divider label ─── */
const SideSection = ({ label }) => (
    <li className="px-3 pt-4 pb-1">
        <span className="font-secondary text-[10px] font-semibold uppercase tracking-widest text-base-content/30">
            {label}
        </span>
    </li>
);

const DashboardLayout = () => {
    const navigate = useNavigate();

    // TODO: replace with real hooks
    // const { user, handleLogOut } = useAuth();
    // const { role, loading } = useUserRole();
    const user = { displayName: "Shad", email: "shad@example.com", photoURL: null };
    const role = "admin"; // "donor" | "volunteer" | "admin"
    const loading = false;
    const handleLogOut = () => navigate("/login");

    /* ─── Role-based nav items ─── */
    const donorLinks = (
        <>
            <SideSection label="Donor" />
            <SideLink to="/dashboard/my-donation-requests" icon={FiList}       label="My Requests" />
            <SideLink to="/dashboard/create-donation-request" icon={FiPlusCircle} label="Create Request" />
        </>
    );

    const volunteerLinks = (
        <>
            <SideSection label="Volunteer" />
            <SideLink to="/dashboard/all-blood-donation-request" icon={FaTint}  label="All Requests" />
            <SideLink to="/dashboard/content-management"         icon={FiFileText} label="Content Mgmt" />
        </>
    );

    const adminLinks = (
        <>
            <SideSection label="Admin" />
            <SideLink to="/dashboard/all-users"                  icon={FiUsers}    label="All Users" />
            <SideLink to="/dashboard/all-blood-donation-request" icon={FaTint}     label="All Requests" />
            <SideLink to="/dashboard/content-management"         icon={FiFileText} label="Content Mgmt" />
            <SideLink to="/dashboard/funding"                    icon={FiDollarSign} label="Funding" />
        </>
    );

    return (
        <div className="drawer lg:drawer-open min-h-screen">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

            {/* ══════════════════════════════════════
                Main content area
            ══════════════════════════════════════ */}
            <div className="drawer-content flex flex-col bg-base-200">

                {/* ── Top navbar (mobile + desktop) ── */}
                <nav className="navbar bg-base-100 border-b border-base-300 sticky top-0 z-30 min-h-14 px-4 gap-2">
                    {/* Hamburger — mobile only */}
                    <label
                        htmlFor="dashboard-drawer"
                        aria-label="Open sidebar"
                        className="btn btn-ghost btn-sm p-1.5 lg:hidden"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    </label>

                    {/* Page title placeholder — children can override via context if needed */}
                    <Link
                        to="/dashboard"
                        className="font-primary text-base font-bold text-base-content lg:hidden"
                    >
                        Dashboard
                    </Link>

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* Right side */}
                    <div className="flex items-center gap-2">
                        <ThemeController />

                        {/* Avatar dropdown */}
                        <div className="dropdown dropdown-end">
                            <div
                                tabIndex={0}
                                role="button"
                                className="flex items-center gap-2 px-2 py-1.5 border border-base-300 rounded-xl cursor-pointer hover:bg-base-200 transition-colors"
                            >
                                <div className="w-7 h-7 rounded-full overflow-hidden flex items-center justify-center bg-primary/10 shrink-0">
                                    {user?.photoURL ? (
                                        <img src={user.photoURL} alt={user.displayName} className="w-full h-full object-cover" />
                                    ) : (
                                        <span className="font-secondary text-xs font-bold text-primary">
                                            {user?.displayName?.charAt(0).toUpperCase()}
                                        </span>
                                    )}
                                </div>
                                <span className="hidden md:block font-secondary text-xs font-medium text-base-content max-w-24 truncate">
                                    {user?.displayName}
                                </span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-base-content/40">
                                    <path d="M 6 9 L 12 15 L 18 9" />
                                </svg>
                            </div>

                            <ul
                                tabIndex={0}
                                className="dropdown-content z-50 mt-2 p-2 bg-base-100 border border-base-300 rounded-xl shadow-lg w-48"
                            >
                                <li className="px-3 py-2 border-b border-base-300 mb-1 cursor-default">
                                    <p className="font-primary text-xs font-semibold text-base-content truncate">{user?.displayName}</p>
                                    <p className="font-secondary text-[10px] text-base-content/50 truncate mt-0.5">{user?.email}</p>
                                    <span className="inline-block mt-1 font-secondary text-[9px] font-semibold uppercase tracking-wide bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                                        {role}
                                    </span>
                                </li>
                                <li>
                                    <Link to="/dashboard/profile" className="flex items-center gap-2 px-3 py-2 font-secondary text-sm text-base-content rounded-lg hover:bg-base-200 transition-colors">
                                        <FiUser size={13} /> Profile
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        onClick={handleLogOut}
                                        className="flex items-center gap-2 w-full px-3 py-2 font-secondary text-sm text-primary rounded-lg hover:bg-primary/10 transition-colors"
                                    >
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M 9 21 H 5 a 2 2 0 0 1 -2 -2 V 5 a 2 2 0 0 1 2 -2 h 4" />
                                            <polyline points="16 17 21 12 16 7" />
                                            <line x1="21" y1="12" x2="9" y2="12" />
                                        </svg>
                                        Log out
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* ── Page content ── */}
                <main className="flex-1 p-4 sm:p-6">
                    <Outlet />
                </main>
            </div>

            {/* ══════════════════════════════════════
                Sidebar drawer
            ══════════════════════════════════════ */}
            <div className="drawer-side z-40">
                <label htmlFor="dashboard-drawer" aria-label="Close sidebar" className="drawer-overlay" />

                <aside className="bg-base-100 border-r border-base-300 min-h-full w-60 flex flex-col">

                    {/* Sidebar logo */}
                    <div className="p-2.5 border-b border-base-300">
                        <Logo />
                    </div>

                    {/* Nav links */}
                    <nav className="flex-1 overflow-y-auto p-2.5">
                        <ul id="dashboard-links" className="flex flex-col gap-0.5">

                            {/* Common — all roles */}
                            <SideSection label="General" />
                            <SideLink to="/dashboard"         icon={FiHome}  label="Home"    end />
                            <SideLink to="/dashboard/profile" icon={FiUser}  label="Profile" />

                            {/* Role-specific */}
                            {!loading && role === "donor"     && donorLinks}
                            {!loading && role === "volunteer" && volunteerLinks}
                            {!loading && role === "admin"     && (
                                <>
                                    {volunteerLinks}
                                    {adminLinks}
                                </>
                            )}

                        </ul>
                    </nav>

                    {/* Sidebar footer */}
                    <div className="p-2 border-t border-base-300">
                        <Link
                            to="/"
                            className="flex items-center gap-2 font-secondary text-xs text-base-content/40 hover:text-primary transition-colors"
                        >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="19" y1="12" x2="5" y2="12" />
                                <polyline points="12 5 5 12 12 19" />
                            </svg>
                            Back to main site
                        </Link>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default DashboardLayout;