import React from 'react';


export default function Card({tags}) {
    return (
  
        <div className='tags'>
                {/* <h1 className='tags__title'>{title}</h1>
                <h2 className='tags__subtitle'>{location}</h2>
               <div className='tags__container'> */}
                 <span className='tags__button'>{tags}</span>
                      
                {/* </div> */}
         </div>
                   
    
       
    );
  } 

// const Tags = (props) => {
//     return (
//         <div className='tags'>
//             <h1 className='tags__title'>{props.title}</h1>
//             <h2 className='tags__subtitle'>{props.location}</h2>
//               <div className='tags__container'>
//               <span className='tags__button'>{props.tags}</span>
              
//               </div>
//         </div>
//     );
// };

// export default Tags;