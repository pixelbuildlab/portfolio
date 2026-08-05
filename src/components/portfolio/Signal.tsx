import { MapPin, Phone, Sparkles, ArrowUpRight } from 'lucide-react'
import {
  contactLinks,
  education,
  experiences,
  profile,
  projects,
  signalTape,
} from './portfolioData'

export default function Signal() {
  return (
    <main className='signal-page'>
      <div className='signal-masthead'>
        <span>MW//SIGNAL</span>
        <span>ISSUE_001</span>
        <span>OPEN TO BUILD</span>
      </div>
      <section className='signal-hero'>
        <p>
          <Sparkles size={16} /> AI FULL-STACK ENGINEER
        </p>
        <h1>
          BUILD
          <br />
          <span>LOUD.</span>
        </h1>
        <div className='signal-bio'>
          <p>
            I turn ambitious product ideas into capable systems: LLM-powered
            tools, practical automations, and full-stack software that does the
            difficult work quietly.
          </p>
          <a href='mailto:waqardanish1@gmail.com'>
            HIRE ME <ArrowUpRight />
          </a>
        </div>
      </section>
      <section className='signal-tape'>
        {signalTape.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </section>
      <section className='signal-grid'>
        <article className='signal-about'>
          <p>01 / CURRENT FREQUENCY</p>
          <h2>
            {profile.role}
            <br />
            at <i>{experiences[0].company}</i>
          </h2>
          <small>
            {experiences[0].period} · {experiences[0].location}
          </small>
        </article>
        <article className='signal-exp'>
          <p>02 / FIELD NOTES</p>
          <ul>
            {experiences[0].highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </article>
        <article className='signal-projects'>
          <p>03 / PROJECT INDEX</p>
          {projects.map((project, index) => (
            <div key={project.title}>
              <b>{String(index + 1).padStart(2, '0')}</b>
              <span>
                <strong>{project.title}</strong>
                <small>{project.detail}</small>
                <em>{project.stack}</em>
              </span>
              {project.link ? (
                <a
                  href={project.link}
                  target='_blank'
                  rel='noreferrer'
                >
                  <ArrowUpRight size={15} />
                </a>
              ) : (
                <ArrowUpRight size={15} />
              )}
            </div>
          ))}
        </article>
        <article className='signal-side'>
          <p>04 / CREDENTIALS</p>
          <strong>{education.degree.toUpperCase()}</strong>
          <span>{education.school}</span>
          <em>
            {education.period} / CGPA {education.cgpa}
          </em>
          <strong>OCI AI FOUNDATIONS</strong>
          <span>Associate Certification / {education.certificationYear}</span>
        </article>
      </section>
      <footer className='signal-footer'>
        <div>
          <MapPin size={16} /> {profile.location}
        </div>
        {contactLinks.map(({ label, value, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={label === 'Email' ? undefined : '_blank'}
            rel='noreferrer'
          >
            <Icon size={16} /> {value}
          </a>
        ))}
        <a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}>
          <Phone size={16} /> {profile.phone}
        </a>
      </footer>
    </main>
  )
}
