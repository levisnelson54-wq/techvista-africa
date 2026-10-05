import { useMemo, useState } from "react";
import "./App.css";
import articles from "./data/articles";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const categories = [
    "ALL",
    "AI",
    "DEVELOPER",
    "AFRICAN TECH",
    "OPPORTUNITIES",
  ];

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === "ALL" ||
        article.category === activeCategory;

      const search = searchTerm.toLowerCase().trim();

      const matchesSearch =
        search === "" ||
        article.title.toLowerCase().includes(search) ||
        article.description.toLowerCase().includes(search) ||
        article.label.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  const openArticle = (article) => {
    setSelectedArticle(article);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const closeArticle = () => {
    setSelectedArticle(null);

    setTimeout(() => {
      document.getElementById("pulse")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 50);
  };

  if (selectedArticle) {
    return (
      <div className="app article-page">
        <header className="navbar">
          <div className="logo">
            TechVista<span>Africa</span>
          </div>

          <button
            className="nav-button"
            onClick={closeArticle}
          >
            ← Back to Pulse
          </button>
        </header>

        <main>
          <article className="article-container">
            <button
              className="article-back"
              onClick={closeArticle}
            >
              ← Back to TechVista Pulse
            </button>

            <div className="article-header">
              <span className="article-category">
                {selectedArticle.label}
              </span>

              <h1>{selectedArticle.title}</h1>

              <p className="article-description">
                {selectedArticle.description}
              </p>

              <div className="article-meta">
                <span>{selectedArticle.author}</span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>
            </div>

            <div className="article-hero">
              <span>TECHVISTA</span>

              <strong>01</strong>

              <p>
                Technology
                <br />
                shaping
                <br />
                tomorrow.
              </p>
            </div>

            <div className="article-body">
              {selectedArticle.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="article-footer">
              <p>Published by TechVista Africa</p>

              <button onClick={closeArticle}>
                Explore more stories →
              </button>
            </div>
          </article>
        </main>

        <footer>
          <div className="logo">
            TechVista<span>Africa</span>
          </div>

          <p>
            Building a stronger digital future through technology,
            skills, and opportunity.
          </p>

          <small>© 2026 TechVista Africa. Built from Nairobi.</small>
        </footer>
      </div>
    );
  }

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
          <p className="eyebrow">
            AFRICA&apos;S TECHNOLOGY PLATFORM
          </p>

          <h1>
            Technology.
            <br />
            Skills.
            <br />
            <span>Opportunities.</span>
          </h1>

          <p className="hero-text">
            Discover the knowledge, tools, opportunities, and
            technology shaping Africa&apos;s digital future.
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
            <p className="eyebrow">
              WHERE DO YOU WANT TO GO?
            </p>

            <h2>Choose your path.</h2>
          </div>

          <div className="path-grid">
            <article className="path-card" id="learn">
              <span className="card-number">01</span>

              <h3>I&apos;m Learning</h3>

              <p>
                Learn programming, AI, web development, APIs,
                and the skills needed to build your technology
                career.
              </p>

              <button onClick={() => scrollToSection("pulse")}>
                Explore Learning →
              </button>
            </article>

            <article className="path-card" id="build">
              <span className="card-number">02</span>

              <h3>I&apos;m Building</h3>

              <p>
                Discover developer tools, APIs, practical
                projects, and resources designed to help you
                turn ideas into products.
              </p>

              <button onClick={() => scrollToSection("pulse")}>
                Explore Tools →
              </button>
            </article>

            <article
              className="path-card"
              id="opportunities"
            >
              <span className="card-number">03</span>

              <h3>I&apos;m Looking for Opportunities</h3>

              <p>
                Find technology jobs, freelance opportunities,
                programs, events, and other ways to move your
                career forward.
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
              Ideas, tools, opportunities, and technology
              stories worth knowing.
            </p>
          </div>

          <article className="featured-story">
            <div className="featured-content">
              <span className="featured-label">
                ⭐ FEATURED STORY
              </span>

              <p className="featured-category">
                AFRICAN TECH
              </p>

              <h3>
                The future of technology is being built across
                Africa
              </h3>

              <p className="featured-description">
                From ambitious developers to fast-growing
                startups, Africa is building new technology,
                solving local problems, and creating
                opportunities for the next generation.
              </p>

              <button
                className="featured-button"
                onClick={() =>
                  setActiveCategory("AFRICAN TECH")
                }
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
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
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
                  onClick={() =>
                    setActiveCategory(category)
                  }
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="pulse-results">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <article
                  className="pulse-card"
                  key={article.id}
                >
                  <span>{article.label}</span>

                  <h3>{article.title}</h3>

                  <p>{article.description}</p>

                  <button
                    onClick={() => openArticle(article)}
                  >
                    Read more →
                  </button>
                </article>
              ))
            ) : (
              <div className="empty-state">
                <div className="empty-icon">⌕</div>

                <h3>No stories found</h3>

                <p>
                  We couldn&apos;t find anything matching your
                  search. Try another topic or category.
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
          Building a stronger digital future through
          technology, skills, and opportunity.
        </p>

        <small>© 2026 TechVista Africa. Built from Nairobi.</small>
      </footer>
    </div>
  );
}

export default App;