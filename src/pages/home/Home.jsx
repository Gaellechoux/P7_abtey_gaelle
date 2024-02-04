import React from "react";
import Header from "../../components/Header/header";
import Banner from "../../components/banner/Banner";
import Logement from "../../data/logements.json";
import Card from "../../components/cards/Card";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
};

export default Home;
