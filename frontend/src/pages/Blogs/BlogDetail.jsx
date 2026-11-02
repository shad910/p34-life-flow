import { Link, useParams, useNavigate } from "react-router";
import { FaCalendarAlt, FaUserCircle, FaClock, FaArrowLeft, FaHeart, FaShare } from "react-icons/fa";

// ── Replace with real TanStack Query fetch ──────────────────────────────────
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// const { data: blog, isLoading } = useQuery({
//     queryKey: ["blog", id],
//     queryFn: () => axios.get(`/api/blogs/${id}`).then(r => r.data),
// });

// Mock — remove once backend is ready
const MOCK_BLOGS = {
    "1": {
        _id: "1",
        title: "Why Regular Blood Donation is Good for Your Health",
        thumbnail: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=1200&q=85",
        author: "Dr. Nasreen Akter",
        createdAt: "2026-04-10",
        readTime: "5 min read",
        category: "Health",
        content: `
<h2>The Hidden Health Benefits of Donating Blood</h2>
<p>Every time you give blood, you are doing something remarkable — not just for the recipient, but for yourself. Decades of research have revealed that regular voluntary blood donation carries meaningful health advantages for donors who are eligible.</p>

<h3>1. Reduces Excess Iron</h3>
<p>The human body has no natural mechanism to excrete excess iron. Over time, iron accumulates in organs and can lead to a condition called <strong>haemochromatosis</strong>, which damages the heart, liver, and pancreas. Donating blood lowers your iron stores and reduces this risk significantly.</p>

<h3>2. Improves Cardiovascular Health</h3>
<p>Studies published in the <em>American Journal of Epidemiology</em> suggest that regular blood donors have a lower risk of heart attack and stroke. Reduced blood viscosity — a direct result of donation — means the heart works less hard to pump blood through the body.</p>

<h3>3. Free Mini Health Screening</h3>
<p>Before every donation, your blood pressure, pulse, haemoglobin levels, and temperature are checked. This regular monitoring can catch conditions like hypertension or anaemia early — before you'd otherwise notice any symptoms.</p>

<h3>4. Caloric Burn</h3>
<p>Your body burns approximately <strong>650 calories</strong> regenerating the blood you donate. While this is not a substitute for exercise, it is a pleasant side effect of doing something heroic.</p>

<h3>5. Psychological Wellbeing</h3>
<p>The act of giving has well-documented psychological benefits. Donors consistently report higher levels of satisfaction and lower stress. The knowledge that your donation may have saved a life is a uniquely powerful feeling.</p>

<h2>Who Can Donate?</h2>
<p>Most healthy adults between the ages of 18 and 65, weighing at least 50 kg, and with no active infections or serious medical conditions are eligible. Your nearest blood bank or the LifeFlow platform can confirm your eligibility in minutes.</p>

<h2>How Often Can You Donate?</h2>
<p>Whole blood can be donated every <strong>3 months</strong> (90 days). Your body fully regenerates donated red blood cells within 4–6 weeks, and your plasma is replaced within 24–48 hours.</p>

<blockquote>Every drop of blood you give has the potential to save up to three lives. Make it a habit, not a one-time act.</blockquote>

<p>If you are ready to donate, register on LifeFlow today and find a request near you.</p>
        `,
        status: "published",
    },
    "2": {
        _id: "2",
        title: "The Severe Blood Shortage Crisis in Bangladesh",
        thumbnail: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=85",
        author: "Fahim Chowdhury",
        createdAt: "2026-04-05",
        readTime: "7 min read",
        category: "Awareness",
        content: `
<h2>A Crisis Hidden in Plain Sight</h2>
<p>Bangladesh requires approximately <strong>7 lakh (700,000) units of blood</strong> every year. Yet voluntary donation covers fewer than 30% of those units. The rest is sourced through replacement donation — family members donating reactively when a patient is admitted — or, in the worst cases, through paid donors whose blood carries far higher infection risks.</p>

<h3>Who Suffers Most?</h3>
<p>The shortage hits hardest in three groups: road accident victims who need emergency transfusions, thalassaemia patients who require transfusions every 3–4 weeks for life, and mothers experiencing complications during childbirth. Rural districts are especially underserved; a patient in Bandarban may need to wait 48 hours for a rare blood type.</p>

<h3>Why Voluntary Donation Remains Low</h3>
<ul>
  <li><strong>Myths and misconceptions</strong> — many people believe donation causes permanent weakness or reduces their own blood supply.</li>
  <li><strong>Religious misunderstanding</strong> — some believe blood donation is religiously prohibited, despite clear rulings from Islamic scholars that it is permissible and encouraged.</li>
  <li><strong>Lack of awareness</strong> — no systematic national campaign exists to recruit and retain voluntary donors.</li>
</ul>

<h3>What Needs to Change</h3>
<p>WHO recommends that a country should collect blood from at least 1% of its population annually as voluntary non-remunerated donors. Bangladesh currently falls far short of this target. Policy change, school-level education, and community-driven platforms like LifeFlow are essential pieces of the solution.</p>

<blockquote>Voluntary, non-remunerated blood donation is the cornerstone of a safe and adequate blood supply. — World Health Organization</blockquote>

<p>You can be part of the change. Register as a donor on LifeFlow today.</p>
        `,
        status: "published",
    },
};

const categoryColour = {
    Health:    "bg-emerald-50 text-emerald-600 border-emerald-200",
    Awareness: "bg-orange-50  text-orange-600  border-orange-200",
    Education: "bg-blue-50    text-blue-600    border-blue-200",
    Platform:  "bg-purple-50  text-purple-600  border-purple-200",
    Stories:   "bg-rose-50    text-rose-600    border-rose-200",
};

const fmtDate = (d) =>
    new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

const BlogDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // TODO: replace with real hook
    const blog     = MOCK_BLOGS[id] ?? null;
    const isLoading = false;

    /* ── Loading ── */
    if (isLoading) return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center">
            <span className="loading loading-spinner loading-lg text-primary" />
        </div>
    );

    /* ── Not found ── */
    if (!blog) return (
        <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center gap-4 px-4 text-center">
            <div className="w-16 h-16 bg-base-300 rounded-2xl flex items-center justify-center">
                <FaHeart size={22} className="text-base-content/20" />
            </div>
            <h2 className="font-primary text-xl font-bold text-base-content">Blog not found</h2>
            <p className="font-secondary text-sm text-base-content/50">This article may have been removed or the link is incorrect.</p>
            <Link to="/blogs" className="btn btn-primary btn-sm font-secondary font-medium rounded-xl text-primary-content">
                Back to Blog
            </Link>
        </div>
    );

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({ title: blog.title, url: window.location.href }).catch(() => {});
        } else {
            navigator.clipboard.writeText(window.location.href);
        }
    };

    return (
        <div className="min-h-screen bg-base-200">

            {/* ═══ HERO IMAGE ═══ */}
            <div className="relative w-full h-56 sm:h-72 lg:h-96 bg-base-300 overflow-hidden">
                <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                    loading="eager"
                    onError={(e) => { e.target.style.display = "none"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />

                {/* Back button over image */}
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-2 transition-colors font-secondary text-sm text-white font-medium"
                >
                    <FaArrowLeft size={12} />
                    Back
                </button>
            </div>

            {/* ═══ ARTICLE ═══ */}
            <div className="w-11/12 max-w-3xl mx-auto -mt-10 relative z-10 pb-16">

                {/* Card wrapper */}
                <div
                    className="bg-base-100 border border-base-300 rounded-2xl p-6 sm:p-10 shadow-sm"
                    data-aos="fade-up"
                >
                    {/* Category + share row */}
                    <div className="flex items-center justify-between mb-5">
                        <span className={`font-secondary text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full border ${categoryColour[blog.category] ?? "bg-base-200 text-base-content border-base-300"}`}>
                            {blog.category}
                        </span>
                        <button
                            onClick={handleShare}
                            className="flex items-center gap-1.5 font-secondary text-xs text-base-content/40 hover:text-primary transition-colors"
                            title="Share this article"
                        >
                            <FaShare size={11} />
                            Share
                        </button>
                    </div>

                    {/* Title */}
                    <h1
                        className="font-primary text-2xl sm:text-3xl lg:text-4xl font-bold text-base-content leading-tight mb-5"
                        data-aos="fade-up"
                        data-aos-delay="60"
                    >
                        {blog.title}
                    </h1>

                    {/* Meta */}
                    <div
                        className="flex flex-wrap items-center gap-4 pb-6 border-b border-base-300 mb-8"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                <FaUserCircle size={16} className="text-primary" />
                            </div>
                            <span className="font-secondary text-sm font-medium text-base-content">{blog.author}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <FaCalendarAlt size={11} className="text-base-content/30" />
                            <span className="font-secondary text-xs text-base-content/50">{fmtDate(blog.createdAt)}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <FaClock size={11} className="text-base-content/30" />
                            <span className="font-secondary text-xs text-base-content/50">{blog.readTime}</span>
                        </div>
                    </div>

                    {/* Rich text content */}
                    <div
                        className="prose prose-sm sm:prose max-w-none font-secondary
                            prose-headings:font-primary prose-headings:text-base-content
                            prose-h2:text-xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-3
                            prose-h3:text-base prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-2
                            prose-p:text-base-content/70 prose-p:leading-relaxed prose-p:text-sm
                            prose-strong:text-base-content prose-em:text-base-content/80
                            prose-li:text-base-content/70 prose-li:text-sm
                            prose-blockquote:border-l-primary prose-blockquote:bg-primary/5
                            prose-blockquote:rounded-r-xl prose-blockquote:py-1 prose-blockquote:px-4
                            prose-blockquote:text-base-content/70 prose-blockquote:not-italic
                            prose-blockquote:text-sm prose-blockquote:font-medium"
                        data-aos="fade-up"
                        data-aos-delay="140"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />

                    {/* Bottom CTA */}
                    <div
                        className="mt-10 pt-8 border-t border-base-300 rounded-2xl bg-primary/5 border border-primary/20 p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
                        data-aos="fade-up"
                    >
                        <div className="text-center sm:text-left">
                            <h3 className="font-primary text-base font-bold text-base-content mb-1">
                                Ready to make a difference?
                            </h3>
                            <p className="font-secondary text-xs text-base-content/50">
                                Register as a donor or find a pending blood request near you.
                            </p>
                        </div>
                        <div className="flex gap-2 shrink-0">
                            <Link to="/register" className="btn btn-sm btn-primary text-primary-content font-secondary font-semibold rounded-xl">
                                Become a Donor
                            </Link>
                            <Link to="/donation-requests" className="btn btn-sm btn-ghost border border-base-300 font-secondary font-medium rounded-xl">
                                See Requests
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Back to blog link */}
                <div className="mt-6 text-center" data-aos="fade-up">
                    <Link
                        to="/blogs"
                        className="inline-flex items-center gap-2 font-secondary text-sm text-base-content/40 hover:text-primary transition-colors"
                    >
                        <FaArrowLeft size={11} />
                        Back to all articles
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;