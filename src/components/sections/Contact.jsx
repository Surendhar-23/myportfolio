import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Copy,
  Check,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

export default function Contact({ onNotify }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedField, setCopiedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    if (onNotify) {
      onNotify(`${fieldName} copied to clipboard!`, 'info');
    }
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) errors.message = 'Please enter your message.';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    // Simulate submission / mailto bridge
    setTimeout(() => {
      setIsSubmitting(false);
      if (onNotify) {
        onNotify('Thank you! Your message has been prepared successfully.', 'success');
      }

      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoLink;

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 800);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (formErrors[e.target.name]) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: null
      });
    }
  };

  return (
    <section id="contact" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        <SectionHeading
          pill="Contact"
          title="Let's Build Something"
          highlight="Together"
          subtitle="Have a project in mind, an engineering opportunity, or just want to connect? Reach out anytime."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem'
          }}
        >
          {/* Left Column: Direct Contact Info */}
          <div>
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '1rem'
              }}
            >
              Direct Channels
            </h3>
            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.95rem',
                marginBottom: '2rem',
                lineHeight: 1.6
              }}
            >
              Feel free to contact me directly via email, phone, or instant messaging. I typically respond within a few hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {/* Email Card */}
              <div
                className="glass-card"
                style={{
                  padding: '1.25rem',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: 'rgba(6, 182, 212, 0.1)',
                      border: '1px solid rgba(6, 182, 212, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--cyan-primary)'
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-faint)', textTransform: 'uppercase' }}>
                      Email Address
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)' }}>
                      {personalInfo.email}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(personalInfo.email, 'Email')}
                  aria-label="Copy Email"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '8px',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: copiedField === 'Email' ? '#34d399' : 'var(--text-muted)',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {copiedField === 'Email' ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone Card */}
              <div
                className="glass-card"
                style={{
                  padding: '1.25rem',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: 'rgba(99, 102, 241, 0.1)',
                      border: '1px solid rgba(99, 102, 241, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--indigo-hover)'
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-faint)', textTransform: 'uppercase' }}>
                      Phone & Call
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)' }}>
                      {personalInfo.phoneFormatted}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(personalInfo.phone, 'Phone number')}
                  aria-label="Copy Phone"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '8px',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: copiedField === 'Phone number' ? '#34d399' : 'var(--text-muted)',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {copiedField === 'Phone number' ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location Card */}
              <div
                className="glass-card"
                style={{
                  padding: '1.25rem',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#34d399'
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-faint)', textTransform: 'uppercase' }}>
                    Location
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)' }}>
                    {personalInfo.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action */}
            <Button
              variant="outline"
              size="lg"
              href={personalInfo.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              icon={MessageSquare}
              style={{ width: '100%' }}
            >
              Chat on WhatsApp Directly
            </Button>
          </div>

          {/* Right Column: Contact Form */}
          <div
            className="glass-card"
            style={{
              padding: '2.5rem',
              borderRadius: '1.25rem',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <h3
              style={{
                fontSize: '1.4rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '1.5rem'
              }}
            >
              Send a Direct Message
            </h3>

            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '1rem'
                }}
              >
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className="form-input"
                  />
                  {formErrors.name && (
                    <span style={{ fontSize: '0.75rem', color: '#f87171', marginTop: '2px' }}>
                      {formErrors.name}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="form-input"
                  />
                  {formErrors.email && (
                    <span style={{ fontSize: '0.75rem', color: '#f87171', marginTop: '2px' }}>
                      {formErrors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Full-Time Opportunity / Project Discussion"
                  className="form-input"
                />
                {formErrors.subject && (
                  <span style={{ fontSize: '0.75rem', color: '#f87171', marginTop: '2px' }}>
                    {formErrors.subject}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Share details about your requirements, project, or role..."
                  className="form-textarea"
                />
                {formErrors.message && (
                  <span style={{ fontSize: '0.75rem', color: '#f87171', marginTop: '2px' }}>
                    {formErrors.message}
                  </span>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                icon={Send}
                disabled={isSubmitting}
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                {isSubmitting ? 'Preparing Message...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
