'use client';
import NavBarSecond from "../components/NavBar/NavBarSecond";
import TeamsCard from "./teamservices";
import HalfWaveBackground from "@/app/components/svgs/halfcarve";
import { motion } from "framer-motion";

const TeamsContent = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-white">
            <header className="w-full">
                <NavBarSecond />
            </header>

            {/* Hero Section */}
            <section className="relative w-full bg-gradient-to-b from-[#54169C] to-pink-500 text-white pb-32 py-6 overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1 }}
                        transition={{ duration: 1 }}
                        className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-white rounded-full blur-3xl"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-white rounded-full blur-3xl"
                    />
                </div>

                <div className="max-w-5xl mx-auto px-6 py-24 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200"
                    >
                        Our Expert Teams
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed text-white/90"
                    >
                        Meet our dedicated team of certified professionals who are committed to providing
                        exceptional care and support for your child&apos;s development journey.
                    </motion.p>
                </div>
                <HalfWaveBackground />
            </section>

            {/* Main Content */}
            <main className="flex flex-col items-center w-full py-10 relative -mt-32">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-8 max-w-[1920px] mx-auto"
                >
                    {[
                        {
                            title: "Occupational",
                            src: "/occupational-therapy.svg",
                            link: '/teams/occupational-therapists',
                        },
                        {
                            title: "Speech & Language",
                            src: "/speech-and-language-therapy.svg",
                            link: '/teams/speech-language-therapists'
                        },
                        {
                            title: "Physio",
                            src: "/physical-therapy.svg",
                            link: '/teams/physio-therapists'
                        },
                        {
                            title: "ABA",
                            src: "/aba-therapy.svg",
                            link: '/teams/aba-therapists'
                        },
                        {
                            title: "School Readiness",
                            src: "/school-readiness-program.svg",
                            link: '/teams/school-readiness-therapists'
                        },
                        {
                            title: "Feeding",
                            src: "/feeding-therapy.svg",
                            link: '/teams/feeding-therapists'
                        },
                        {
                            title: "Group",
                            src: "/group-therapy.svg",
                            link: '/teams/group-therapists'
                        },
                        {
                            title: "Neuro Integrative",
                            src: "/neuro-integrative-therapy.svg",
                            link: '/teams/neuro-therapists'
                        },
                    ].map((teamDetails) => (
                        <TeamsCard
                            key={teamDetails.link}
                            project={{
                                title: teamDetails.title,
                                src: teamDetails.src,
                                link: teamDetails.link,
                            }}
                        />
                    ))}
                </motion.div>
            </main>
        </div>
    );
};

export default TeamsContent; 