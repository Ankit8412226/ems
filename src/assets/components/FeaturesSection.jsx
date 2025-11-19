
export default function FeaturesSection() {
    const features = [
        {
            iconUrl: "/list_alt.png",
            title: "Task Management",
            description: "Lorem ipsum dolor sit amet consectetur.",
            bgColor: "bg-white"
        },
        {
            iconUrl: "/TeamC.svg",
            title: "Team Collaboration",
            description: "Lorem ipsum dolor sit amet consectetur.",
            bgColor: "bg-white"
        },
        {
            iconUrl: "/ProjectT.svg",
            title: "Project Timeline",
            description: "Lorem ipsum dolor sit amet consectetur.",
            bgColor: "bg-white"
        },
        {
            iconUrl: "/HRMS.svg",
            title: "HRMS",
            description: "Lorem ipsum dolor sit amet consectetur.",
            bgColor: "bg-white"
        },
        {
            iconUrl: "/finance.svg",
            title: "Finance Management",
            description: "Lorem ipsum dolor sit amet consectetur.",
            bgColor: "bg-white"
        },
        {
            iconUrl: "/support.svg",
            title: "Support",
            description: "Lorem ipsum dolor sit amet consectetur.",
            bgColor: "bg-white"
        }
    ];

    return (
        <div className="min-h-screen bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto">


                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Everything your team<br />needs in <span className="text-green-500">one place</span>
                    </h1>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet consectetur. kshi uemnamet<br />
                        consectetur. kshi uemnamet
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`
                      ${feature.bgColor}
                      rounded-3xl p-8
                      border border-[#756FCC]
                      hover:shadow-lg
                      transition-shadow duration-300
                      relative overflow-hidden

                      shadow-[0_6px_10px_4px_rgba(112,79,230,0.10)]
                    `}
                        >
                            {index === features.length - 2 && (

                                <img
                                    src="/Ellipse 487.svg"
                                    alt="hello"
                                    className="absolute z-0"
                                    style={{
                                        right: '1px',
                                        top: '0px',
                                        pointerEvents: 'none'
                                    }}
                                />
                            )}


                            {/* Icon */}
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6 relative z-10">
                                <img
                                    src={feature.iconUrl}
                                    alt={feature.title}
                                    className="w-8 h-8 object-contain"
                                />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-gray-900 mb-2 relative z-10">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-sm relative z-10">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
