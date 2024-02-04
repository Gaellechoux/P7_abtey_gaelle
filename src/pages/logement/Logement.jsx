import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/header";
import Carrousel from "../../components/carrousel/Carrousel";
import Tag from "../../components/tag/Tags";
import Host from "../../components/host/Host";
import Rating from "../../components/rating/Rating";
import Informations from "../../components/informations/Informations";
import Footer from "../../components/footer/Footer";
import LogementData from "../../data/logements.json";
import ErrorPage from "../../components/error/ErrorPage";

const Logement = () => {
  const { id } = useParams();
  const ficheLogement = LogementData.find((logements) => logements.id === id);

  if (ficheLogement === undefined) {
    return (
      <>
        <Header />
        <ErrorPage />
        <Footer />
      </>
    );
  } else {
    return (
      <div className="logement">
        <Header />
        <main>
          <Carrousel slides={ficheLogement.pictures} />
          {/* <div className= "carrousel">
        {ficheLogement.pictures.map((pic) => <Carrousel key={ficheLogement.id} pic={pic} /> )}
       </div> */}

          <section>
            <div className="tags-container">
              <h2 className="tags-container__title">{ficheLogement.title}</h2>
              <h3 className="tags-container__subtitle">
                {ficheLogement.location}
              </h3>
              <div className="tags-container__infos">
                {ficheLogement.tags.map((tag, idx) => (
                  <Tag key={idx} tag={tag} />
                ))}
              </div>
            </div>

            <div className="rate-host-container">
              <Host
                name={ficheLogement.host.name}
                picture={ficheLogement.host.picture}
              />
              <div className="rate-container">
                <Rating score={ficheLogement.rating} />
              </div>
            </div>
          </section>
          <div className="informations__about">
            <Informations
              title="Description"
              content={ficheLogement.description}
            />

            <Informations
              title="Équipements"
              isHTML={true}
              content={
                <ul>
                  {ficheLogement.equipments.map((item, key) => (
                    <li key={key}>{item}</li>
                  ))}
                </ul>
              }
            />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
};

export default Logement;
