import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar = ({ open, onClose }: SidebarProps) => {
  const [openSection, setOpenSection] = useState<string | null>("women");

  const toggle = (key: string) => {
    setOpenSection(openSection === key ? null : key);
  };

  return (
    <>
      <div className={`cw-sidebar ${open ? "open" : ""}`}>
        <h4>Shop</h4>

        {/* WOMEN */}
        <div className="menu-section">
          <div className="menu-title" onClick={() => toggle("women")}>
            Women
          </div>
          {openSection === "women" && (
            <ul>
              <li>
                <Link to="/category/women" onClick={onClose}>
                  All Women
                </Link>
              </li>
              <li>
                <Link to="/category/women/kurti" onClick={onClose}>
                  Kurtis
                </Link>
              </li>
              <li>
                <Link to="/category/women/dress" onClick={onClose}>
                  Dresses
                </Link>
              </li>
              <li>
                <Link to="/category/women/saree" onClick={onClose}>
                  Sarees
                </Link>
              </li>
              <li>
                <Link to="/category/women/top" onClick={onClose}>
                  Tops
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* MEN */}
        <div className="menu-section">
          <div className="menu-title" onClick={() => toggle("men")}>
            Men
          </div>
          {openSection === "men" && (
            <ul>
              <li>
                <Link to="/category/men" onClick={onClose}>
                  All Men
                </Link>
              </li>
              <li>
                <Link to="/category/men/shirt" onClick={onClose}>
                  Shirts
                </Link>
              </li>
              <li>
                <Link to="/category/men/tshirt" onClick={onClose}>
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link to="/category/men/jeans" onClick={onClose}>
                  Jeans
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* ACCESSORIES */}
        <div className="menu-section">
          <div className="menu-title" onClick={() => toggle("acc")}>
            Accessories
          </div>
          {openSection === "acc" && (
            <ul>
              <li>
                <Link to="/category/accessories" onClick={onClose}>
                  All Accessories
                </Link>
              </li>
              <li>
                <Link to="/category/accessories/bag" onClick={onClose}>
                  Bags
                </Link>
              </li>
              <li>
                <Link to="/category/accessories/jewellery" onClick={onClose}>
                  Jewellery
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* ACCOUNT */}
        <div className="menu-section">
          <div className="menu-title">My Account</div>
          <ul>
            <li>
              <Link to="/orders" onClick={onClose}>
                My Orders
              </Link>
            </li>
            <li>
              <Link to="/wishlist" onClick={onClose}>
                Wishlist
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={onClose}>
                Login / Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {open && <div className="overlay" onClick={onClose} />}
    </>
  );
};

export default Sidebar;
