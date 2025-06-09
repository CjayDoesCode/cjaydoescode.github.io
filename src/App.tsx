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

const sourceCodeLink: string =
  'https://github.com/CjayDoesCode/cjaydoescode.github.io';

export default function App() {
  const [theme, setTheme] = useState<string>(() => {
    return (localStorage.getItem('theme') ?? (
      window.matchMedia('(prefers-color-scheme: light)').matches
        ? 'light'
        : 'dark'
    ));
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const onPageLoad = () => {
      const overlay = document.getElementById('overlay');
      if (!overlay) return;

      overlay.style.transition = 'opacity 500ms ease-in-out';

      setTimeout(() => {
        overlay.style.opacity = '0';

        overlay.addEventListener('transitionend', () => {
          overlay.remove();
          document.documentElement.style.removeProperty('overflow');
        }, { once: true });
      }, 500);
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad, { once: true });
    }
  }, []);

  function toggleTheme(): void {
    setTheme(t => t === 'light' ? 'dark' : 'light');
  }

  return (
    <>
      <Header theme={theme} handleClick={toggleTheme} />
      <AboutMeSection />
      <TechStackSection />
      <Footer />
    </>
  );
}

interface HeaderProps {
  theme: string;
  handleClick: () => void;
}

function Header({ theme, handleClick }: HeaderProps) {
  return (
    <header className='relative mb-8'>
      <h1>Cjay Muñoz</h1>
      <p><i className='bi bi-code-slash'></i> Software Developer</p>
      <p><i className='bi bi-geo-alt-fill'></i> Angeles City, Philippines</p>
      <nav className='mt-4'>
        <ul className='flex flex-wrap gap-2'>
          {headerLinks.map(({ href, icon, isExternal = false }) => (
            <li key={href}>
              <a
                className='header-link'
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
        <i
          className={
            theme === 'light'
              ? 'bi bi-brightness-high-fill'
              : 'bi bi-brightness-low-fill'
          }
        ></i>
      </button>
    </header>
  );
}

function AboutMeSection() {
  return (
    <section className='mb-8'>
      <h2>About me</h2>
      <p>
        Hey! I'm Cjay Muñoz, a first-year Computer Science student at City
        College of Angeles, Philippines. I enjoy solving coding challenges
        and tinkering with both software and hardware. Right now, I'm
        looking for remote internships in software or web development
        to level up my skills and gain some real-world experience.
      </p>
    </section>
  );
}

function TechStackSection() {
  return (
    <section className='mb-8'>
      <h2>Tech Stack</h2>
      <ul className='flex flex-wrap gap-2'>
        {techStack.map(({ id, name }) => (
          <li className='tech-stack-item' key={id}>
            <img
              className='size-4'
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
        This web app was built with React, Tailwind CSS,
        and Vite. You can view the source code on{' '}
        <a
          className='underline'
          href={sourceCodeLink}
          rel='noreferrer'
          target='_blank'
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
}
