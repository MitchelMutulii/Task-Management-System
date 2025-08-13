'use client'

import ThemeToggle from './components/ThemeToggle'
import PaymentModal, { type PaymentPlan } from './components/PaymentModal'
import { useState } from 'react'

export default function HomePage() {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<PaymentPlan | null>(null)

  const openPaymentForPlan = (plan: PaymentPlan) => {
    setSelectedPlan(plan)
    setIsPaymentOpen(true)
  }

  const closePayment = () => {
    setIsPaymentOpen(false)
    setSelectedPlan(null)
  }

  return (
    <main>
      {/* Header & Navigation */}
      <header className="header">
        <div className="container nav">
          <div className="brand">
            <div className="brand-mark">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12L10 18L20 6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span>Mipango</span>
          </div>
          <nav className="nav-links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="nav-cta">
            <ThemeToggle />
            <a className="btn ghost" href="/signin">Sign In</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="badge" style={{ marginBottom: '.9rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17l-5 3 1.5-5.5L4 9l5.5-.5L12 3l2.5 5.5L20 9l-4.5 5.5L17 20l-5-3z" fill="#1d4ed8"/>
              </svg>
              New: Real-time collaboration
            </div>
            <h1 className="headline">Structure Work, Unlock Potential</h1>
            <p className="subhead">Stay focused with smart lists, effortless collaboration, and gentle reminders. Mipango streamlines your day so you can do your best work.</p>
            <div className="cta-row">
              <a href="/signup" className="btn primary">Get Started Free</a>
              <a href="#features" className="btn ghost">Explore Features</a>
            </div>
          </div>
          <div className="hero-card">
            {/* Illustration / mock dashboard */}
            <div className="mock">
              <div className="mock-top">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              <div className="mock-grid">
                <aside className="sidebar">
                  <h4 style={{ marginTop: 0 }}>My Hub</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '.5rem' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '.5rem', padding: '.4rem', borderRadius: '.4rem', background: 'var(--primary)', color: 'white' }}>
                      📥 Inbox
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '.5rem', padding: '.4rem', borderRadius: '.4rem' }}>
                      📅 Today
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '.5rem', padding: '.4rem', borderRadius: '.4rem' }}>
                      ⏰ Upcoming
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '.5rem', padding: '.4rem', borderRadius: '.4rem' }}>
                      👥 Team
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '.5rem', padding: '.4rem', borderRadius: '.4rem' }}>
                      📁 Archived
                    </li>
                  </ul>
                </aside>
                <section className="content">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '.75rem' }}>
                    <h4 style={{ margin: 0 }}>Today</h4>
                    <button className="btn ghost" style={{ padding: '.4rem .7rem' }}>+ New Task</button>
                  </div>
                  <div style={{ display: 'grid', gap: '.5rem' }}>
                    {['Prepare sprint board', 'Review design updates', 'Sync with marketing', 'Draft Q3 roadmap'].map((t, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '.6rem', padding: '.6rem .7rem', border: '1px solid var(--border)', borderRadius: '.6rem' }}>
                        <input type="checkbox" aria-label="complete task" />
                        <span>{t}</span>
                        <span style={{ marginLeft: 'auto', fontSize: '.8rem', color: 'var(--muted)' }}>Today</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Mipango</h2>
              <p className="lead">
                We believe that great work happens when people can focus on what matters most. 
                Mipango was born from a simple observation: the best tools are the ones you don't notice.
              </p>
              <p>
                Founded in 2024, our team of designers, developers, and productivity enthusiasts 
                set out to create a task management platform that feels effortless yet powerful. 
                We've seen how complex tools can become barriers to productivity, so we built 
                Mipango to be the opposite – intuitive, calming, and genuinely helpful.
              </p>
              
              <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Our Vision</h3>
              <p className="lead" style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                We envision a world where productivity tools fade into the background, 
                allowing human creativity and collaboration to take center stage.
              </p>
              
              <div className="vision-points">
                <div className="vision-point">
                  <div className="vision-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Seamless Integration</h4>
                    <p>Tools that work together so naturally, you forget they're separate applications.</p>
                  </div>
                </div>
                <div className="vision-point">
                  <div className="vision-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                      <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="2"/>
                      <path d="M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Human-Centered Design</h4>
                    <p>Technology that adapts to human behavior, not the other way around.</p>
                  </div>
                </div>
                <div className="vision-point">
                  <div className="vision-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Continuous Evolution</h4>
                    <p>Always learning, always improving, always staying ahead of your needs.</p>
                  </div>
                </div>
              </div>
              
              <div className="about-stats">
                <div className="stat">
                  <div className="stat-number">10K+</div>
                  <div className="stat-label">Active Users</div>
                </div>
                <div className="stat">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Countries</div>
                </div>
                <div className="stat">
                  <div className="stat-number">99.9%</div>
                  <div className="stat-label">Uptime</div>
                </div>
              </div>
            </div>
            <div className="about-visual">
              <div className="about-card">
                <div className="about-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Our Mission</h3>
                <p>To help teams and individuals achieve more by doing less – less complexity, 
                less friction, and less time spent managing their tools.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <div className="container">
          <h2>Powerful features that feel effortless</h2>
          <div className="features">
            {[
              { title: 'Smart Task Lists', desc: 'Auto-group tasks by project, priority, or due date to keep you in flow.', icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16M4 12h10M4 18h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              )},
              { title: 'Real-time Collaboration', desc: 'Work simultaneously with teammates and see updates instantly.', icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 11a4 4 0 10-8 0 4 4 0 008 0z" stroke="currentColor" strokeWidth="2"/><path d="M6 21a6 6 0 1112 0" stroke="currentColor" strokeWidth="2"/></svg>
              )},
              { title: 'Deadline Reminders', desc: 'Gentle nudges so you never miss important due dates again.', icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 8v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="2"/></svg>
              )},
              { title: 'Progress Tracking', desc: 'Visualize progress with charts and completion trends over time.', icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 20V4M4 20h16" stroke="currentColor" strokeWidth="2"/><path d="M8 15v-3m4 3V9m4 6V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              )},
            ].map((f, i) => (
              <div className="feature" key={i}>
                <div style={{ width: 40, height: 40, display: 'grid', placeItems: 'center', borderRadius: 10, background: 'linear-gradient(135deg, var(--primary), var(--accent))', color: '#fff' }}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p className="muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot/Dashboard Preview */}
      <section className="section screenshot">
        <div className="container">
          <div className="mock" aria-label="TaskFlow dashboard preview">
            <div className="mock-top">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="mock-grid">
              <aside className="sidebar">
                <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.75rem' }}>
                  <div className="brand-mark" style={{ width: 24, height: 24 }}> 
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 12L10 18L20 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <strong>Mipango</strong>
                </div>
                <div className="muted">Projects</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '.5rem 0', display: 'grid', gap: '.4rem' }}>
                  <li>Website Redesign</li>
                  <li>Mobile App</li>
                  <li>Marketing</li>
                  <li>Personal</li>
                </ul>
              </aside>
              <section className="content">
                <div style={{ display: 'flex', gap: '.5rem', marginBottom: '.75rem', flexWrap: 'wrap' }}>
                  {['All', 'In Progress', 'Completed', 'Blocked'].map((tab, idx) => (
                    <button key={idx} className="btn ghost" style={{ padding: '.35rem .6rem' }}>{tab}</button>
                  ))}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '.75rem' }}>
                  {[
                    {
                      title: '📋 Backlog',
                      count: 4,
                      color: '#fef3c7',
                      tasks: ['User research plan', 'Competitor analysis', 'Feature requirements', 'Design system audit']
                    },
                    {
                      title: '🔄 In Progress',
                      count: 3,
                      color: '#dbeafe',
                      tasks: ['Wireframe creation', 'User flow mapping', 'Prototype development']
                    },
                    {
                      title: '✅ Completed',
                      count: 6,
                      color: '#dcfce7',
                      tasks: ['Project setup', 'Team onboarding', 'Initial planning', 'Stakeholder interviews', 'Market research', 'Design brief']
                    }
                  ].map((column, i) => (
                    <div key={i} style={{ border: '1px solid var(--border)', borderRadius: '.6rem', overflow: 'hidden' }}>
                      <div style={{ background: column.color, padding: '.6rem .7rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <strong>{column.title}</strong>
                        <span className="badge" style={{ background: 'rgba(0,0,0,0.1)', color: 'inherit' }}>{column.count}</span>
                      </div>
                      <div style={{ padding: '.6rem .7rem', display: 'grid', gap: '.5rem' }}>
                        {column.tasks.map((task, j) => (
                          <div key={j} style={{ 
                            padding: '.6rem', 
                            border: '1px solid var(--border)', 
                            borderRadius: '.5rem',
                            background: 'white',
                            fontSize: '.85rem'
                          }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <span>{task}</span>
                              <span style={{ fontSize: '.75rem', color: 'var(--muted)' }}>
                                {i === 0 ? 'Pending' : i === 1 ? 'In Progress' : 'Done'}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section">
        <div className="container">
          <h2>Simple, transparent pricing</h2>
          <div className="pricing">
            {[
              { name: 'Free', price: '$0', features: ['Unlimited tasks', 'One workspace', 'Basic reminders'] },
              { name: 'Pro', price: '$9', features: ['Everything in Free', 'Unlimited workspaces', 'Real-time collaboration', 'Priority support'] },
              { name: 'Business', price: '$19', features: ['Everything in Pro', 'Advanced reporting', 'SAML SSO', 'Admin controls'] },
            ].map((t, i) => (
              <div key={i} className="tier">
                <div>
                  <h3 style={{ marginTop: 0 }}>{t.name}</h3>
                  <div className="price">{t.price}<span className="small">/mo</span></div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0', display: 'grid', gap: '.5rem' }}>
                    {t.features.map((f, j) => (
                      <li key={j} style={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
                        <svg className="check" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12l5 5 11-11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  className="btn primary"
                  onClick={() => openPaymentForPlan({ name: t.name, price: t.price })}
                  aria-label={`Choose ${t.name} plan`}
                >
                  Choose {t.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container">
          <h2>What our customers say</h2>
          <div className="testimonials">
            {[
              { name: 'Maya Patel', role: 'Product Manager', quote: 'TaskFlow keeps our team aligned and moving fast.' },
              { name: 'James Lee', role: 'Designer', quote: 'Clean, calming, and surprisingly powerful.' },
              { name: 'Ava Rodriguez', role: 'Founder', quote: 'The reminders and collaboration features changed how we work.' },
            ].map((q, i) => (
              <div key={i} className="quote">
                <div className="avatar" />
                <div>
                  <p style={{ margin: 0 }}>
                    “{q.quote}”
                  </p>
                  <div className="muted" style={{ fontSize: '.9rem' }}>{q.name} · {q.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-header">
              <h2>Get in Touch</h2>
              <p className="lead">
                Ready to transform how you work? Let's start a conversation about 
                how Mipango can help you and your team achieve more.
              </p>
            </div>
            
            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-card">
                  <div className="contact-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3>Email Us</h3>
                  <p>hello@mipango.com</p>
                  <p className="muted">We typically respond within 24 hours</p>
                </div>
                
                <div className="contact-card">
                  <div className="contact-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3>Call Us</h3>
                  <p>+254 (115) 529 4199</p>
                  <p className="muted">Mon-Fri, 9AM-6PM EAT</p>
                </div>
                
                <div className="contact-card">
                  <div className="contact-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3>Visit Us</h3>
                  <p>123 Innovation Drive</p>
                  <p>San Francisco, CA 94105</p>
                  <p className="muted">By appointment only</p>
                </div>
              </div>
              
              <div className="contact-form-container">
                <div className="contact-form">
                  <h3>Send us a Message</h3>
                  <form className="message-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" className="form-input" placeholder="Your full name" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="form-input" placeholder="your@email.com" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Company</label>
                      <input type="text" id="company" className="form-input" placeholder="Your company (optional)" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <select id="subject" className="form-input">
                        <option value="">Select a topic</option>
                        <option value="general">General Inquiry</option>
                        <option value="demo">Request Demo</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea id="message" className="form-input" rows={5} placeholder="Tell us how we can help..."></textarea>
                    </div>
                    <button type="submit" className="btn primary contact-submit">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container foot-grid">
          <div className="foot-col">
            <div className="brand" style={{ marginBottom: '.5rem' }}>
              <div className="brand-mark">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12L10 18L20 6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Mipango</span>
            </div>
            <p className="muted">Structure Work, Unlock Potential.</p>
          </div>
          <div className="foot-col">
            <h4>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '.4rem' }}>
              <li><a href="#about">About</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#features">Features</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Resources</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '.4rem' }}>
              <li><a href="#">Docs</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Follow</h4>
            <div className="socials">
              {[
                { label: 'Twitter', path: 'M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 3c-2.5 0-4.5 2-4.5 4.5 0 .35.04.7.11 1.02A12.94 12.94 0 013 4s-4 9 5 13a13 13 0 01-8 2c9 5 20 0 20-11.5 0-.34 0-.68-.03-1A7.72 7.72 0 0023 3z' },
                { label: 'LinkedIn', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z M2 9h4v12H2z M4 4a2 2 0 110 4 2 2 0 010-4z' },
                { label: 'GitHub', path: 'M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.35-1.75-1.35-1.75-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.9 1.24 3.22 0 4.6-2.81 5.61-5.49 5.9.43.37.82 1.1.82 2.22v3.3c0 .32.21.69.82.58A12 12 0 0012 .5z' },
              ].map((s, i) => (
                <a key={i} href="#" aria-label={s.label} className="btn ghost" style={{ padding: '.5rem', borderRadius: '999px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: '1rem', color: 'var(--muted)', fontSize: '.9rem' }}>
          © {new Date().getFullYear()} Mipango. All rights reserved.
        </div>
      </footer>

      {isPaymentOpen && (
        <PaymentModal open={isPaymentOpen} plan={selectedPlan} onClose={closePayment} />
      )}
    </main>
  )
}


