"use client";

import { useState } from "react";
import { Anchor, Zap, Brain, Sparkles, Type, TrendingUp, History, ChevronRight, Star, Check, ArrowRight, Play, Copy, BarChart, Users, Globe, StarHalf } from "lucide-react";

// Mock hooks data
const mockHooks = [
  { text: "I spent 30 days sleeping only 4 hours a night — here's what happened to my brain", score: 96, tag: "Open Loop" },
  { text: "Stop scrolling. This one hack changed everything about my morning routine.", score: 94, tag: "Pattern Interrupt" },
  { text: "She was laughing until the last 10 seconds... what happened next will ruin your sleep.", score: 91, tag: "Curiosity Gap" },
  { text: "Doctors hate him! (But this sleep trick is actually backed by science)", score: 89, tag: "Emotion Flip" },
  { text: "I let my AI clone answer my emails for a week — the results terrified me", score: 87, tag: "Social Proof" },
  { text: "Most people ruin their first minute with this mistake — do THIS instead", score: 85, tag: "Pattern Interrupt" },
  { text: "My followers tripled when I started using THIS hook formula", score: 83, tag: "Social Proof" },
  { text: "The uncomfortable truth about success that nobody talks about", score: 81, tag: "Emotion Flip" },
  { text: "What nobody tells you about viral content (it's not what you think)", score: 79, tag: "Curiosity Gap" },
  { text: "POV: You just discovered the algorithm trick that 99% of creators miss", score: 77, tag: "Open Loop" },
];

const mockTitles = [
  "Why 90% of Creators Fail in the First 30 Days",
  "The Midnight Routine That Built a Empire",
  "I Tried the 4-Hour Sleep Challenge — Here's Unfiltered",
  "What Actually Happens When You Ignore Advice",
  "The Brutal Truth About Going Viral",
];

// NavBar Component
function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Anchor className="w-5 h-5 text-background" />
            </div>
            <span className="text-xl font-bold text-text">ReelHook</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#demo" className="text-muted hover:text-text transition-colors">Hooks</a>
            <a href="#pricing" className="text-muted hover:text-text transition-colors">Pricing</a>
            <a href="#" className="text-muted hover:text-text transition-colors">Login</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-muted hover:text-text transition-colors text-sm">Login</button>
            <button className="bg-primary text-background px-4 py-2 rounded-lg font-semibold text-sm hover:brightness-110 transition-all">
              Try Free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Hero Component
function Hero({ onGenerate }: { onGenerate: () => void }) {
  const [input, setInput] = useState("");

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-2 mb-8">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted">AI-Powered Hook Generation</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          First 2 seconds.
          <br />
          <span className="text-primary">Win</span> or{" "}
          <span className="text-secondary">lose.</span>
        </h1>
        <p className="text-xl text-muted max-w-2xl mx-auto mb-10">
          ReelHook AI generates 10 scroll-stopping hooks and 5 title variants for your short-form videos — ranked by predicted watch-through impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your video topic or script draft..."
            className="flex-1 bg-surface border border-border rounded-lg px-4 py-3 text-text placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
            onKeyDown={(e) => e.key === "Enter" && onGenerate()}
          />
          <button
            onClick={onGenerate}
            className="bg-primary text-background px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition-all flex items-center justify-center gap-2"
          >
            <Brain className="w-5 h-5" />
            Generate Hooks
          </button>
        </div>
        <p className="text-sm text-muted mt-4">No credit card required. 5 free hooks to start.</p>
      </div>
    </section>
  );
}

// HookDemo Component
function HookDemo({ active }: { active: boolean }) {
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [input, setInput] = useState("");

  const handleGenerate = () => {
    if (!input.trim()) return;
    setLoading(true);
    setShowResults(false);
    setTimeout(() => {
      setLoading(false);
      setShowResults(true);
    }, 2000);
  };

  return (
    <section id="demo" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">See It In Action</h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Enter any topic and watch the AI generate hooks optimized for maximum watch-through.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Try: 'productivity hacks for entrepreneurs' or 'how I grew to 100K followers'"
              className="flex-1 bg-surface border border-border rounded-lg px-4 py-3 text-text placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
              onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
            />
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="bg-secondary text-text px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition-all flex items-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-text/30 border-t-text rounded-full animate-spin" />
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate
                </>
              )}
            </button>
          </div>
        </div>

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-surface border border-border rounded-xl p-5 animate-pulse">
                <div className="h-4 bg-border rounded w-3/4 mb-4" />
                <div className="h-2 bg-border rounded w-full mb-3" />
                <div className="h-2 bg-border rounded w-1/4" />
              </div>
            ))}
          </div>
        )}

        {showResults && !loading && (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Zap className="w-6 h-6 text-primary" />
                Your Hook Options
                <span className="text-muted text-base font-normal ml-2">ranked by Hook Score</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockHooks.map((hook, i) => (
                  <div
                    key={i}
                    className="bg-surface border border-border rounded-xl p-5 hover:border-primary transition-all group cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <p className="text-text font-medium">{hook.text}</p>
                      <span className="text-xs bg-border px-2 py-1 rounded text-muted whitespace-nowrap">
                        {hook.tag}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${hook.score}%`,
                            background: "linear-gradient(90deg, #00f2ea, #ff0080)",
                          }}
                        />
                      </div>
                      <span className="text-primary font-bold text-sm">{hook.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Type className="w-6 h-6 text-secondary" />
                Title Variants
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mockTitles.map((title, i) => (
                  <div
                    key={i}
                    className="bg-surface border border-border rounded-xl p-4 hover:border-secondary transition-all group flex items-center justify-between"
                  >
                    <p className="text-text text-sm">{title}</p>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-border rounded-lg">
                      <Copy className="w-4 h-4 text-muted" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {!active && !loading && !showResults && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: "🔓", title: "Open Loop", desc: "Creates curiosity gaps that demand closure" },
              { icon: "⚡", title: "Emotion Flip", desc: "Triggers surprise, anger, joy, or fear" },
              { icon: "🎯", title: "Pattern Interrupt", desc: "Breaks expectations to grab attention" },
            ].map((item, i) => (
              <div key={i} className="bg-surface border border-border rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// Features Component
function Features() {
  const features = [
    {
      icon: BarChart,
      title: "Hook Score Algorithm",
      desc: "Proprietary scoring based on attention metrics and watch-through data from millions of videos.",
    },
    {
      icon: Brain,
      title: "Open Loop Generator",
      desc: "Creates curiosity gaps that demand closure — the psychological driver behind compulsive viewing.",
    },
    {
      icon: Sparkles,
      title: "Emotion Flip Library",
      desc: "Triggers surprise, anger, joy, and fear to create emotional resonance that sticks.",
    },
    {
      icon: Type,
      title: "Title Pairing",
      desc: "Matches titles to hooks for maximum retention — each hook gets its perfect title partner.",
    },
    {
      icon: TrendingUp,
      title: "Trend Integration",
      desc: "Real-time trend-aware suggestions that align with what's working right now on each platform.",
    },
    {
      icon: History,
      title: "Hook History",
      desc: "Never lose a generated hook. Search, reuse, and iterate on your entire hook library.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need to{" "}
            <span className="text-primary">go viral</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Built by creators, for creators. Every feature designed to maximize your watch-through rate.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-muted text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// HowItWorks Component
function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Enter Topic",
      desc: "Type your video idea or paste your draft script. Be as specific or vague as you want.",
      icon: Play,
    },
    {
      num: "02",
      title: "AI Generates Hooks",
      desc: "Our AI analyzes your input and generates 10 hooks + 5 title variants in under 3 seconds.",
      icon: Brain,
    },
    {
      num: "03",
      title: "Pick & Export",
      desc: "Browse scored hooks, pick your winner, copy with one click, and post directly to your platform.",
      icon: ArrowRight,
    },
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-muted text-lg">Three steps from idea to viral hook.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              {i < 2 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[40%] h-px bg-border" />
              )}
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Stats Component
function Stats() {
  const stats = [
    { value: "50K+", label: "Creators", icon: Users },
    { value: "2M+", label: "Hooks Generated", icon: Anchor },
    { value: "4.9/5", label: "Average Rating", icon: StarHalf },
    { value: "180+", label: "Countries", icon: Globe },
  ];

  return (
    <section className="py-16 px-4 border-y border-border">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <s.icon className="w-6 h-6 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold text-primary mb-1">{s.value}</div>
            <div className="text-muted text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Testimonials Component
function Testimonials() {
  const testimonials = [
    {
      name: "@creator_maya",
      handle: "Lifestyle Creator",
      quote: "I went from 500 to 45K followers in 3 months using ReelHook hooks every single video.",
      growth: "+44.5K followers",
      stars: 5,
    },
    {
      name: "@tech_with_tom",
      handle: "Tech Educator",
      quote: "My average watch-through rate jumped 40% after switching to ReelHook titles.",
      growth: "+38K followers",
      stars: 5,
    },
    {
      name: "@gym_rise_fitness",
      handle: "Fitness Coach",
      quote: "The pattern interrupt hooks are insane. Every video hits explore page now.",
      growth: "+62K followers",
      stars: 5,
    },
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Creators love ReelHook</h2>
          <p className="text-muted text-lg">Real results from real creators.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-surface border border-border rounded-xl p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-text mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-muted text-sm">{t.handle}</div>
                </div>
                <div className="text-success text-sm font-semibold">{t.growth}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Component
function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/mo",
      desc: "Perfect for trying out ReelHook.",
      features: ["5 hooks per month", "Basic hook library", "1 profile"],
      cta: "Get Started",
      highlight: false,
    },
    {
      name: "Starter",
      price: "$0",
      period: "/mo",
      desc: "For creators getting serious.",
      features: ["20 hooks per month", "Basic hook library", "3 profiles", "Title variants"],
      cta: "Start Free",
      highlight: false,
    },
    {
      name: "Growth",
      price: "$19",
      period: "/mo",
      desc: "For creators who mean business.",
      features: ["Unlimited hooks", "Trend integration", "Export to clipboard", "Priority support", "5 profiles", "Hook history"],
      cta: "Start Free Trial",
      highlight: true,
    },
  ];

  return (
    <section id="pricing" className="py-24 px-4 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-muted text-lg">Start free. Scale when you're ready.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`bg-background border rounded-xl p-8 ${
                plan.highlight
                  ? "border-primary shadow-lg shadow-primary/10"
                  : "border-border"
              }`}
            >
              {plan.highlight && (
                <div className="bg-primary text-background text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted">{plan.period}</span>
              </div>
              <p className="text-muted text-sm mb-6">{plan.desc}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-success flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.highlight
                    ? "bg-primary text-background hover:brightness-110"
                    : "bg-surface border border-border hover:bg-border"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Component
function CTA() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Your next viral hook is{" "}
          <span className="text-primary">2 seconds</span> away.
        </h2>
        <p className="text-muted text-xl mb-10 max-w-2xl mx-auto">
          Join 50,000+ creators who use ReelHook to stop the scroll and win the algorithm.
        </p>
        <button className="bg-primary text-background px-8 py-4 rounded-xl font-bold text-lg hover:brightness-110 transition-all inline-flex items-center gap-2">
          <Zap className="w-5 h-5" />
          Start Generating Free
        </button>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Anchor className="w-5 h-5 text-background" />
            </div>
            <span className="text-xl font-bold text-text">ReelHook</span>
          </div>
          <div className="flex items-center gap-8 text-sm text-muted">
            <a href="#" className="hover:text-text transition-colors">Privacy</a>
            <a href="#" className="hover:text-text transition-colors">Terms</a>
            <a href="#" className="hover:text-text transition-colors">Twitter</a>
            <a href="#" className="hover:text-text transition-colors">Discord</a>
          </div>
          <div className="text-sm text-muted">
            © 2026 ReelHook. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  const [demoActive, setDemoActive] = useState(false);

  const scrollToDemo = () => {
    setDemoActive(true);
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      <NavBar />
      <Hero onGenerate={scrollToDemo} />
      <HookDemo active={demoActive} />
      <Features />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}