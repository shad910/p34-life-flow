import { Link, useNavigate } from "react-router";
import { Player } from "@lottiefiles/react-lottie-player";
import errorAnimation from "../assets/animations/error.json";


const Error = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 pb-16">

            {/* ── Lottie Animation ── */}
            <div
                className="w-full max-w-sm sm:max-w-md"
                data-aos="zoom-in"
                data-aos-duration="600"
            >
                <Player
                    autoplay
                    loop
                    src={errorAnimation}
                    style={{ width: "500px", maxWidth: "100%" }}
                />
            </div>

            {/* ── Text Content ── */}
            <div
                className="text-center mt-2 max-w-lg"
            >
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                        to="/"
                        className="btn btn-primary text-primary-content font-secondary font-medium w-full sm:w-auto"
                    >
                        {/* Home icon */}
                        <svg
                            width="16" height="16" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round"
                        >
                            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        Back to Home
                    </Link>

                    <button
                        onClick={() => navigate(-1)}
                        className="btn btn-ghost border border-base-300 font-secondary font-medium w-full sm:w-auto"
                    >
                        {/* Arrow left icon */}
                        <svg
                            width="16" height="16" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round"
                        >
                            <path d="M19 12H5M12 5l-7 7 7 7" />
                        </svg>
                        Go Back
                    </button>

                    <Link
                        to="/donation-requests"
                        className="btn btn-ghost border border-base-300 font-secondary font-medium w-full sm:w-auto"
                    >
                        {/* Heart icon */}
                        <svg
                            width="16" height="16" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round"
                        >
                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                        </svg>
                        See Donation Requests
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Error;