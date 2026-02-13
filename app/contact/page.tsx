"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Twitter, Instagram, Youtube } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    const contactInfo = [
        { icon: MapPin, title: "Address", content: "78, Wazidpur Road, Narora\nBulandshahr, Uttar Pradesh\nIndia" },
        { icon: Phone, title: "Phone", content: "+91 93194 97275\n+91 92112 85756" },
        { icon: Mail, title: "Email", content: "vsmsnarora@gmail.com" },
        { icon: Clock, title: "Office Hours", content: "Mon - Sat: 8:00 AM - 3:00 PM\nSunday: Closed" },
    ];

    const socials = [
        { icon: Phone, href: "tel:+919319497275", label: "Call Us" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Youtube, href: "#", label: "YouTube" },
    ];

    return (
        <div className="w-full bg-zinc-50 pt-32">
            <section className="relative py-20 bg-gradient-to-br from-primary via-primary-dark to-primary">
                <div className="max-w-7xl mx-auto px-4 text-center text-white">
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6">
                        Contact Us
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-base sm:text-lg md:text-xl text-zinc-200 max-w-2xl mx-auto px-4">
                        We'd love to hear from you. Get in touch with us for any inquiries.
                    </motion.p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 className="text-2xl sm:text-3xl font-display font-bold text-zinc-900 mb-6 sm:mb-8">Get in Touch</h2>
                            <div className="space-y-6">
                                {contactInfo.map((info) => (
                                    <div key={info.title} className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <info.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-zinc-900 mb-1">{info.title}</h3>
                                            <p className="text-zinc-600 whitespace-pre-line">{info.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8">
                                <h3 className="font-bold text-zinc-900 mb-4">Follow Us</h3>
                                <div className="flex space-x-4">
                                    {socials.map((s) => (
                                        <a key={s.label} href={s.href} className="w-10 h-10 bg-zinc-100 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center text-zinc-600 transition-all">
                                            <s.icon className="h-5 w-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <div className="bg-white rounded-3xl shadow-xl p-8">
                                <h2 className="text-2xl font-display font-bold text-zinc-900 mb-6">Send us a Message</h2>
                                {submitted ? (
                                    <div className="text-center py-12">
                                        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                                        <h3 className="text-xl font-bold text-zinc-900 mb-2">Message Sent!</h3>
                                        <p className="text-zinc-600">We'll get back to you soon.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <input type="text" placeholder="Your Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                                            <input type="email" placeholder="Email Address" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                                            <select value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                                                <option value="">Select Subject</option>
                                                <option value="admissions">Admissions</option>
                                                <option value="academics">Academics</option>
                                                <option value="fees">Fees & Payments</option>
                                                <option value="general">General Inquiry</option>
                                            </select>
                                        </div>
                                        <textarea placeholder="Your Message" rows={5} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" />
                                        <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center space-x-2">
                                            <Send className="h-5 w-5" />
                                            <span>Send Message</span>
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6 sm:mb-8">
                        <h2 className="text-2xl sm:text-3xl font-display font-bold text-zinc-900">Find Us</h2>
                    </motion.div>
                    <div className="rounded-2xl overflow-hidden shadow-xl h-[400px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.5!2d78.3811639!3d28.1866326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390b34a8f4d14989%3A0xec05ad21d2282409!2sV%20S%20M%20SCHOOL%20NARORA!5e0!3m2!1sen!2sin!4v1707900000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="VSM School Narora Location"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
