import React from "react";
import { Parallax, Background } from 'react-parallax';
 
function ParallaxEffect() {

    return (
        <>
        <Parallax
        
        bgImage="https://i.ibb.co/cXGt9xW/jj-ying-7-JX0-bfiux-Q-unsplash-4.jpg"
        bgImageAlt="the cat"
        strength={50}
      >
          Put some text content here
      or even an empty div with fixed dimensions
      to have a height for the parallax.
      <div style={{ height:"550px" }} />
      </Parallax>
      <Parallax
        bgImage="https://i.ibb.co/ysF6xF1/shutterstock-546792490.jpg"
        renderLayer={percentage => (
            <div
                style={{
                    position: 'absolute',
                    background: `rgba(255, 125, 0, ${percentage * 700})`,
                    left: '50%',
                    top: '50%',
                    width: percentage * 500,
                    height: percentage * 2500,
                }}
                />
            )}
        >
            <p>... Content</p>
        </Parallax>
            </>
        )

    }

export default ParallaxEffect;