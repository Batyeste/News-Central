import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ isAuthenticated, user }) => {
  const navigate = useNavigate();

  return (
    <header className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold cursor-pointer" onClick={() => navigate('/')}>News Central</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-gray-400 transition">Accueil</a></li>
            <li><a href="#" className="hover:text-gray-400 transition">Actualités</a></li>
            <li><a href="#" className="hover:text-gray-400 transition">Contact</a></li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          {isAuthenticated ? (
            <>
              <span className="text-sm">Bonjour, {user?.username}</span>
              <button className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition" onClick={() => navigate('/history')}>
                Mon Historique
              </button>
              <button className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-600 transition" onClick={() => navigate('/')}> 
                Déconnexion
              </button>
            </>
          ) : (
            <>
              <button className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 transition" onClick={() => navigate('/login')}>
                Connexion
              </button>
              <button className="bg-green-500 px-3 py-1 rounded hover:bg-green-600 transition" onClick={() => navigate('/register')}>
                Inscription
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
