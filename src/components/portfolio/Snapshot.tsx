import { ArrowUpRight } from 'lucide-react'
import { profile, skills } from './portfolioData'

export default function Snapshot() {
  return (
    <main className='snapshot-shell'>
      <div className='snapshot-grain' />
      <header className='snapshot-header'>
        <span>MW / 2023</span>
        <span>LAHORE, PK</span>
        <span>AVAILABLE FOR SELECT WORK</span>
      </header>
      <section className='snapshot-hero'>
        <p className='snapshot-kicker'>
          <i /> {profile.positioning.toUpperCase()}
        </p>
        <h1>
          Muhammad
          <br />
          <em>Waqar</em>
        </h1>
        <div className='snapshot-intro'>
          <p>
            I design the logic beneath useful, intelligent products—where robust
            systems meet an opinionated interface.
          </p>
          <a href='mailto:waqardanish1@gmail.com'>
            START A CONVERSATION <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
      <section className='snapshot-bottom'>
        <div className='snapshot-line'>
          <span>NOW</span>
          <strong>{profile.role}</strong>
          <span>Allzone Technologies</span>
        </div>
        <div className='snapshot-line snapshot-projects'>
          <span>SELECTED</span>
          <strong>DocRag · Sparkup AI · Orijin</strong>
          <div className='snapshot-socials'>
            <a
              href={profile.github}
              target='_blank'
              rel='noreferrer'
            >
              GITHUB ↗
            </a>
            <a
              href={profile.linkedin}
              target='_blank'
              rel='noreferrer'
            >
              LINKEDIN ↗
            </a>
            <a href={`mailto:${profile.email}`}>EMAIL ↗</a>
          </div>
        </div>
        <div className='snapshot-skills'>
          {skills.slice(0, 8).map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>
      <div className='snapshot-stamp'>
        AI
        <br />×<br />
        WEB
      </div>
    </main>
  )
}
