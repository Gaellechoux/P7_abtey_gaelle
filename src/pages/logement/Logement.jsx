import React from 'react';
import { useParams } from "react-router-dom";
import Header from '../../components/Header/header';
import Carrousel from "../../components/carrousel/Carrousel";
import Tag from '../../components/tag/Tags';
import Host from '../../components/host/Host';
import Rating from '../../components/rating/Rating';
import Informations from '../../components/informations/Informations';
import Footer from '../../components/footer/Footer';
import LogementData from '../../data/logements.json';

const Logement = () => {
  const { id } = useParams();
  const ficheLogement = LogementData.find((logements) => logements.id === id);

    return (
        <div className='logement'>
          <Header />
          <main>
          <Carrousel slides={ficheLogement.pictures} />
          <section>

          <div className='tags__container'>
                <h1 className='tags__title'>{ficheLogement.title}</h1>
                <h2 className='tags__subtitle'>{ficheLogement.location}</h2>  
             </div>              
          <div className='tags__infos'>

							{ficheLogement.tags.map((tag) => (
								<Tag key={ficheLogement.id} tag={tag} />
							))}
          

          <div className="tags-container">
							{ficheLogement.tags.map((tag) => (
								<Tag key={tag} tag={tag} />
							))}
						</div>
         </div>
          <div className="rate-host-container">
						<div className="host-container"> 
              <Host 
                 name={ficheLogement.host.name}
                 picture={ficheLogement.host.picture}
              />
						</div>
            <div className="rate-container">
							<Rating 
                 rate={ficheLogement.rating}
              />
						</div>
					</div>

          </section>
          <div className='informations__about'>
          
            <Informations 
                title="Description"
                content={ficheLogement.description}
                />

           <Informations 
                title="Équipements" 
                content={ficheLogement.equipements} 
                />
                                         
        </div>  
        </main>  
          <Footer />  
        </div>
    );
};

export default Logement;