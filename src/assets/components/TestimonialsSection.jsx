import React from "react";

export default function TestimonialsSection() {
    return (
        <section className="w-full py-20 px-6 md:px-16 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* ------------ HEADER ------------ */}
                <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6 items-start">

                    {/* LEFT TITLE */}
                    <div>
                        <h2 className="text-[#2E2E2E] md:text-[44px] font-poppins font-semibold leading-[48px]">
                            See how businesses <br />
                            streamline their <br />
                            <span className="bg-gradient-to-r from-[#7CF38D] to-[#50AA18] bg-clip-text text-transparent font-poppins font-semibold">
                                operations with us.
                            </span>
                        </h2>
                    </div>

                    {/* RIGHT PARAGRAPH + THIN BORDER */}
                    <div className="flex items-start gap-6">

                        {/* Vertical line */}
                        <div className="w-[1px] h-[155px] bg-[#A7A7A7]"></div>

                        {/* Right paragraph */}
                        <p className="text-[#7C7C7C] text-[15px] leading-[22px] max-w-[300px] font-Nunito mt-12">
                            Lorem ipsum dolor sit amet consectetur. kshi uenmamet consectetur.
                            kshi uenmamet.
                        </p>
                    </div>
                </div>

                {/* ------------ ARROWS ------------ */}
                <div className="flex justify-end gap-3 mt-10">
                    <button>
                        <img src="/LeftArrow.png" alt="Left Arrow" />
                    </button>

                    <button>
                        <img src="/RightArrow.png" alt="Right Arrow" />
                    </button>
                </div>

                {/* ------------ TESTIMONIAL CARDS ------------ */}
                <div className="grid md:grid-cols-3 gap-8 mt-12">

                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className={`
                rounded-2xl p-6 bg-white border border-gray-100
                shadow-[0px_8px_25px_0px_#756FCC40]
                ${item === 1 ? "h-[280px] mt-[-40px]" : ""}
                ${item === 2 ? "h-[250px] mt-[-8px]" : ""}
                ${item === 3 ? "h-[230px] mt-[4px]" : ""}
              `}
                        >
                            <div className="space-y-6">

                                <img
                                    src="/quote.png"
                                    alt="Quote"
                                    className="w-8"
                                />

                                <p className="text-gray-700 leading-relaxed">
                                    Lorem ipsum dolor sit amet consectetur. Hendrerit quisque nibh
                                    neque ultricies nulla lectus. Risus.
                                </p>

                                <div className="flex items-center gap-3">
                                    <img
                                        src="/Avatar (1).png"
                                        alt="Avatar"
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="font-semibold text-gray-900">Arefin Shuvo</p>
                                        <p className="text-sm text-gray-500">CEO, Urbancompany</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
