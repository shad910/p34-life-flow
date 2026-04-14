import React from 'react';

const Newsletter = () => {
    return (
        <div>
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
        </div>
    );
};

export default Newsletter;