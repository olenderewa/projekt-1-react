import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="shadow">
        <div className="container">
          <h1 className="title">
            Nasza firma oferuje najwyższej jakości produkty.
          </h1>
          <h2 className="subtitle">Nie wierz nam na słowo - sprawdź</h2>
          <a href="#offers" className="offer-btn">
            oferta
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
