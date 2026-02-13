"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Award,
    FileText,
    Building2,
    Flame,
    UtensilsCrossed,
    ShieldCheck,
    Download,
    ExternalLink,
    ChevronRight,
    X,
    ZoomIn,
    AlertCircle,
    CheckCircle2,
} from "lucide-react";
import Image from "next/image";

type TabId =
    | "cbse"
    | "land"
    | "society"
    | "fire"
    | "food"
    | "safety";

interface TabData {
    id: TabId;
    label: string;
    icon: React.ElementType;
    description: string;
    status: "available" | "pending";
    content: TabContent;
}

interface TabContent {
    type: "images" | "pdf" | "placeholder";
    title: string;
    subtitle: string;
    files?: { name: string; url: string }[];
    images?: { src: string; alt: string }[];
    placeholderMessage?: string;
    showOnlyFirstPage?: boolean;
}

const tabs: TabData[] = [
    {
        id: "cbse",
        label: "CBSE Affiliation",
        icon: Award,
        description: "CBSE Board affiliation certificate and details",
        status: "available",
        content: {
            type: "images",
            title: "CBSE Affiliation Certificate",
            subtitle:
                "Official CBSE Board affiliation documents for VSM School, Narora (Affiliation No: 2132918)",
            images: [
                {
                    src: "/documents/CBSE Affiliation - 1.jpg",
                    alt: "CBSE Affiliation Certificate - Page 1",
                },
                {
                    src: "/documents/CBSE Affiliation - 2.jpg",
                    alt: "CBSE Affiliation Certificate - Page 2",
                },
            ],
        },
    },
    {
        id: "land",
        label: "Land Certificate",
        icon: FileText,
        description: "Land ownership and certification documents",
        status: "available",
        content: {
            type: "pdf",
            title: "Land Certificate",
            subtitle:
                "Official land ownership and certification document for the school premises",
            files: [
                {
                    name: "Land Certificate.pdf",
                    url: "/documents/Land Certificate.pdf",
                },
            ],
        },
    },
    {
        id: "society",
        label: "Society Registration",
        icon: Building2,
        description: "Society registration certificate",
        status: "available",
        content: {
            type: "pdf",
            title: "Society Registration Certificate",
            subtitle:
                "Official society registration document under the Societies Registration Act",
            files: [
                {
                    name: "Society Registration.pdf",
                    url: "/documents/Society-1.pdf",
                },
            ],

        },
    },
    {
        id: "fire",
        label: "Fire Certificate",
        icon: Flame,
        description: "Fire safety and NOC certificate",
        status: "pending",
        content: {
            type: "placeholder",
            title: "Fire Safety Certificate",
            subtitle: "Fire department NOC and safety compliance certificate",
            placeholderMessage:
                "The Fire Safety Certificate will be uploaded shortly. Please check back later for the updated document.",
        },
    },
    {
        id: "food",
        label: "Food Certificate",
        icon: UtensilsCrossed,
        description: "FSSAI food safety license and certificate",
        status: "pending",
        content: {
            type: "placeholder",
            title: "Food Safety Certificate",
            subtitle: "FSSAI food safety and hygiene compliance certificate",
            placeholderMessage:
                "The Food Safety Certificate (FSSAI) will be uploaded shortly. Please check back later for the updated document.",
        },
    },
    {
        id: "safety",
        label: "Safety Certificate",
        icon: ShieldCheck,
        description: "Building safety and structural compliance certificate",
        status: "pending",
        content: {
            type: "placeholder",
            title: "Safety Certificate",
            subtitle:
                "Building safety, structural integrity, and compliance certificate",
            placeholderMessage:
                "The Safety Certificate will be uploaded shortly. Please check back later for the updated document.",
        },
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        },
    },
};

/* ── Lightbox for images ───────────────────────────────────────── */
function Lightbox({
    src,
    alt,
    onClose,
}: {
    src: string;
    alt: string;
    onClose: () => void;
}) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-5xl w-full max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                    aria-label="Close lightbox"
                >
                    <X className="h-7 w-7" />
                </button>
                <div className="relative w-full h-[80vh] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-contain bg-white"
                        sizes="(max-width: 1024px) 100vw, 80vw"
                    />
                </div>
                <p className="text-center text-white/70 text-sm mt-4">{alt}</p>
            </motion.div>
        </motion.div>
    );
}

/* ── Content renderers ─────────────────────────────────────────── */
function ImageContent({ content }: { content: TabContent }) {
    const [lightboxImage, setLightboxImage] = useState<{
        src: string;
        alt: string;
    } | null>(null);

    return (
        <>
            <AnimatePresence>
                {lightboxImage && (
                    <Lightbox
                        src={lightboxImage.src}
                        alt={lightboxImage.alt}
                        onClose={() => setLightboxImage(null)}
                    />
                )}
            </AnimatePresence>

            <div className="space-y-6">
                <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full">
                        Document Available
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {content.images?.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.15, duration: 0.4 }}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-zinc-100 cursor-pointer"
                            onClick={() =>
                                setLightboxImage({ src: image.src, alt: image.alt })
                            }
                        >
                            <div className="relative aspect-[3/4] w-full">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-contain p-4 group-hover:scale-[1.02] transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-white text-sm font-medium bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                        {image.alt}
                                    </span>
                                    <span className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                                        <ZoomIn className="h-4 w-4 text-zinc-700" />
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Download links */}
                <div className="flex flex-wrap gap-3 pt-2">
                    {content.images?.map((image, index) => (
                        <a
                            key={index}
                            href={image.src}
                            download
                            className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary/5 hover:bg-primary/10 text-primary rounded-xl text-sm font-medium transition-colors duration-200 border border-primary/10"
                        >
                            <Download className="h-4 w-4" />
                            Download Page {index + 1}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}

function PDFContent({ content }: { content: TabContent }) {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full">
                    Document Available
                </span>
            </div>

            {content.files?.map((file, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="space-y-4"
                >
                    {/* Embedded PDF Viewer */}
                    <div className="rounded-2xl overflow-hidden border border-zinc-200 shadow-lg bg-white">
                        <div className="bg-zinc-100 px-4 py-3 flex items-center justify-between border-b border-zinc-200">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center">
                                    <FileText className="h-4 w-4 text-red-600" />
                                </div>
                                <span className="text-sm font-medium text-zinc-700">
                                    {file.name}
                                </span>
                            </div>
                            <div className="flex gap-2">
                                <a
                                    href={file.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white hover:bg-zinc-50 text-zinc-700 rounded-lg border border-zinc-200 transition-colors"
                                >
                                    <ExternalLink className="h-3.5 w-3.5" />
                                    Open
                                </a>
                                <a
                                    href={file.url}
                                    download
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
                                >
                                    <Download className="h-3.5 w-3.5" />
                                    Download
                                </a>
                            </div>
                        </div>
                        {content.showOnlyFirstPage ? (
                            <div className="relative w-full h-[400px] sm:h-[600px] lg:h-[800px] overflow-hidden">
                                <iframe
                                    src={`${file.url}#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                                    className="w-full h-[400px] sm:h-[600px] lg:h-[800px] pointer-events-none"
                                    title={file.name}
                                    style={{ clipPath: "inset(0 0 0 0)" }}
                                />
                            </div>
                        ) : (
                            <iframe
                                src={file.url}
                                className="w-full h-[600px] sm:h-[700px] lg:h-[800px]"
                                title={file.name}
                            />
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

function PlaceholderContent({ content }: { content: TabContent }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center justify-center py-16 sm:py-20"
        >
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-amber-50 rounded-3xl flex items-center justify-center mb-6 ring-4 ring-amber-100">
                <AlertCircle className="h-10 w-10 sm:h-12 sm:w-12 text-amber-500" />
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-zinc-800 mb-3 text-center">
                Coming Soon
            </h3>
            <p className="text-zinc-500 text-center max-w-md leading-relaxed text-sm sm:text-base">
                {content.placeholderMessage}
            </p>
            <div className="mt-6 flex items-center gap-2 text-amber-600 bg-amber-50 px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                Pending Upload
            </div>
        </motion.div>
    );
}

/* ── Main Page Component ───────────────────────────────────────── */
export default function MandatoryPublicDisclosurePage() {
    const [activeTab, setActiveTab] = useState<TabId>("cbse");
    const activeTabData = tabs.find((t) => t.id === activeTab)!;

    return (
        <div className="w-full bg-zinc-50 pt-32">
            {/* Hero Section */}
            <section className="relative py-16 sm:py-20 bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center text-white"
                    >
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white/90 mb-6 border border-white/10">
                            <ShieldCheck className="h-4 w-4" />
                            As per CBSE Guidelines
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6">
                            Mandatory Public Disclosure
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-200 max-w-3xl mx-auto leading-relaxed">
                            Transparency is a cornerstone of our institution. Access all
                            mandatory certificates and compliance documents as required by
                            CBSE.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 sm:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="grid grid-cols-1 lg:grid-cols-[320px_1fr] xl:grid-cols-[360px_1fr] gap-6 lg:gap-8"
                    >
                        {/* Sidebar Tabs */}
                        <motion.div
                            variants={itemVariants}
                            className="lg:sticky lg:top-32 lg:self-start"
                        >
                            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-zinc-100 overflow-hidden">
                                <div className="p-4 sm:p-5 bg-gradient-to-r from-primary/5 to-transparent border-b border-zinc-100">
                                    <h2 className="font-display font-bold text-zinc-900 text-base sm:text-lg">
                                        Document Categories
                                    </h2>
                                    <p className="text-zinc-500 text-xs sm:text-sm mt-1">
                                        Select a category to view documents
                                    </p>
                                </div>

                                <nav className="p-2 sm:p-3 space-y-1">
                                    {tabs.map((tab) => {
                                        const Icon = tab.icon;
                                        const isActive = activeTab === tab.id;

                                        return (
                                            <button
                                                key={tab.id}
                                                onClick={() => setActiveTab(tab.id)}
                                                id={`tab-${tab.id}`}
                                                className={`w-full flex items-center gap-3 px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl text-left transition-all duration-200 group ${isActive
                                                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                                                    : "text-zinc-700 hover:bg-zinc-50"
                                                    }`}
                                            >
                                                <div
                                                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${isActive
                                                        ? "bg-white/20"
                                                        : "bg-primary/5 group-hover:bg-primary/10"
                                                        }`}
                                                >
                                                    <Icon
                                                        className={`h-4 w-4 sm:h-5 sm:w-5 ${isActive
                                                            ? "text-white"
                                                            : "text-primary"
                                                            }`}
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-semibold text-sm truncate">
                                                            {tab.label}
                                                        </span>
                                                    </div>
                                                    <span
                                                        className={`text-xs mt-0.5 block truncate ${isActive
                                                            ? "text-white/70"
                                                            : "text-zinc-400"
                                                            }`}
                                                    >
                                                        {tab.description}
                                                    </span>
                                                </div>
                                                <ChevronRight
                                                    className={`h-4 w-4 flex-shrink-0 transition-transform ${isActive
                                                        ? "text-white/60 translate-x-0"
                                                        : "text-zinc-300 -translate-x-1 group-hover:translate-x-0"
                                                        }`}
                                                />
                                            </button>
                                        );
                                    })}
                                </nav>
                            </div>
                        </motion.div>

                        {/* Content Area */}
                        <motion.div variants={itemVariants}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-zinc-100 overflow-hidden"
                                >
                                    {/* Content Header */}
                                    <div className="p-6 sm:p-8 border-b border-zinc-100 bg-gradient-to-r from-zinc-50/50 to-transparent">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                                                <activeTabData.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                                            </div>
                                            <div>
                                                <h2 className="text-xl sm:text-2xl font-display font-bold text-zinc-900">
                                                    {activeTabData.content.title}
                                                </h2>
                                                <p className="text-zinc-500 text-sm sm:text-base mt-1 leading-relaxed">
                                                    {activeTabData.content.subtitle}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Body */}
                                    <div className="p-6 sm:p-8">
                                        {activeTabData.content.type === "images" && (
                                            <ImageContent content={activeTabData.content} />
                                        )}
                                        {activeTabData.content.type === "pdf" && (
                                            <PDFContent content={activeTabData.content} />
                                        )}
                                        {activeTabData.content.type === "placeholder" && (
                                            <PlaceholderContent content={activeTabData.content} />
                                        )}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Info Banner */}
            <section className="pb-16 sm:pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary/5 via-primary/3 to-accent/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-primary/10"
                    >
                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                                <ShieldCheck className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-zinc-900 text-lg mb-2">
                                    Commitment to Transparency
                                </h3>
                                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                                    As per CBSE guidelines, all affiliated schools are required to
                                    mandatorily display key documents on their website. VSM School
                                    is committed to complete transparency and compliance. If you
                                    require any additional information or documents, please feel
                                    free to{" "}
                                    <a
                                        href="/contact"
                                        className="text-primary font-medium hover:underline"
                                    >
                                        contact us
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
