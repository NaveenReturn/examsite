import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Instagram from './insta';

export default function Carousels(){

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


    return(
        <>
          <h3>WELCOME TO CAROUSEL</h3>
             <div className='face'>
          <Carousel responsive={responsive}>
               <Instagram/> 
 
         </Carousel>;
             </div>
        </>                           
    )
}