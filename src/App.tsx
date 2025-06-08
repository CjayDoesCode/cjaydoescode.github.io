import './App.css'

const headerLinks: { href: string; icon: string; isExternal?: boolean }[] = [
  { href: 'https://github.com/CjayDoesCode', icon: 'bi bi-github' },
  { href: 'https://linkedin.com/in/cjay-muñoz/', icon: 'bi bi-linkedin' },
  { href: 'mailto:cjay.munoz@protonmail.com', icon: 'bi bi-envelope-fill', isExternal: true }
];

const techStack: { name: string; id: string }[] = [
  { name: "C", id: "c" },
  { name: "C++", id: "cplusplus" },
  { name: "CSS", id: "css3" },
  { name: "HTML", id: "html5" },
  { name: "Java", id: "java" },
  { name: "JavaScript", id: "javascript" },
  { name: "Next.js", id: "nextjs" },
  { name: "Python", id: "python" },
  { name: "React", id: "react" },
  { name: "MySQL", id: "mysql" },
  { name: "Tailwind CSS", id: "tailwindcss" },
  { name: "TypeScript", id: "typescript" },
  { name: "Vite", id: "vitejs" }
];

export default function App() {
  return (
    <>
      <Header />
      <AboutMeSection />
      <TechStackSection />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header>
      <h1>Cjay Muñoz</h1>
      <p><i className="bi bi-code-slash"></i> Software Developer</p>
      <p><i className="bi bi-geo-alt-fill"></i> Angeles City, Philippines</p>
      <nav className="header-links">
        <ul>
          {headerLinks.map(({ href, icon, isExternal = false }, index) => (
            <li key={index}>
              <a
                href={href}
                rel={isExternal ? "noreferrer" : undefined}
                target={isExternal ? "_blank" : undefined}
              >
                <i className={icon} aria-hidden="true"></i>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function AboutMeSection() {
  return (
    <section>
      <h2>About me</h2>
      <p>
        Hey! I'm Cjay Muñoz, a first-year Computer Science student at City College of Angeles, Philippines.
        I enjoy solving coding challenges and tinkering with both software and hardware.
        Right now, I'm looking for remote internships in software or web development
        to level up my skills and gain some real-world experience.
      </p>
    </section>
  );
}

function TechStackSection() {
  return (
    <section>
      <h2>Tech Stack</h2>
      <ul className="tech-stack">
        {techStack.map(({ name, id }, index) => (
          <li key={index}>
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${id}/${id}-original.svg`}
              alt=""
            />
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <p className="text-center">
        This web app was built with React, Tailwind CSS, and Vite.
        You can view the source code on {
          <a
            className="underline"
            href="https://github.com/CjayDoesCode/cjaydoescode.github.io"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        }.
      </p>
    </footer>
  );
}

