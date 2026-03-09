import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LogoMarquee } from '@/components/LogoMarquee';
import { FlywheelDiagram } from '@/components/FlywheelDiagram';
import { StakeholderCard } from '@/components/StakeholderCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { SectionTag } from '@/components/SectionTag';
import { ArrowRight, Stethoscope, Rocket, Building2, Pill, TrendingUp, ChevronDown } from 'lucide-react';

const STAKEHOLDERS = [
  { icon: Rocket, title: 'Founders & Startups', description: 'Build for real healthcare problems and meet the right partners', testId: 'stakeholder-card-founders' },
  { icon: Stethoscope, title: 'Clinicians', description: 'Shape solutions that fit clinical reality', testId: 'stakeholder-card-clinicians' },
  { icon: Building2, title: 'Operators & Hospitals', description: 'Explore vetted solutions for real needs', testId: 'stakeholder-card-operators' },
  { icon: Pill, title: 'Pharma & Medtech', description: 'Identify high potential innovation across your value chain', testId: 'stakeholder-card-pharma' },
  { icon: TrendingUp, title: 'Investors & Partners', description: 'Invest in solutions with validated signals', testId: 'stakeholder-card-investors' },
];

const ROW1_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?w=500&h=320&fit=crop', alt: 'Community meetup event' },
  { src: 'https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=500&h=320&fit=crop', alt: 'Workshop session' },
  { src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=320&fit=crop', alt: 'Medical research' },
  { src: 'https://images.unsplash.com/photo-1599592187465-6dc742367282?w=500&h=320&fit=crop', alt: 'Startup pitch event' },
  { src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=500&h=320&fit=crop', alt: 'Team collaboration' },
  { src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=320&fit=crop', alt: 'Working session' },
];

const ROW2_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1576669801615-4e2f69504d58?w=500&h=320&fit=crop', alt: 'Healthcare innovation' },
  { src: 'https://images.unsplash.com/photo-1770221797869-81e508282ac4?w=500&h=320&fit=crop', alt: 'Healthcare tech' },
  { src: 'https://images.unsplash.com/photo-1636249253913-40e83d5423e9?w=500&h=320&fit=crop', alt: 'Innovation lab' },
  { src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&h=320&fit=crop', alt: 'Hospital corridor' },
  { src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=320&fit=crop', alt: 'Medical professionals' },
  { src: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=500&h=320&fit=crop', alt: 'Health technology' },
];

export default function Home() {
  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: 'radial-gradient(900px circle at 15% 15%, rgba(26,123,110,0.10), transparent 60%), radial-gradient(700px circle at 85% 20%, rgba(232,84,26,0.10), transparent 55%), linear-gradient(180deg, rgba(13,27,62,0.06) 0%, rgba(245,240,232,1) 55%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 rounded-full border border-[rgba(13,27,62,0.08)] text-sm font-medium text-[#0D1B3E]/70 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#1A7B6E] animate-pulse" />
                Building India's Largest Healthtech Community
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#0D1B3E] tracking-tight leading-[1.05] mb-6">
                Where Healthcare<br />
                <em className="not-italic text-[#E8541A]">Innovation</em> Meets<br />
                Real-World Adoption
              </h1>
              <p className="text-lg text-[#6B7280] max-w-xl leading-relaxed mb-8">
                A community-led platform helping healthtech founders and healthcare stakeholders build, validate, and adopt meaningful innovation.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/join">
                  <Button data-testid="home-hero-join-button" className="bg-[#E8541A] text-white hover:bg-[#D84B17] gap-2 h-11 px-6 text-sm">
                    Join the Community <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/who-its-for">
                  <Button data-testid="home-hero-events-button" variant="outline" className="border-[rgba(13,27,62,0.18)] text-[#0D1B3E] hover:bg-[rgba(245,240,232,0.65)] h-11 px-6 text-sm">
                    Explore Who It's For
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="bg-white rounded-2xl border border-[rgba(13,27,62,0.10)] p-5 shadow-[0_1px_0_rgba(13,27,62,0.06),0_20px_45px_rgba(13,27,62,0.12)]">
                  <img
                    src="https://images.unsplash.com/photo-1559223607-a43c990c692c?w=500&h=320&fit=crop"
                    alt="THC Community Event"
                    className="w-full h-48 sm:h-56 object-cover rounded-xl mb-4"
                    loading="eager"
                  />
                  <div className="bg-[rgba(245,240,232,0.7)] rounded-xl p-4 border border-[rgba(13,27,62,0.06)]">
                    <p className="text-sm text-[#0D1B3E] italic leading-relaxed">
                      "THC helped me connect with oncologists and understand their diagnostics workflow better"
                    </p>
                    <p className="text-xs text-[#6B7280] mt-2 font-medium">- Healthtech Founder, Bengaluru</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-12 text-[#6B7280] gap-2">
            <ChevronDown className="w-4 h-4 animate-bounce" />
            <span className="text-xs font-mono tracking-wider uppercase">Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* Logo Marquee */}
      <LogoMarquee />

      {/* Flywheel */}
      <FlywheelDiagram />

      {/* Stakeholders */}
      <section className="py-16 sm:py-20 bg-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionTag>Who It's For</SectionTag>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#0D1B3E] tracking-tight">
              Built for Every Healthcare Stakeholder
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {STAKEHOLDERS.map((s) => (
              <StakeholderCard key={s.testId} {...s} />
            ))}
            <div className="bg-[#0D1B3E] rounded-2xl p-6 flex flex-col justify-center items-center text-center">
              <h3 className="text-lg font-semibold text-white mb-3">Explore in detail</h3>
              <Link to="/who-its-for">
                <Button className="bg-[#E8541A] text-white hover:bg-[#D84B17] gap-1.5">
                  Explore All Stakeholders <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work in Action — Sliding Gallery */}
      <section className="py-16 sm:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#0D1B3E] tracking-tight">
              Our Work <span className="text-[#E8541A]">in Action</span>
            </h2>
            <p className="mt-3 text-[#6B7280] text-base">Snapshots from our engagements across organizations and communities</p>
          </div>
        </div>

        {/* Row 1 — slides left */}
        <div className="relative mb-4">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#F5F0E8] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#F5F0E8] to-transparent z-10" />
          <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused]" style={{ width: 'max-content' }}>
            {[...ROW1_IMAGES, ...ROW1_IMAGES].map((img, i) => (
              <div key={`r1-${i}`} className="flex-shrink-0 w-[300px] sm:w-[360px] h-[200px] sm:h-[230px] rounded-2xl overflow-hidden group relative">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,27,62,0.45)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-4">
                  <span className="text-white text-sm font-medium">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — slides right */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#F5F0E8] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#F5F0E8] to-transparent z-10" />
          <div className="flex gap-4 animate-marquee-reverse hover:[animation-play-state:paused]" style={{ width: 'max-content' }}>
            {[...ROW2_IMAGES, ...ROW2_IMAGES].map((img, i) => (
              <div key={`r2-${i}`} className="flex-shrink-0 w-[300px] sm:w-[360px] h-[200px] sm:h-[230px] rounded-2xl overflow-hidden group relative">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,27,62,0.45)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-4">
                  <span className="text-white text-sm font-medium">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 sm:py-20" style={{ background: 'linear-gradient(90deg, rgba(26,123,110,0.10), rgba(232,84,26,0.10))' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[rgba(26,123,110,0.08)] border border-[rgba(26,123,110,0.15)] font-mono text-[11px] tracking-[0.12em] uppercase text-[#1A7B6E] mb-4">Join 5,000+ Healthcare Professionals</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0D1B3E] tracking-tight mb-4 leading-tight">
            Ready to Shape the<br />Future of Healthcare?
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Be part of a community that ensures healthcare innovation is not built in silos, but co-created with those who deliver and experience care every day.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/join">
              <Button className="bg-[#E8541A] text-white hover:bg-[#D84B17] gap-2 h-11 px-6">
                Join the Community <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/partner">
              <Button variant="outline" className="border-[rgba(13,27,62,0.18)] text-[#0D1B3E] hover:bg-white/60 h-11 px-6">
                Partner with Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
