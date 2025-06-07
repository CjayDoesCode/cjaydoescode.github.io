import './App.css'

function App() {
  return (
    <main>
      <header>
        <h1>Cjay Muñoz, 20</h1>
        <p>Software Developer</p>
        <p>Angeles City, Philippines</p>
        <nav>
          <ul>
            <li>
              <a href="mailto:cjay.munoz@protonmail.com" title="Send an email">Email</a>
            </li>
            <li>
              <a
                href="https://github.com/CjayDoesCode"
                target="_blank"
                rel="noreferrer"
                title="View GitHub profile"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/cjay-muñoz/"
                target="_blank"
                rel="noreferrer"
                title="View LinkedIn profile"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <h2>About me</h2>
        <p>
          What's up! I'm Cjay Muñoz, a first year Computer Science student.
          I love solving coding problems and tinkering with both computer software and hardware.
        </p>
      </section>
      <section>
        <h2>Tech Stack</h2>
        <ul>
          <li>C</li>
          <li>C++</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>Java</li>
          <li>JavaScript</li>
          <li>Next.js</li>
          <li>Python</li>
          <li>React</li>
          <li>SQL</li>
          <li>Tailwind CSS</li>
          <li>TypeScript</li>
          <li>Vite</li>
        </ul>
      </section>
      <footer>
        <p>
          This web app was built with React, Tailwind CSS, and Vite. You can view the source code on&nbsp;
          <a
            href="https://github.com/CjayDoesCode"
            target="_blank"
            rel="noreferrer"
            title="GitHub repository"
          >
            GitHub
          </a>.
        </p>
      </footer>
    </main>
  )
}

export default App
