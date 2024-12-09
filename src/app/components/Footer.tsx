import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white flex flex-col md:flex-row justify-between items-center p-4 text-sm">
      <div className="mb-2 md:mb-0">
        Copyright © 2000-2020. Typo.com. All rights reserved.
      </div>
      <div className="flex gap-4">
        <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
        <a href="/terms-of-use" className="hover:underline">Terms of Use</a>
        <a href="/partner" className="hover:underline">Partner</a>
      </div>
    </footer>
  );
};

export default Footer;
