import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle, AlertCircle, Copy, Check } from 'lucide-react';
import { profileData } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your name.');
      return;
    }

    if (!validateEmail(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      setStatus('error');
      setErrorMessage('Please provide a message with at least 5 characters.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    // Prepare prefilled mailto URL fallback to guarantee message delivery without backend vulnerability
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Om,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`
    );
    const mailtoUrl = `mailto:${profileData.contact.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      // Trigger user's mail client
      window.location.href = mailtoUrl;
      setStatus('success');
    }, 600);
  };

  return (
    <section
      id="contact"
      className="w-full px-6 sm:px-10 lg:px-[12%] py-20 scroll-mt-20 relative overflow-hidden bg-[url('/images/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      <SectionHeading
        eyebrow="CONTACT ME"
        title="Let's Connect"
        subtitle="I'm always interested in learning, building useful technology, and connecting with people working on exciting ideas."
      />

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start my-10">
        {/* Left Column: Direct Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col gap-4"
        >
          <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200/90 p-6 shadow-sm">
            <h3 className="text-xl font-bold font-outfit text-gray-900 mb-2">
              Reach Out Directly
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 font-light">
              Feel free to send me an email, connect on LinkedIn, or follow my projects on GitHub.
            </p>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-gray-50 border border-gray-200/80">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-gray-900 text-white flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[11px] text-gray-500 uppercase font-mono">Email</p>
                    <a
                      href={`mailto:${profileData.contact.email}`}
                      className="text-xs sm:text-sm font-semibold text-gray-900 hover:underline truncate block"
                    >
                      {profileData.contact.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg hover:bg-gray-200 text-gray-600 transition"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-200/80 hover:bg-white hover:border-black transition group"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-[11px] text-gray-500 uppercase font-mono">LinkedIn</p>
                  <p className="text-xs sm:text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition">
                    Om Suryawanshi
                  </p>
                </div>
                <span className="text-xs text-gray-400 group-hover:translate-x-0.5 transition-transform">→</span>
              </a>

              {/* GitHub */}
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-200/80 hover:bg-white hover:border-black transition group"
              >
                <div className="w-9 h-9 rounded-lg bg-black text-white flex items-center justify-center flex-shrink-0">
                  <Github className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-[11px] text-gray-500 uppercase font-mono">GitHub</p>
                  <p className="text-xs sm:text-sm font-semibold text-gray-900 group-hover:text-black transition">
                    @Omsuryawanshi02
                  </p>
                </div>
                <span className="text-xs text-gray-400 group-hover:translate-x-0.5 transition-transform">→</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-200/80">
                <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 uppercase font-mono">Location</p>
                  <p className="text-xs sm:text-sm font-medium text-gray-800">
                    {profileData.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7 bg-white/85 backdrop-blur-md rounded-2xl border border-gray-200/90 p-7 sm:p-9 shadow-sm"
        >
          <h3 className="text-2xl font-bold font-outfit text-gray-900 mb-1">
            Send a Direct Message
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mb-6 font-light">
            Have a project in mind, want to discuss AI engineering, or simply say hello? Drop me a note below.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Your Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                Message *
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 text-sm rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition resize-none"
              />
            </div>

            {/* Error Message */}
            {status === 'error' && (
              <div className="flex items-center gap-2 p-3 text-xs rounded-xl bg-red-50 border border-red-200 text-red-700">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Success Message */}
            {status === 'success' && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 space-y-1">
                <div className="flex items-center gap-2 font-semibold text-xs sm:text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Email client opened!</span>
                </div>
                <p className="text-xs text-emerald-700">
                  Your message has been prefilled into your email composer. You can also email me directly at{' '}
                  <strong className="underline">{profileData.contact.email}</strong>.
                </p>
              </div>
            )}

            <motion.button
              type="submit"
              disabled={status === 'loading'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-full sm:w-auto px-10 py-3.5 bg-black text-white rounded-full font-semibold text-sm hover:bg-gray-800 transition flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
            >
              {status === 'loading' ? (
                <span>Preparing message...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
