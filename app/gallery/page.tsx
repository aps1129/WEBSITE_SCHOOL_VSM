"use client";

import { motion } from "framer-motion";
import { Camera, Clock } from "lucide-react";

export default function GalleryPage() {
    return (
        <div className="w-full bg-zinc-50 pt-32">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-primary via-primary-dark to-primary">
                <div className="max-w-7xl mx-auto px-4 text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6"
                    >
                        Photo Gallery
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl text-zinc-200 max-w-2xl mx-auto px-4"
                    >
                        Capturing moments of learning, celebration, and achievement
                    </motion.p>
                </div>
            </section>

            {/* Coming Soon Section */}
            <section className="py-24 sm:py-32 lg:py-40">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        {/* Icon */}
                        <div className="relative mx-auto mb-8 w-28 h-28 sm:w-32 sm:h-32">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl animate-pulse" />
                            <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl flex items-center justify-center border border-primary/10">
                                <Camera className="h-12 w-12 sm:h-14 sm:w-14 text-primary" />
                            </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-zinc-900 mb-4">
                            Coming Soon
                        </h2>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-zinc-600 max-w-lg mx-auto leading-relaxed mb-8">
                            We're curating the best moments from our campus, events, and activities.
                            Our photo gallery will be available shortly with a collection of memories
                            from VSM School.
                        </p>

                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2.5 bg-amber-50 text-amber-700 px-5 py-2.5 rounded-full text-sm font-medium border border-amber-200">
                            <Clock className="h-4 w-4" />
                            <span>Gallery photos being updated</span>
                            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
