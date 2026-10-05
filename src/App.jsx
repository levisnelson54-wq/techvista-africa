import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("ALL");

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const pulseItems = [
    {
      category: "AI",
      label: "AI & INNOVATION",
      title: "How AI is changing the way we build software",
      description:
        "Explore practical ways developers can use artificial intelligence to learn faster, build better products, and solve real problems.",
    },
    {
      category: "DEVELOPER",
      label: "DEVELOPER WORLD",
      title: "The tools shaping the next generation of developers",
      description:
        "Discover frameworks, APIs, development platforms, and workflows helping developers turn ideas into working products.",
    },
    {
      category: "AFRICAN TECH",
      label: "AFRICAN TECH",
      title: "Africa's technology ecosystem is growing",
      description:
        "Discover startups, developers, digital products, and technology communities creating new opportunities across the continent.",
    },
    {
      category: "OPPORTUNITIES",
      label: "OPPORTUNITIES",
      title: "Where developers can find their next opportunity",
      description:
        "Explore jobs, freelance work, programs, events, and other opportunities designed for people building technology careers.",
    },
  ];

  const categories = [
    "ALL",
    "AI",
    "DEVELOPER",
    "AFRICAN TECH",
    "OPPORTUNITIES",
  ];

  const filteredPulseItems = useMemo(() => {
    return pulseItems.filter((item) => {
      const matchesCategory =
        activeCategory === "ALL" || item.category === activeCategory;

      const search = searchTerm.toLowerCase().trim();

      const matchesSearch =
        search === "" ||
        item.title.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search) ||
        item.label.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

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

          <article className="featured-story">
            <div className="featured-content">
              <span className="featured-label">⭐ FEATURED STORY</span>

              <p className="featured-category">AFRICAN TECH</p>

              <h3>
                The future of technology is being built across Africa
              </h3>

              <p className="featured-description">
                From ambitious developers to fast-growing startups, Africa is
                building new technology, solving local problems, and creating
                opportunities for the next generation.
              </p>

              <button
                className="featured-button"
                onClick={() => setActiveCategory("AFRICAN TECH")}
              >
                Explore African Tech →
              </button>
            </div>

            <div className="featured-visual">
              <span>TECHVISTA</span>

              <strong>01</strong>

              <p>
                Ideas
                <br />
                becoming
                <br />
                impact.
              </p>
            </div>
          </article>

          <div className="pulse-controls">
            <div className="search-box">
              <span>⌕</span>

              <input
                type="text"
                placeholder="Search stories, topics, opportunities..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                aria-label="Search TechVista Pulse"
              />

              {searchTerm && (
                <button
                  className="clear-search"
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            <div className="category-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  className={
                    activeCategory === category
                      ? "category-button active"
                      : "category-button"
                  }
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="pulse-results">
            {filteredPulseItems.length > 0 ? (
              filteredPulseItems.map((item) => (
                <article className="pulse-card" key={item.title}>
                  <span>{item.label}</span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <button>Read more →</button>
                </article>
              ))
            ) : (
              <div className="empty-state">
                <div className="empty-icon">⌕</div>

                <h3>No stories found</h3>

                <p>
                  We couldn&apos;t find anything matching your search. Try
                  another topic or category.
                </p>

                <button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("ALL");
                  }}
                >
                  Reset search
                </button>
              </div>
            )}
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