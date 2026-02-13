import Link from "next/link";
import { Phone, Instagram, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Admissions", href: "/admissions" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
    { name: "Mandatory Public Disclosure", href: "/mandatory-public-disclosure" },
  ];

  const socialLinks = [
    { icon: Phone, href: "tel:+919319497275", label: "Call" },
    { icon: Instagram, href: "https://www.instagram.com/v.s.m_school_narora_?igsh=eHo1ZTh3bXlodW81", label: "Instagram" },
    { icon: Mail, href: "mailto:vsmsnarora@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-zinc-900 text-zinc-300 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          {/* School Info */}
          <div className="space-y-4">
            <Logo textWhite />
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Empowering minds and shaping futures with excellence in education, character building, and holistic development.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target={social.label !== "Email" ? "_blank" : undefined}
                    rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                    className="w-10 h-10 rounded-lg bg-zinc-800/50 hover:bg-accent/20 flex items-center justify-center text-zinc-400 hover:text-accent transition-all duration-200 hover:scale-110"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="sm:col-span-1">
            <h3 className="text-white text-base sm:text-lg font-display font-bold mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-accent transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-accent group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-white text-base sm:text-lg font-display font-bold mb-4 sm:mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm text-zinc-400 leading-relaxed">
                  78, Wazidpur Road, Narora<br />
                  Bulandshahr, Uttar Pradesh, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <a
                  href="tel:+919319497275"
                  className="text-sm text-zinc-400 hover:text-accent transition-colors duration-200"
                >
                  +91 93194 97275<br />+91 92112 85756
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <a
                  href="mailto:vsmsnarora@gmail.com"
                  className="text-sm text-zinc-400 hover:text-accent transition-colors duration-200 break-all"
                >
                  vsmsnarora@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-800 pt-8 text-center">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} VSM School, Narora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
