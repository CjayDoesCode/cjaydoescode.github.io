import './App.css'

function App() {
  const stack = [
    { name: 'C', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
    { name: 'C++', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
    { name: 'CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'HTML', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'Java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'Next.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
    { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'MySQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'Tailwind CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'Vite', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' }
  ];

  const links = [
    { href: "mailto:cjay.munoz@protonmail.com", title: "Send an email", icon: "bi bi-envelope-fill" },
    { href: "https://github.com/CjayDoesCode", title: "View GitHub profile", icon: "bi bi-github" },
    { href: "https://linkedin.com/in/cjay-muñoz/", title: "View LinkedIn profile", icon: "bi bi-linkedin" }
  ];

  return (
    <>
      <header className="mb-8 tracking-wide">
        <h1 className="text-xl/10 font-semibold">Cjay Muñoz</h1>
        <p className="text-zinc-300">Software Developer</p>
        <p className="text-zinc-300">Angeles City, Philippines</p>
        <nav className="mt-4">
          <ul className="flex flex-row flex-wrap gap-2">
            {links.map(({ href, title, icon }) => (
              <li key={href}>
                <a
                  className="flex justify-center items-center border-1 border-zinc-700 rounded-md size-12 text-2xl text-zinc-300 hover:bg-zinc-700 transition"
                  href={href}
                  target={href.startsWith('http') ? "_blank" : undefined}
                  rel={href.startsWith('http') ? "noreferrer" : undefined}
                  title={title}
                >
                  <i className={icon} aria-hidden="true"></i>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <section className="mb-8 tracking-wide">
        <h2 className="text-xl/10 font-semibold">About me</h2>
        <p className="text-zinc-300">
          Hey! I'm Cjay Muñoz, a first-year Computer Science student at City College of Angeles, Philippines.
          I enjoy solving coding challenges and tinkering with both software and hardware.
          Right now, I'm looking for remote internships in software or web development to level up my skills and gain some real-world experience.
        </p>
      </section>
      <section className="mb-8 tracking-wide">
        <h2 className="text-xl/10 font-semibold">Tech Stack</h2>
        <ul className="mt-2 flex flex-wrap justify-center gap-4">
          {stack.map(({ name, src }) => (
            <li key={name} className="size-10">
              <img src={src} alt={name} />
            </li>
          ))}
        </ul>
      </section>
      <footer className="tracking-wide">
        <p className="text-sm text-center">
          This web app was built with React, Tailwind CSS, and Vite.
          You can view the source code on{' '}
          <a
            className="underline"
            href="https://github.com/CjayDoesCode/cjaydoescode.github.io"
            target="_blank"
            rel="noreferrer"
            title="GitHub repository"
          >
            GitHub
          </a>.
        </p>
      </footer>
    </>
  )
}

export default App
