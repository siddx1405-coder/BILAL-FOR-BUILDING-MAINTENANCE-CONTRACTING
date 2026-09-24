import React, { useState } from 'react';
import { products } from './data';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [whatsappNote, setWhatsappNote] = useState('');

  const categories = [
    'All',
    'Doors & Windows',
    'Car Parking Shades',
    'Railings & Stairs',
    'Gates & Fences',
    'Canopies & Pergolas',
    'Woodwork & Partitions'
  ];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const toggleSelectItem = (title) => {
    if (selectedItems.includes(title)) {
      setSelectedItems(selectedItems.filter(item => item !== title));
    } else {
      setSelectedItems([...selectedItems, title]);
    }
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const itemsText = selectedItems.length > 0 ? selectedItems.join(', ') : 'General Enquiry';
    const message = `Hello Bilal Contracting,%0A%0AI am interested in the following services/products:%0A*${itemsText}*%0A%0A*Additional Details:* ${whatsappNote || 'N/A'}`;
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <div>
      {/* Navigation Header */}
      <nav className="navbar">
        <div>
          <div className="brand-title">BILAL FOR BUILDING MAINTENANCE & CONTRACTING</div>
          <div className="brand-arabic">بلال لصيانة المباني والمقاولات</div>
        </div>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#location">Location</a>
          <a href="#contact" className="btn-primary">Enquire Now</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <span style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
          Quality Construction & Fabrication
        </span>
        <h1>Building Maintenance & Premium Contracting</h1>
        <p>
          Specializing in custom aluminum doors, wrought iron gates, decorative window grilles, car parking shades, stainless steel railings, and exterior canopy structures.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="#portfolio" className="btn-primary">Explore Portfolio</a>
          <a href="#location" style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: '1px solid var(--border-color)', color: 'var(--text-main)', textDecoration: 'none', fontWeight: 600, transition: 'var(--transition-smooth)' }}>
            Find Location
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="container">
        {/* Services Overview */}
        <section id="services" style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '0.5rem' }}>Our Expertise</h2>
          <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginBottom: '2rem' }}>Custom steel, aluminum, and shading solutions in Qatar</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <h3 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>Aluminum & Glass Works</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Custom aluminum double doors, lattice glass installations, and decorative arched windows.</p>
            </div>
            <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <h3 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>Car Parking Shades</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Modern louvered flat-roof car shades with spotlights and cantilevered arch structures.</p>
            </div>
            <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <h3 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>Wrought Iron & Railings</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Laser-cut Islamic star pattern railings, solid entrance gates, and stainless steel stair guards.</p>
            </div>
          </div>
        </section>

        {/* Portfolio Gallery Section */}
        <section id="portfolio" style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '0.5rem' }}>Recent Work Gallery</h2>
          <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginBottom: '1.5rem' }}>Filter categories or select items to send an inquiry</p>

          {/* Category Filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '2rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  border: '1px solid var(--border-color)',
                  background: selectedCategory === cat ? 'var(--accent-gold)' : 'var(--bg-secondary)',
                  color: selectedCategory === cat ? '#fff' : 'var(--text-muted)',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  transition: 'var(--transition-smooth)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredProducts.map((product) => {
              const isSelected = selectedItems.includes(product.title);
              return (
                <div key={product.id} className="card">
                  <div className="card-img-wrapper" onClick={() => setSelectedImage(product)}>
                    <img src={product.src} alt={product.title} />
                    <span className="card-badge">{product.category}</span>
                  </div>
                  <div className="card-content">
                    <div>
                      <h3 className="card-title">{product.title}</h3>
                      <p className="card-desc">{product.description}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem' }}>
                      <button
                        onClick={() => toggleSelectItem(product.title)}
                        style={{
                          background: isSelected ? 'rgba(5, 150, 105, 0.2)' : 'var(--bg-card)',
                          color: isSelected ? 'var(--accent-emerald)' : 'var(--text-main)',
                          border: isSelected ? '1px solid var(--accent-emerald)' : '1px solid var(--border-color)',
                          padding: '0.4rem 0.8rem',
                          borderRadius: '6px',
                          fontSize: '0.8rem',
                          cursor: 'pointer',
                          fontWeight: 600,
                          transition: 'var(--transition-smooth)'
                        }}
                      >
                        {isSelected ? '✓ Selected' : '+ Select for Enquiry'}
                      </button>
                      <button
                        onClick={() => setSelectedImage(product)}
                        style={{ background: 'none', border: 'none', color: 'var(--accent-gold)', fontSize: '0.8rem', cursor: 'pointer', fontWeight: 600, transition: 'var(--transition-smooth)' }}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* WhatsApp Inquiry Form */}
        <section id="contact" style={{ marginBottom: '4rem', background: 'var(--bg-secondary)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
          <h2 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '0.5rem' }}>Send WhatsApp Enquiry</h2>
          <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            Submit selected items or enter your message to contact us directly.
          </p>

          <form onSubmit={handleSendWhatsApp} style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
                Selected Gallery Items ({selectedItems.length}):
              </label>
              <div style={{ background: 'var(--bg-primary)', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', minHeight: '48px', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {selectedItems.length > 0 ? (
                  selectedItems.map((item, idx) => (
                    <span key={idx} style={{ background: 'rgba(217, 119, 6, 0.15)', color: 'var(--accent-gold)', border: '1px solid rgba(217, 119, 6, 0.3)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      {item}
                      <button type="button" onClick={() => toggleSelectItem(item)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>✕</button>
                    </span>
                  ))
                ) : (
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>No items selected yet (optional)</span>
                )}
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
                Project Requirements or Dimensions:
              </label>
              <textarea
                rows="4"
                value={whatsappNote}
                onChange={(e) => setWhatsappNote(e.target.value)}
                placeholder="Enter dimensions, preferred colors, or specific requests..."
                style={{ width: '100%', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '0.75rem', color: '#fff', fontFamily: 'inherit', fontSize: '0.9rem', outline: 'none' }}
              ></textarea>
            </div>

            <button
              type="submit"
              style={{ background: 'var(--accent-emerald)', color: '#fff', border: 'none', padding: '0.85rem', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', fontSize: '1rem', transition: 'var(--transition-smooth)' }}
            >
              Send via WhatsApp
            </button>
          </form>
        </section>

        {/* Location Section - Updated with QARS Plate details */}
        <section id="location" style={{ background: 'var(--bg-secondary)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div>
              <span style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase' }}>Visit Our Location</span>
              <h2 style={{ fontSize: '1.8rem', marginTop: '0.25rem', marginBottom: '1rem' }}>Shop Location</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1rem' }}>
                <p style={{ fontWeight: 700, fontSize: '1.1rem', color: '#fff' }}>Umm Salal Ali (أم صلال علي)</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Zone 71, Street 850, Building 17, Unit 18</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Qatar</p>
              </div>

              <a
                href="https://maps.google.com/maps?q=25.4673889%2C51.4061394&z=17&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-block', marginTop: '1rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--accent-gold)', padding: '0.6rem 1.2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', transition: 'var(--transition-smooth)' }}
              >
                Open Google Maps ↗
              </a>
            </div>

            {/* QARS Address Badge */}
            <div style={{ background: 'var(--bg-primary)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
              <div style={{ background: '#0284c7', color: '#fff', borderRadius: '8px', padding: '1rem', border: '2px solid #38bdf8', boxShadow: '0 4px 12px rgba(2, 132, 199, 0.3)' }}>
                <span style={{ fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase', opacity: 0.9 }}>QARS Address Plate</span>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0.2rem 0' }}>18</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.3)', paddingTop: '0.5rem', fontSize: '0.8rem' }}>
                  <div>
                    <div style={{ opacity: 0.8, fontSize: '0.7rem' }}>ZONE</div>
                    <strong>71</strong>
                  </div>
                  <div>
                    <div style={{ opacity: 0.8, fontSize: '0.7rem' }}>STREET</div>
                    <strong>850</strong>
                  </div>
                  <div>
                    <div style={{ opacity: 0.8, fontSize: '0.7rem' }}>BUILDING</div>
                    <strong>17</strong>
                  </div>
                </div>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '0.75rem', fontFamily: 'monospace' }}>Kahramaa: 84666 / 84681</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--border-color)', padding: '2rem 1rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '3rem' }}>
        © BILAL FOR BUILDING MAINTENANCE & CONTRACTING. All rights reserved.
      </footer>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-body" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>✕</button>
            <div style={{ background: '#000', maxHeight: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={selectedImage.src} alt={selectedImage.title} style={{ maxHeight: '60vh', maxWidth: '100%', objectFit: 'contain' }} />
            </div>
            <div style={{ padding: '1.5rem' }}>
              <span style={{ color: 'var(--accent-gold)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>{selectedImage.category}</span>
              <h3 style={{ fontSize: '1.25rem', marginTop: '0.25rem', marginBottom: '0.5rem' }}>{selectedImage.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}