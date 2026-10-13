import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, MoveUpRight, Menu } from 'lucide-react';
import './styles.css';

const projects = [
  {
    number: '01',
    slug: 'making-money-feel-simpler',
    title: 'Making money feel simpler',
    type: 'PRODUCT DESIGN · FINTECH',
    year: '2025',
    className: 'fintech',
    role: 'Product designer · UX research · UI design',
    overview: 'A mobile banking concept designed to make everyday spending easier to understand, helping people feel more confident about their money.',
    challenge: 'People often know how much money they have, but struggle to understand where it goes. Financial dashboards can feel dense, overly technical and difficult to act on.',
    approach: 'I focused on the everyday questions people ask about their finances. I simplified the information hierarchy, brought spending patterns forward and used plain language to make key actions easier to find.',
    outcome: 'A calmer dashboard concept that prioritises balance, spending trends and useful next steps without overwhelming the user.',
    visual: <div className="finance-visual">
      <div className="phone phone-back"><div className="phone-top" /><span className="tiny-label">TOTAL SAVINGS</span><strong>$8,420<span>.50</span></strong><div className="mini-chart"><i/><i/><i/><i/><i/><i/><i/><i/><i/></div><div className="mock-row"><b>●</b><span>Everyday account</span><strong>$2,340</strong></div></div>
      <div className="phone phone-front"><div className="phone-top" /><div className="app-greeting">Good morning, Alex <span>✳</span></div><div className="balance-label">YOUR BALANCE</div><div className="balance">$4,860<span>.20</span></div><div className="balance-pill">↑ 12.4% this month</div><div className="spend-head">Spending <span>•••</span></div><div className="spend-bars"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div><div className="mock-row"><b className="orange">↗</b><span>Groceries</span><strong>$86.40</strong></div><div className="mock-row"><b className="purple">⌂</b><span>Home</span><strong>$420.00</strong></div></div>
      <div className="floating-sticker">A little more<br/>financial clarity <span>↗</span></div>
    </div>
  },
  {
    number: '02',
    slug: 'a-better-way-to-discover',
    title: 'A better way to discover',
    type: 'WEB DESIGN · BRAND',
    year: '2025',
    className: 'discover',
    role: 'Product designer · Information architecture · Visual design',
    overview: 'A fresh web experience that helps people discover relevant ideas, products and inspiration without getting lost in a crowded interface.',
    challenge: 'The original experience made it hard to understand what was available or where to begin. The design needed to feel distinctive while making the first step obvious.',
    approach: 'I created a clear content hierarchy, used a strong editorial headline to establish the tone, and paired playful art direction with simple navigation and a focused primary action.',
    outcome: 'A more memorable landing page concept that gives the brand a recognisable visual voice while making exploration feel straightforward.',
    visual: <div className="discover-visual"><div className="browser-bar"><span/><span/><span/><small>goodthings.studio</small></div><div className="discover-inner"><div className="discover-nav">GOOD THINGS <span>MENU&nbsp; ☰</span></div><div className="discover-copy">Find your<br/><em>next thing.</em><p>Small discoveries. Big inspiration.</p><button>Explore the collection ↗</button></div><div className="sun-shape">✳</div><div className="shape-card shape-one">GOOD<br/>IDEAS</div><div className="shape-card shape-two">✷</div><div className="shape-card shape-three">NEW<br/>FAVOURITES</div></div></div>
  }
];

function CaseStudy({ project }) {
  return <article className="case-study" id={`case-study-${project.number}`}>
    <div className="project-title-row"><h3><a href={`/case-studies/${project.slug}`}>{project.title}</a></h3></div>
    <a className="project-art" href={`/case-studies/${project.slug}`} aria-label={`Read the ${project.title} case study`}>
      {project.visual}
      <span className="project-open"><ArrowUpRight size={20}/></span>
    </a>
    <p className="case-study-overview">{project.overview}</p>
  </article>;
}

function SiteHeader({ detail, menuOpen, onToggleMenu, onNavigate }) {
  const home = detail ? '/' : '';
  return <header className="site-header">
    <a className="wordmark" href={`${home}#top`} aria-label="Your Name home">Richard Zhou</a>
    <button className="mobile-menu" onClick={onToggleMenu} aria-label="Toggle navigation"><Menu size={22}/></button>
    <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
      <a href={`${home}#work`} onClick={onNavigate}>Case studies</a>
      <a href={`${home}#about`} onClick={onNavigate}>About</a>
    </nav>
  </header>;
}

function SiteFooter({ detail }) {
  return <footer className="site-footer"><a className="wordmark" href={detail ? '/#top' : '#top'}>Richard Zhou</a><div><a href="mailto:hello@example.com">EMAIL</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LINKEDIN ↗</a></div></footer>;
}

function CaseStudyPage({ project }) {
  const chapters = [
    { label: '01 / THE CHALLENGE', title: 'Start with the real friction.', body: project.challenge },
    { label: '02 / THE APPROACH', title: 'Make the experience clearer.', body: project.approach },
    { label: '03 / THE OUTCOME', title: 'A more considered experience.', body: project.outcome }
  ];
  const projectIndex = projects.indexOf(project);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return <main className="case-page" id="top">
    <div className="case-page-intro">
      <a className="case-back-link" href="/#work"><ArrowDownRight size={16}/> ALL CASE STUDIES</a>
      <p className="eyebrow case-page-kicker">{project.type} <span>·</span> {project.year}</p>
      <h1>{project.title}</h1>
      <p className="case-page-lede">{project.overview}</p>
      <div className="case-page-meta">
        <div><span>MY ROLE</span><strong>{project.role}</strong></div>
        <div><span>PROJECT</span><strong>{project.type}</strong></div>
        <div><span>YEAR</span><strong>{project.year}</strong></div>
      </div>
    </div>
    <div className={`case-page-art ${project.className}`}>{project.visual}</div>
    <div className="case-chapters">
      {chapters.map((chapter) => <section className="case-chapter" key={chapter.label}>
        <div className="case-chapter-label"><span>{chapter.label}</span><span className="chapter-mark">✳</span></div>
        <div className="case-chapter-copy"><h2>{chapter.title}</h2><p>{chapter.body}</p></div>
      </section>)}
    </div>
    <a className="next-case" href={`/case-studies/${nextProject.slug}`}>
      <span className="eyebrow">NEXT CASE STUDY <ArrowUpRight size={14}/></span>
      <strong>{nextProject.title}</strong>
    </a>
  </main>;
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const projectSlug = window.location.pathname.replace(/\/$/, '').split('/').pop();
  const selectedProject = window.location.pathname.startsWith('/case-studies/')
    ? projects.find(project => project.slug === projectSlug)
    : null;

  if (selectedProject) return <div className="site-shell">
    <SiteHeader detail menuOpen={menuOpen} onToggleMenu={() => setMenuOpen(!menuOpen)} onNavigate={() => setMenuOpen(false)}/>
    <CaseStudyPage project={selectedProject}/>
    <SiteFooter detail/>
  </div>;

  return <div className="site-shell">
    <SiteHeader detail={false} menuOpen={menuOpen} onToggleMenu={() => setMenuOpen(!menuOpen)} onNavigate={() => setMenuOpen(false)}/>

    <main id="top">
      <section id="work" className="work-section">
        <div className="section-heading"><h2>Case studies</h2></div>
        <div className="case-study-list">{projects.map(project => <CaseStudy key={project.number} project={project}/>)}</div>
      </section>


      <section className="hero">
        <div className="availability"><span className="availability-dot"/> AVAILABLE FOR SELECT PROJECTS</div>
        <h1>Thoughtful design<br/>for <span>real life.</span></h1>
        <div className="hero-bottom"><p>I’m a digital designer who turns complex problems into clear, useful and delightful experiences through research, thoughtful UX and considered visual design.</p><a href="#work" className="scroll-link">SCROLL TO EXPLORE <ArrowDownRight size={17}/></a></div>
        <div className="hero-mark" aria-hidden="true"><span>✳</span><small>DESIGN WITH<br/>INTENTION</small></div>
      </section>

      <section id="about" className="about-section">
        <div className="about-label"><span className="eyebrow">ABOUT ME</span><span className="about-star">✳</span></div>
        <div className="about-content"><h2>Curious by nature.<br/><span>Intentional by design.</span></h2><p>I care about the details, but never lose sight of the bigger picture. My process blends curiosity, clear thinking and a healthy dose of collaboration to make digital experiences that feel as good as they function.</p><a href="mailto:hello@example.com" className="text-link">A bit more about me <ArrowUpRight size={16}/></a></div>
      </section>
    </main>

    <SiteFooter detail={false}/>
  </div>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
