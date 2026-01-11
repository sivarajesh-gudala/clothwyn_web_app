import { useNavigate } from "react-router-dom";
import ClothwynLogo from "../../clothwynlogo/ClothWynLogo";
import "./Header.scss";
import SearchOverlay from "../../SearchOverlay/SearchOverlay";
import { useState } from "react";

const Header = ({ onMenuClick }: { onMenuClick: () => void }) => {
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);

  const navigateTo = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <header className="cw-header">
        <button
          className="menu-btn"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </button>

        <ClothwynLogo />

        <div className="header-actions">
          <button
            className="icon-btn"
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <circle
                cx="11"
                cy="11"
                r="7"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
          {/* Cart */}
          <button
            className="icon-btn"
            aria-label="Cart"
            onClick={() => navigateTo("/cart")}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6h15l-1.5 9h-12zM6 6L5 3H2M9 21a1 1 0 100-2 1 1 0 000 2zm9 0a1 1 0 100-2 1 1 0 000 2z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>

          {/* Profile */}
          <button
            className="icon-btn"
            aria-label="Account"
            onClick={() => navigateTo("/login")}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="8"
                r="4"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M4 21c2-4 14-4 16 0"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </header>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};

export default Header;
