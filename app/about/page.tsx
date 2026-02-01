"use client";

import { motion } from "framer-motion";
import {
    Award,
    Users,
    BookOpen,
    Target,
    Heart,
    Star,
    GraduationCap,
    Sparkles,
    Trophy,
    Shield,
    Lightbulb,
    Globe
} from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
};

export default function AboutPage() {
    const values = [
        {
            icon: Target,
            title: "Excellence",
            description: "We strive for excellence in everything we do, setting high standards for our students and staff.",
        },
        {
            icon: Heart,
            title: "Compassion",
            description: "We foster a caring environment where every student feels valued and supported.",
        },
        {
            icon: Users,
            title: "Community",
            description: "We build strong relationships between students, parents, teachers, and the wider community.",
        },
        {
            icon: BookOpen,
            title: "Innovation",
            description: "We embrace modern teaching methods and technology to enhance learning experiences.",
        },
    ];

    const leadership = [
        {
            name: "Mr. Surendra Kumar Singh",
            role: "Director",
            description: "Providing strategic vision and direction to VSM School with dedication to educational excellence.",
        },
        {
            name: "Mrs. Anjali Singh",
            role: "Principal",
            description: "Leading the academic and administrative functions with commitment to nurturing every student's potential.",
        },
    ];

    const achievements = [
        {
            icon: Trophy,
            number: "25+",
            title: "Years of Excellence",
            description: "A legacy of quality education since 1998",
        },
        {
            icon: GraduationCap,
            number: "5000+",
            title: "Successful Alumni",
            description: "Graduates excelling across diverse fields",
        },
        {
            icon: Award,
            number: "100%",
            title: "CBSE Results",
            description: "Consistent academic performance",
        },
        {
            icon: Users,
            number: "100+",
            title: "Dedicated Faculty",
            description: "Experienced and passionate educators",
        },
    ];

    const whyUs = [
        {
            icon: Shield,
            title: "CBSE Affiliated",
            description: "Recognized curriculum with national standards ensuring quality education and valid certification.",
        },
        {
            icon: Lightbulb,
            title: "Modern Pedagogy",
            description: "Smart classrooms and innovative teaching methods that make learning engaging and effective.",
        },
        {
            icon: Globe,
            title: "Holistic Development",
            description: "Balance of academics, sports, arts, and life skills for complete personality development.",
        },
        {
            icon: Sparkles,
            title: "Individual Attention",
            description: "Optimal student-teacher ratio ensuring personalized guidance for every child.",
        },
    ];

    return (
        <div className="w-full bg-zinc-50 pt-32">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center text-white"
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6">
                            About VSM School
                        </h1>
                        <p className="text-xl text-zinc-200 max-w-3xl mx-auto">
                            For over 25 years, we have been nurturing young minds and shaping the leaders of tomorrow
                            in Narora, Bulandshahr.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12"
                    >
                        <motion.div variants={itemVariants} className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 sm:p-10">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                                <Target className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-display font-bold text-zinc-900 mb-4">Our Mission</h2>
                            <p className="text-base sm:text-lg text-zinc-700 leading-relaxed">
                                To provide quality education that develops intellectual curiosity, critical thinking,
                                and moral values in students, preparing them to be responsible citizens and future leaders
                                who contribute positively to society.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-gradient-to-br from-accent/10 to-accent/20 rounded-3xl p-8 sm:p-10">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent rounded-2xl flex items-center justify-center mb-6">
                                <Star className="h-7 w-7 sm:h-8 sm:w-8 text-zinc-900" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-display font-bold text-zinc-900 mb-4">Our Vision</h2>
                            <p className="text-base sm:text-lg text-zinc-700 leading-relaxed">
                                To be a leading educational institution that inspires excellence, fosters innovation,
                                and nurtures well-rounded individuals who are prepared to thrive in an ever-changing
                                global landscape.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Our Core Values */}
            <section className="py-24 bg-zinc-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-zinc-900 mb-4 sm:mb-6">
                            Our Core Values
                        </h2>
                        <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
                            The principles that guide everything we do at VSM School
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
                    >
                        {values.map((value) => (
                            <motion.div
                                key={value.title}
                                variants={itemVariants}
                                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border border-zinc-100"
                            >
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mb-5 sm:mb-6">
                                    <value.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-display font-bold text-zinc-900 mb-3">{value.title}</h3>
                                <p className="text-zinc-600 text-sm sm:text-base">{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>


            {/* Why Choose Us */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-zinc-900 mb-4 sm:mb-6">
                            What Sets Us Apart
                        </h2>
                        <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
                            Discover why parents trust VSM School for their children's education
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
                    >
                        {whyUs.map((item, index) => (
                            <motion.div
                                key={item.title}
                                variants={itemVariants}
                                className="flex gap-4 sm:gap-6 p-6 sm:p-8 bg-zinc-50 rounded-2xl sm:rounded-3xl hover:shadow-lg transition-shadow border border-zinc-100"
                            >
                                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <item.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-display font-bold text-zinc-900 mb-2">{item.title}</h3>
                                    <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Leadership */}
            <section className="py-24 bg-zinc-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-zinc-900 mb-4 sm:mb-6">
                            Our Leadership
                        </h2>
                        <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
                            Meet the dedicated team guiding VSM School towards excellence
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto"
                    >
                        {leadership.map((leader) => (
                            <motion.div
                                key={leader.name}
                                variants={itemVariants}
                                className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl text-center hover:shadow-2xl transition-shadow"
                            >
                                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full mx-auto mb-5 sm:mb-6 flex items-center justify-center">
                                    <GraduationCap className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-display font-bold text-zinc-900 mb-2">{leader.name}</h3>
                                <p className="text-primary font-semibold mb-3 sm:mb-4">{leader.role}</p>
                                <p className="text-zinc-600 text-sm sm:text-base">{leader.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
