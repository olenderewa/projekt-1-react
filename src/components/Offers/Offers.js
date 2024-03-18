import { offers } from "../../data/offers";
import "./Offers.css";

function Offers() {
  return (
    <section className="offers" id="offers">
      <div className="container">
        <h2 className="subtitle-offers">Czym zajmuje się nasza firma?</h2>
        <div className="offers-container">
          {offers.map((offer, index) => (
            <div className="box" key={index}>
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
