import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { site, projects } from './data'

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`

const Para = ({ p }) =>
  Array.isArray(p) ? <p><strong className="font-semibold">{p[0]}:</strong> {p[1]}</p> : <p>{p}</p>

const Section = ({ title, paras, img, alt }) => (
  <section className="space-y-4 leading-relaxed">
    <h2 className="font-display text-2xl font-bold">{title}</h2>
    <div className="max-w-prose space-y-4">{paras.map((p, i) => <Para key={i} p={p} />)}</div>
    {img && <img src={asset(img)} alt={alt} loading="lazy" className="mt-2 w-full rounded-md border border-line bg-white" />}
  </section>
)

export default function Project() {
  const { slug } = useParams()
  const p = projects.find((x) => x.slug === slug)
  useEffect(() => {
    window.scrollTo(0, 0)
    if (p) document.title = `${p.title} · ${site.name}`
  }, [slug])

  if (!p) return <p className="py-24">Project not found. <Link to="/" className="underline">Back to projects</Link></p>

  return (
    <article className="pb-8 pt-8">
      <Link to="/" state={{ to: 'projects' }} className="text-sm font-medium underline decoration-signal decoration-2 underline-offset-4">
        Back to projects
      </Link>
      <h1 className="mt-8 font-display text-[clamp(2.75rem,9vw,6rem)] font-extrabold leading-[0.95] tracking-tight">{p.title}</h1>
      <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-2 text-sm">
        {[['Type', p.kind], ['When', p.date], ['Team', p.team]].map(([k, v]) => (
          <div key={k}><dt className="text-muted">{k}</dt><dd className="font-medium">{v}</dd></div>
        ))}
      </dl>

      <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_17rem]">
        <div className="space-y-16">
          <Section title={p.aboutTitle} paras={[p.about]} img={p.images[0]} alt={p.title} />
          <Section title={p.featuresTitle} paras={p.features} img={p.images[1]} alt={`${p.title} preview`} />
          <Section title="What I learned" paras={p.learned} />
        </div>

        <aside className="space-y-10 lg:sticky lg:top-6 lg:self-start">
          <div>
            <h2 className="mb-3 font-display text-lg font-bold">Built with</h2>
            <ul className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li key={t} className="rounded-full border border-ink/30 px-3 py-1 text-sm">{t}</li>
              ))}
            </ul>
          </div>

          {p.links?.length > 0 && (
            <div>
              <h2 className="mb-3 font-display text-lg font-bold">Links</h2>
              <div className="flex flex-col gap-2">
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer"
                     className="rounded-md bg-ink px-4 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-cobalt">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          )}

          {p.credits && (
            <div className="text-sm leading-relaxed text-muted">
              <h2 className="mb-3 font-display text-lg font-bold text-ink">Team</h2>
              <p>
                Thanks to{' '}
                {p.credits.people.map((c, i, a) => (
                  <span key={c.name}>
                    {c.url ? <a href={c.url} target="_blank" rel="noreferrer" className="font-medium text-ink underline decoration-signal decoration-2 underline-offset-2">{c.name}</a> : c.name}
                    {i < a.length - 2 ? ', ' : i === a.length - 2 ? ' and ' : ''}
                  </span>
                ))}{' '}
                for being an amazing part of the team. {p.credits.note}
              </p>
            </div>
          )}
        </aside>
      </div>
    </article>
  )
}
