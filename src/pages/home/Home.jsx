import React from "react";
import Banner from "../../components/banner/Banner";
import Logement from "../../data/logements.json";
import Card from "../../components/cards/Card";

const Home = () => {
  return (
    <>
      <main>
        <Banner />
        <div className="cardContainer">
          {/* Ici l’utilise la méthode map() pour effectuer le rendu dynamique de certains éléments  */}
          {Logement.map((logements) => (
            <Card
            // Les clés aident React à identifier quels éléments d'une liste ont changé, ont été ajoutés ou supprimés
              key={logements.id}
              log={logements.id}
              image={logements.cover}
              title={logements.title}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
