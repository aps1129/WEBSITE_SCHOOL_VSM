"use client";

import { motion } from "framer-motion";
import {
  Users,
  FlaskConical,
  Trophy,
  ArrowRight,
  Award,
  BookOpen,
  GraduationCap,
  Library,
  Heart,
  Target,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import HeroParallax from "@/components/HeroParallax";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function Home() {
  const bentoItems = [
    {
      id: 1,
      title: "Expert Faculty",
      description: "Highly qualified educators with years of experience, dedicated to personalized attention and academic excellence.",
      icon: Users,
      gradient: "from-blue-600 to-indigo-700",
      bgGradient: "bg-gradient-to-br from-blue-50 to-indigo-50",
    },
    {
      id: 2,
      title: "Modern Labs",
      description: "State-of-the-art science and computer laboratories with cutting-edge technology for hands-on learning.",
      icon: FlaskConical,
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "bg-gradient-to-br from-emerald-50 to-teal-50",
    },
    {
      id: 3,
      title: "Sports Excellence",
      description: "World-class sports facilities promoting fitness, teamwork, and competitive spirit at district level.",
      icon: Trophy,
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "bg-gradient-to-br from-amber-50 to-orange-50",
    },
    {
      id: 4,
      title: "Rich Library",
      description: "Extensive collection of books and digital resources with quiet study spaces for focused learning.",
      icon: Library,
      gradient: "from-violet-500 to-purple-600",
      bgGradient: "bg-gradient-to-br from-violet-50 to-purple-50",
    },
    {
      id: 5,
      title: "Holistic Growth",
      description: "Complete focus on character building, moral values, and all-round personality development.",
      icon: Heart,
      gradient: "from-pink-500 to-rose-600",
      bgGradient: "bg-gradient-to-br from-pink-50 to-rose-50",
    },
    {
      id: 6,
      title: "Smart Classrooms",
      description: "Interactive digital boards and modern teaching aids ensuring engaging and effective learning.",
      icon: GraduationCap,
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "bg-gradient-to-br from-cyan-50 to-blue-50",
    },
  ];

  const notices = [
    "🎓 Admissions Open for Session 2026-27 — Apply Now!",
    "📚 Annual Examinations — March 2026",
    "🏆 Annual Sports Meet — February 15, 2026",
    "👨‍👩‍👧 Parent-Teacher Meeting — Last Saturday of Every Month",
    "🎭 Annual Day Celebration — March 28, 2026",
    "📖 New Session Begins — April 1, 2026",
  ];

  return (
    <div className="w-full bg-zinc-50">
      {/* Hero Section with Parallax */}
      <HeroParallax />

      {/* About Snippet Section */}
      <section className="py-24 sm:py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* About Text */}
            <motion.div variants={itemVariants}>
              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-zinc-900 mb-6 sm:mb-8 leading-tight"
              >
                Welcome to VSM School, Narora
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-xl text-zinc-700 mb-6 leading-relaxed"
              >
                Established with a vision to provide quality education, VSM School has been a beacon of
                academic excellence in Narora for decades. Our institution is committed to nurturing young
                minds and preparing them for the challenges of tomorrow.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-xl text-zinc-700 mb-10 leading-relaxed"
              >
                We believe in holistic development, combining rigorous academics with sports, arts, and
                character building. Our legacy is built on the success of thousands of students who have
                gone on to excel in various fields across India and abroad.
              </motion.p>

            </motion.div>

            {/* Principal's Message Card */}
            <motion.div
              variants={itemVariants}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent via-primary to-accent rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-white rounded-3xl shadow-2xl p-10 border border-zinc-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-zinc-900" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-zinc-900">Principal's Message</h3>
                </div>
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-2xl flex items-center justify-center mb-6">
                    <GraduationCap className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <p className="text-lg text-zinc-700 leading-relaxed mb-6 italic">
                  "At VSM School, we are committed to providing an environment where every student can discover
                  their potential, develop their talents, and grow into responsible citizens. Our mission is to
                  blend traditional values with modern education, ensuring our students are well-prepared for the
                  global stage."
                </p>
                <p className="text-primary font-semibold text-lg">— Principal, VSM School, Narora</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid - Key Highlights Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-zinc-900 mb-4 sm:mb-6">
              Why Choose VSM School?
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Discover what makes us a premier educational institution in Narora
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {bentoItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`${item.bgGradient} rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-zinc-200/60 hover:border-zinc-300 transition-all duration-300 cursor-pointer group relative overflow-hidden shadow-sm hover:shadow-xl`}
                >
                  {/* Hover gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  <div className="relative z-10">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-zinc-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-zinc-600 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Notice Board Section with Enhanced Marquee */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-primary via-primary-dark to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center sm:justify-start mb-8"
          >
            <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mr-4">
              <Sparkles className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold">Latest Updates 2026-27</h2>
          </motion.div>

          <div className="glass-dark rounded-2xl p-4 sm:p-6 overflow-hidden relative group">
            <div className="flex animate-marquee space-x-8 sm:space-x-12 whitespace-nowrap w-max">
              {notices.map((notice, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 sm:space-x-4 text-base sm:text-lg font-medium shrink-0 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                  <span>{notice}</span>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {notices.map((notice, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex items-center space-x-3 sm:space-x-4 text-base sm:text-lg font-medium shrink-0 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                  <span>{notice}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <Target className="h-16 w-16 mx-auto mb-8 text-accent" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-12 text-zinc-300 max-w-2xl mx-auto">
            Join the VSM School family and unlock your potential. Admissions are open for the academic year 2026-27.
          </p>
          <Link
            href="/admissions"
            className="group inline-flex items-center justify-center space-x-3 bg-accent text-zinc-900 px-8 sm:px-12 py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold hover:bg-accent-light transition-all duration-300 shadow-2xl hover:shadow-accent/50 transform hover:-translate-y-1 mx-auto"
          >
            <span>Apply for Admission</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
