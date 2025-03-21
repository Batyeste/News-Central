import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 space-y-4 md:space-y-0">
        <h1 className="text-2xl font-bold">News Central</h1>
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} News Central. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;