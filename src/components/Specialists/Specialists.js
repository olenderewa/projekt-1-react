import "./Specialists.css";

function Specialists() {
  return (
    <section className="specialists" id="specialists">
      <div className="container">
        <h2 className="subtitle-specialists">Nasi specjaliści</h2>
        <div className="specialist">
          <div className="specialist-img1"></div>
          <div className="specialist-info-wrapper">
            <p className="name">Noa Smith [IT]</p>
            <p className="lists">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
              massa et lacus egestas cursus a non magna. Fusce scelerisque
              blandit nunc, id malesuada ex lobortis a. Integer felis nisi,
              tempor elementum lorem in, varius pellentesque ligula. Duis
              efficitur lacinia enim, non tincidunt libero ultrices in.
            </p>
          </div>
        </div>
        <div className="specialist">
          <div className="specialist-img2"></div>
          <div className="specialist-info-wrapper">
            <p className="name">John Nowak [Marketing]</p>
            <p className="lists">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
              massa et lacus egestas cursus a non magna. Fusce scelerisque
              blandit nunc, id malesuada ex lobortis a. Integer felis nisi,
              tempor elementum lorem in, varius pellentesque ligula. Duis
              efficitur lacinia enim, non tincidunt libero ultrices in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specialists;
