import React from 'react';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20">
      <div className="text-center">
        {/* Brand logo signature */}
        <div
          onClick={scrollToTop}
          className="inline-block cursor-pointer select-none mb-2 group"
        >
          <span className="font-outfit font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight transition-transform group-hover:scale-105 duration-200">
            Om Suryawanshi<span className="text-[#fa5858] font-black">.</span>
          </span>
        </div>

        {/* Email with icon */}
        <div className="w-max flex items-center gap-2 mx-auto text-sm sm:text-base text-gray-700">
          <img
            src="/images/mail_icon.png"
            alt="Email icon"
            className="w-5 h-auto object-contain"
          />
          <a
            href={`mailto:${profileData.contact.email}`}
            className="hover:text-black transition-colors"
          >
            {profileData.contact.email}
          </a>
        </div>
      </div>

      {/* Bottom bar with divider line matching reference screenshot */}
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 text-sm text-gray-700 font-outfit">
        <p>© 2026 {profileData.name}</p>

        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0 font-outfit">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={profileData.contact.github}
              className="hover:text-black transition-colors"
            >
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={profileData.contact.linkedin}
              className="hover:text-black transition-colors"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={profileData.contact.twitter || 'https://x.com'}
              className="hover:text-black transition-colors"
            >
              X
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
