import React from 'react'
import img from  '../../assets/IMG.png';

function Banner() {
	return( 
     <section className='banner'>
      <img className='banner__img' src={img} alt='Bannière' />
        <div className='banner__shadow'></div>
        <div className='banner__text'>
         Chez vous, partout et ailleurs
        </div>
     </section>
     );
    }

export default Banner