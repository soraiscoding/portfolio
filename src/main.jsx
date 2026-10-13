import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, MoveUpRight, Menu } from 'lucide-react';
import categoryIdeation from '../assets/category ideation.png';
import rainFinalUi from '../assets/Final UI rainfit.png';
import rainMainMockup from '../assets/main page mockup.png';
import videoListIdeation from '../assets/video list ideation.png';
import './styles.css';

const projects = [
  {
    number: '01',
    slug: 'confluence-guessr',
    title: 'ConfluenceGuessr',
    type: 'ATLASSIAN FORGE APP · PRODUCT DESIGN',
    year: '2026',
    className: 'confluence-guessr',
    role: 'Research · UI/UX design · Frontend development (React)',
    overview: 'A responsive Confluence app that turns reviewing pages and spaces into a guessing game, helping teams practise where useful information lives.',
    introduction: 'A Forge app for Confluence’s Global Page where users choose pages or spaces, guess the source of excerpts or images, and review answers with links back to the source. Scoring, a leaderboard and asynchronous team games add a social layer.',
    problem: 'As Confluence spaces grow, employees can spend time re-reading pages to find information and struggle to remember where it lives, adding friction to day-to-day work.',
    research: 'Research highlighted the effort of recalling where information lives and the extra time spent re-reading pages. We looked at Kahoot for its points, leaderboard and team play, and Anki for simple, self-paced review with links back to source material.',
    design: 'We designed a Confluence Forge app where people choose pages or spaces they can access, then identify the source of an excerpt or image. Speed-based points, a leaderboard and asynchronous team games bring a playful, social layer to review.',
    testing: 'We tested the experience with the client and tutor during demos, then iterated on the designs using their feedback. The work was developed by a five-person team, which also meant coordinating around a new technology for most of the group.',
    finalUI: 'The game view keeps the question, source choices, round progress and score together, with navigation to review answers and the leaderboard.',
    nextSteps: 'Next, validate how easily people can choose relevant pages and spaces, and whether the scoring and asynchronous team mode make review more engaging over time.',
    visual: <div className="guessr-visual">
      <div className="guessr-window">
        <div className="guessr-topbar"><span className="guessr-mark">C</span><strong>ConfluenceGuessr</strong><span className="guessr-space-label">PRODUCT HANDBOOK</span><span className="guessr-avatar">R</span></div>
        <div className="guessr-layout">
          <aside className="guessr-sidebar"><small>YOUR SPACE</small><strong>Product handbook</strong><span className="active">Play a round</span><span>Review answers</span><span>Leaderboard</span></aside>
          <div className="guessr-game">
            <div className="guessr-game-meta"><span>ROUND 03 OF 10</span><strong>00:18</strong></div>
            <div className="guessr-progress"><i/></div>
            <div className="guessr-question"><span>GUESS THE SOURCE</span><h3>“Clear goals help teams make better decisions.”</h3><p>Which page is this excerpt from?</p></div>
            <div className="guessr-answers"><div><b>A</b>Product principles</div><div><b>B</b>Design research archive</div><div><b>C</b>Quarterly planning</div></div>
            <div className="guessr-score"><span>+ 850 PTS</span><span>STREAK 03</span></div>
          </div>
        </div>
      </div>
    </div>
  },
  {
    number: '02',
    slug: 'rainfit',
    title: 'RainFit',
    type: 'Mobile/IOS design',
    year: null,
    className: 'rain',
    role: 'UX research · Product design',
    overview: 'An online fitness app concept that helps beginners find a course, set achievable goals, and stay motivated with trainer guidance and community support.',
    introduction: 'A proposed app connecting learners with fitness instructors and guided courses. Its design direction makes course goals visible and turns progress into a clear, social journey.',
    problem: 'People starting out can feel overwhelmed by the amount of fitness advice and similar courses online. Text-heavy lessons and exercising without social support can make it harder to stay motivated.',
    research: 'The research considered beginners with different goals, instructors building courses, and accessibility needs such as hearing loss. It also surfaced a need to make course milestones easy to compare and personal progress easy to follow.',
    persona: {
      name: 'Stephen',
      age: 30,
      profile: 'Single, independent UI designer; confident with technology; uses an iPhone; has hearing loss.',
      goals: 'Exercise at home to manage stress and build self-confidence. Create a fitness plan, receive professional guidance, work toward regular exercise targets, and connect with fitness enthusiasts who also have hearing loss.',
      accessNeeds: 'Captions for spoken instructions and vibration alerts for movement cues.',
      challenges: 'During complex movements Stephen can miss voice instructions. If his focus moves away from the screen, he may repeat the previous movement. Completing a target gives him a sense of satisfaction.',
      scenario: 'After work, Stephen follows an instructor’s movements during a home workout, relying on visual guidance when audio instructions are unavailable. Later, he reads and shares experiences in the community, where encouragement from peers builds his confidence.'
    },
    design: 'The concept combines goal-based course discovery with instructor guidance, visible course milestones, learner-created sub-goals and progress tracking. Community features share encouragement and progress, while captions and vibration cues support people who are deaf or hard of hearing.',
    designImages: [
      { src: categoryIdeation, alt: 'Category selection ideation comparing neutral buttons with colorful fitness category buttons.', caption: 'Category selection ideation' },
      { src: videoListIdeation, alt: 'Video lesson list ideation comparing detailed descriptions with a more compact list and larger titles.', caption: 'Video list ideation' }
    ],
    testing: 'We tested our designs with our tutor through moderated usability testing. Our tutor was told to say all her thoughts aloud and we observed her interactions with the designs. We iterated on the designs based on her feedback. For example, we increased the default font size of captions on training videos so that it was easier to read and more acessible for people with disabilities.',
    finalUI: 'The dashboard concept brings a trainer’s plan, the next workout, milestone progress and community activity into one view, so learners can see what to do next and how far they have come.',
    nextSteps: "We didn't didn't actually discuss this with our tutor or amongst ourselves as we felt content with what we had created. Looking back, I think we should have brainstormed some extra features or improvements we could have implemented into the app just as a good exercise.",
    visual: <img className="rain-image rain-home-image" src={rainMainMockup} alt="Rain fitness app dashboard, course discovery and reviews shown on three phone screens." />,
    finalUIVisual: <img className="rain-image rain-final-image" src={rainFinalUi} alt="Rain fitness app onboarding, registration, dashboard, course discovery and reviews screens." />
  }
];

function caseStudyHref(slug) {
  return `${import.meta.env.BASE_URL}case-studies/${slug}`;
}

function CaseStudy({ project }) {
  return <article className="case-study" id={`case-study-${project.number}`}>
    <div className="project-title-row"><h3><a href={caseStudyHref(project.slug)}>{project.title}</a></h3></div>
    <a className="project-art" href={caseStudyHref(project.slug)} aria-label={`Read the ${project.title} case study`}>
      {project.visual}
      <span className="project-open"><ArrowUpRight size={20}/></span>
    </a>
    <p className="case-study-overview">{project.overview}</p>
  </article>;
}

function SiteHeader({ detail, menuOpen, onToggleMenu, onNavigate }) {
  const home = detail ? import.meta.env.BASE_URL : '';
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
  return <footer className="site-footer"><a className="wordmark" href={detail ? `${import.meta.env.BASE_URL}#top` : '#top'}>Richard Zhou</a><div><a href="mailto:hello@example.com">EMAIL</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LINKEDIN ↗</a></div></footer>;
}

function CaseStudyPage({ project }) {
  const sections = [
    { id: 'introduction', title: 'Introduction', body: project.introduction },
    { id: 'problem', title: 'Problem', body: project.problem },
    { id: 'research', title: 'Research', body: project.research },
    { id: 'design', title: 'Design', body: project.design },
    { id: 'testing', title: 'Testing', body: project.testing },
    { id: 'final-ui', title: 'Final UI', body: project.finalUI },
    { id: 'next-steps', title: 'Next Steps', body: project.nextSteps }
  ];
  const projectIndex = projects.indexOf(project);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return <main className="case-page" id="top">
    <aside className="case-toc" aria-label="Case study sections">
      <p>ON THIS PAGE</p>
      <nav>{sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}</nav>
    </aside>
    <div className="case-page-content">
      <div className="case-page-intro">
        <a className="case-back-link" href={`${import.meta.env.BASE_URL}#work`}><ArrowDownRight size={16}/> ALL CASE STUDIES</a>
        <p className="eyebrow case-page-kicker">{project.type}{project.year && <> <span>·</span> {project.year}</>}</p>
        <h1>{project.title}</h1>
        <p className="case-page-lede">{project.overview}</p>
        <div className={project.year ? 'case-page-meta' : 'case-page-meta no-year'}>
          <div><span>MY ROLE</span><strong>{project.role}</strong></div>
          <div><span>PROJECT</span><strong>{project.type}</strong></div>
          {project.year && <div><span>YEAR</span><strong>{project.year}</strong></div>}
        </div>
      </div>
      <div className="case-study-sections">
        {sections.map((section) => <section className="case-chapter" id={section.id} key={section.id}>
          <div className="case-chapter-copy">
            <h2>{section.title}</h2>
            <p>{section.body}</p>
            {section.id === 'design' && project.designImages && <div className="design-ideation-gallery">
              {project.designImages.map((image) => <figure key={image.src}>
                <img src={image.src} alt={image.alt} />
                <figcaption>{image.caption}</figcaption>
              </figure>)}
            </div>}
            {section.id === 'research' && project.persona && <div className="research-persona">
              <div className="research-persona-heading">
                <div><span>USER PERSONA</span><h3>{project.persona.name}, {project.persona.age}</h3></div>
                <p>{project.persona.profile}</p>
              </div>
              <div className="research-persona-details">
                <div><h4>Goals</h4><p>{project.persona.goals}</p></div>
                <div><h4>Accessibility needs</h4><p>{project.persona.accessNeeds}</p></div>
                <div><h4>Challenges</h4><p>{project.persona.challenges}</p></div>
              </div>
              <blockquote><span>SCENARIO</span><p>{project.persona.scenario}</p></blockquote>
            </div>}
            {section.id === 'final-ui' && <div className={`case-page-art ${project.className}`}>{project.finalUIVisual || project.visual}</div>}
          </div>
        </section>)}
      </div>
      <a className="next-case" href={caseStudyHref(nextProject.slug)}>
        <span className="eyebrow">NEXT CASE STUDY <ArrowUpRight size={14}/></span>
        <strong>{nextProject.title}</strong>
      </a>
    </div>
  </main>;
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const basePath = import.meta.env.BASE_URL;
  const appPath = window.location.pathname.startsWith(basePath)
    ? `/${window.location.pathname.slice(basePath.length)}`
    : window.location.pathname;
  const projectSlug = appPath.replace(/\/$/, '').split('/').pop();
  const selectedProject = appPath.startsWith('/case-studies/')
    ? projects.find(project => project.slug === projectSlug)
    : null;

  if (selectedProject) return <div className="site-shell case-study-shell">
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


      <section id="about" className="about-section">
        <div className="about-label"><span className="eyebrow">ABOUT ME</span><span className="about-star">✳</span></div>
        <div className="about-content"><h2>Curious by nature.<br/><span>Intentional by design.</span></h2><p>I care about the details, but never lose sight of the bigger picture. My process blends curiosity, clear thinking and a healthy dose of collaboration to make digital experiences that feel as good as they function.</p><a href="mailto:hello@example.com" className="text-link">A bit more about me <ArrowUpRight size={16}/></a></div>
      </section>
    </main>

    <SiteFooter detail={false}/>
  </div>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
