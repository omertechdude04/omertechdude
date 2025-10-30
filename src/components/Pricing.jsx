import './Pricing.css';

export default function Pricing() {
  const pricingPlans = [
    {
      title: "Starter Bundle",
      price: "$500 USD",
      features: [
        "Up to 3 custom-designed pages",
        "Fully responsive & mobile-optimized design",
        "Integrated contact form with direct email delivery",
        "Basic on-page SEO setup",
        "Connection to your existing domain",
      ],
      note: "Perfect for small businesses, personal sites, or simple landing pages.",
    },
    {
      title: "Pro Bundle",
      price: "$800 USD",
      features: [
        "Up to 7 professionally designed pages",
        "Smooth animations & modern scroll effects",
        "Contact form, reviews, and FAQ sections included",
        "Fully responsive across all devices",
        "Assistance with custom domain setup",
        "+ 1 week of free post-launch support",
      ],
      note: "Great for service providers, creators, and growing brands.",
      popular: true,
    },
    {
      title: "Ultimate Bundle",
      price: "$1200 USD",
      features: [
        "Up to 12 uniquely designed pages",
        "Custom layout tailored to each page’s purpose",
        "Fully responsive & performance-optimized",
        "Contact form, reviews, and FAQ sections included",
        "Custom 404 page + branded loading animation",
        "Full deployment and domain setup handled for you",
        "+ 1 month of free post-launch support",
      ],
      note: "Best for businesses or personal brands ready for a complete, professional online presence.",
    },
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        <h2 className="pricing-title">Pricing Plans</h2>
        <p className="pricing-subtitle">
          Choose the right package for your project — from small sites to full-scale web apps.
        </p>

        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3 className="plan-title">{plan.title}</h3>
              <p className="plan-price">{plan.price}</p>
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>✅ {feature}</li>
                ))}
              </ul>
              <p className="plan-note">{plan.note}</p>
              <a href="#contact" className="plan-button">Contact Me</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
