import { HashRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './Home'
import Project from './Project'
import { site } from './data'

function Shell({ children }) {
  const navigate = useNavigate()
  const goTo = (id) => (e) => { e.preventDefault(); navigate('/', { state: { to: id } }) }
  const link = 'underline decoration-transparent decoration-2 underline-offset-4 hover:decoration-signal'
  return (
    <>
      <header className="mx-auto flex max-w-5xl items-baseline justify-between px-6 py-6">
        <Link to="/" className="font-display text-lg font-bold">{site.name}</Link>
        <nav className="flex gap-6 text-sm font-medium">
          <a href="#projects" onClick={goTo('projects')} className={link}>Projects</a>
          <a href="#about" onClick={goTo('about')} className={link}>About</a>
          <a href="#contact" onClick={goTo('contact')} className={link}>Contact</a>
        </nav>
      </header>
      <main className="mx-auto max-w-5xl px-6">{children}</main>
      <footer className="mx-auto mt-24 max-w-5xl px-6 pb-10 text-sm text-muted">
        © {new Date().getFullYear()} {site.name}
      </footer>
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Shell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<Project />} />
          <Route path="*" element={<p className="py-24">Page not found. <Link to="/" className="underline">Go home</Link></p>} />
        </Routes>
      </Shell>
    </HashRouter>
  )
}
