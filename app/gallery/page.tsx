"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, Building, Trophy, Sparkles, GraduationCap } from "lucide-react";

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const categories = [
        { id: "all", name: "All" },
        { id: "campus", name: "Campus" },
        { id: "events", name: "Events" },
        { id: "sports", name: "Sports" },
        { id: "academics", name: "Academics" },
    ];

    const items = [
        { id: 1, category: "campus", title: "Main Building", color: "from-blue-400 to-blue-600" },
        { id: 2, category: "campus", title: "School Entrance", color: "from-green-400 to-green-600" },
        { id: 3, category: "events", title: "Annual Day 2026", color: "from-purple-400 to-purple-600" },
        { id: 4, category: "sports", title: "Sports Day", color: "from-orange-400 to-orange-600" },
        { id: 5, category: "academics", title: "Science Lab", color: "from-cyan-400 to-cyan-600" },
        { id: 6, category: "campus", title: "Computer Lab", color: "from-indigo-400 to-indigo-600" },
        { id: 7, category: "events", title: "Independence Day", color: "from-amber-400 to-amber-600" },
        { id: 8, category: "sports", title: "Cricket Match", color: "from-emerald-400 to-emerald-600" },
        { id: 9, category: "academics", title: "Classroom", color: "from-rose-400 to-rose-600" },
        { id: 10, category: "campus", title: "Library", color: "from-violet-400 to-violet-600" },
        { id: 11, category: "events", title: "Republic Day", color: "from-teal-400 to-teal-600" },
        { id: 12, category: "sports", title: "Yoga Day", color: "from-pink-400 to-pink-600" },
    ];

    const filtered = selectedCategory === "all" ? items : items.filter(i => i.category === selectedCategory);

    return (
        <div className="w-full bg-zinc-50 pt-32">
            <section className="relative py-20 bg-gradient-to-br from-primary via-primary-dark to-primary">
                <div className="max-w-7xl mx-auto px-4 text-center text-white">
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6">
                        Photo Gallery
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-base sm:text-lg md:text-xl text-zinc-200 max-w-2xl mx-auto px-4">
                        Capturing moments of learning, celebration, and achievement
                    </motion.p>
                </div>
            </section>

            <section className="py-6 sm:py-8 bg-white sticky top-0 z-30 border-b">
                <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-2 sm:gap-3">
                    {categories.map(cat => (
                        <button key={cat.id} onClick={() => setSelectedCategory(cat.id)}
                            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all ${selectedCategory === cat.id ? "bg-primary text-white" : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"}`}>
                            {cat.name}
                        </button>
                    ))}
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                        {filtered.map((item, idx) => (
                            <motion.div key={item.id} whileHover={{ scale: 1.03 }} onClick={() => { setCurrentIndex(idx); setLightboxOpen(true); }}
                                className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group shadow-lg">
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 text-white text-center p-2 sm:p-4">
                                        <ImageIcon className="h-5 w-5 sm:h-8 sm:w-8 mx-auto mb-1 sm:mb-2" />
                                        <p className="font-bold text-sm sm:text-base">{item.title}</p>
                                    </div>
                                </div>
                                <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white/90 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold capitalize">{item.category}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {lightboxOpen && (
                <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={() => setLightboxOpen(false)}>
                    <button onClick={() => setLightboxOpen(false)} className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white z-10"><X className="h-6 w-6 sm:h-8 sm:w-8" /></button>
                    <button onClick={(e) => { e.stopPropagation(); setCurrentIndex((currentIndex - 1 + filtered.length) % filtered.length); }} className="absolute left-2 sm:left-6 text-white z-10"><ChevronLeft className="h-8 w-8 sm:h-12 sm:w-12" /></button>
                    <div className={`w-full max-w-[90vw] sm:w-[80vw] h-[50vh] sm:h-[70vh] bg-gradient-to-br ${filtered[currentIndex]?.color} rounded-xl sm:rounded-2xl flex items-center justify-center`} onClick={e => e.stopPropagation()}>
                        <div className="text-center text-white">
                            <ImageIcon className="h-12 w-12 sm:h-16 md:h-20 sm:w-16 md:w-20 mx-auto mb-2 sm:mb-4 opacity-80" />
                            <p className="text-lg sm:text-xl md:text-2xl font-bold">{filtered[currentIndex]?.title}</p>
                        </div>
                    </div>
                    <button onClick={(e) => { e.stopPropagation(); setCurrentIndex((currentIndex + 1) % filtered.length); }} className="absolute right-2 sm:right-6 text-white z-10"><ChevronRight className="h-8 w-8 sm:h-12 sm:w-12" /></button>
                    <div className="absolute bottom-4 sm:bottom-6 text-white text-xs sm:text-sm">{currentIndex + 1} / {filtered.length}</div>
                </div>
            )}
        </div>
    );
}
