"use client";

import { motion } from "framer-motion";
import {
    FileText,
    Calendar,
    Phone,
    CheckCircle,
    Download,
    Users,
    ArrowRight,
    Sparkles,
    GraduationCap,
    Shield,
    Heart,
    Star,
    BookOpen,
    MapPin
} from "lucide-react";
import Link from "next/link";

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

export default function AdmissionsPage() {
    const documents = [
        "Birth Certificate (Original + Photocopy)",
        "Transfer Certificate (for Classes II onwards)",
        "Report Card of previous class",
        "Passport-size photographs (4 copies)",
        "Aadhar Card of student and parents",
        "Address Proof (Electricity Bill/Ration Card)",
        "Caste Certificate (if applicable)",
        "Medical Fitness Certificate",
    ];

    const importantDates = [
        { event: "Admission Forms Available", date: "January 15, 2026" },
        { event: "Form Submission Deadline", date: "March 15, 2026" },
        { event: "Entrance Assessment", date: "March 25-30, 2026" },
        { event: "Result Announcement", date: "April 5, 2026" },
        { event: "New Session Begins", date: "April 1, 2026" },
    ];

    const whyJoinUs = [
        {
            icon: GraduationCap,
            title: "Academic Excellence",
            description: "CBSE curriculum with a proven track record of outstanding results and comprehensive education.",
        },
        {
            icon: Shield,
            title: "Safe & Nurturing Environment",
            description: "Secure campus with caring staff dedicated to every child's well-being and growth.",
        },
        {
            icon: Heart,
            title: "Holistic Development",
            description: "Equal focus on academics, sports, arts, and value-based education for complete personality development.",
        },
        {
            icon: Star,
            title: "Experienced Faculty",
            description: "Qualified and passionate teachers committed to bringing out the best in every student.",
        },
    ];

    const classesOffered = [
        { name: "Pre-Primary", grades: "Nursery, LKG, UKG", color: "from-pink-500 to-rose-500" },
        { name: "Primary", grades: "Classes I - V", color: "from-blue-500 to-indigo-500" },
        { name: "Middle School", grades: "Classes VI - VIII", color: "from-emerald-500 to-teal-500" },
        { name: "Secondary", grades: "Classes IX - X", color: "from-purple-500 to-violet-500" },
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
                            Admissions 2026-27
                        </h1>
                        <p className="text-xl text-zinc-200 max-w-3xl mx-auto mb-8">
                            Join the VSM School family and embark on a journey of academic excellence
                            and personal growth.
                        </p>
                        <Link
                            href="#apply"
                            className="inline-flex items-center space-x-2 bg-accent text-zinc-900 px-8 py-4 rounded-full font-semibold hover:bg-accent-light transition-colors shadow-xl"
                        >
                            <span>Apply Now</span>
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Why Join VSM School - Replaces Process Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-zinc-900 mb-4 sm:mb-6">
                            Why Join VSM School?
                        </h2>
                        <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
                            Give your child the gift of quality education and holistic development
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
                    >
                        {whyJoinUs.map((item) => (
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

            {/* Classes We Offer - Replaces Fee Structure */}
            <section className="py-24 bg-gradient-to-br from-zinc-900 to-zinc-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6">
                            Classes We Offer
                        </h2>
                        <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                            Comprehensive education from early childhood to secondary level
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
                    >
                        {classesOffered.map((item) => (
                            <motion.div
                                key={item.name}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="relative group"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                <div className="relative bg-white/10 backdrop-blur group-hover:bg-transparent rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 group-hover:border-transparent transition-all duration-300 text-center h-full">
                                    <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-white/20 transition-colors`}>
                                        <BookOpen className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-display font-bold mb-2 sm:mb-3">{item.name}</h3>
                                    <p className="text-zinc-300 group-hover:text-white/90 text-sm sm:text-base transition-colors">{item.grades}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center text-zinc-400 mt-8 text-sm sm:text-base"
                    >
                        CBSE Affiliation No: 2132918 | For fee details, please contact the school office
                    </motion.p>
                </div>
            </section>

            {/* Documents Required */}
            <section className="py-24 bg-zinc-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-zinc-900 mb-4 sm:mb-6">
                                Documents Required
                            </h2>
                            <p className="text-lg sm:text-xl text-zinc-600 mb-6 sm:mb-8">
                                Please keep the following documents ready for the admission process
                            </p>
                            <ul className="space-y-3 sm:space-y-4">
                                {documents.map((doc, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center space-x-3"
                                    >
                                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                        <span className="text-zinc-700 text-sm sm:text-base">{doc}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl"
                        >
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent/20 rounded-xl flex items-center justify-center mr-4">
                                    <Download className="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-display font-bold text-zinc-900">Get More Info</h3>
                            </div>
                            <p className="text-zinc-600 mb-6 text-sm sm:text-base">
                                Visit our school office or contact us to get the admission form and detailed prospectus.
                            </p>
                            <div className="space-y-4">
                                <Link
                                    href="/contact"
                                    className="w-full bg-primary text-white py-3 sm:py-4 rounded-xl font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center space-x-2"
                                >
                                    <MapPin className="h-5 w-5" />
                                    <span>Visit School Office</span>
                                </Link>
                                <Link
                                    href="tel:+919319497275"
                                    className="w-full bg-zinc-100 text-zinc-900 py-3 sm:py-4 rounded-xl font-semibold hover:bg-zinc-200 transition-colors flex items-center justify-center space-x-2"
                                >
                                    <Phone className="h-5 w-5" />
                                    <span>Call: +91 93194 97275</span>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Important Dates */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-zinc-900 mb-4 sm:mb-6">
                            Important Dates
                        </h2>
                        <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
                            Mark your calendar for the 2026-27 admission cycle
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6"
                    >
                        {importantDates.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-gradient-to-br from-zinc-50 to-zinc-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-zinc-200 text-center hover:shadow-lg transition-shadow"
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                    <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                                </div>
                                <p className="text-zinc-600 text-[10px] sm:text-xs mb-1 sm:mb-2 line-clamp-2">{item.event}</p>
                                <p className="text-zinc-900 font-display font-bold text-xs sm:text-sm lg:text-base">{item.date}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Contact CTA */}
            <section id="apply" className="py-24 bg-gradient-to-br from-primary via-primary-dark to-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Sparkles className="h-14 w-14 sm:h-16 sm:w-16 text-accent mx-auto mb-6" />
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6">
                            Ready to Join the VSM Family?
                        </h2>
                        <p className="text-lg sm:text-xl text-zinc-200 mb-8 max-w-2xl mx-auto">
                            Visit our campus for a tour, meet our faculty, and discover why VSM School is the right choice for your child.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center space-x-2 bg-accent text-zinc-900 px-8 py-4 rounded-full font-semibold hover:bg-accent-light transition-colors shadow-xl"
                            >
                                <Phone className="h-5 w-5" />
                                <span>Contact Us</span>
                            </Link>
                            <Link
                                href="tel:+919319497275"
                                className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors border border-white/30"
                            >
                                <span>Call: +91 93194 97275</span>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
