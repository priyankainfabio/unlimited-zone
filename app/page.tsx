"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowRight,
  Crown,
  MapPin,
  Store,
  Sparkles,
  Star,
  ShieldCheck,
  Building2,
  Phone,
  Mail,
  Menu,
} from "lucide-react";

const stats = [
  { icon: Crown, value: "100+", label: "Years Legacy", text: "A century-old family business built on trust." },
  { icon: Store, value: "Since 2001", label: "Fashion Retail", text: "Pioneers in fashion retail for over two decades." },
  { icon: MapPin, value: "9+", label: "Stores", text: "A growing retail network across India." },
  { icon: Star, value: "20+", label: "Brand Outlets", text: "Exclusive and multi-brand fashion destinations." },
];

const categories = [
  {
    title: "Men",
    tag: "01",
    img: "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Women",
    tag: "02",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Kids",
    tag: "03",
    img: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=1200&auto=format&fit=crop",
  },
];

const brands = [
  "A|X",
  "U.S. POLO ASSN.",
  "LEVI’S",
  "GAP",
  "GAS",
  "MADAME",
  "PUMA",
  "MUFTI",
  "GINI & JONY",
  "LAKSHITA",
  "SUPERDRY",
  "PARK AVENUE",
  "RAYMOND",
  "ARROW",
  "LA MARTINA",
  "COLORPLUS",
  "CELIO",
  "MOTHERCARE",
  "BEING HUMAN",
];
const locations = [
  "Rewari",
  "Sadar Bazar, Gurugram",
  "Sector 14, Gurugram",
  "Panipat",
  "Hansi",
  "Jaipur",
];

const testimonials = [
  {
    name: "Krishan",
    text: "Unlimited Zone helped me upgrade my wardrobe. The variety and service make it a complete family shopping destination.",
  },
  {
    name: "Anita",
    text: "I love how everything for men, women and kids is available under one roof. It feels reliable and premium.",
  },
  {
    name: "Rohit",
    text: "Good brands, good staff and a smooth store experience every time. It feels like a trusted retail name.",
  },
];

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 25 });

  return (
    <main
      onMouseMove={(e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }}
      className="relative overflow-hidden bg-[#f3eadf] text-[#12100c]"
    >
      <motion.div
        style={{ left: smoothX, top: smoothY }}
        className="pointer-events-none fixed z-[90] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c49a45]/20 blur-3xl"
      />

      

      {/* NAVBAR */}
      <header className="fixed left-0 top-0 z-40 w-full border-b border-black/10 bg-[#f3eadf]/85 backdrop-blur-xl xl:pl-[72px]">
        <div className="mx-auto flex h-24 max-w-[1550px] items-center justify-between px-6 lg:px-10">
          <img
            src="/unlimited-logo.png"
            alt="Unlimited Zone"
            className="h-14 w-auto object-contain"
          />

          <nav className="hidden items-center gap-12 text-sm font-bold uppercase tracking-wide md:flex">
            <a href="#collections">Collections</a>
            <a href="#brands">Brands</a>
            <a href="#legacy">Legacy</a>
            <a href="#stores">Stores</a>
            <a href="#franchise">Franchise</a>
          </nav>

          <a
            href="#franchise"
            className="group hidden items-center gap-3 rounded-full bg-black px-6 py-3 font-bold uppercase tracking-wide text-white transition hover:bg-[#c49a45] hover:text-black md:flex"
          >
            Enquire Now
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#c49a45] text-black transition group-hover:bg-black group-hover:text-white">
              <ArrowRight size={16} />
            </span>
          </a>
        </div>
      </header>

      {/* HERO - EXACT PREMIUM SHOWROOM */}
<section className="relative bg-[#f8f3eb] pt-24">
  <div className="grid h-[640px] grid-cols-1 overflow-hidden lg:grid-cols-[47%_53%]">
  
    
    {/* LEFT CONTENT */}
    <div className="relative flex items-center px-10 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl"
      >
        <p className="mb-6 text-sm font-black uppercase tracking-[0.38em] text-[#b88a2b]">
          India’s Trusted Fashion Destination
        </p>

        <h1 className="exact-hero-title">
          Complete Family Fashion,
          <span>Curated Under One Roof.</span>
        </h1>

        <div className="mt-5 h-[2px] w-16 bg-[#c49a45]" />

        <p className="mt-7 max-w-lg text-base leading-7 text-[#2f2a24]">
          Unlimited Zone brings men’s, women’s and kids’ fashion together
          through trusted stores, leading brands and a legacy built over
          <strong className="text-[#b88a2b]"> 100+ years.</strong>
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#collections" className="exact-primary-btn">
            Explore Collections <ArrowRight size={18} />
          </a>

          <a href="#franchise" className="exact-secondary-btn">
            Start Franchise Journey <ArrowRight size={18} />
          </a>
        </div>

        <div className="mt-9">
          <p className="mb-4 text-[11px] font-black uppercase tracking-[0.35em] text-black/45">
            Trusted by leading brands
          </p>

          <div className="flex flex-wrap items-center gap-5 text-base font-black text-black/75">
            <span>Levi’s</span>
            <span>Jockey</span>
            <span>Raymond</span>
            <span>Peter England</span>
            <span>Allen Solly</span>
          </div>
        </div>
      </motion.div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative hidden overflow-hidden lg:block">
    <div className="absolute inset-y-0 left-[-1px] z-20 w-64 bg-[#f8f3eb] [clip-path:polygon(0_0,100%_0,8%_100%,0_100%)]" />
      <img
        src="/hero-showroom.png"
        alt="Unlimited Zone showroom"
        className="h-full w-full object-cover object-[100%_center]"
      />

      <div className="absolute bottom-14 left-20 right-14 z-20 grid grid-cols-4 overflow-hidden bg-black/85 text-white shadow-2xl backdrop-blur-xl">
        {[
          { icon: Crown, value: "100+", label: "Years Legacy" },
          { icon: Store, value: "2001", label: "Since" },
          { icon: MapPin, value: "9+", label: "Stores" },
          { icon: Star, value: "20+", label: "Brand Outlets" },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="border-r border-white/15 p-5 text-center last:border-r-0"
            >
              <Icon className="mx-auto mb-3 text-[#c49a45]" size={28} />
              <h3 className="text-3xl font-black">{item.value}</h3>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-white/70">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </div>

  {/* BOTTOM TRUST STRIP */}
  <div className="hidden bg-white px-8 py-8 shadow-[0_-20px_50px_rgba(0,0,0,0.04)]">
    <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.label} className="flex gap-5 border-black/10 md:border-r last:border-r-0">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-[#c49a45]/30 text-[#c49a45]">
              <Icon size={28} />
            </div>
            <div>
              <h3 className="font-black uppercase">
                {item.value} {item.label}
              </h3>
              <p className="mt-2 text-sm leading-6 text-black/55">
                {item.text}
              </p>
            </div>
          </div>
        );
      })}
    </div>

    <p className="mt-8 text-center text-xs font-black uppercase tracking-[0.4em] text-black/40">
      Scroll to Explore
    </p>
  </div>
</section>

      {/* CATEGORIES */}
      <section id="collections" className="relative px-6 py-28 xl:pl-[120px]">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">Collections</p>
              <h2 className="section-title max-w-4xl">
                Style zones designed for the complete family.
              </h2>
            </div>
            <p className="max-w-sm text-black/55">
              A modern retail experience for everyday essentials, occasion wear
              and trusted fashion brands.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                whileHover={{ y: -10 }}
                className={`group relative overflow-hidden bg-black ${
                  i === 0 ? "h-[650px]" : "h-[520px]"
                }`}
              >
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-110 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute left-8 top-8 flex items-center gap-3 text-white/80">
                  <span>{cat.tag}</span>
                  <span className="h-px w-10 bg-[#c49a45]" />
                </div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-5xl font-black uppercase">{cat.title}</h3>
                  <button className="mt-5 flex items-center gap-2 border-b border-[#c49a45] pb-2 text-sm font-bold uppercase tracking-widest text-[#c49a45]">
                    View Collection <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS - UNLIMITED ZONE STYLE */}
<section id="brands" className="overflow-hidden bg-[#241a12] py-10 text-white">
  <div className="mx-auto max-w-7xl px-6 text-center">
    <p className="mb-4 text-[11px] font-black uppercase tracking-[0.35em] text-white/45">
            Trusted by leading brands
          </p>
    <h2 className="text-3xl font-black md:text-5xl">
      Men | Women | Kids
      <span className="ml-6 text-[#f4d06f]">75+ Premium Brands</span>
    </h2>
  </div>

  <div className="mt-10 overflow-hidden border-y border-white/10 bg-[#1a120c] py-8">
    <div className="brand-marquee flex whitespace-nowrap">
      {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
        <span
          key={index}
          className="mx-10 text-3xl font-black uppercase tracking-wide text-white"
        >
          {brand}
        </span>
      ))}
    </div>
  </div>

  <div className="mx-auto max-w-7xl px-6 py-6 text-center">
    <h3 className="text-2xl font-black uppercase tracking-wide">
      Other Store Locations: Gurgaon, Rewari, Panipat, Kotputli, Hansi, Jaipur
    </h3>
  </div>
</section>

      {/* LEGACY */}
      <section id="legacy" className="bg-[#f7efe4] px-6 py-28 xl:pl-[120px]">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop"
              alt="Retail legacy"
              className="h-[680px] w-full object-cover"
            />
            <div className="absolute -bottom-8 right-8 bg-black p-8 text-white">
              <p className="text-5xl font-black text-[#c49a45]">2001</p>
              <p className="mt-2 text-sm uppercase tracking-widest text-white/60">
                Fashion retail journey began
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="section-kicker">Our Legacy</p>
            <h2 className="section-title">
              From family legacy to a fashion retail movement.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">
              Built on a legacy of over 100 years, Unlimited Zone entered
              fashion retail in 2001 with its first 5,000 sq. ft. store in
              Sadar Bazar, Gurgaon. Today, the brand continues to grow through
              multi-brand and exclusive brand outlets across India.
            </p>

            <div className="mt-10 grid gap-4">
              {[
                ["100+ Year Legacy", "A family business foundation built on trust."],
                ["First 5,000 sq. ft. Store", "Started in Sadar Bazar, Gurgaon."],
                ["Recognised Retail Growth", "Trusted by leading fashion brands."],
              ].map(([title, text]) => (
                <div key={title} className="border-l-4 border-[#c49a45] bg-white p-6 shadow-sm">
                  <h3 className="font-black uppercase">{title}</h3>
                  <p className="mt-2 text-black/55">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STORES */}
      <section id="stores" className="px-6 py-28 xl:pl-[120px]">
        <div className="mx-auto max-w-[1400px]">
          <p className="section-kicker">Store Locations</p>
          <h2 className="section-title max-w-4xl">
            A growing retail network across India.
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-3">
            {locations.map((loc, index) => (
              <motion.div
                key={loc}
                whileHover={{ backgroundColor: "#111111", color: "#ffffff" }}
                className="group bg-[#f3eadf] p-8 transition"
              >
                <p className="text-sm font-black text-[#b78b2f]">0{index + 1}</p>
                <MapPin className="mt-10 text-[#b78b2f]" />
                <h3 className="mt-5 text-2xl font-black">{loc}</h3>
                <p className="mt-3 text-black/55 transition group-hover:text-white/60">
                  Premium family fashion retail experience with trusted brands.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HAPPY CUSTOMERS - VIDEO STORIES */}
<section className="relative overflow-hidden bg-[#0d0d0c] px-6 py- text-white">
  <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#c49a45]/15 blur-[120px]" />

  <div className="mx-auto max-w-7xl">
    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
      <div>
        <p className="section-kicker">Happy Customers, Happy Stories</p>
        <h2 className="mt-5 max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
          Real people. Real shopping moments.
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
          Hear directly from customers who trust Unlimited Zone for men’s,
          women’s and kids’ fashion under one roof.
        </p>
      </div>

      <div className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white/60">
        Family Fashion • 75+ Brands • Trusted Stores
      </div>
    </div>

    <div className="mt-2 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      {/* Big Video Card */}
      <div className="group relative h-[400px] overflow-hidden bg-black">
        <img
          src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=1400&auto=format&fit=crop"
          alt="Happy customer shopping"
          className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-55"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="absolute left-8 top-8 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] backdrop-blur">
          Customer Video
        </div>

        <button className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-black shadow-2xl transition group-hover:scale-110">
          <span className="ml-1 text-3xl">▶</span>
        </button>

        <div className="absolute bottom-8 left-8 right-8">
          <h3 className="text-4xl font-black md:text-5xl">
            “Everything for the whole family, all in one place.”
          </h3>
          <p className="mt-4 max-w-2xl text-white/65">
            Customers love the variety, brand selection, and complete family
            shopping experience.
          </p>
        </div>
      </div>

      {/* Side Stories */}
      <div className="grid gap-6">
        {[
          {
            name: "Family Shopping",
            text: "Men, women and kids collections under one roof.",
            img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop",
          },
          {
            name: "Premium Brands",
            text: "Trusted names and everyday fashion choices.",
            img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=900&auto=format&fit=crop",
          },
        ].map((item) => (
          <div
            key={item.name}
            className="group grid overflow-hidden border border-white/10 bg-white/[0.04] md:grid-cols-[0.8fr_1fr]"
          >
            <img
              src={item.img}
              alt={item.name}
              className="h-full min-h-[210px] w-full object-cover opacity-75 transition duration-500 group-hover:scale-105"
            />
            <div className="flex flex-col justify-center p-6">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#c49a45]">
                Story
              </p>
              <h4 className="mt-3 text-2xl font-black">{item.name}</h4>
              <p className="mt-3 text-white/55">{item.text}</p>
              <button className="mt-6 flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#c49a45]">
                Watch Story <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

    
  </div>
</section>

      {/* FRANCHISE */}
      <section id="franchise" className="px-6 py-28 ">
        <div className="mx-auto grid max-w-[1400px] overflow-hidden bg-black text-white lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative p-10 lg:p-12">
            <Building2 className="mb-8 text-[#c49a45]" size={52} />
            <h2 className="text-4xl font-black uppercase leading-tight md:text-6xl">
              Start Your Franchise Journey.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
              Join a growing fashion retail ecosystem with a proven offline
              model, strong customer trust and leading brands under one roof.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {["Proven Retail Model", "Brand Support", "Store Expansion", "Family Fashion Demand"].map((item) => (
                <div key={item} className="border border-white/10 bg-white/[0.04] p-4">
                  <Sparkles className="mb-4 text-[#c49a45]" />
                  <p className="font-black uppercase">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <form className="border-l border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl lg:p-12">
            <input className="field" placeholder="Name" />
            <input className="field" placeholder="Phone Number" />
            <input className="field" placeholder="Email" />
            <input className="field" placeholder="City & State" />
            <textarea className="field h-32 resize-none" placeholder="Message" />
            <button type="button" className="mt-4 w-full bg-[#c49a45] px-7 py-5 font-black uppercase text-black transition hover:bg-white">
              Send Enquiry
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#f7efe4] px-6 py-16 xl:pl-[120px]">
        <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-4">
          <div>
            <img src="/unlimited-logo.png" alt="Unlimited Zone" className="h-14" />
            <p className="mt-5 max-w-xs text-black/55">
              Complete family fashion retail experience across India.
            </p>
          </div>

          <div>
            <h4 className="font-black uppercase">Explore</h4>
            <div className="mt-5 space-y-3 text-black/55">
              <p>Men</p>
              <p>Women</p>
              <p>Kids</p>
              <p>Brands</p>
            </div>
          </div>

          <div>
            <h4 className="font-black uppercase">Contact</h4>
            <div className="mt-5 space-y-3 text-black/55">
              <p className="flex items-center gap-2">
                <Phone size={16} /> +91 8800 024 750
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} /> Franchise Enquiry
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-black uppercase">Head Office</h4>
            <p className="mt-5 text-black/55">
              72a, Sector 74, Ward 026, Behrampur, Gurgaon – 122004
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}