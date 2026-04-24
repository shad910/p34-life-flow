import { Link, useNavigate } from "react-router";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaTint, FaSearch } from "react-icons/fa";

// ── Replace with real TanStack Query fetch from your API ──────────────────
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// Placeholder data — remove once backend is ready
const MOCK_REQUESTS = [
    { _id: "1",  recipientName: "Rafiq Islam",    district: "Dhaka",       upazila: "Mirpur",      bloodGroup: "O+",  date: "2026-05-02", time: "10:00 AM", status: "pending" },
    { _id: "2",  recipientName: "Fatema Khatun",  district: "Chittagong",  upazila: "Patenga",     bloodGroup: "A-",  date: "2026-05-03", time: "08:30 AM", status: "pending" },
    { _id: "3",  recipientName: "Karim Uddin",    district: "Sylhet",      upazila: "Sylhet Sadar",bloodGroup: "B+",  date: "2026-05-04", time: "02:00 PM", status: "pending" },
    { _id: "4",  recipientName: "Nusrat Jahan",   district: "Rajshahi",    upazila: "Boalia",      bloodGroup: "AB-", date: "2026-05-04", time: "11:00 AM", status: "pending" },
    { _id: "5",  recipientName: "Jahangir Alam",  district: "Khulna",      upazila: "Khalishpur",  bloodGroup: "O-",  date: "2026-05-05", time: "09:00 AM", status: "pending" },
    { _id: "6",  recipientName: "Sumaiya Begum",  district: "Mymensingh",  upazila: "Mymensingh S.",bloodGroup: "A+", date: "2026-05-06", time: "03:30 PM", status: "pending" },
    { _id: "7",  recipientName: "Tariq Hasan",    district: "Barisal",     upazila: "Barisal Sadar",bloodGroup: "B-", date: "2026-05-06", time: "12:00 PM", status: "pending" },
    { _id: "8",  recipientName: "Roksana Akter",  district: "Comilla",     upazila: "Kotwali",     bloodGroup: "AB+", date: "2026-05-07", time: "07:30 AM", status: "pending" },
    { _id: "9",  recipientName: "Habib Rahman",   district: "Jessore",     upazila: "Jessore Sadar",bloodGroup: "O+", date: "2026-05-08", time: "10:30 AM", status: "pending" },
];

// Blood group badge colours
const bgColour = {
    "A+":  "bg-red-50    text-red-600    border-red-200    dark:bg-red-950  dark:text-red-400  dark:border-red-800",
    "A-":  "bg-rose-50   text-rose-600   border-rose-200   dark:bg-rose-950 dark:text-rose-400 dark:border-rose-800",
    "B+":  "bg-orange-50 text-orange-600 border-orange-200 dark:bg-orange-950 dark:text-orange-400 dark:border-orange-800",
    "B-":  "bg-amber-50  text-amber-600  border-amber-200  dark:bg-amber-950 dark:text-amber-400 dark:border-amber-800",
    "AB+": "bg-purple-50 text-purple-600 border-purple-200 dark:bg-purple-950 dark:text-purple-400 dark:border-purple-800",
    "AB-": "bg-violet-50 text-violet-600 border-violet-200 dark:bg-violet-950 dark:text-violet-400 dark:border-violet-800",
    "O+":  "bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-400 dark:border-emerald-800",
    "O-":  "bg-teal-50   text-teal-600   border-teal-200   dark:bg-teal-950 dark:text-teal-400 dark:border-teal-800",
};

// Format date nicely
const fmtDate = (d) =>
    new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

/* ─────────────────────────────────────────────
   Single Request Card
───────────────────────────────────────────── */
const RequestCard = ({ req, index, user, onViewClick }) => (
    <div
        className="bg-base-100 border border-base-300 rounded-2xl p-5 flex flex-col gap-4 hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
        data-aos="fade-up"
        data-aos-delay={Math.min(index * 60, 300)}
    >
        {/* Top row: blood group badge + pending pill */}
        <div className="flex items-center justify-between">
            <span className={`font-primary text-sm font-bold px-3 py-1 rounded-lg border ${bgColour[req.bloodGroup] ?? "bg-base-200 text-base-content border-base-300"}`}>
                {req.bloodGroup}
            </span>
            <span className="font-secondary text-[10px] font-semibold uppercase tracking-widest text-warning bg-warning/10 border border-warning/30 px-2.5 py-1 rounded-full">
                Pending
            </span>
        </div>

        {/* Recipient name */}
        <div>
            <p className="font-secondary text-[10px] text-base-content/40 uppercase tracking-wide mb-0.5">Recipient</p>
            <h3 className="font-primary text-base font-bold text-base-content leading-tight group-hover:text-primary transition-colors duration-200">
                {req.recipientName}
            </h3>
        </div>

        {/* Info grid */}
        <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2">
                <FaMapMarkerAlt size={11} className="text-primary shrink-0" />
                <span className="font-secondary text-xs text-base-content/60 truncate">
                    {req.upazila}, {req.district}
                </span>
            </li>
            <li className="flex items-center gap-2">
                <FaCalendarAlt size={11} className="text-primary shrink-0" />
                <span className="font-secondary text-xs text-base-content/60">{fmtDate(req.date)}</span>
            </li>
            <li className="flex items-center gap-2">
                <FaClock size={11} className="text-primary shrink-0" />
                <span className="font-secondary text-xs text-base-content/60">{req.time}</span>
            </li>
        </ul>

        {/* Divider */}
        <div className="border-t border-base-300" />

        {/* View button */}
        {user ? (
            <Link
                to={`/donation-requests/${req._id}`}
                className="btn btn-sm btn-primary text-primary-content font-secondary font-semibold w-full rounded-xl"
            >
                View Details
            </Link>
        ) : (
            <button
                onClick={() => onViewClick()}
                className="btn btn-sm btn-primary text-primary-content font-secondary font-semibold w-full rounded-xl"
            >
                View Details
            </button>
        )}
    </div>
);

/* ─────────────────────────────────────────────
   Main Page Component
───────────────────────────────────────────── */
const DonationRequests = () => {
    const navigate = useNavigate();

    // TODO: replace mock with real hook ─────────────────────────────────────
    // const { user } = useAuth();
    // const { data: requests = [], isLoading } = useQuery({
    //     queryKey: ["donationRequests"],
    //     queryFn: () => axios.get("/api/donation-requests?status=pending").then(r => r.data),
    // });
    const user = null;                  // swap with real auth
    const requests = MOCK_REQUESTS;     // swap with real data
    const isLoading = false;            // swap with real loading state
    // ─────────────────────────────────────────────────────────────────────────

    const handleViewClick = () => navigate("/login");

    return (
        <div className="min-h-screen bg-base-200">

            {/* ═══════════════════════════════════
                PAGE HEADER
            ═══════════════════════════════════ */}
            <div className="bg-base-100 border-b border-base-300">
                <div className="w-11/12 max-w-7xl mx-auto py-10 sm:py-14">
                    <div data-aos="fade-up">
                        <span className="inline-block font-secondary text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                            Open Requests
                        </span>
                        <h1 className="font-primary text-2xl sm:text-3xl lg:text-4xl font-bold text-base-content mb-2">
                            Blood Donation Requests
                        </h1>
                        <p className="font-secondary text-sm text-base-content/50 max-w-lg">
                            These people urgently need blood. If your blood group matches, please step forward — your donation can save a life today.
                        </p>
                    </div>

                    {/* Quick stats */}
                    <div className="flex flex-wrap gap-3 mt-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="flex items-center gap-2 bg-base-200 border border-base-300 rounded-xl px-4 py-2">
                            <span className="w-2 h-2 rounded-full bg-warning animate-pulse" />
                            <span className="font-secondary text-sm font-medium text-base-content">
                                {requests.length} pending request{requests.length !== 1 ? "s" : ""}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 bg-base-200 border border-base-300 rounded-xl px-4 py-2">
                            <FaTint size={11} className="text-primary" />
                            <span className="font-secondary text-sm font-medium text-base-content">
                                All blood groups needed
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ═══════════════════════════════════
                CARDS GRID
            ═══════════════════════════════════ */}
            <div className="w-11/12 max-w-7xl mx-auto py-10 sm:py-14">

                {/* Loading skeleton */}
                {isLoading && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="bg-base-100 border border-base-300 rounded-2xl p-5 flex flex-col gap-4 animate-pulse">
                                <div className="flex justify-between">
                                    <div className="h-7 w-12 bg-base-300 rounded-lg" />
                                    <div className="h-6 w-16 bg-base-300 rounded-full" />
                                </div>
                                <div className="h-4 w-2/3 bg-base-300 rounded" />
                                <div className="flex flex-col gap-2">
                                    <div className="h-3 w-3/4 bg-base-300 rounded" />
                                    <div className="h-3 w-1/2 bg-base-300 rounded" />
                                    <div className="h-3 w-1/3 bg-base-300 rounded" />
                                </div>
                                <div className="h-8 bg-base-300 rounded-xl" />
                            </div>
                        ))}
                    </div>
                )}

                {/* Empty state */}
                {!isLoading && requests.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-24 gap-4 text-center" data-aos="fade-up">
                        <div className="w-16 h-16 bg-base-300 rounded-2xl flex items-center justify-center">
                            <FaSearch size={24} className="text-base-content/30" />
                        </div>
                        <div>
                            <h3 className="font-primary text-lg font-bold text-base-content mb-1">No pending requests</h3>
                            <p className="font-secondary text-sm text-base-content/50">
                                All current requests have been fulfilled. Check back soon.
                            </p>
                        </div>
                    </div>
                )}

                {/* Request cards */}
                {!isLoading && requests.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {requests.map((req, i) => (
                            <RequestCard
                                key={req._id}
                                req={req}
                                index={i}
                                user={user}
                                onViewClick={handleViewClick}
                            />
                        ))}
                    </div>
                )}

                {/* Not logged in notice */}
                {!user && requests.length > 0 && (
                    <div
                        className="mt-10 rounded-2xl bg-primary/5 border border-primary/20 px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
                        data-aos="fade-up"
                    >
                        <div className="flex items-center gap-3 text-center sm:text-left">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0 hidden sm:block" />
                            <p className="font-secondary text-sm text-base-content/70">
                                <span className="font-semibold text-primary">Want to donate?</span>{" "}
                                Log in or register to confirm a donation request and save a life.
                            </p>
                        </div>
                        <div className="flex gap-2 shrink-0">
                            <Link
                                to="/login"
                                className="btn btn-sm btn-ghost border border-base-300 font-secondary font-medium rounded-xl"
                            >
                                Log in
                            </Link>
                            <Link
                                to="/register"
                                className="btn btn-sm btn-primary text-primary-content font-secondary font-medium rounded-xl"
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DonationRequests;