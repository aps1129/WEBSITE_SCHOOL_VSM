"use client";

import { motion } from "framer-motion";
import {
    BookOpen,
    FlaskConical,
    Calculator,
    Globe,
    Palette,
    Music,
    Laptop,
    Users,
    Clock,
    Award,
    Library
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

export default function AcademicsPage() {
    const grades = [
        { name: "Pre-Primary", classes: "Nursery, LKG, UKG", age: "3-5 years", color: "from-pink-500 to-rose-500" },
        { name: "Primary", classes: "Classes I - V", age: "6-10 years", color: "from-blue-500 to-cyan-500" },
        { name: "Middle School", classes: "Classes VI - VIII", age: "11-13 years", color: "from-green-500 to-emerald-500" },
        { name: "Secondary", classes: "Classes IX - X", age: "14-15 years", color: "from-purple-500 to-violet-500" },
    ];

    const subjects = [
        { icon: Calculator, name: "Mathematics", description: "Building strong analytical and problem-solving skills" },
        { icon: FlaskConical, name: "Science", description: "Physics, Chemistry, Biology with hands-on experiments" },
        { icon: BookOpen, name: "English", description: "Language proficiency and literature appreciation" },
        { icon: Globe, name: "Social Studies", description: "History, Geography, Civics, and Economics" },
        { icon: Laptop, name: "Computer Science", description: "Programming, digital literacy, and IT skills" },
        { icon: Palette, name: "Arts & Crafts", description: "Creative expression and artistic development" },
        { icon: Music, name: "Music & Dance", description: "Cultural appreciation and performing arts" },
        { icon: Users, name: "Physical Education", description: "Sports, fitness, and team building" },
    ];

    const features = [
        { icon: Clock, title: "Regular PTMs", description: "Monthly parent-teacher meetings for progress review" },
        { icon: Award, title: "Co-curricular", description: "Debates, quizzes, and cultural programs" },
        { icon: Library, title: "Library Access", description: "Extensive collection of books and digital resources" },
        { icon: Laptop, title: "Smart Classes", description: "Interactive digital learning in every classroom" },
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
                            Academics
                        </h1>
                        <p className="text-xl text-zinc-200 max-w-3xl mx-auto">
                            A comprehensive CBSE curriculum designed to nurture intellectual curiosity
                            and prepare students for future success.
                        </p>
                        <p className="mt-4 text-accent font-semibold">CBSE Affiliation No: 2132918</p>
                    </motion.div>
                </div>
            </section>

            {/* Grade Levels */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-zinc-900 mb-4 sm:mb-6">
                            Grade Levels
                        </h2>
                        <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
                            From early childhood to secondary - a complete educational journey up to Class X
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
                    >
                        {grades.map((grade) => (
                            <motion.div
                                key={grade.name}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="relative group"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${grade.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                <div className="relative bg-zinc-50 group-hover:bg-transparent rounded-2xl p-6 border border-zinc-200 group-hover:border-transparent transition-all duration-300">
                                    <h3 className="text-xl font-display font-bold text-zinc-900 group-hover:text-white mb-2 transition-colors">
                                        {grade.name}
                                    </h3>
                                    <p className="text-primary group-hover:text-white/90 font-semibold mb-1 transition-colors">
                                        {grade.classes}
                                    </p>
                                    <p className="text-sm text-zinc-500 group-hover:text-white/80 transition-colors">
                                        Age: {grade.age}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Subjects */}
            <section className="py-24 bg-zinc-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-zinc-900 mb-4 sm:mb-6">
                            Subjects Offered
                        </h2>
                        <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
                            A well-rounded curriculum covering academics, arts, and physical education
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
                    >
                        {subjects.map((subject) => (
                            <motion.div
                                key={subject.name}
                                variants={itemVariants}
                                className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow border border-zinc-100"
                            >
                                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                                    <subject.icon className="h-5 w-5 sm:h-7 sm:w-7 text-primary" />
                                </div>
                                <h3 className="text-base sm:text-lg font-display font-bold text-zinc-900 mb-1 sm:mb-2">{subject.name}</h3>
                                <p className="text-xs sm:text-sm text-zinc-600">{subject.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Academic Features */}
            <section className="py-24 bg-gradient-to-br from-zinc-900 to-zinc-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6">
                            Academic Excellence
                        </h2>
                        <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                            Special programs and resources to enhance learning
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
                    >
                        {features.map((feature) => (
                            <motion.div
                                key={feature.title}
                                variants={itemVariants}
                                className="bg-white/5 backdrop-blur rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-accent" />
                                </div>
                                <h3 className="text-base sm:text-lg lg:text-xl font-display font-bold mb-2 sm:mb-3">{feature.title}</h3>
                                <p className="text-xs sm:text-sm text-zinc-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
