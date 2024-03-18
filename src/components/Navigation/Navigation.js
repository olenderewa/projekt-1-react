import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <div className="container">
        <a href="/#" className="company-name">
          moja firma
        </a>
        <ul className="links-list">
          <li>
            <a href="#specialists">o nas</a>
          </li>
          <li>
            <a href="#offers" className="offer">
              oferta
            </a>
          </li>
          <li>
            <a href="/#" className="disable">
              kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
