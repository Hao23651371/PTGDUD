import { useState } from 'react'
import './App.css'

const filters = {
  type: ['Pan-fried', 'Stir-fried', 'Grilled', 'Roasted', 'Sauteed', 'Baked', 'Steamed', 'Stewed'],
  tags: ['Sweet Cake', 'Black Cake', 'Pozole Verde', 'Healthy food'],
}

const recipeBoxCards = [
  {
    title: 'Italian-style tomato salad',
    time: '13 minutes',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Vegetable and shrimp spaghetti',
    time: '16 minutes',
    image: 'https://images.unsplash.com/photo-1563379091339-03246963d7d3?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Lotus delight salad',
    time: '29 minutes',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Snack cakes',
    time: '27 minutes',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Salad with cabbage and shrimp',
    time: '32 minutes',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Bean, shrimp, and potato salad',
    time: '32 minutes',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Sunny-side up fried eggs',
    time: '12 minutes',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Lotus delight salad',
    time: '32 minutes',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Avocado Salad',
    time: '32 minutes',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
  },
]

const saladCards = [
  {
    title: 'Cucumber salad, cherry tomatoes',
    time: '18 minutes',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Italian-style tomato salad',
    time: '12 minutes',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Potato Salad',
    time: '17 minutes',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Salad with cabbage and shrimp',
    time: '32 minutes',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Five-color salad',
    time: '32 minutes',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Corn Salad',
    time: '32 minutes',
    image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Salad with cabbage and shrimp',
    time: '32 minutes',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Lotus delight salad',
    time: '32 minutes',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Avocado Salad',
    time: '32 minutes',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
  },
]

const subscriptionCards = [
  {
    title: 'Cooking',
    text: 'Enjoy recipes, advice and inspiration for any occasion.',
  },
  {
    title: 'Wirecutter',
    text: 'Explore independent reviews for thousands of products.',
  },
  {
    title: 'Games',
    text: 'Unwind with Spelling Bee, Wordle, The Crossword and more.',
  },
  {
    title: 'The Athletic',
    text: 'Discover in-depth, personalized sports journalism.',
  },
]

const dashboardStats = [
  { title: 'Turnover', value: '$92,405', change: '+5.39%', tone: 'pink' },
  { title: 'Profit', value: '$32,218', change: '+5.39%', tone: 'blue' },
  { title: 'New customer', value: '298', change: '+6.84%', tone: 'blue' },
]

const dashboardRows = [
  ['Elizabeth Lee', 'AvatarSystems', '$359', '10/07/2023', 'New'],
  ['Carlos Garcia', 'SmoozeShift', '$747', '24/07/2023', 'New'],
  ['Elizabeth Bailey', 'PrimeTime Telecom', '$564', '08/08/2023', 'In progress'],
  ['Ryan Brown', 'OmniTech Corporation', '$541', '29/08/2023', 'In progress'],
  ['Ryan Young', 'DataStream Inc.', '$769', '01/05/2023', 'Completed'],
  ['Hailey Adams', 'FlowRush', '$922', '16/07/2023', 'Completed'],
]

const summerCards = [
  {
    title: 'Italian-style tomato salad',
    time: '18 mins',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Spaghetti with vegetables',
    time: '12 mins',
    image: 'https://images.unsplash.com/photo-1563379091339-03246963d7d3?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Lotus delight salad',
    time: '12 mins',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Snack cakes',
    time: '17 mins',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Salad with cabbage and shrimp',
    time: '18 mins',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Salad of vegetables',
    time: '12 mins',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
  },
]

const detailSteps = [
  {
    title: 'Step 1',
    text: 'Prepare the strawberries and cream base, then whisk until smooth and glossy.',
    image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Step 2',
    text: 'Layer the sponge with cream and fruit. Chill briefly so the filling sets.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Step 3',
    text: 'Use fresh strawberry slices for the top, then dust lightly with sugar.',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Step 4',
    text: 'Slice and serve chilled. Keep the texture light and the decoration minimal.',
    image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=1200&q=80',
  },
]

function BookmarkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 4.5h10a1 1 0 0 1 1 1v13.2a.8.8 0 0 1-1.25.66L12 15.9l-4.75 3.46A.8.8 0 0 1 6 18.7V5.5a1 1 0 0 1 1-1Z" fill="currentColor" opacity="0.14" />
      <path d="M7.8 5.7h8.4v11.2L12 14.35 7.8 16.9V5.7Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  )
}

function RecipeCard({ title, time, image }) {
  return (
    <article className="recipe-card-item">
      <div className="recipe-card-image-wrap">
        <img src={image} alt={title} className="recipe-card-image" />
      </div>
      <div className="recipe-card-body">
        <button type="button" className="recipe-bookmark" aria-label={`Save ${title}`}>
          <BookmarkIcon />
        </button>
        <h2>{title}</h2>
        <p>{time}</p>
      </div>
    </article>
  )
}

function App() {
  const [activeModal, setActiveModal] = useState('discover')
  const [searchQuery, setSearchQuery] = useState('')
  const [activePage, setActivePage] = useState('home')

  const showSearchResults = searchQuery.trim().length > 0
  const currentPage = showSearchResults ? 'search' : activePage

  const navigate = (page) => {
    setActiveModal(null)
    setActivePage(page)
  }

  const resetToHome = () => navigate('home')

  const onSearchChange = (event) => {
    setSearchQuery(event.target.value)
    if (activePage !== 'home') {
      setActivePage('home')
    }
  }

  return (
    <main className="chefify-page">
      <div className="chefify-shell">
        <header className="topbar">
          <button type="button" className="brand brand-button" onClick={resetToHome} aria-label="Chefify home">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" role="img" aria-hidden="true">
                <path d="M24 8c6.5 0 11 4.3 11 9.5 0 3.1-1.6 5.6-3.8 7.2-2.1 1.5-4.7 2.2-7.2 2.8-2.7.7-5 1.5-6.6 3.5-1.3 1.6-1.9 3.7-1.7 6.2H16c-4.1 0-7-2.8-7-6.5 0-2.7 1.4-4.9 3.6-6.3-1-1.2-1.6-2.6-1.6-4.2C11 12.3 15.5 8 24 8Z" fill="currentColor" opacity="0.15" />
                <path d="M24 12c4.9 0 8.6 3.1 8.6 7 0 2.1-1 3.7-2.5 4.8-1.7 1.2-3.9 1.9-6 2.4-2.5.7-4.8 1.5-6.5 3.5-1.5 1.7-2.2 4-2 6.8h-1.2c-3.1 0-5.4-2.1-5.4-5 0-2.1 1.2-3.8 3.1-4.9-1.1-1.2-1.8-2.8-1.8-4.7 0-3.7 3.8-9.9 12.9-9.9Z" fill="currentColor" />
              </svg>
            </span>
            <span className="brand-text">Chefify</span>
          </button>

          <label className="searchbar" aria-label="Search recipes">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M10.5 4a6.5 6.5 0 1 0 4.1 11.6l4.2 4.2 1.4-1.4-4.2-4.2A6.5 6.5 0 0 0 10.5 4Zm0 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={onSearchChange}
              placeholder="What would you like to cook?"
              aria-label="Search"
            />
          </label>

          <nav className="navlinks" aria-label="Primary">
            <button type="button" className="navlink-button" onClick={() => navigate('summer')}>
              What to cook
            </button>
            <button type="button" className="navlink-button" onClick={() => navigate('salad-list')}>
              Recipes
            </button>
            <button type="button" className="navlink-button" onClick={() => navigate('detail')}>
              Ingredients
            </button>
            <button type="button" className="navlink-button" onClick={() => navigate('subscription')}>
              Occasions
            </button>
            <button type="button" className="navlink-button" onClick={() => navigate('dashboard')}>
              About Us
            </button>
          </nav>

          <div className="topbar-actions">
            <button type="button" className={`recipe-box-btn ${currentPage === 'recipe-box' ? 'is-active' : ''}`} onClick={() => navigate('recipe-box')}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 4.5h14a1 1 0 0 1 1 1v12.6a1 1 0 0 1-1.5.86L12 15.6l-6.5 3.36A1 1 0 0 1 4 18.1V5.5a1 1 0 0 1 1-1Z" fill="currentColor" opacity="0.18" />
                <path d="M7.5 8h9M7.5 11h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              Your Recipe Box
            </button>
            <button type="button" className="plain-link" onClick={() => setActiveModal('login')}>
              Login
            </button>
            <button type="button" className="subscribe-btn" onClick={() => setActiveModal('discover')}>
              Subscribe
            </button>
            <img
              className="avatar"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
              alt="User profile"
            />
          </div>
        </header>

        {showSearchResults ? (
          <section className="content-grid">
            <aside className="filters-card">
              <div className="filters-title">
                <span className="filters-icon">☰</span>
                <h2>FILTERS</h2>
              </div>

              <div className="filter-section">
                <div className="section-head">
                  <h3>Type</h3>
                  <span className="chevron" aria-hidden="true">⌃</span>
                </div>
                <div className="checkbox-grid">
                  {filters.type.map((item) => (
                    <label key={item} className="check-option">
                      <input type="checkbox" defaultChecked={item === 'Grilled' || item === 'Roasted'} />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-section">
                <div className="section-head">
                  <h3>Time</h3>
                  <span className="chevron" aria-hidden="true">⌃</span>
                </div>
                <div className="range-wrap">
                  <div className="range-track" />
                  <div className="range-fill" />
                  <div className="range-thumb left" />
                  <div className="range-thumb right" />
                  <div className="range-label left">30 minutes</div>
                  <div className="range-label right">50 minutes</div>
                </div>
              </div>

              <div className="filter-section rating-section">
                <div className="section-head">
                  <h3>Rating</h3>
                  <span className="chevron" aria-hidden="true">⌃</span>
                </div>
                <div className="rating-list">
                  {['5', '4', '3', '2', '1'].map((rating, index) => (
                    <label key={rating} className="rating-row">
                      <input type="checkbox" defaultChecked={index > 1} />
                      <span className="stars" aria-hidden="true">
                        {'★★★★★'.split('').map((star, starIndex) => (
                          <i key={`${rating}-${starIndex}`} className={starIndex < 5 - index ? 'star filled' : 'star'}>
                            ★
                          </i>
                        ))}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <button type="button" className="apply-btn">Apply</button>
            </aside>

            <div className="empty-state">
              <h1>Sorry, no results were found for “{searchQuery.trim()}”</h1>
              <div className="illustration" aria-hidden="true">
                <div className="box">
                  <span className="lid" />
                  <span className="panel left" />
                  <span className="panel right" />
                </div>
                <div className="magnifier">
                  <span className="glass">×</span>
                </div>
              </div>
              <p>We have all your Independence Day sweets covered.</p>

              <div className="tag-row">
                {filters.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </section>
        ) : currentPage === 'recipe-box' ? (
          <section className="recipe-box-page">
            <div className="recipe-breadcrumbs">
              <button type="button" className="breadcrumb-link" onClick={resetToHome}>
                Home
              </button>
              <span>›</span>
              <span className="breadcrumb-current">Your Recipe Box</span>
            </div>

            <section className="recipe-box-hero">
              <h1>Emma Gonzalez&apos;s Recipe Box</h1>

              <div className="recipe-box-profile">
                <img
                  className="recipe-box-avatar"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
                  alt="Emma Gonzalez"
                />

                <div className="recipe-box-copy">
                  <p>
                    Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at the Los Angeles Times.
                    She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los
                    Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.
                  </p>

                  <div className="recipe-box-meta">
                    <span>6.5k Subscribers</span>
                    <button type="button" className="share-btn">
                      Share
                      <span aria-hidden="true">↗</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="recipe-box-tabs" role="tablist" aria-label="Recipe box tabs">
                <button type="button" className="tab active">
                  Saved Recipes
                </button>
                <button type="button" className="tab">
                  Folders
                </button>
                <button type="button" className="tab">
                  Recipes by Genevieve
                </button>
              </div>
            </section>

            <section className="recipe-grid" aria-label="Saved recipes">
              {recipeBoxCards.map((card) => (
                <RecipeCard key={card.title} {...card} />
              ))}
            </section>

            <div className="pagination">
              <button type="button" className="page-arrow" aria-label="Previous page">
                ‹
              </button>
              <button type="button" className="page-number active">
                1
              </button>
              <button type="button" className="page-number">
                2
              </button>
              <button type="button" className="page-number">
                3
              </button>
              <button type="button" className="page-number">
                4
              </button>
              <span className="page-ellipsis">...</span>
              <button type="button" className="page-number">
                10
              </button>
              <button type="button" className="page-number">
                11
              </button>
              <button type="button" className="page-arrow" aria-label="Next page">
                ›
              </button>
            </div>
          </section>
        ) : currentPage === 'salad-list' ? (
          <section className="recipe-list-page">
            <div className="page-toolbar">
              <h1>Salad (32)</h1>
              <select aria-label="Sort recipes">
                <option>A-Z</option>
                <option>Newest</option>
                <option>Popular</option>
              </select>
            </div>

            <div className="page-layout-two-col">
              <aside className="filters-card">
                <div className="filters-title">
                  <span className="filters-icon">☰</span>
                  <h2>FILTERS</h2>
                </div>

                <div className="filter-section">
                  <div className="section-head">
                    <h3>Type</h3>
                    <span className="chevron" aria-hidden="true">⌃</span>
                  </div>
                  <div className="checkbox-grid">
                    {filters.type.map((item) => (
                      <label key={item} className="check-option">
                        <input type="checkbox" defaultChecked={item === 'Grilled' || item === 'Roasted'} />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="filter-section">
                  <div className="section-head">
                    <h3>Time</h3>
                    <span className="chevron" aria-hidden="true">⌃</span>
                  </div>
                  <div className="range-wrap">
                    <div className="range-track" />
                    <div className="range-fill" />
                    <div className="range-thumb left" />
                    <div className="range-thumb right" />
                    <div className="range-label left">30 minutes</div>
                    <div className="range-label right">50 minutes</div>
                  </div>
                </div>

                <div className="filter-section rating-section">
                  <div className="section-head">
                    <h3>Rating</h3>
                    <span className="chevron" aria-hidden="true">⌃</span>
                  </div>
                  <div className="rating-list">
                    {['5', '4', '3', '2', '1'].map((rating, index) => (
                      <label key={rating} className="rating-row">
                        <input type="checkbox" defaultChecked={index > 1} />
                        <span className="stars" aria-hidden="true">
                          {'★★★★★'.split('').map((star, starIndex) => (
                            <i key={`${rating}-${starIndex}`} className={starIndex < 5 - index ? 'star filled' : 'star'}>
                              ★
                            </i>
                          ))}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <button type="button" className="apply-btn">
                  Apply
                </button>
              </aside>

              <section className="recipe-grid recipe-grid-wide" aria-label="Salad recipes">
                {saladCards.map((card) => (
                  <RecipeCard key={card.title} {...card} />
                ))}
              </section>
            </div>

            <div className="pagination">
              <button type="button" className="page-arrow" aria-label="Previous page">
                ‹
              </button>
              <button type="button" className="page-number active">
                1
              </button>
              <button type="button" className="page-number">
                2
              </button>
              <button type="button" className="page-number">
                3
              </button>
              <button type="button" className="page-number">
                4
              </button>
              <span className="page-ellipsis">...</span>
              <button type="button" className="page-number">
                10
              </button>
              <button type="button" className="page-number">
                11
              </button>
              <button type="button" className="page-arrow" aria-label="Next page">
                ›
              </button>
            </div>
          </section>
        ) : currentPage === 'subscription' ? (
          <section className="subscription-page">
            <div className="subscription-hero">
              <div className="subscription-copy">
                <span className="eyebrow">This recipe is exclusively available to subscribers</span>
                <h1>Join now to access effortless, hassle-free recipes</h1>
                <ul>
                  <li>20,000+ recipes to suit all tastes and skill levels</li>
                  <li>Filter for diets, cook times, and more</li>
                  <li>Personal Recipe Box for favorites</li>
                  <li>Gain exclusive access to our subscriber-only mobile app</li>
                </ul>
                <div className="pricing-line">
                  <strong>0.25USD / Week</strong>
                  <p>Billed as $1 every 4 weeks for the first year</p>
                </div>
                <button type="button" className="primary-btn full-width">
                  Subscribe Now
                </button>
                <button type="button" className="text-btn block-center">
                  Cancel or Pause anytime
                </button>
              </div>

              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=80"
                alt="Subscription food spread"
                className="subscription-hero-image"
              />
            </div>

            <section className="subscription-packages">
              <h2>An All Access subscription includes</h2>
              <div className="feature-grid">
                {subscriptionCards.map((card) => (
                  <article key={card.title} className="feature-card">
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="subscription-center">
              <div className="center-brand">Chefify</div>
              <h2>Subscribe to Chefify Cooking only</h2>
              <p>Enjoy thousands of delicious recipes for every taste, plus advice and inspiration daily.</p>
              <div className="plan-list">
                <label className="plan-option">
                  <input type="radio" name="plan" defaultChecked />
                  <span>$2/month (Billed every 4 weeks)</span>
                </label>
                <label className="plan-option">
                  <input type="radio" name="plan" />
                  <span>$20/year (Billed one annually)</span>
                </label>
              </div>
              <button type="button" className="primary-btn">
                Subscribe Now
              </button>
              <button type="button" className="text-btn block-center">
                Cancel or Pause anytime
              </button>
            </section>
          </section>
        ) : currentPage === 'dashboard' ? (
          <section className="dashboard-page">
            <aside className="dashboard-sidebar">
              <div className="dashboard-logo">Logo</div>
              <button type="button" className="dashboard-nav active">Dashboard</button>
              <button type="button" className="dashboard-nav">Projects</button>
              <button type="button" className="dashboard-nav">Teams</button>
              <button type="button" className="dashboard-nav">Analytics</button>
              <button type="button" className="dashboard-nav">Messages</button>
              <button type="button" className="dashboard-nav">Integrations</button>

              <div className="dashboard-promo">
                <div className="promo-illustration">V2.0</div>
                <p>V2.0 is available</p>
                <button type="button">Try now</button>
              </div>
            </aside>

            <div className="dashboard-main">
              <div className="dashboard-header-row">
                <h1>Dashboard</h1>
                <div className="dashboard-tools">
                  <input type="text" placeholder="Search..." aria-label="Search dashboard" />
                  <span>🔔</span>
                  <span>?</span>
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80"
                    alt="Profile"
                    className="dashboard-avatar"
                  />
                </div>
              </div>

              <section className="overview-grid">
                {dashboardStats.map((stat) => (
                  <article key={stat.title} className={`stat-card ${stat.tone}`}>
                    <p>{stat.title}</p>
                    <h2>{stat.value}</h2>
                    <span>{stat.change} period of change</span>
                  </article>
                ))}
              </section>

              <section className="report-card">
                <div className="report-head">
                  <h2>Detailed report</h2>
                  <div className="report-actions">
                    <button type="button" className="secondary-btn">Import</button>
                    <button type="button" className="secondary-btn">Export</button>
                  </div>
                </div>
                <table className="report-table">
                  <thead>
                    <tr>
                      <th />
                      <th>Customer name</th>
                      <th>Company</th>
                      <th>Order value</th>
                      <th>Order date</th>
                      <th>Status</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {dashboardRows.map((row) => (
                      <tr key={row[0]}>
                        <td><input type="checkbox" /></td>
                        <td>
                          <div className="row-name">
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80" alt="avatar" />
                            <span>{row[0]}</span>
                          </div>
                        </td>
                        <td>{row[1]}</td>
                        <td>{row[2]}</td>
                        <td>{row[3]}</td>
                        <td><span className={`status-pill ${row[4].toLowerCase().replace(/\s/g, '-')}`}>{row[4]}</span></td>
                        <td>✎</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            </div>
          </section>
        ) : currentPage === 'summer' ? (
          <section className="summer-page">
            <div className="summer-hero">
              <img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=1800&q=80" alt="Summer cooking" />
              <aside className="summer-card">
                <span className="summer-badge">About the Chef</span>
                <h2>Salad Champion</h2>
                <p>Discover recipes that work for bright summer meals, quick lunches and shared plates.</p>
                <button type="button" className="primary-btn">Read more</button>
              </aside>
            </div>

            <section className="section-block">
              <h2 className="section-title">This Summer Recipes</h2>
              <p className="section-subtitle">We miss you and your independence Day sweats covered.</p>
              <div className="card-row-grid">
                {summerCards.slice(0, 4).map((card) => (
                  <RecipeCard key={card.title} {...card} />
                ))}
              </div>
            </section>

            <section className="section-block">
              <h2 className="section-title">Recipes With Videos</h2>
              <p className="section-subtitle">Cooking up culinary creations with step-by-step videos</p>
              <div className="card-row-grid">
                {summerCards.slice(0, 4).map((card) => (
                  <RecipeCard key={`${card.title}-video`} {...card} />
                ))}
              </div>
            </section>

            <section className="section-block">
              <h2 className="section-title">Editor&apos;s pick</h2>
              <div className="editor-grid">
                {summerCards.slice(0, 4).map((card, index) => (
                  <article key={`${card.title}-editor-${index}`} className="editor-card">
                    <img src={card.image} alt={card.title} />
                    <div>
                      <h3>{card.title}</h3>
                      <p>Selected by our expert editors.</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </section>
        ) : currentPage === 'detail' ? (
          <section className="detail-page">
            <div className="detail-grid">
              <aside className="detail-sidebar">
                <h1>How to make a Strawberry Shortcake</h1>
                <p>
                  A bright, layered dessert with a light cream filling and strawberries throughout.
                </p>
                <div className="detail-author">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Emma" />
                  <div>
                    <strong>Emma Gonzalez</strong>
                    <span>Author</span>
                  </div>
                </div>
                <ul className="ingredient-list">
                  <li>2 cups all-purpose flour</li>
                  <li>1 cup sugar</li>
                  <li>Fresh strawberries</li>
                  <li>2 cups whipped cream</li>
                  <li>1 tsp vanilla extract</li>
                </ul>
                <button type="button" className="primary-btn full-width">Save this recipe</button>
              </aside>

              <div className="detail-content">
                {detailSteps.map((step) => (
                  <article key={step.title} className="step-block">
                    <img src={step.image} alt={step.title} />
                    <h2>{step.title}</h2>
                    <p>{step.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <section className="comment-card">
              <h2>Cooking note</h2>
              <textarea placeholder="Leave your note here" rows={4} />
              <div className="comment-actions">
                <button type="button" className="text-btn">Cancel</button>
                <button type="button" className="primary-btn">Send</button>
              </div>
            </section>

            <section className="recently-viewed">
              <h2>Your Recently Viewed</h2>
              <div className="card-row-grid compact">
                {summerCards.slice(0, 4).map((card) => (
                  <RecipeCard key={`${card.title}-recent`} {...card} />
                ))}
              </div>
            </section>
          </section>
        ) : (
          <section className="hero-stage">
            <img
              src="https://images.unsplash.com/photo-1556911220-bda9f7f7597e?auto=format&fit=crop&w=1880&q=80"
              alt="Kitchen backdrop"
              className="hero-image"
            />

            <div className="hero-overlay" />

            <aside className="recipe-card">
              <div className="recipe-badge">Recipe of the day</div>
              <h2>Salad caprese</h2>
              <p>Classic Italian salad with tomatoes, mozzarella, herbs and olive oil.</p>
              <button type="button" className="recipe-action">
                View recipe
              </button>
            </aside>

            {activeModal === 'discover' && (
              <div className="modal-backdrop">
                <article className="discover-modal">
                  <div className="modal-head">
                    <button
                      type="button"
                      aria-label="Close discover modal"
                      onClick={() => setActiveModal(null)}
                      className="close-modal"
                    >
                      ×
                    </button>

                    <h2>Discover Chefify</h2>
                    <p>Easy and delicious cooking instructions right here. Start exploring now.</p>
                  </div>

                  <img
                    src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1500&q=80"
                    alt="Colorful plates of food"
                    className="modal-image"
                  />

                  <div className="modal-actions">
                    <div className="dots" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                    </div>

                    <button type="button" className="primary-btn">
                      Next
                    </button>
                    <button type="button" onClick={() => setActiveModal(null)} className="text-btn">
                      Skip
                    </button>
                  </div>
                </article>
              </div>
            )}

            {activeModal === 'login' && (
              <div className="modal-backdrop">
                <article className="login-modal">
                  <div className="login-visual">
                    <img
                      src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80"
                      alt="Food plate"
                    />
                    <div className="login-visual-overlay" />
                    <p>Embrace the art of cooking, where flavors come alive!</p>
                  </div>

                  <div className="login-form-wrap">
                    <button
                      type="button"
                      aria-label="Close login modal"
                      onClick={() => setActiveModal(null)}
                      className="close-modal"
                    >
                      ×
                    </button>

                    <h2>Login</h2>
                    <p>Enter your email to log in.</p>

                    <input type="email" placeholder="Enter your email" className="form-input" />

                    <button type="button" className="primary-btn full-width">
                      Continue
                    </button>

                    <p className="or-text">OR</p>

                    <p className="policy-text">
                      By continuing, you agree to the updated Terms of Sale, Terms of Service, and Privacy Policy.
                    </p>

                    <div className="social-actions">
                      <button type="button" className="social-btn">
                        <span className="google-mark">G</span>
                        Continue with Google
                      </button>
                      <button type="button" className="social-btn">
                        <span className="facebook-mark">f</span>
                        Continue with Facebook
                      </button>
                      <button type="button" className="social-btn">
                        <span className="apple-mark">A</span>
                        Continue with Apple
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            )}
          </section>
        )}

        <footer className="site-footer">
          <div className="footer-about">
            <h4>About Us</h4>
            <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
            <form className="subscribe-form">
              <input type="email" placeholder="Enter your email" aria-label="Email address" />
              <button type="button">Send</button>
            </form>
            <div className="footer-brand">
              <span className="footer-mark" aria-hidden="true">☁</span>
              <strong>Chefify</strong>
              <span>2023 Chefify Company</span>
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>

          <div className="footer-cols">
            <div>
              <h4>Learn More</h4>
              <a href="#">Our Cooks</a>
              <a href="#">See Our Features</a>
              <a href="#">FAQ</a>
            </div>
            <div>
              <h4>Shop</h4>
              <a href="#">Gift Subscription</a>
              <a href="#">Send Us Feedback</a>
            </div>
            <div>
              <h4>Recipes</h4>
              <a href="#">What to Cook This Week</a>
              <a href="#">Pasta</a>
              <a href="#">Dinner</a>
              <a href="#">Healthy</a>
              <a href="#">Vegetarian</a>
              <a href="#">Vegan</a>
              <a href="#">Christmas</a>
            </div>
          </div>
        </footer>

        <div className="visily-note">Made with Visily</div>
      </div>
    </main>
  )
}

export default App
