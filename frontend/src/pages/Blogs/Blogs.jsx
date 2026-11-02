import { useState, useMemo } from "react";
import { Link } from "react-router";
import { FaSearch, FaCalendarAlt, FaUserCircle, FaClock, FaTags } from "react-icons/fa";

// ── Replace with real TanStack Query fetch ──────────────────────────────────
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// const { data: blogs = [], isLoading } = useQuery({
//     queryKey: ["publishedBlogs"],
//     queryFn: () => axios.get("/api/blogs?status=published").then(r => r.data),
// });

const MOCK_BLOGS = [
    {
        _id: "1",
        title: "Why Regular Blood Donation is Good for Your Health",
        thumbnail: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=600&q=80",
        excerpt: "Most people donate blood to help others — but research shows it has surprising benefits for the donor too, from reducing iron overload to cardiovascular health.",
        author: "Dr. Nasreen Akter",
        createdAt: "2026-04-10",
        readTime: "5 min read",
        category: "Health",
        status: "published",
    },
    {
        _id: "2",
        title: "The Severe Blood Shortage Crisis in Bangladesh",
        thumbnail: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80",
        excerpt: "Bangladesh needs 7 lakh units of blood every year. Voluntary donation covers less than half of that. Here's what needs to change — and how you can help.",
        author: "Fahim Chowdhury",
        createdAt: "2026-04-05",
        readTime: "7 min read",
        category: "Awareness",
        status: "published",
    },
    {
        _id: "3",
        title: "Blood Donation Myths Debunked",
        thumbnail: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80",
        excerpt: "Fear of needles, myths about weakness, and misinformation stop millions from donating. A doctor breaks down the top 10 myths keeping people away from donation centres.",
        author: "Dr. Karim Rahman",
        createdAt: "2026-03-28",
        readTime: "6 min read",
        category: "Education",
        status: "published",
    },
    {
        _id: "4",
        title: "What Happens to Your Blood After You Donate",
        thumbnail: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80",
        excerpt: "Your blood goes through a rigorous process before reaching a patient. Discover the journey from donation bag to life-saving transfusion in detail.",
        author: "Taslima Hossain",
        createdAt: "2026-03-20",
        readTime: "4 min read",
        category: "Education",
        status: "published",
    },
    {
        _id: "5",
        title: "How LifeFlow is Connecting Donors Across Bangladesh",
        thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
        excerpt: "In 18 months, LifeFlow has matched over 1,200 donors with patients across all 64 districts. Here's the story behind the platform and what's next.",
        author: "LifeFlow Team",
        createdAt: "2026-03-12",
        readTime: "5 min read",
        category: "Platform",
        status: "published",
    },
    {
        _id: "6",
        title: "Rare Blood Types: The Hidden Crisis Inside the Crisis",
        thumbnail: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80",
        excerpt: "AB- and O- patients can wait days for a match. We speak to families who have faced this nightmare and the donors who saved them at the last hour.",
        author: "Shakil Ahmed",
        createdAt: "2026-02-28",
        readTime: "8 min read",
        category: "Stories",
        status: "published",
    },
];

const CATEGORIES = ["All", "Health", "Awareness", "Education", "Platform", "Stories"];

const categoryColour = {
    Health:    "bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-400 dark:border-emerald-800",
    Awareness: "bg-orange-50  text-orange-600  border-orange-200  dark:bg-orange-950  dark:text-orange-400  dark:border-orange-800",
    Education: "bg-blue-50    text-blue-600    border-blue-200    dark:bg-blue-950    dark:text-blue-400    dark:border-blue-800",
    Platform:  "bg-purple-50  text-purple-600  border-purple-200  dark:bg-purple-950  dark:text-purple-400  dark:border-purple-800",
    Stories:   "bg-rose-50    text-rose-600    border-rose-200    dark:bg-rose-950    dark:text-rose-400    dark:border-rose-800",
};

const fmtDate = (d) =>
    new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

/* ─── Single Blog Card ─── */
const BlogCard = ({ blog, index }) => (
    <article
        className="bg-base-100 border border-base-300 rounded-2xl overflow-hidden flex flex-col hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
        data-aos="fade-up"
        data-aos-delay={Math.min(index * 70, 280)}
    >
        {/* Thumbnail */}
        <div className="relative overflow-hidden h-44 sm:h-48 bg-base-300">
            <img
                src={blog.thumbnail}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={(e) => { e.target.style.display = "none"; }}
            />
            {/* Category badge over image */}
            <span className={`absolute top-3 left-3 font-secondary text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full border backdrop-blur-sm ${categoryColour[blog.category] ?? "bg-base-100 text-base-content border-base-300"}`}>
                {blog.category}
            </span>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 p-5 flex-1">
            {/* Meta row */}
            <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-1.5">
                    <FaUserCircle size={11} className="text-base-content/30" />
                    <span className="font-secondary text-xs text-base-content/50">{blog.author}</span>
                </div>
                <span className="text-base-content/20 text-xs">·</span>
                <div className="flex items-center gap-1.5">
                    <FaCalendarAlt size={10} className="text-base-content/30" />
                    <span className="font-secondary text-xs text-base-content/50">{fmtDate(blog.createdAt)}</span>
                </div>
                <span className="text-base-content/20 text-xs">·</span>
                <div className="flex items-center gap-1.5">
                    <FaClock size={10} className="text-base-content/30" />
                    <span className="font-secondary text-xs text-base-content/50">{blog.readTime}</span>
                </div>
            </div>

            {/* Title */}
            <h2 className="font-primary text-base font-bold text-base-content leading-snug group-hover:text-primary transition-colors duration-200 line-clamp-2">
                {blog.title}
            </h2>

            {/* Excerpt */}
            <p className="font-secondary text-sm text-base-content/55 leading-relaxed line-clamp-3 flex-1">
                {blog.excerpt}
            </p>

            {/* Read more */}
            <Link
                to={`/blogs/${blog._id}`}
                className="inline-flex items-center gap-1.5 font-secondary text-sm font-semibold text-primary hover:gap-2.5 transition-all duration-200 mt-auto"
            >
                Read full article
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                </svg>
            </Link>
        </div>
    </article>
);

/* ─── Main Blog Page ─── */
const Blogs = () => {
    const [query, setQuery]       = useState("");
    const [category, setCategory] = useState("All");

    // TODO: swap with real data from TanStack Query
    const blogs     = MOCK_BLOGS;
    const isLoading = false;

    const filtered = useMemo(() => {
        const q = query.toLowerCase().trim();
        return blogs.filter((b) => {
            const matchCat = category === "All" || b.category === category;
            const matchQ   = !q || b.title.toLowerCase().includes(q) || b.excerpt.toLowerCase().includes(q) || b.author.toLowerCase().includes(q);
            return matchCat && matchQ;
        });
    }, [blogs, query, category]);

    return (
        <div className="min-h-screen bg-base-200">

            {/* ═══ PAGE HEADER ═══ */}
            <div className="bg-base-100 border-b border-base-300">
                <div className="w-11/12 max-w-7xl mx-auto py-10 sm:py-14">
                    <div data-aos="fade-up">
                        <span className="inline-block font-secondary text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                            Blog
                        </span>
                        <h1 className="font-primary text-2xl sm:text-3xl lg:text-4xl font-bold text-base-content mb-2">
                            Stories, Tips & Updates
                        </h1>
                        <p className="font-secondary text-sm text-base-content/50 max-w-lg">
                            Read about blood donation health benefits, community stories, and how LifeFlow is changing lives across Bangladesh.
                        </p>
                    </div>

                    {/* Search + filter bar */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-3" data-aos="fade-up" data-aos-delay="100">
                        {/* Search input */}
                        <div className="relative flex-1 max-w-md">
                            <FaSearch
                                size={13}
                                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base-content/30 pointer-events-none"
                            />
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search articles…"
                                className="input input-bordered w-full pl-9 font-secondary text-sm bg-base-200 focus:border-primary focus:outline-none"
                            />
                            {query && (
                                <button
                                    onClick={() => setQuery("")}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/30 hover:text-base-content transition-colors"
                                    aria-label="Clear search"
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>
                            )}
                        </div>

                        {/* Category pills */}
                        <div className="flex items-center gap-2 flex-wrap">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setCategory(cat)}
                                    className={`font-secondary text-xs font-semibold px-3 py-2 rounded-xl border transition-all duration-150 ${
                                        category === cat
                                            ? "bg-primary text-primary-content border-primary"
                                            : "bg-base-100 text-base-content/60 border-base-300 hover:border-primary/40 hover:text-base-content"
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Result count */}
                    {(query || category !== "All") && (
                        <p className="font-secondary text-xs text-base-content/40 mt-3" data-aos="fade-up">
                            {filtered.length} article{filtered.length !== 1 ? "s" : ""} found
                            {query && <> for <span className="text-primary">&ldquo;{query}&rdquo;</span></>}
                            {category !== "All" && <> in <span className="text-primary">{category}</span></>}
                        </p>
                    )}
                </div>
            </div>

            {/* ═══ BLOG GRID ═══ */}
            <div className="w-11/12 max-w-7xl mx-auto py-10 sm:py-14">

                {/* Skeleton */}
                {isLoading && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="bg-base-100 border border-base-300 rounded-2xl overflow-hidden animate-pulse">
                                <div className="h-44 bg-base-300" />
                                <div className="p-5 flex flex-col gap-3">
                                    <div className="h-3 w-2/3 bg-base-300 rounded" />
                                    <div className="h-5 w-full bg-base-300 rounded" />
                                    <div className="h-3 w-full bg-base-300 rounded" />
                                    <div className="h-3 w-4/5 bg-base-300 rounded" />
                                    <div className="h-4 w-1/3 bg-base-300 rounded mt-2" />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Empty state */}
                {!isLoading && filtered.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-24 gap-4 text-center" data-aos="fade-up">
                        <div className="w-16 h-16 bg-base-300 rounded-2xl flex items-center justify-center">
                            <FaTags size={22} className="text-base-content/30" />
                        </div>
                        <div>
                            <h3 className="font-primary text-lg font-bold text-base-content mb-1">No articles found</h3>
                            <p className="font-secondary text-sm text-base-content/50 max-w-xs">
                                Try a different search term or select a different category.
                            </p>
                        </div>
                        <button
                            onClick={() => { setQuery(""); setCategory("All"); }}
                            className="btn btn-sm btn-ghost border border-base-300 font-secondary font-medium rounded-xl"
                        >
                            Clear filters
                        </button>
                    </div>
                )}

                {/* Cards */}
                {!isLoading && filtered.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filtered.map((blog, i) => (
                            <BlogCard key={blog._id} blog={blog} index={i} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blogs;