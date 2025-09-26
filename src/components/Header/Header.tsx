import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.less";

interface pageName {
  page?: string;
  theme: "dark" | "light";
}

const Header: React.FC<pageName> = ({ page, theme }) => {
  const [menuVisible, setMenuVisible] = useState(false); // Manage menu visibility state

  const handleMenuOpen = () => setMenuVisible(true); // Open menu
  const handleMenuClose = () => setMenuVisible(false); // Close menu

  // when LanguagePicker opens hide Header

  return (
    <header className={`${styles.header} ${styles[theme]} header`}>
      {/* Logo */}
      <Link to="/" className={styles.preTopLeft}>
        <span className={styles.logoText}>Co</span> {/* Logo text */}
        <div className={styles.logoDash}></div> {/* Small dash */}
        {page && <span className={styles.pageText}>{page}</span>}{" "}
        {/* Render only if page is provided */}
      </Link>

      {/* Hamburger menu button */}
      <div
        className={styles.hamburger}
        onClick={() => {
          handleMenuOpen();
        }}
        aria-expanded={false} // set false for now
        aria-label="Open menu"
      >
        <div></div>
        <div></div>
      </div>

      {/* Slide-out menu */}
      <div
        className={`${styles.popUpMenu} ${menuVisible ? styles.slideIn : ""}`} // Add slide-in animation when visible
      >
        {/* Close button */}
        <span className={styles.close} onClick={handleMenuClose}>
          Close
        </span>

        {/* Menu content */}
        <div className={styles.menuContent}>
          {[
            { name: "Jeff Koons", path: "/jeffkoons" },
            { name: "Rick Rubin", path: "/rickrubin" },
            { name: "Magnum", path: "/magnum" },
            { name: "Björk", path: "/bjork" },
          ].map((item, index) => (
            <div className={styles.menuItem} key={index}>
              <Link to={item.path} className={styles.menuLink}>
                <span className={`${styles.dim} ${styles.menuName}`}>
                  {item.name}
                </span>
                <div className={styles.menuDivSS}>
                  <span>Co</span>
                  <div className={styles.dashMenu}></div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
