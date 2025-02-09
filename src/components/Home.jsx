import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container text-center my-5">
      <h1 className="mb-4">In case I'm not around c:</h1>
      <div className="spotify-container mb-5">
        <a 
          href="spotify:track:7DbdUf8aHSYoliSjO6LZv6" 
          className="btn btn-success btn-lg mb-4"
          style={{ 
            backgroundColor: '#1DB954',
            borderColor: '#1DB954',
            padding: '15px 30px',
            borderRadius: '25px',
            fontSize: '1.2rem',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
          Play your favorite song
        </a>
      </div>
      <div className="d-grid gap-3 d-md-flex justify-content-md-center">
        <Link to="/option/miss" className="btn btn-outline-primary btn-lg">
          If you miss him
        </Link>
        <Link to="/option/not-enough" className="btn btn-outline-success btn-lg">
          If you feel like you're not enough
        </Link>
        <Link to="/option/sad" className="btn btn-outline-warning btn-lg">
          If you're sad and angry at the world
        </Link>
      </div>
    </div>
  );
}

export default Home;