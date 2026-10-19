import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { site, projects, experience } from './data'
export default function Home() {
  const loc = useLocation()
  useEffect(() => {
    document.title = site.name
    const id = loc.state?.to
    if (id) document.getElementById(id)?.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [loc.key])

  return (
    <>
      <section className="pb-20 pt-16 sm:pt-24">
        <h1 className="font-display text-[clamp(3.5rem,13vw,9rem)] font-extrabold leading-[0.88] tracking-tight">
          Nathan<br />Darrell
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">{site.intro}</p>
      </section>

      <section id="projects" className="scroll-mt-6 border-b border-line">
        <h2 className="mb-6 font-display text-2xl font-bold">Projects</h2>
        {projects.map((p) => (
          <Link
            key={p.slug}
            to={`/project/${p.slug}`}
            className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 border-t border-line px-3 py-5 transition-all hover:bg-cobalt hover:pl-6 hover:text-paper focus-visible:bg-cobalt focus-visible:text-paper sm:grid-cols-[1fr_11rem_10rem]"
          >
            <span className="font-display text-2xl font-bold sm:text-4xl">{p.title}</span>
            <span className="hidden text-sm opacity-70 sm:block">{p.kind}</span>
            <span className="text-right text-sm opacity-70">{p.date}</span>
          </Link>
        ))}
      </section>
      <section id="experience" className="mt-24 grid scroll-mt-6 gap-6 md:grid-cols-[12rem_1fr]">
        <h2 className="font-display text-2xl font-bold">Experience</h2>
        <div>
          {experience.map((e) => (
            <div key={e.role} className="grid gap-x-8 gap-y-1 border-t border-line py-6 sm:grid-cols-[9rem_1fr]">
              <p className="text-sm text-muted">{e.date}</p>
              <div className="max-w-xl">
                <h3 className="font-display text-xl font-bold">{e.role}</h3>
                {e.org && <p className="text-sm font-medium">{e.org}</p>}
                <p className="mt-3 leading-relaxed">{e.text}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <li key={t} className="rounded-full border border-ink/30 px-3 py-1 text-sm">{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="about" className="mt-24 grid scroll-mt-6 gap-6 md:grid-cols-[12rem_1fr]">
        <h2 className="font-display text-2xl font-bold">About</h2>
        <div className="max-w-xl space-y-4 leading-relaxed">
          {site.about.map((t, i) => <p key={i}>{t}</p>)}
        </div>
      </section>

      <section id="contact" className="mt-20 grid scroll-mt-6 gap-6 md:grid-cols-[12rem_1fr]">
        <h2 className="font-display text-2xl font-bold">Contact</h2>
        <ul className="space-y-2">
          {site.contact.map((c) => (
            <li key={c.label}>
              <a href={c.href} className="font-medium underline decoration-signal decoration-4 underline-offset-4 hover:bg-signal">
                {c.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
