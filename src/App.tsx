import { useEffect, useState } from 'react';
import { getDeviconUrl } from './utils';
import './App.css';

interface HeaderLink {
  href: string;
  icon: string;
  isExternal?: boolean;
}

const headerLinks: HeaderLink[] = [
  { href: 'https://github.com/CjayDoesCode', icon: 'bi bi-github' },
  { href: 'https://linkedin.com/in/cjay-muñoz/', icon: 'bi bi-linkedin' },
  { href: 'mailto:cjay.munoz@protonmail.com', icon: 'bi bi-envelope-fill', isExternal: true }
];

interface Tech {
  id: string;
  name: string;
}

const techStack: Tech[] = [
  { id: 'c', name: 'C' },
  { id: 'cplusplus', name: 'C++' },
  { id: 'css3', name: 'CSS' },
  { id: 'html5', name: 'HTML' },
  { id: 'java', name: 'Java' },
  { id: 'javascript', name: 'JavaScript' },
  { id: 'nextjs', name: 'Next.js' },
  { id: 'python', name: 'Python' },
  { id: 'react', name: 'React' },
  { id: 'mysql', name: 'MySQL' },
  { id: 'tailwindcss', name: 'Tailwind CSS' },
  { id: 'typescript', name: 'TypeScript' },
  { id: 'vitejs', name: 'Vite' }
];

const sourceCodeLink: string = 'https://github.com/CjayDoesCode/cjaydoescode.github.io';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => localStorage.getItem('theme') !== 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  function toggleTheme(): void {
    setIsDark(i => !i);
  }

  return (
    <>
      <Header isDark={isDark} handleClick={toggleTheme} />
      <AboutMeSection />
      <TechStackSection />
      <Footer />
    </>
  );
}

interface HeaderProps {
  isDark: boolean;
  handleClick: () => void;
}

function Header({ isDark, handleClick }: HeaderProps) {
  return (
    <header className='relative mb-8'>
      <h1>Cjay Muñoz</h1>
      <p><i className='bi bi-code-slash'></i> Software Developer</p>
      <p><i className='bi bi-geo-alt-fill'></i> Angeles City, Philippines</p>
      <nav className='mt-4'>
        <ul className='header-links flex flex-wrap gap-2'>
          {headerLinks.map(({ href, icon, isExternal = false }) => (
            <li key={href}>
              <a
                href={href}
                rel={isExternal ? 'noreferrer' : undefined}
                target={isExternal ? '_blank' : undefined}
              >
                <i className={icon} aria-hidden='true'></i>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button className='theme-button' onClick={handleClick}>
        <i className={isDark ? 'bi bi-brightness-low-fill' : 'bi bi-brightness-high-fill'}></i>
      </button>
    </header>
  );
}

function AboutMeSection() {
  return (
    <section className='mb-8'>
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
    <section className='mb-8'>
      <h2>Tech Stack</h2>
      <ul className='tech-stack flex flex-wrap gap-2'>
        {techStack.map(({ id, name }) => (
          <li key={id}>
            <img
              src={getDeviconUrl(id)}
              alt=''
              loading='lazy'
            />
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p className='text-center'>
        This web app was built with React, Tailwind CSS, and Vite.
        You can view the source code on {
          <a
            className='underline'
            href={sourceCodeLink}
            rel='noreferrer'
            target='_blank'
          >
            GitHub
          </a>
        }.
      </p>
    </footer>
  );
}

