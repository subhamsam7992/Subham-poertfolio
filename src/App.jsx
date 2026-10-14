import React, { useState } from 'react'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BarChart3, Check, ChevronDown,
  CirclePlay, Code2, Facebook, Instagram, Mail, Menu, MousePointer2,
  Play, Send, Sparkles, Target, TrendingUp, Video, X, Youtube, Zap
} from 'lucide-react'

const skills = [
  { icon: Target, name: 'Meta Ads', detail: 'Campaign setup & optimization', tag: 'Paid social' },
  { icon: BarChart3, name: 'Google Ads', detail: 'Search & performance campaigns', tag: 'Paid search' },
  { icon: TrendingUp, name: 'Social Media Marketing', detail: 'Content, planning & growth', tag: 'Organic growth' },
  { icon: Video, name: 'Video Editing', detail: 'Short-form creative content', tag: 'Creative' },
]

const projects = [
  { n: '01', type: 'Campaign concept', title: 'Local Business Lead Generation', text: 'A practice concept focused on clear offers, location-aware targeting and WhatsApp enquiries.', chips: ['Meta Ads', 'Lead generation'], color: 'violet' },
  { n: '02', type: 'Ad creative concept', title: 'Scroll-Stopping Ad Creative', text: 'A creative direction built around a strong hook, concise copy and a clear call to action.', chips: ['Ad copy', 'Creative strategy'], color: 'blue' },
  { n: '03', type: 'Growth plan concept', title: 'Social Media Growth Plan', text: 'A sample content framework for building consistency, improving reach and strengthening brand presence.', chips: ['Content planning', 'Social media'], color: 'orange' },
]

function Logo() {
  return <a className="brand" href="#home" aria-label="Shubham Kumar home">
    <span className="brand-mark">S<span>K</span></span>
    <span className="brand-name">SHUBHAM<span>KUMAR</span></span>
  </a>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('Home')
  const nav = ['Home', 'About', 'Services', 'Projects', 'Contact']
  const goTo = (item) => {
    setActive(item)
    setMenuOpen(false)
    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return <div className="site-shell">
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <header className="header">
      <div className="container nav-wrap">
        <Logo />
        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {nav.map(item => <button key={item} className={active === item ? 'nav-link active' : 'nav-link'} onClick={() => goTo(item)}>{item}</button>)}
          <a className="nav-cta" href="mailto:subhamsam7992@gmail.com">Let’s talk <ArrowUpRight size={15} /></a>
        </nav>
      </div>
    </header>

    <main>
      <section className="hero container" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</div>
          <h1>Making brands<br />more <span className="gradient-text">visible.</span></h1>
          <p className="hero-lead">Hey, I’m <strong>Shubham Kumar</strong> — a digital marketer focused on Meta Ads, paid campaigns and creative strategies that help businesses grow online.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:subhamsam7992@gmail.com">Let’s work together <ArrowUpRight size={17} /></a>
            <button className="button button-ghost" onClick={() => goTo('Projects')}><CirclePlay size={18} /> Explore my work</button>
          </div>
          <div className="hero-meta"><div className="mini-avatars"><span>SK</span><span><Sparkles size={14}/></span></div><div><strong>Digital-first thinking</strong><small>Strategy · Ads · Creative</small></div><ArrowDownRight className="meta-arrow" size={20} /></div>
        </div>
        <div className="hero-visual">
          <div className="visual-grid" />
          <div className="orbit orbit-a" /><div className="orbit orbit-b" />
          <div className="floating-chip chip-top"><span className="chip-icon purple"><Target size={17}/></span><span><b>Meta Ads</b><small>Campaign strategy</small></span><ArrowUpRight size={16}/></div>
          <div className="portrait-card">
            <div className="portrait-top"><span>PORTFOLIO / 2026</span><span className="tiny-status">● OPEN TO WORK</span></div>
            <div className="portrait-monogram">S<span>K</span></div>
            <div className="portrait-caption"><span className="caption-line" /><div><b>SHUBHAM KUMAR</b><small>DIGITAL MARKETER</small></div></div>
            <div className="portrait-number">01</div>
          </div>
          <div className="floating-chip chip-bottom"><span className="chip-icon green"><TrendingUp size={17}/></span><span><b>Growth mindset</b><small>Test. Learn. Improve.</small></span><span className="sparkle">✳</span></div>
          <div className="hero-orb"><Zap size={22} fill="currentColor" /></div>
        </div>
        <button className="scroll-cue" onClick={() => goTo('About')}><span className="scroll-line" /> SCROLL TO EXPLORE <ChevronDown size={14}/></button>
      </section>

      <section className="trust-strip">
        <div className="container trust-inner"><span>FOCUSED ON</span><div><Target size={17}/> Performance marketing</div><div><BarChart3 size={17}/> Data-informed decisions</div><div><Sparkles size={17}/> Creative problem-solving</div></div>
      </section>

      <section className="section container" id="about">
        <div className="section-heading"><div><span className="section-kicker">01 — A LITTLE ABOUT ME</span><h2>Curious mind.<br /><span className="muted-heading">Growth-focused approach.</span></h2></div><p>I’m building my career around helping businesses connect with the right people through thoughtful digital marketing.</p></div>
        <div className="about-grid">
          <div className="about-note"><div className="quote-mark">“</div><p>I believe good marketing starts with understanding the business, knowing the audience and communicating value clearly.</p><div className="signature">Shubham Kumar <span>— Digital Marketer</span></div></div>
          <div className="about-details"><div className="detail-row"><span>01</span><div><b>My approach</b><p>Start with a clear goal, build a focused campaign, and learn from performance.</p></div></div><div className="detail-row"><span>02</span><div><b>What I’m building</b><p>Hands-on experience across paid advertising, social media and creative production.</p></div></div><div className="detail-row"><span>03</span><div><b>Based in</b><p>Gaya, Bihar, India · Available for remote opportunities</p></div></div></div>
        </div>
      </section>

      <section className="section services-section" id="services"><div className="container">
        <div className="section-heading"><div><span className="section-kicker">02 — WHAT I DO</span><h2>Skills that support<br /><span className="muted-heading">your next move.</span></h2></div><p>Practical digital skills to help brands improve visibility, reach their audience and communicate more effectively.</p></div>
        <div className="skills-grid">{skills.map((skill, i) => { const Icon = skill.icon; return <article className="skill-card" key={skill.name}><div className="skill-top"><span className={`skill-icon skill-${i}`}><Icon size={21}/></span><span className="skill-index">0{i+1}</span></div><span className="skill-tag">{skill.tag}</span><h3>{skill.name}</h3><p>{skill.detail}</p><div className="skill-footer"><span>CORE SKILL</span><ArrowUpRight size={17}/></div></article> })}</div>
      </div></section>

      <section className="section container" id="projects">
        <div className="section-heading"><div><span className="section-kicker">03 — SELECTED WORK</span><h2>Ideas into<br /><span className="muted-heading">action.</span></h2></div><p>Sample concepts that demonstrate how I approach campaign planning, creative direction and digital growth.</p></div>
        <div className="projects-grid">{projects.map(p => <article className={`project-card ${p.color}`} key={p.n}><div className="project-art"><span className="project-label">{p.type}</span><span className="project-num">{p.n}</span><div className="art-center">{p.n === '01' ? <Target size={56} strokeWidth={1.1}/> : p.n === '02' ? <MousePointer2 size={56} strokeWidth={1.1}/> : <TrendingUp size={56} strokeWidth={1.1}/>}</div><div className="art-bars"><i/><i/><i/><i/><i/><i/><i/></div></div><div className="project-content"><h3>{p.title}</h3><p>{p.text}</p><div className="chips">{p.chips.map(c => <span key={c}>{c}</span>)}</div><span className="sample-note">CONCEPT PROJECT · NOT CLIENT RESULTS</span></div></article>)}</div>
      </section>

      <section className="contact-section" id="contact"><div className="container contact-wrap"><div><span className="section-kicker">04 — HAVE A PROJECT IN MIND?</span><h2>Let’s make<br /><span className="gradient-text">something grow.</span></h2><p>Have a business, project or opportunity to discuss? I’d be happy to connect.</p><a className="button button-primary" href="mailto:subhamsam7992@gmail.com">Start a conversation <ArrowUpRight size={17}/></a></div><div className="contact-card"><span className="contact-card-label">GET IN TOUCH</span><a href="mailto:subhamsam7992@gmail.com" className="email-link"><span className="contact-icon"><Mail size={19}/></span><span><small>EMAIL ME</small><b>subhamsam7992@gmail.com</b></span><ArrowUpRight size={17}/></a><div className="contact-foot"><span><span className="status-dot"/> Usually replies as soon as possible</span><span>GAYA, INDIA</span></div></div></div></section>
    </main>
    <footer className="footer"><div className="container footer-inner"><Logo/><span>Designed with intention. Built for growth.</span><a href="#home">BACK TO TOP ↑</a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Shubham Kumar</span><span>Digital Marketer & Meta Ads Specialist</span></div></footer>
  </div>
}

export default App
