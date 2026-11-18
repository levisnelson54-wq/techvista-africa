
import { useState } from "react";
import "./App.css";

import articles from "./data/articles";
import opportunities from "./data/opportunities";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const [opportunitySearch, setOpportunitySearch] = useState("");
  const [opportunityType, setOpportunityType] = useState("All");

  const [savedStories, setSavedStories] = useState([]);

  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);

  // --------------------------------------------------
  // ARTICLE FILTERING
  // --------------------------------------------------

  const categories = [
    "All",
    ...new Set(
      articles
        .map((article) => article.category)
        .filter(Boolean)
    ),
  ];

  const filteredArticles = articles.filter((article) => {
    const title = article.title || "";
    const excerpt = article.excerpt || "";
    const articleCategory = article.category || "";

    const matchesSearch =
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      category === "All" ||
      articleCategory === category;

    return matchesSearch && matchesCategory;
  });

  // --------------------------------------------------
  // OPPORTUNITY FILTERING
  // --------------------------------------------------

  const opportunityTypes = [
    "All",
    ...new Set(
      opportunities
        .map((opportunity) => opportunity.type)
        .filter(Boolean)
    ),
  ];

  const filteredOpportunities = opportunities.filter(
    (opportunity) => {
      const title = opportunity.title || "";
      const company = opportunity.company || "";
      const location = opportunity.location || "";
      const type = opportunity.type || "";

      const searchableText =
        `${title} ${company} ${location} ${type}`.toLowerCase();

      const matchesSearch = searchableText.includes(
        opportunitySearch.toLowerCase()
      );

      const matchesType =
        opportunityType === "All" ||
        type === opportunityType;

      return matchesSearch && matchesType;
    }
  );

  // --------------------------------------------------
  // NAVIGATION
  // --------------------------------------------------

  const goToSection = (sectionId) => {
    setSelectedArticle(null);
    setSelectedOpportunity(null);

    setTimeout(() => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 50);
  };

  const goHome = () => {
    setSelectedArticle(null);
    setSelectedOpportunity(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // --------------------------------------------------
  // ARTICLES
  // --------------------------------------------------

  const openArticle = (article) => {
    setSelectedArticle(article);
    setSelectedOpportunity(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleSavedStory = (article) => {
    const storyKey = article.id || article.title;

    if (savedStories.includes(storyKey)) {
      setSavedStories(
        savedStories.filter((item) => item !== storyKey)
      );
    } else {
      setSavedStories([
        ...savedStories,
        storyKey,
      ]);
    }
  };

  const isStorySaved = (article) => {
    const storyKey = article.id || article.title;

    return savedStories.includes(storyKey);
  };

  // --------------------------------------------------
  // OPPORTUNITIES
  // --------------------------------------------------

  const openOpportunity = (opportunity) => {
    setSelectedOpportunity(opportunity);
    setSelectedArticle(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // --------------------------------------------------
  // ARTICLE DETAIL PAGE
  // --------------------------------------------------

  if (selectedArticle) {
    return (
      <div className="app">

        <header className="navbar">
          <button
            className="logo"
            onClick={goHome}
          >
            TechVista<span>Africa</span>
          </button>

          <nav className="nav-links">
            <button onClick={goHome}>
              Home
            </button>

            <button onClick={goHome}>
              Learn
            </button>

            <button onClick={goHome}>
              Build
            </button>

            <button onClick={goHome}>
              Opportunities
            </button>
          </nav>

          <button
            className="nav-button"
            onClick={goHome}
          >
            Back Home
          </button>
        </header>

        <main className="detail-page">

          <button
            className="back-button"
            onClick={goHome}
          >
            ← Back to TechVista Pulse
          </button>

          <article className="article-detail">

            <div className="article-detail-header">

              <span className="tag">
                {selectedArticle.category || "TechVista Pulse"}
              </span>

              <h1>
                {selectedArticle.title}
              </h1>

              {selectedArticle.excerpt && (
                <p className="detail-excerpt">
                  {selectedArticle.excerpt}
                </p>
              )}

              <button
                className="save-button"
                onClick={() =>
                  toggleSavedStory(selectedArticle)
                }
              >
                {isStorySaved(selectedArticle)
                  ? "✓ Saved"
                  : "＋ Save Story"}
              </button>

            </div>

            <div className="article-content">

              <p>
                Technology is changing rapidly across
                Africa. Developers, founders, students,
                and technology communities are creating
                solutions for local problems while building
                products with global potential.
              </p>

              <p>
                TechVista Pulse brings together stories,
                ideas, and developments shaping Africa's
                technology ecosystem.
              </p>

              <h2>
                Building Africa's digital future
              </h2>

              <p>
                The next generation of African technology
                will be shaped by people who are willing
                to learn, build, collaborate, and create
                opportunities for others.
              </p>

              <p>
                TechVista Africa exists to make that journey
                easier by bringing useful technology
                knowledge and opportunities together.
              </p>

            </div>

          </article>

        </main>

      </div>
    );
  }

  // --------------------------------------------------
  // OPPORTUNITY DETAIL PAGE
  // --------------------------------------------------

  if (selectedOpportunity) {
    return (
      <div className="app">

        <header className="navbar">

          <button
            className="logo"
            onClick={goHome}
          >
            TechVista<span>Africa</span>
          </button>

          <nav className="nav-links">

            <button onClick={goHome}>
              Home
            </button>

            <button onClick={goHome}>
              Learn
            </button>

            <button onClick={goHome}>
              Build
            </button>

            <button onClick={goHome}>
              Opportunities
            </button>

          </nav>

          <button
            className="nav-button"
            onClick={goHome}
          >
            Back Home
          </button>

        </header>

        <main className="detail-page">

          <button
            className="back-button"
            onClick={goHome}
          >
            ← Back to Opportunities
          </button>

          <section className="opportunity-detail">

            <span className="tag">
              {selectedOpportunity.type || "Opportunity"}
            </span>

            <h1>
              {selectedOpportunity.title}
            </h1>

            <p className="company-name">
              {selectedOpportunity.company || "TechVista"}
            </p>

            <div className="opportunity-info">

              <div>
                <span>Location</span>
                <strong>
                  {selectedOpportunity.location ||
                    "Africa"}
                </strong>
              </div>

              <div>
                <span>Type</span>
                <strong>
                  {selectedOpportunity.type ||
                    "Opportunity"}
                </strong>
              </div>

            </div>

            <div className="opportunity-description">

              <h2>
                About this opportunity
              </h2>

              <p>
                Explore this opportunity and discover
                whether it matches your skills, interests,
                and career goals.
              </p>

              <p>
                Always review the official application
                page for the latest requirements,
                deadlines, and application instructions.
              </p>

            </div>

            {selectedOpportunity.applicationUrl && (
              <a
                className="primary-button"
                href={selectedOpportunity.applicationUrl}
                target="_blank"
                rel="noreferrer"
              >
                Visit Application Page ↗
              </a>
            )}

          </section>

        </main>

      </div>
    );
  }

  // --------------------------------------------------
  // MAIN TECHVISTA HOMEPAGE
  // --------------------------------------------------

  return (
    <div className="app">

      {/* NAVIGATION */}

      <header className="navbar">

        <button
          className="logo"
          onClick={goHome}
        >
          TechVista<span>Africa</span>
        </button>

        <nav className="nav-links">

          <button
            onClick={() => goToSection("learn")}
          >
            Learn
          </button>

          <button
            onClick={() => goToSection("build")}
          >
            Build
          </button>

          <button
            onClick={() => goToSection("pulse")}
          >
            TechVista Pulse
          </button>

          <button
            onClick={() =>
              goToSection("opportunities")
            }
          >
            Opportunities
          </button>

        </nav>

        <button
          className="nav-button"
          onClick={() => goToSection("learn")}
        >
          Get Started
        </button>

      </header>

      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <p className="eyebrow">
            AFRICA'S TECHNOLOGY PLATFORM
          </p>

          <h1>
            Empowering Africa's
            <br />
            Next Generation of
            <br />
            <span>Tech Talent.</span>
          </h1>

          <p className="hero-text">
            Discover the knowledge, tools, opportunities,
            and technology shaping Africa's digital future.
          </p>

          <div className="hero-actions">

            <button
              className="primary-button"
              onClick={() =>
                goToSection("opportunities")
              }
            >
              Explore Opportunities
            </button>

            <button
              className="secondary-button"
              onClick={() =>
                goToSection("learn")
              }
            >
              Explore TechVista ↓
            </button>

          </div>

        </div>

        <div className="hero-stat">

          <span>01</span>

          <p>
            Building the next generation
            of African technology.
          </p>

        </div>

      </section>

      {/* ECOSYSTEM */}

      <section
        className="ecosystem-section"
        id="learn"
      >

        <div className="section-heading">

          <p className="eyebrow">
            THE TECHVISTA ECOSYSTEM
          </p>

          <h2>
            One platform.
            <br />
            <span>Many possibilities.</span>
          </h2>

          <p>
            Everything you need to learn, build,
            discover, and grow in technology.
          </p>

        </div>

        <div className="ecosystem-grid">

          <button className="ecosystem-card">
            <span className="card-number">
              01
            </span>

            <div>
              <span className="card-label">
                LEARN
              </span>

              <h3>
                Build your knowledge.
              </h3>

              <p>
                Practical technology knowledge
                for the next generation of African
                developers and builders.
              </p>
            </div>

            <span className="card-arrow">
              ↗
            </span>
          </button>

          <button
            className="ecosystem-card"
            onClick={() =>
              goToSection("build")
            }
          >
            <span className="card-number">
              02
            </span>

            <div>
              <span className="card-label">
                BUILD
              </span>

              <h3>
                Turn ideas into products.
              </h3>

              <p>
                Explore developer tools, APIs,
                projects, and resources.
              </p>
            </div>

            <span className="card-arrow">
              ↗
            </span>
          </button>

          <button
            className="ecosystem-card"
            onClick={() =>
              goToSection("pulse")
            }
          >
            <span className="card-number">
              03
            </span>

            <div>
              <span className="card-label">
                TECHVISTA PULSE
              </span>

              <h3>
                Stay ahead of technology.
              </h3>

              <p>
                Discover stories, trends,
                ideas, and developments.
              </p>
            </div>

            <span className="card-arrow">
              ↗
            </span>
          </button>

          <button
            className="ecosystem-card"
            onClick={() =>
              goToSection("opportunities")
            }
          >
            <span className="card-number">
              04
            </span>

            <div>
              <span className="card-label">
                OPPORTUNITIES
              </span>

              <h3>
                Find your next opportunity.
              </h3>

              <p>
                Jobs, internships, fellowships,
                programs, and more.
              </p>
            </div>

            <span className="card-arrow">
              ↗
            </span>
          </button>

        </div>

      </section>

      {/* BUILD */}

      <section
        className="build-section"
        id="build"
      >

        <div className="section-heading">

          <p className="eyebrow">
            BUILD
          </p>

          <h2>
            From idea
            <br />
            <span>to impact.</span>
          </h2>

          <p>
            TechVista is being built for people
            who don't just consume technology.
            They create it.
          </p>

        </div>

        <div className="build-grid">

          <div className="build-card">
            <span>01</span>

            <h3>
              Developer Tools
            </h3>

            <p>
              Useful resources and tools
              for modern developers.
            </p>
          </div>

          <div className="build-card">
            <span>02</span>

            <h3>
              APIs
            </h3>

            <p>
              Technology services and APIs
              developers can build on.
            </p>
          </div>

          <div className="build-card">
            <span>03</span>

            <h3>
              Projects
            </h3>

            <p>
              Real projects that turn learning
              into practical experience.
            </p>
          </div>

        </div>

      </section>

      {/* TECHVISTA PULSE */}

      <section
        className="pulse-section"
        id="pulse"
      >

        <div className="section-heading">

          <p className="eyebrow">
            TECHVISTA PULSE
          </p>

          <h2>
            What's shaping
            <br />
            <span>Africa's tech ecosystem.</span>
          </h2>

          <p>
            Stories, ideas, and insights from
            Africa's technology ecosystem.
          </p>

        </div>

        <div className="pulse-controls">

          <div className="search-box">

            <span>⌕</span>

            <input
              type="text"
              placeholder="Search stories..."
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
            />

          </div>

          <div className="filter-buttons">

            {categories.map((item) => (
              <button
                key={item}
                className={
                  category === item
                    ? "filter-button active"
                    : "filter-button"
                }
                onClick={() =>
                  setCategory(item)
                }
              >
                {item}
              </button>
            ))}

          </div>

        </div>

        <div className="pulse-layout">

          <div className="stories">

            {filteredArticles.length === 0 ? (
              <div className="empty-state">
                <h3>
                  No stories found.
                </h3>

                <p>
                  Try another search or category.
                </p>
              </div>
            ) : (
              filteredArticles.map(
                (article, index) => (
                  <article
                    className={
                      index === 0
                        ? "story-card featured"
                        : "story-card"
                    }
                    key={
                      article.id ||
                      article.title
                    }
                  >

                    <div className="story-number">
                      0{index + 1}
                    </div>

                    <div className="story-body">

                      <span className="story-category">
                        {article.category ||
                          "TechVista Pulse"}
                      </span>

                      <h3>
                        {article.title}
                      </h3>

                      {article.excerpt && (
                        <p>
                          {article.excerpt}
                        </p>
                      )}

                      <div className="story-actions">

                        <button
                          className="read-button"
                          onClick={() =>
                            openArticle(article)
                          }
                        >
                          Read Story →
                        </button>

                        <button
                          className="save-button"
                          onClick={() =>
                            toggleSavedStory(article)
                          }
                        >
                          {isStorySaved(article)
                            ? "✓ Saved"
                            : "＋ Save"}
                        </button>

                      </div>

                    </div>

                  </article>
                )
              )
            )}

          </div>

          {/* SAVED STORIES */}

          <aside className="saved-panel">

            <div className="saved-panel-header">

              <div>
                <span className="eyebrow">
                  YOUR LIBRARY
                </span>

                <h3>
                  Saved Stories
                </h3>
              </div>

              <strong>
                {savedStories.length}
              </strong>

            </div>

            {savedStories.length === 0 ? (
              <div className="saved-empty">

                <div className="saved-icon">
                  ♡
                </div>

                <h4>
                  Nothing saved yet.
                </h4>

                <p>
                  Save stories and come back
                  to them later.
                </p>

              </div>
            ) : (
              <div className="saved-list">

                {articles
                  .filter((article) =>
                    isStorySaved(article)
                  )
                  .map((article) => (
                    <button
                      className="saved-story"
                      key={
                        article.id ||
                        article.title
                      }
                      onClick={() =>
                        openArticle(article)
                      }
                    >

                      <span>
                        {article.category ||
                          "Story"}
                      </span>

                      <strong>
                        {article.title}
                      </strong>

                    </button>
                  ))}

              </div>
            )}

          </aside>

        </div>

      </section>

      {/* OPPORTUNITIES */}

      <section
        className="opportunities-section"
        id="opportunities"
      >

        <div className="opportunities-heading">

          <div>

            <p className="eyebrow">
              OPPORTUNITIES
            </p>

            <h2>
              Find your
              <br />
              <span>next opportunity.</span>
            </h2>

            <p>
              Discover opportunities that can
              help you learn, work, and grow.
            </p>

          </div>

          <div className="opportunity-count">

            <strong>
              {opportunities.length}
            </strong>

            <span>
              Opportunities
            </span>

          </div>

        </div>

        <div className="opportunity-controls">

          <div className="search-box">

            <span>⌕</span>

            <input
              type="text"
              placeholder="Search opportunities..."
              value={opportunitySearch}
              onChange={(event) =>
                setOpportunitySearch(
                  event.target.value
                )
              }
            />

          </div>

          <select
            value={opportunityType}
            onChange={(event) =>
              setOpportunityType(
                event.target.value
              )
            }
          >

            {opportunityTypes.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}

          </select>

        </div>

        <div className="opportunity-grid">

          {filteredOpportunities.length === 0 ? (
            <div className="empty-state">
              <h3>
                No opportunities found.
              </h3>

              <p>
                Try another search.
              </p>
            </div>
          ) : (
            filteredOpportunities.map(
              (opportunity) => (
                <article
                  className="opportunity-card"
                  key={
                    opportunity.id ||
                    opportunity.title
                  }
                >

                  <div className="opportunity-top">

                    <span className="tag">
                      {opportunity.type ||
                        "Opportunity"}
                    </span>

                    <span>
                      ↗
                    </span>

                  </div>

                  <h3>
                    {opportunity.title}
                  </h3>

                  <p className="company">
                    {opportunity.company}
                  </p>

                  <p className="location">
                    📍{" "}
                    {opportunity.location ||
                      "Africa"}
                  </p>

                  <button
                    className="opportunity-button"
                    onClick={() =>
                      openOpportunity(
                        opportunity
                      )
                    }
                  >
                    View Opportunity →
                  </button>

                </article>
              )
            )
          )}

        </div>

      </section>

      {/* FINAL BRAND MESSAGE */}

      <section className="brand-cta">

        <p className="eyebrow">
          TECHVISTA AFRICA
        </p>

        <h2>
          Learn.
          <br />
          Build.
          <br />
          <span>Grow.</span>
        </h2>

        <p>
          Africa's digital future is being built
          by people who are learning today.
        </p>

        <button
          className="primary-button"
          onClick={() =>
            goToSection("learn")
          }
        >
          Start Exploring
        </button>

      </section>

      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-top">

          <div className="footer-brand">

            <button
              className="logo"
              onClick={goHome}
            >
              TechVista<span>Africa</span>
            </button>

            <p>
              Technology. Skills. Opportunities.
            </p>

            <p>
              Building Africa's digital future.
            </p>

          </div>

          <div className="footer-column">

            <h4>
              Platform
            </h4>

            <button
              onClick={() =>
                goToSection("learn")
              }
            >
              Learn
            </button>

            <button
              onClick={() =>
                goToSection("build")
              }
            >
              Build
            </button>

            <button
              onClick={() =>
                goToSection("pulse")
              }
            >
              TechVista Pulse
            </button>

            <button
              onClick={() =>
                goToSection("opportunities")
              }
            >
              Opportunities
            </button>

          </div>

          <div className="footer-column">

            <h4>
              Coming Soon
            </h4>

            <button>
              Developer Tools
            </button>

            <button>
              APIs
            </button>

            <button>
              Community
            </button>

            <button>
              Services
            </button>

          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} TechVista Africa
          </span>

          <span>
            Made in Africa 🌍
          </span>

        </div>

      </footer>

    </div>
  );
}

export default App;

 