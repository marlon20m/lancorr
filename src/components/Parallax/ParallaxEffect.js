import React from "react";
import { Parallax } from 'react-parallax';
 
function ParallaxEffect() {

    return (
        <>
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage="https://i.ibb.co/cXGt9xW/jj-ying-7-JX0-bfiux-Q-unsplash-4.jpg"
        bgImageAlt="the cat"
        strength={100}
      >
          Put some text content here
      or even an empty div with fixed dimensions
      to have a height for the parallax.
      <div style={{ height:"550px" }} />
    </Parallax>
     <Parallax
     blur={{ min: -15, max: 15 }}
     bgImage="https://i.ibb.co/h1cHZ0s/louis-reed-Je-Ink-Kl-I2-Po-unsplash.jpg"
     bgImageSize={{height: '400px', maxWidth: '75px', opacity: '.5'}}
     bgImageAlt="the dog"
     strength={100}
   >
     Blur transition from min to max
     <div style={{ height: '700px' }} />
   </Parallax>
   <Parallax
        blur={1}
        bgImage="https://i.ibb.co/cXGt9xW/jj-ying-7-JX0-bfiux-Q-unsplash-4.jpg"
        bgImageAlt="the cat"
        strength={100}
      >
          Put some text content here
      or even an empty div with fixed dimensions
      to have a height for the parallax.
      <div style={{ height:"600px" }} />
    </Parallax>
</>
        )

    }

export default ParallaxEffect;