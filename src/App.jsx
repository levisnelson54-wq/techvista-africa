import "./App.css";

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const pulseItems = [
    {
      category: "AI & INNOVATION",
      title: "How AI is changing the way we build software",
      description:
        "Explore practical ways developers can use artificial intelligence to learn faster, build better products, and solve real problems.",
    },
    {
      category: "DEVELOPER WORLD",
      title: "The tools shaping the next generation of developers",
      description:
        "Discover frameworks, APIs, development platforms, and workflows helping developers turn ideas into working products.",
    },
    {
      category: "AFRICAN TECH",
      title: "Africa's technology ecosystem is growing",
      description:
        "Discover startups, developers, digital products, and technology communities creating new opportunities across the continent.",
    },
    {
      category: "OPPORTUNITIES",
      title: "Where developers can find their next opportunity",
      description:
        "Explore jobs, freelance work, programs, events, and other opportunities designed for people building technology careers.",
    },
  ];

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">
          TechVista<span>Africa</span>
        </div>

        <nav className="nav-links">
          <a href="#learn">Learn</a>
          <a href="#build">Build</a>
          <a href="#opportunities">Opportunities</a>
          <a href="#about">About</a>
        </nav>

        <button
          className="nav-button"
          onClick={() => scrollToSection("pulse")}
        >
          Explore TechVista
        </button>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">AFRICA&apos;S TECHNOLOGY PLATFORM</p>

          <h1>
            Technology.
            <br />
            Skills.
            <br />
            <span>Opportunities.</span>
          </h1>

          <p className="hero-text">
            Discover the knowledge, tools, opportunities, and technology
            shaping Africa&apos;s digital future.
          </p>

          <div className="hero-actions">
            <button
              className="primary-button"
              onClick={() => scrollToSection("learn")}
            >
              Start Exploring
            </button>

            <button
              className="secondary-button"
              onClick={() => scrollToSection("build")}
            >
              I&apos;m a Developer
            </button>
          </div>
        </section>

        <section className="path-section">
          <div className="section-heading">
            <p className="eyebrow">WHERE DO YOU WANT TO GO?</p>
            <h2>Choose your path.</h2>
          </div>

          <div className="path-grid">
            <article className="path-card" id="learn">
              <span className="card-number">01</span>

              <h3>I&apos;m Learning</h3>

              <p>
                Learn programming, AI, web development, APIs, and the skills
                needed to build your technology career.
              </p>

              <button onClick={() => scrollToSection("pulse")}>
                Explore Learning →
              </button>
            </article>

            <article className="path-card" id="build">
              <span className="card-number">02</span>

              <h3>I&apos;m Building</h3>

              <p>
                Discover developer tools, APIs, practical projects, and
                resources designed to help you turn ideas into products.
              </p>

              <button onClick={() => scrollToSection("pulse")}>
                Explore Tools →
              </button>
            </article>

            <article className="path-card" id="opportunities">
              <span className="card-number">03</span>

              <h3>I&apos;m Looking for Opportunities</h3>

              <p>
                Find technology jobs, freelance opportunities, programs,
                events, and other ways to move your career forward.
              </p>

              <button onClick={() => scrollToSection("pulse")}>
                Find Opportunities →
              </button>
            </article>
          </div>
        </section>

        <section className="pulse-section" id="pulse">
          <div className="pulse-header">
            <div>
              <p className="eyebrow">TECHVISTA PULSE</p>

              <h2>What&apos;s happening in technology?</h2>
            </div>

            <p className="pulse-intro">
              Ideas, tools, opportunities, and technology stories worth
              knowing.
            </p>
          </div>

          <div className="pulse-grid">
            {pulseItems.map((item) => (
              <article className="pulse-card" key={item.title}>
                <span>{item.category}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <button>Read more →</button>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="about">
        <div className="logo">
          TechVista<span>Africa</span>
        </div>

        <p>
          Building a stronger digital future through technology, skills, and
          opportunity.
        </p>

        <small>© 2026 TechVista Africa. Built from Nairobi.</small>
      </footer>
    </div>
  );
}

export default App;