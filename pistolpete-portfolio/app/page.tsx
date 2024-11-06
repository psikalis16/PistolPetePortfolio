// app/page.tsx

import Link from 'next/link';
import React, { CSSProperties } from 'react';

export default function HomePage() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Welcome to Pistol Pete&apos;s Portfolio</h1>
        <nav style={styles.nav}>
          <Link href="/about">
            <span style={styles.navLink}>About</span>
          </Link>
          <Link href="/projects">
            <span style={styles.navLink}>Projects</span>
          </Link>
          <Link href="/contact">
            <span style={styles.navLink}>Contact</span>
          </Link>
        </nav>
      </header>

      <main style={styles.main}>
        <section style={styles.about}>
          <h2 style={styles.subtitle}>About Me</h2>
          <p style={styles.description}>
            I’m Pete Sikalis, a highly skilled software developer with over three years of hands-on experience in
            building scalable, high-performing applications. With a solid foundation in <strong>Next.js</strong>, 
            <strong>React</strong>, <strong>PHP</strong>, <strong>MySQL</strong>, and 
            <strong>git</strong>, I’ve led front-end development for major projects and collaborated closely 
            with UX/UI designers to bring dynamic designs to life. I thrive in agile environments, adapting swiftly to 
            challenges and delivering optimized solutions.
          </p>
          <p style={styles.description}>
            Currently, I’m a front-end developer at Dealer Specialties, where I work closely with our UX/UI designer
            to transform Figma designs into functional applications, build and maintain APIs, and develop features and entire projects 
            from scratch using Next.js.
            I also have experience in backend technologies and am proficient in database management, working with SQL to 
            create and update schemas to meet evolving project requirements.
          </p>
          <p style={styles.description}>
            In addition to my technical expertise, I bring a unique edge as a former professional hockey player, which has 
            honed my teamwork, discipline, and resilience. With a Bachelor’s degree in Computer Science and a portfolio of 
            completed projects, I am continually advancing my skills through Udemy courses in Full Stack Web Development, 
            Ethical Hacking, and iOS App Development.
          </p>
        </section>
      </main>
    </div>
  );
}

// Define styles with CSSProperties for type safety
const styles: { [key: string]: CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, #f5f7fa, #c3cfe2)',
    color: '#333',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#4b6cb7',
    color: 'white',
    width: '100%',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '3em',
    marginBottom: '10px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  nav: {
    display: 'flex',
    gap: '20px',
    marginTop: '10px',
  },
  navLink: {
    color: '#e0e4f1',
    textDecoration: 'none',
    fontSize: '1.1em',
    fontWeight: '500',
    cursor: 'pointer',
    padding: '8px 12px',
    borderRadius: '8px',
    transition: 'background-color 0.2s ease',
  },
  main: {
    padding: '50px 20px',
    textAlign: 'center',
    maxWidth: '800px',
  },
  about: {
    padding: '0 20px',
  },
  subtitle: {
    fontSize: '2.2em',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  description: {
    fontSize: '1.15em',
    color: '#4a4a4a',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
};
