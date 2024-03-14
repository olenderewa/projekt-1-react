import { offers } from "../../data/offers";
import "./Offers.css";

function Offers() {
  return (
    <section className="offers" id="offers">
      <div className="container">
        <h2 className="subtitle-offers">Czym zajmuje się nasza firma?</h2>
        <div className="offers-container">
          {offers.map((offer) => (
            <div className="box">
              <p className={`${offer.isNew ? "new-offer" : null}`}>
                {offer.name}
              </p>
              {offer.isNew && <div className="circle"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Offers;
