import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Loader2, MapPin, Copy, ExternalLink, Sparkles, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal, contactConfig } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // Spam trap: invisible to humans, filled by bots
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Email format validation regex
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!validateEmail(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g. name@domain.com).';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject.';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject should be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Spam protection check: if honeypot is filled, silent discard
    if (formData.honeypot) {
      console.warn('Bot submission blocked via honeypot.');
      setStatus({ type: 'success', message: 'Thank you! Your message has been sent.' });
      return;
    }

    // 2. Client-side field validations
    if (!validateForm()) {
      setStatus({ type: 'error', message: 'Please correct the highlighted fields above.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    // Retrieve EmailJS configuration from environment variables or config
    const serviceId = contactConfig.serviceId || import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = contactConfig.templateId || import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = contactConfig.publicKey || import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if configuration exists and is not dummy placeholder
    const isConfigured =
      serviceId &&
      templateId &&
      publicKey &&
      !serviceId.includes('your_') &&
      !templateId.includes('your_') &&
      !publicKey.includes('your_');

    if (!isConfigured) {
      // Graceful handler when credentials are not yet populated
      setTimeout(() => {
        setIsSubmitting(false);
        setStatus({
          type: 'config-notice',
          message:
            'EmailJS credentials are not yet configured in .env. Please add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY. Alternatively, click the email button below to send directly via your mail client.',
        });
      }, 600);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name.trim(),
        user_name: formData.name.trim(),
        from_email: formData.email.trim(),
        user_email: formData.email.trim(),
        reply_to: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        to_name: personal.name,
        to_email: contactConfig.recipientEmail,
      };

      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

      if (response.status === 200 || response.text === 'OK') {
        setStatus({
          type: 'success',
          message: 'Thank you for reaching out! Your message was delivered directly to my inbox. I will get back to you shortly.',
        });
        // Reset form upon confirmed success
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          honeypot: '',
        });
        setErrors({});
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error('EmailJS Submission Error:', error);
      setStatus({
        type: 'error',
        message: error?.text || error?.message || 'Failed to dispatch email. Please try again or reach out directly at ' + personal.email,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhoneToClipboard = () => {
    navigator.clipboard.writeText('9342733351');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">
            Let's Discuss Software & Collaboration
          </h2>
          <p className="section-description">
            Interested in hiring, collaborating on an engineering project, or exploring open source? Send me a message and I will respond promptly.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Direct info & Email copy */}
          <div
            className="card-base"
            style={{
              padding: '2.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)' }}>
              Direct Communication
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Whether you are an engineering recruiter, tech lead, or fellow developer, feel free to drop a message through this form or directly via email.
            </p>

            {/* Email Box with One-Click Copy */}
            <div
              style={{
                backgroundColor: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block' }}>
                  Direct Email Address
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.95rem',
                    color: 'var(--accent)',
                    fontWeight: 600,
                  }}
                >
                  {personal.email}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className="btn btn-secondary btn-sm"
                  title="Copy email to clipboard"
                >
                  <Copy size={15} />
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>

                <a
                  href={`mailto:${personal.email}`}
                  className="btn btn-primary btn-sm"
                  title="Open mail application"
                >
                  <ExternalLink size={15} />
                  <span>Email</span>
                </a>
              </div>
            </div>

            {/* Direct Phone / Contact Number Box */}
            <div
              style={{
                backgroundColor: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block' }}>
                  Direct Phone / WhatsApp
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.05rem',
                    color: 'var(--text-main)',
                    fontWeight: 700,
                    letterSpacing: '0.03em',
                  }}
                >
                  +91 9342733351
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  type="button"
                  onClick={copyPhoneToClipboard}
                  className="btn btn-secondary btn-sm"
                  title="Copy phone number to clipboard"
                >
                  <Copy size={15} />
                  <span>{copiedPhone ? 'Copied!' : 'Copy'}</span>
                </button>

                <a
                  href="tel:+919342733351"
                  className="btn btn-primary btn-sm"
                  title="Call now"
                >
                  <Phone size={15} />
                  <span>Call</span>
                </a>
              </div>
            </div>

            {/* Location & Response Guarantee */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <MapPin size={18} color="var(--accent)" />
                <span>{personal.location} (Open to Remote & Onsite)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <Sparkles size={18} color="var(--accent)" />
                <span>Typical response time: Within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div
            className="card-base"
            style={{
              padding: '2.25rem',
            }}
          >
            <form onSubmit={handleSubmit} noValidate>
              {/* Anti-spam honeypot field (hidden from view) */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <label htmlFor="honeypot">Leave this blank</label>
                <input
                  type="text"
                  id="honeypot"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex="-1"
                  autoComplete="off"
                />
              </div>

              {/* Status Banner */}
              {status.type && (
                <div
                  style={{
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    backgroundColor:
                      status.type === 'success'
                        ? 'rgba(16, 185, 129, 0.1)'
                        : status.type === 'config-notice'
                        ? 'rgba(234, 179, 8, 0.1)'
                        : 'rgba(239, 68, 68, 0.1)',
                    border: `1px solid ${
                      status.type === 'success'
                        ? 'rgba(16, 185, 129, 0.3)'
                        : status.type === 'config-notice'
                        ? 'rgba(234, 179, 8, 0.3)'
                        : 'rgba(239, 68, 68, 0.3)'
                    }`,
                    color:
                      status.type === 'success'
                        ? '#10b981'
                        : status.type === 'config-notice'
                        ? '#facc15'
                        : '#ef4444',
                    fontSize: '0.9rem',
                    lineHeight: 1.5,
                  }}
                >
                  {status.type === 'success' && <CheckCircle2 size={18} style={{ flexShrink: 0, marginTop: '2px' }} />}
                  {status.type === 'error' && <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />}
                  {status.type === 'config-notice' && <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />}
                  <div>{status.message}</div>
                </div>
              )}

              {/* Name Field */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label
                  htmlFor="name"
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--text-main)',
                    marginBottom: '0.45rem',
                  }}
                >
                  Your Name <span style={{ color: 'var(--accent)' }}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-surface-elevated)',
                    border: `1px solid ${errors.name ? 'var(--danger)' : 'var(--border-subtle)'}`,
                    color: 'var(--text-main)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => {
                    if (!errors.name) e.target.style.borderColor = 'var(--accent)';
                  }}
                  onBlur={(e) => {
                    if (!errors.name) e.target.style.borderColor = 'var(--border-subtle)';
                  }}
                />
                {errors.name && (
                  <span style={{ display: 'block', color: 'var(--danger)', fontSize: '0.8rem', marginTop: '0.35rem' }}>
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email Field */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label
                  htmlFor="email"
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--text-main)',
                    marginBottom: '0.45rem',
                  }}
                >
                  Your Email Address <span style={{ color: 'var(--accent)' }}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-surface-elevated)',
                    border: `1px solid ${errors.email ? 'var(--danger)' : 'var(--border-subtle)'}`,
                    color: 'var(--text-main)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => {
                    if (!errors.email) e.target.style.borderColor = 'var(--accent)';
                  }}
                  onBlur={(e) => {
                    if (!errors.email) e.target.style.borderColor = 'var(--border-subtle)';
                  }}
                />
                {errors.email && (
                  <span style={{ display: 'block', color: 'var(--danger)', fontSize: '0.8rem', marginTop: '0.35rem' }}>
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Subject Field */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label
                  htmlFor="subject"
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--text-main)',
                    marginBottom: '0.45rem',
                  }}
                >
                  Subject <span style={{ color: 'var(--accent)' }}>*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="e.g. Software Engineering Opportunity / Project Discussion"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-surface-elevated)',
                    border: `1px solid ${errors.subject ? 'var(--danger)' : 'var(--border-subtle)'}`,
                    color: 'var(--text-main)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => {
                    if (!errors.subject) e.target.style.borderColor = 'var(--accent)';
                  }}
                  onBlur={(e) => {
                    if (!errors.subject) e.target.style.borderColor = 'var(--border-subtle)';
                  }}
                />
                {errors.subject && (
                  <span style={{ display: 'block', color: 'var(--danger)', fontSize: '0.8rem', marginTop: '0.35rem' }}>
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* Message Field */}
              <div style={{ marginBottom: '1.75rem' }}>
                <label
                  htmlFor="message"
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--text-main)',
                    marginBottom: '0.45rem',
                  }}
                >
                  Message <span style={{ color: 'var(--accent)' }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-surface-elevated)',
                    border: `1px solid ${errors.message ? 'var(--danger)' : 'var(--border-subtle)'}`,
                    color: 'var(--text-main)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => {
                    if (!errors.message) e.target.style.borderColor = 'var(--accent)';
                  }}
                  onBlur={(e) => {
                    if (!errors.message) e.target.style.borderColor = 'var(--border-subtle)';
                  }}
                />
                {errors.message && (
                  <span style={{ display: 'block', color: 'var(--danger)', fontSize: '0.8rem', marginTop: '0.35rem' }}>
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  opacity: isSubmitting ? 0.75 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
