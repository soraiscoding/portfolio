import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, MoveUpRight, Menu } from 'lucide-react';
import categoryIdeation from '../assets/category ideation.png';
import confluenceHomePage from '../assets/final ui home page.png';
import finalDesignQuestionExcerpt from '../assets/final design question excerpt type.png';
import finalDesignQuestionReview from '../assets/final design question review.png';
import imageQuestion from '../assets/image question.png';
import designDecisionKahoot from '../assets/design decision kahoot.png';
import designDecisionNative from '../assets/design decision native.png';
import demoAQuestionScreen from '../assets/demo a question screen.png';
import demoAStartScreen from '../assets/demo a start screen.png';
import demoBHomePage from '../assets/demo b home page.png';
import demoBQuestionReview from '../assets/demo b question review.png';
import demoBQuestionScreen from '../assets/demo b question screen.png';
import demoBScoreboard from '../assets/demo b scoreboard.png';
import moscowUniResearch from '../assets/moscow uni research.png';
import rainFinalUi from '../assets/Final UI rainfit.png';
import rainMainMockup from '../assets/main page mockup.png';
import videoListIdeation from '../assets/video list ideation.png';
import win98GeneratingQuestions from '../assets/win98_confluence generating questions.png';
import win98QuestionReview from '../assets/win98_confluence question review.png';
import win98QuestionScreen from '../assets/win98_confluence question screen.png';
import win98StartSolo from '../assets/win98_confluence start solo screen.png';
import './styles.css';

const projects = [
  {
    number: '01',
    slug: 'confluence-guessr',
    title: 'ConfluenceGuessr',
    type: 'Atlassian Forge app · Responsive web',
    year: '2026',
    timeline: 'Jun - Aug 2026',
    className: 'confluence-guessr',
    role: 'Research · UI/UX design · Frontend development (React)',
    overview: 'A responsive Confluence app that turns reviewing pages and spaces into a guessing game, helping teams review and remember where useful information lives.',
    introduction: 'A Forge app for Confluence’s Global Page where users choose pages or spaces, guess the source of excerpts or images, and review answers with links back to the source. Scoring, a leaderboard and asynchronous team games add a social layer.',
    problem: 'As Confluence spaces grow, employees can spend time re-reading pages to find information and struggle to remember where it lives, adding friction to day-to-day work.',
    targetUser: 'Recently onboarded employees that use Confluence who struggle to remember where compnay documentation lives.',
    solution: 'A Forge app that turns reviewing pages and spaces into a guessing game, helping people remember where useful information lives.',
    research: 'Research highlighted the effort of recalling where information lives and the extra time spent re-reading pages. It specifically asked people to find a new piece of information in different environments with the most simple environment using no context clues and only providing the documentation. The final environment provided page numbers, page breaks, thumbnails for the pages as well as scrolling. The findings of the study showed that the environment with the most context clues led to the best performance/efficiency and quickest time when looking for a piece of information in the given documentation.',
    researchImage: {
      src: moscowUniResearch,
      alt: 'Moscow University research slide comparing information retrieval efficiency across document navigation methods. Paging and thumbnails scored highest.',
      caption: 'Moscow University study on navigation context and information retrieval.'
    },
    researchContinuation: 'So, we decided on making our Forge game app have as many context clues as possible with clues, links to the source page a quote or image is from, the ability to review questions (at the end) and see what you got right and wrong and most importantly we wanted to keep everything within Confluence Forge (as it would help with remembering documenation if everything is localised in Confluence). We also looked at relevant technologies and products that solved a similar problem. looked at Kahoot for its points, leaderboard and team play, and Anki for simple, self-paced review with links back to source material.',
    researchImages: [
      { src: designDecisionNative, alt: 'Design decision slide explaining why ConfluenceGuessr should be native to Confluence and run within Forge.', caption: 'Design decision: Native to Confluence' },
      { src: designDecisionKahoot, alt: 'Design decision slide explaining how Kahoot-style gamification can make reviewing information more engaging.', caption: 'Design decision: Gamified review' }
    ],
    design: 'We designed a Confluence Forge app, over the course of three sprints (Demo A, Demo B and Demo C/final Demo), where people choose pages or spaces they can access, then identify the source of an excerpt or image. Speed-based points, a leaderboard and asynchronous team games bring a playful, social layer to the reviewing process.',
    designNote: 'For Demo A, most of our effort went into research and documentation: understanding the problem and target user, then deciding how to approach the project. The early demo was deliberately primitive; we focused first on the two essential game screens—the start screen and question screen—to establish the core flow.',
    designImages: [
      { src: demoAStartScreen, alt: 'ConfluenceGuessr Demo A start screen with question count, game mode, space selection, and a Start game button.', caption: 'Demo A: Start screen' },
      { src: demoAQuestionScreen, alt: 'ConfluenceGuessr Demo A question screen showing a source-guessing question and answer choices.', caption: 'Demo A: Question screen' }
    ],
    designFeedback: 'Usability testing with our Atlassian mentor and university class tutor led us to add an info button explaining how to play, a question review for answers, and a way to return to the start screen.',
    designFeedbackImages: [
      { src: demoBHomePage, alt: 'ConfluenceGuessr Demo B home screen with game settings and an information button.', caption: 'Demo B: Home screen' },
      { src: demoBQuestionScreen, alt: 'ConfluenceGuessr Demo B question screen with answer choices and a way back to the start screen.', caption: 'Demo B: Question screen' },
      { src: demoBScoreboard, alt: 'ConfluenceGuessr Demo B final scoreboard with player rankings and scores.', caption: 'Demo B: Scoreboard' },
      { src: demoBQuestionReview, alt: 'ConfluenceGuessr Demo B question review screen showing questions and review controls.', caption: 'Demo B: Question review' }
    ],
    testing: 'We tested the experience with the client and tutor during demos, then iterated on the designs using their feedback. The work was developed by a five-person team, which also meant I (as team leader) had to coordinate the team around a new technology for most of the group.',
    finalUI: 'The final UI standardised the fonts (after comments from our class tutor mentioned inconsistencies in the ui and that the text was too hard to read i.e. is too small) and overall cleaned everything and made sure all the buttons worked as expected. We also cleaned the AI question generation function to use less credits and take less time to generate the questions. Image-based guessing rounds was also fixed successfully.',
    nextSteps: 'We wanted to implement themes such as a Windows 98-inspired design concept for the app, which would have been a fun and nostalgic way to present the game. I created all the designs within Affinity, which is similar to Photoshop. Due to time constraints, we couldn’t implement the themes features. We also discussed multiple times the idea of using Rovo AI which is the AI model native to Forge to ensure that when we generated questions that it would be more security friendly as data wouldn’t be leaving the Atlassian ecosystem. Finally, we also wanted to implement a team mode where multiple people could play together asynchronously, but we didn’t have time to implement this feature.',
    visual: <div className="laptop-mockup">
      <div className="laptop-screen"><img src={confluenceHomePage} alt="" /></div>
      <div className="laptop-base"><span /></div>
    </div>,
    finalUIImages: [
      { src: confluenceHomePage, alt: 'ConfluenceGuessr home page with game settings and a Start game button.', caption: 'Final UI: Home page' },
      { src: imageQuestion, alt: 'ConfluenceGuessr image question round with a visual clue, answer options, timer, and score.', caption: 'Final UI: Image question' },
      { src: finalDesignQuestionExcerpt, alt: 'ConfluenceGuessr final text question showing an excerpt from a Confluence page and answer options.', caption: 'Final UI: Excerpt question' },
      { src: finalDesignQuestionReview, alt: 'ConfluenceGuessr final question review screen showing answers and their source pages.', caption: 'Final UI: Question review' }
    ],
    nextStepsImages: [
      { src: win98StartSolo, alt: 'Windows 98-inspired ConfluenceGuessr start screen with solo game settings.', caption: 'Windows 98 concept: Start a solo game' },
      { src: win98GeneratingQuestions, alt: 'Windows 98-inspired ConfluenceGuessr question generation loading screen.', caption: 'Windows 98 concept: Generating questions' },
      { src: win98QuestionScreen, alt: 'Windows 98-inspired ConfluenceGuessr text question screen with answer options.', caption: 'Windows 98 concept: Question screen' },
      { src: win98QuestionReview, alt: 'Windows 98-inspired ConfluenceGuessr question review screen.', caption: 'Windows 98 concept: Question review' }
    ]
  },
  {
    number: '02',
    slug: 'rainfit',
    title: 'RainFit',
    type: 'Mobile/IOS design',
    year: null,
    timeline: 'Jun - Aug 2022',
    className: 'rain',
    role: 'UX research · Product design',
    overview: 'An online fitness app concept that helps beginners find a course, set achievable goals, and stay motivated with trainer guidance and community support.',
    introduction: 'A proposed app connecting learners with fitness instructors and guided courses. Its design direction makes course goals visible and turns progress into a clear, social journey.',
    problem: 'People starting out can feel overwhelmed by the amount of fitness advice and similar courses online. Text-heavy lessons and exercising without social support can make it harder to stay motivated.',
    targetUser: 'Beginners in fitness who want to exercise at home.',
    solution: 'Create an iPhone app that helps beginners find an easy to follow course, set achievable goals, and stay motivated with trainer guidance and community support.',
    research: 'The research considered beginners with different goals, instructors building courses, and accessibility needs such as hearing loss. It also surfaced a need to make course milestones easy to compare and personal progress easy to follow.',
    persona: {
      name: 'Stephen',
      age: 30,
      profile: 'Single, independent UI designer; confident with technology; uses an iPhone; has hearing loss.',
      goals: 'Exercise at home to manage stress and build self-confidence. Create a fitness plan, receive professional guidance, work toward regular exercise targets, and connect with fitness enthusiasts who also have hearing loss.',
      accessNeeds: 'Captions for spoken instructions and vibration alerts for movement cues.',
      challenges: 'During complex movements Stephen can miss voice instructions. If his focus moves away from the screen, he may repeat the previous movement.',
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
  return <footer className="site-footer"><a className="wordmark" href={detail ? `${import.meta.env.BASE_URL}#top` : '#top'}>Richard Zhou</a></footer>;
}

function ImageGallery({ images }) {
  return <div className="case-image-gallery">
    {images.map((image) => <figure key={image.src}>
      <img src={image.src} alt={image.alt} />
      <figcaption>{image.caption}</figcaption>
    </figure>)}
  </div>;
}

function CaseStudyPage({ project }) {
  const sections = [
    { id: 'introduction', title: 'Introduction', body: project.introduction },
    { id: 'problem', title: 'Problem', body: project.problem },
    { id: 'target-user', title: 'Target User', body: project.targetUser },
    { id: 'solution', title: 'Solution', body: project.solution },
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
        <div className="case-page-meta">
          <div><span>MY ROLE</span><strong>{project.role}</strong></div>
          <div><span>PROJECT TYPE</span><strong>{project.type}</strong></div>
          <div><span>TIMELINE</span><strong>{project.timeline}</strong></div>
        </div>
      </div>
      <div className="case-study-sections">
        {sections.map((section) => <section className="case-chapter" id={section.id} key={section.id}>
          <div className="case-chapter-copy">
            <h2>{section.title}</h2>
            <p>{section.body}</p>
            {section.id === 'research' && project.researchImage && <>
              <figure className="research-image">
                <img src={project.researchImage.src} alt={project.researchImage.alt} />
                <figcaption>{project.researchImage.caption}</figcaption>
              </figure>
              <p className="research-continuation">{project.researchContinuation}</p>
            </>}
            {section.id === 'design' && project.designImages && <ImageGallery images={project.designImages} />}
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
            {section.id === 'design' && project.designNote && <p className="design-note">{project.designNote}</p>}
            {section.id === 'design' && project.designFeedback && <p className="design-note design-feedback">{project.designFeedback}</p>}
            {section.id === 'design' && project.designFeedbackImages && <ImageGallery images={project.designFeedbackImages} />}
            {section.id === 'research' && project.researchImages && <ImageGallery images={project.researchImages} />}
            {section.id === 'final-ui' && (project.finalUIImages
              ? <ImageGallery images={project.finalUIImages} />
              : <div className={`case-page-art ${project.className}`}>{project.finalUIVisual || project.visual}</div>)}
            {section.id === 'next-steps' && project.nextStepsImages && <ImageGallery images={project.nextStepsImages} />}
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
        <div className="about-content"><h2>Richard Zhou<br/></h2><p><b>Computer Science student focused on UI/UX and user-centered design.</b> <br/> I like to cook, hike, play tennis and piano in my spare time. I have about 2 years of experience working at restaurants (both front of house and back of house) and at university I have taught Japanese and volunteered in various programs (predominantly giving food/groceries away to those in need).</p></div>
      </section>
    </main>

    <SiteFooter detail={false}/>
  </div>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
