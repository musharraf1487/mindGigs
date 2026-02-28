/**
 * LandingBoard - Marketing landing page for mindGigs
 * "Join as an Expert" navigates to LandingPage (home)
 */

import React from 'react';
import {
    Check,
    PhoneCall,
    Users,
    MessageSquare,
    Download,
    CheckCircle2,
    ArrowRight,
    Star,
    Zap,
    Clock,
    ShieldCheck,
    TrendingUp,
    Sparkles,
    Briefcase,
    Code2,
    Scale,
    Palette,
    Megaphone,
    UserCheck,
    BookOpen,
    Presentation,
    Video,
    Menu,
    X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const EXPERTS = [
    {
        id: 1,
        name: "Sarah Chen",
        role: "Ex-Google Product Lead",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop",
        expertise: ["Product Strategy", "Scaling Teams", "B2B SaaS"],
        price: "$250/30min",
        rating: 4.9,
        reviews: 124
    },
    {
        id: 2,
        name: "Marcus Thorne",
        role: "Serial Founder & Exit Expert",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=400&auto=format&fit=crop",
        expertise: ["Fundraising", "M&A", "Startup Operations"],
        price: "$400/30min",
        rating: 5.0,
        reviews: 89
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        role: "Growth Marketing Director",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=400&auto=format&fit=crop",
        expertise: ["Performance Marketing", "Brand Positioning", "CRO"],
        price: "$180/30min",
        rating: 4.8,
        reviews: 215
    },
    {
        id: 4,
        name: "David Park",
        role: "Venture Capital Partner",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&auto=format&fit=crop",
        expertise: ["Investment Strategy", "Pitch Deck Review", "Market Analysis"],
        price: "$300/30min",
        rating: 4.9,
        reviews: 56
    }
];

const SERVICES = [
    {
        category: "Consultants",
        icon: Briefcase,
        description: "Strategic guidance to navigate complex business challenges and drive sustainable growth.",
        items: [
            "Business Strategy Development",
            "Growth & Scaling Plans",
            "Market Research & Analysis",
            "Operations Optimization",
            "Financial Planning & Forecasting"
        ]
    },
    {
        category: "Developers",
        icon: Code2,
        description: "Technical expertise to build robust, scalable digital products and automate your systems.",
        items: [
            "Website Development",
            "Mobile App Development",
            "SaaS/Product Development",
            "E-commerce Setup",
            "API Integration & System Automation"
        ]
    },
    {
        category: "Lawyers",
        icon: Scale,
        description: "Professional legal support to protect your interests and ensure full business compliance.",
        items: [
            "Legal Consultation",
            "Contract Drafting & Review",
            "Business Registration & Compliance",
            "Intellectual Property Protection",
            "Dispute Resolution"
        ]
    },
    {
        category: "Designers",
        icon: Palette,
        description: "Creative vision to define your brand identity and craft exceptional user experiences.",
        items: [
            "Brand Identity & Logo Design",
            "UI/UX Design",
            "Website & App Design",
            "Marketing Creatives",
            "Design Systems"
        ]
    },
    {
        category: "Marketers",
        icon: Megaphone,
        description: "Data-driven strategies to amplify your brand voice and capture market share.",
        items: [
            "Digital Marketing Strategy",
            "SEO Optimization",
            "Social Media Marketing",
            "Paid Advertising Campaigns",
            "Content Marketing"
        ]
    },
    {
        category: "Coaches",
        icon: UserCheck,
        description: "Personalized mentorship to unlock your potential and lead with absolute clarity.",
        items: [
            "Career Coaching",
            "Business Coaching",
            "Leadership Coaching",
            "Executive Mentoring",
            "Productivity & Mindset Coaching"
        ]
    }
];

const CTA_SERVICES = [
    { title: "Advisory Session", icon: Users, desc: "Strategic long-term guidance." },
    { title: "1:1 Paid Calls", icon: PhoneCall, desc: "Focused decision support." },
    { title: "Expert-Led Communities", icon: MessageSquare, desc: "Direct access to peer networks." },
    { title: "Digital Products", icon: Download, desc: "Playbooks and frameworks." },
    { title: "Training", icon: BookOpen, desc: "Structured skill building." },
    { title: "Workshops", icon: Presentation, desc: "Interactive group sessions." },
];

const SUBSCRIPTIONS = [
    {
        title: "AI Insiders Community",
        desc: "Monthly WhatsApp group with exclusive AI insights and networking",
        price: "49",
        features: [
            "Weekly AI insights and trends",
            "Private community access",
            "Monthly Q&A sessions",
            "Exclusive templates and resources"
        ],
        icon: MessageSquare,
        color: "lb-color-green",
        expertId: 8
    },
    {
        title: "AI Pro Network",
        desc: "Advanced networking and live workshops for AI practitioners",
        price: "99",
        features: [
            "Everything in Insiders",
            "Monthly Live Strategy Workshop",
            "Case Study Breakdowns",
            "Direct Expert Feedback",
            "Priority Q&A"
        ],
        icon: Zap,
        color: "lb-color-blue",
        popular: true,
        expertId: 2
    },
    {
        title: "Strategic Advisory Access",
        desc: "For serious professionals who want personalized guidance.",
        price: "199",
        features: [
            "Everything in Pro Practice",
            "Small-group advisory calls",
            "Personalized growth roadmap",
            "Direct expert feedback",
            "Quarterly performance review"
        ],
        icon: ShieldCheck,
        color: "lb-color-purple",
        expertId: 1
    }
];

export function LandingBoard({ nav, onLogin }) {
    const [activeCtaIndex, setActiveCtaIndex] = React.useState(0);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setActiveCtaIndex((prev) => (prev + 1) % CTA_SERVICES.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const handleJoinAsExpert = () => {
        setIsMenuOpen(false);
        nav('home');
    };

    const handleBecomePartner = () => {
        setIsMenuOpen(false);
        nav('login', { role: 'affiliate' });
    };

    return (
        <div className="lb-root">
            {/* Navbar */}
            <nav className="lb-nav">
                <div className="lb-nav-inner">
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="lb-brand"
                    >
                        mindGigs
                    </button>

                    <div className="lb-nav-links">
                        <a href="#lb-why" className="lb-nav-link">Why Us</a>
                        <a href="#lb-how" className="lb-nav-link">How it Works</a>
                        <a href="#lb-experts" className="lb-nav-link">Experts</a>
                        <a href="#lb-subscriptions" className="lb-nav-link">Pricing</a>
                    </div>

                    <div className="lb-nav-actions">
                        <button
                            className="lb-btn-join lb-hidden-sm"
                            onClick={handleJoinAsExpert}
                        >
                            Join as an Expert
                        </button>
                        <button
                            onClick={onLogin}
                            className="lb-btn-login"
                        >
                            Login
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lb-menu-toggle"
                        >
                            {isMenuOpen ? <X style={{ width: 24, height: 24 }} /> : <Menu style={{ width: 24, height: 24 }} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lb-mobile-menu"
                        >
                            <div className="lb-mobile-menu-inner">
                                <a href="#lb-why" onClick={() => setIsMenuOpen(false)} className="lb-mobile-link">Why Us</a>
                                <a href="#lb-how" onClick={() => setIsMenuOpen(false)} className="lb-mobile-link">How it Works</a>
                                <a href="#lb-experts" onClick={() => setIsMenuOpen(false)} className="lb-mobile-link">Experts</a>
                                <a href="#lb-subscriptions" onClick={() => setIsMenuOpen(false)} className="lb-mobile-link">Pricing</a>
                                <hr className="lb-divider" />
                                <button className="lb-btn-join-full" onClick={handleJoinAsExpert}>
                                    Join as an Expert
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Hero Section */}
            <section className="lb-hero">
                <div className="lb-hero-bg-wrap">
                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                        alt="Engaging Group Strategic Session"
                        className="lb-hero-img"
                        referrerPolicy="no-referrer"
                    />
                    <div className="lb-hero-overlay" />
                </div>

                <div className="lb-hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="lb-hero-title">
                            Access Proven Expertise. <br />
                            <span className="lb-hero-accent">On Demand.</span>
                        </h1>
                        <p className="lb-hero-sub">
                            Connect with experienced professionals for private consultations, structured advisory, expert-led communities, and premium digital resources.
                        </p>
                        <div className="lb-hero-badges">
                            <span className="lb-hero-badge"><CheckCircle2 className="lb-badge-icon" /> Proven Expertise</span>
                            <span className="lb-hero-badge"><CheckCircle2 className="lb-badge-icon" /> Strategic Insight</span>
                            <span className="lb-hero-badge"><CheckCircle2 className="lb-badge-icon" /> Measurable Impact</span>
                        </div>
                        <div className="lb-hero-cta">
                            <button className="lb-btn-primary" onClick={() => nav('experts')}>
                                Browse Experts <ArrowRight className="lb-btn-icon" />
                            </button>
                        </div>
                    </motion.div>
                </div>

                <div className="lb-hero-blur-bottom" />
            </section>

            {/* How It Works */}
            <section id="lb-how" className="lb-section lb-section-white lb-how">
                <div className="lb-blob lb-blob-tl" />
                <div className="lb-blob lb-blob-br" />

                <div className="lb-container lb-rel">
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lb-section-header"
                    >
                        <h2 className="lb-section-title">How It Works</h2>
                    </motion.div>
                    <div className="lb-how-grid">
                        {[
                            { step: "01", title: "Select the right expert", desc: "Browse through our curated list of proven practitioners." },
                            { step: "02", title: "Choose your format", desc: "Select from 1:1 calls, advisory, or community access." },
                            { step: "03", title: "Book and move forward", desc: "Get the clarity you need to execute with confidence." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                whileHover={{ y: -20, scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="lb-how-card"
                            >
                                <div className="lb-how-step">{item.step}</div>
                                <h3 className="lb-how-card-title">{item.title}</h3>
                                <p className="lb-how-card-desc">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Slider */}
            <section id="lb-services" className="lb-section lb-section-white lb-services">
                <div className="lb-blob lb-blob-tr" />
                <div className="lb-container lb-rel">
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lb-services-header"
                    >
                        <h2 className="lb-section-title">Our Specialized Services</h2>
                        <p className="lb-section-sub">Direct access to elite practitioners across every critical business function.</p>
                    </motion.div>

                    <Swiper
                        modules={[Pagination, Autoplay, Navigation, EffectCoverflow]}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={1}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: false,
                        }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        autoplay={{ delay: 6000, disableOnInteraction: false }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="lb-services-swiper"
                    >
                        {SERVICES.map((service, i) => (
                            <SwiperSlide key={i}>
                                <div className="lb-service-card">
                                    <div className="lb-service-icon-wrap">
                                        <service.icon className="lb-service-icon" />
                                    </div>
                                    <h3 className="lb-service-title">{service.category}</h3>
                                    <p className="lb-service-desc">{service.description}</p>
                                    <div className="lb-service-items">
                                        {service.items.map((item, idx) => (
                                            <button key={idx} className="lb-service-item">
                                                <div className="lb-service-dot" />
                                                <span>{item}</span>
                                            </button>
                                        ))}
                                    </div>
                                    <button className="lb-service-cta">
                                        Find {service.category} <ArrowRight style={{ width: 20, height: 20 }} />
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Strategic Support CTA */}
            <section className="lb-section lb-cta-section">
                <div className="lb-container">
                    <div className="lb-cta-card">
                        {/* Left */}
                        <div className="lb-cta-left">
                            <h2 className="lb-cta-title">Need Strategic Support to Grow?</h2>
                            <p className="lb-cta-sub">Get matched with the right expert to keep building and marketing your project.</p>
                            <button className="lb-btn-white" onClick={() => nav('experts')}>Find an expert</button>
                        </div>

                        {/* Right graphic */}
                        <div className="lb-cta-right">
                            <div className="lb-cta-blob lb-cta-blob-1" />
                            <div className="lb-cta-blob lb-cta-blob-2" />

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                className="lb-cta-widget"
                            >
                                <div className="lb-cta-dots">
                                    <div className="lb-dot" />
                                    <div className="lb-dot" />
                                    <div className="lb-dot" />
                                </div>

                                <div className="lb-cta-services-wrap">
                                    <div className="lb-cta-services-inner">
                                        {CTA_SERVICES.map((service, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                                animate={{
                                                    opacity: activeCtaIndex === idx ? 1 : 0,
                                                    y: activeCtaIndex === idx ? 0 : 20,
                                                    scale: activeCtaIndex === idx ? 1 : 0.9,
                                                    zIndex: activeCtaIndex === idx ? 20 : 0
                                                }}
                                                transition={{ duration: 0.5 }}
                                                className="lb-cta-service-item"
                                            >
                                                <div className="lb-cta-service-icon-wrap">
                                                    <service.icon className="lb-cta-service-icon" />
                                                </div>
                                                <div>
                                                    <h4 className="lb-cta-service-title">{service.title}</h4>
                                                    <p className="lb-cta-service-desc">{service.desc}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="lb-cta-indicators">
                                        {CTA_SERVICES.map((_, idx) => (
                                            <div
                                                key={idx}
                                                className={`lb-cta-dot ${activeCtaIndex === idx ? 'lb-cta-dot-active' : ''}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="lb-float-icon lb-float-top"
                            >
                                <PhoneCall style={{ width: 32, height: 32, color: 'rgba(255,255,255,0.4)' }} />
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="lb-float-icon lb-float-bottom"
                            >
                                <Presentation style={{ width: 32, height: 32, color: 'rgba(255,255,255,0.4)' }} />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Subscriptions */}
            <section id="lb-subscriptions" className="lb-section lb-section-white">
                <div className="lb-container">
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lb-subs-header"
                    >
                        <h2 className="lb-section-title">Subscriptions</h2>
                    </motion.div>
                    <div className="lb-subs-grid">
                        {SUBSCRIPTIONS.map((plan, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -15, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="lb-sub-card"
                            >
                                {plan.popular && (
                                    <div className="lb-popular-badge">Popular</div>
                                )}
                                <div className="lb-sub-header">
                                    <div className="lb-sub-icon-wrap">
                                        <plan.icon className="lb-sub-icon" />
                                    </div>
                                    <div>
                                        <h3 className="lb-sub-title">{plan.title}</h3>
                                        <p className="lb-sub-desc">{plan.desc}</p>
                                    </div>
                                </div>
                                <div className="lb-sub-features">
                                    {plan.features.map((feature, idx) => (
                                        <div key={idx} className="lb-sub-feature">
                                            <div className="lb-sub-check">
                                                <Check style={{ width: 12, height: 12, color: 'white' }} />
                                            </div>
                                            <span className="lb-sub-feature-text">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="lb-sub-footer">
                                    <div>
                                        <div className="lb-sub-price">
                                            <span className="lb-sub-price-num">${plan.price}</span>
                                            <span className="lb-sub-price-period">/ month</span>
                                        </div>
                                        <p className="lb-sub-price-label">per month</p>
                                    </div>
                                    <button
                                        className="lb-btn-subscribe"
                                        onClick={() => nav('public-profile', { expertId: plan.expertId })}
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Affiliate Advantage */}
            <section id="lb-affiliate" className="lb-section lb-section-white">
                <div className="lb-container lb-affiliate-layout">
                    <div className="lb-affiliate-left">
                        <h2 className="lb-section-title">Affiliate-Driven Growth Model</h2>
                        <p className="lb-affiliate-sub">
                            Unlike traditional platforms that rely primarily on paid advertising, mindGigs operates on a revenue-sharing model designed for alignment.
                        </p>
                        <div className="lb-affiliate-stats">
                            <div className="lb-affiliate-stat">
                                <div className="lb-aff-pct">20%</div>
                                <p>Lifetime commission on direct referrals</p>
                            </div>
                            <div className="lb-affiliate-stat">
                                <div className="lb-aff-pct">5%</div>
                                <p>Commission on second-tier referrals</p>
                            </div>
                        </div>
                        <button className="lb-btn-primary-sm" onClick={handleBecomePartner}>Become a Partner</button>
                    </div>
                    <div className="lb-affiliate-card">
                        <div className="lb-rel" style={{ zIndex: 10 }}>
                            <h3 className="lb-affiliate-card-title">Growth is driven by alignment, not ad spend.</h3>
                            <ul className="lb-affiliate-list">
                                <li><CheckCircle2 className="lb-aff-check" /> Experts grow through trusted networks.</li>
                                <li><CheckCircle2 className="lb-aff-check" /> Affiliates are incentivized through performance.</li>
                                <li><CheckCircle2 className="lb-aff-check" /> Clients discover high-quality expertise.</li>
                            </ul>
                        </div>
                        <div className="lb-affiliate-blob" />
                    </div>
                </div>
            </section>

            {/* Featured Experts */}
            <section id="lb-experts" className="lb-section lb-experts">
                <div className="lb-experts-blob" />
                <div className="lb-container lb-rel">
                    <div className="lb-experts-header">
                        <div>
                            <h2 className="lb-section-title">Featured Experts</h2>
                            <p className="lb-section-sub">We provide the structure. Experts deliver the impact.</p>
                        </div>
                        <button className="lb-view-all" onClick={() => nav('experts')}>
                            View all 500+ experts <ArrowRight style={{ width: 20, height: 20 }} />
                        </button>
                    </div>

                    <Swiper
                        modules={[Pagination, Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 },
                        }}
                        className="lb-experts-swiper"
                    >
                        {EXPERTS.map((expert) => (
                            <SwiperSlide key={expert.id}>
                                <motion.div
                                    whileHover={{ y: -20, scale: 1.02 }}
                                    className="lb-expert-card"
                                >
                                    <div className="lb-expert-img-wrap">
                                        <img
                                            src={expert.image}
                                            alt={expert.name}
                                            className="lb-expert-img"
                                            referrerPolicy="no-referrer"
                                        />
                                    </div>
                                    <div className="lb-expert-info">
                                        <div>
                                            <h3 className="lb-expert-name">{expert.name}</h3>
                                            <p className="lb-expert-role">{expert.role}</p>
                                        </div>
                                        <div className="lb-expert-tags">
                                            {expert.expertise.map((tag, i) => (
                                                <span key={i} className="lb-expert-tag">{tag}</span>
                                            ))}
                                        </div>
                                        <div className="lb-expert-footer">
                                            <div className="lb-expert-rating">
                                                <Star className="lb-star-icon" />
                                                <span className="lb-rating-num">{expert.rating}</span>
                                                <span className="lb-rating-count">({expert.reviews})</span>
                                            </div>
                                            <p className="lb-expert-price">{expert.price}</p>
                                        </div>
                                        <button className="lb-btn-book">Book Session</button>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Footer */}
            <footer className="lb-footer">
                <div className="lb-footer-overlay" />
                <div className="lb-container lb-rel">
                    <div className="lb-footer-grid">
                        <div className="lb-footer-brand">
                            <div className="lb-footer-logo">mindGigs</div>
                            <p className="lb-footer-tagline">
                                Connecting ambitious professionals with world-class expertise to accelerate growth and decision-making.
                            </p>
                        </div>
                        <div>
                            <h4 className="lb-footer-heading">Platform</h4>
                            <ul className="lb-footer-links">
                                <li><a href="#lb-how">How it Works</a></li>
                                <li><a href="#lb-experts">Browse Experts</a></li>
                                <li><a href="#lb-services">Services</a></li>
                                <li><a href="#lb-subscriptions">Pricing</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="lb-footer-heading">Company</h4>
                            <ul className="lb-footer-links">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Affiliate Program</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="lb-footer-heading">Legal</h4>
                            <ul className="lb-footer-links">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Cookie Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="lb-footer-bottom">
                        <div className="lb-footer-copy">© 2026 mindGigs. Humans as a Service. All rights reserved.</div>
                        <div className="lb-footer-socials">
                            <div className="lb-social-dot" />
                            <div className="lb-social-dot" />
                            <div className="lb-social-dot" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
