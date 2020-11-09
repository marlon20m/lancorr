import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';




function DemoCarousel() {
        return (

            <Carousel autoPlay={true}
            showArrows={false}
            infiniteLoop={true}
            interval={4000}
            stopOnHover={false}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}>
                
                <div>
                <section class="hero carousel-inicio is-medium has-bg-img"> 
                <div class="hero-body"> 
                    <div class="container has-text-left"> 
                    <br />
                    <h1 class="title has-text-white inicio-hero-one has-text-left is-size-2 is-uppercase">
                Produtos e Serviços Para <br /> Transformação de Plásticos
                </h1>
                    <br />
                    <br />
                    </div> 
                </div> 
                </section>
                </div>
            <div>
              <section class="hero inicial-hero-homepage is-medium has-bg-img"> 
                <div class="hero-body"> 
                 <div class="container has-text-left"> 
                    <br />
                      <h1 class="title has-text-white inicio-hero-one has-text-left is-size-2 is-uppercase">
                        Produtos e Serviços Para <br /> Transformação de Plásticos
                      </h1>
                        <br />
                       <br />
                      </div> 
                    </div> 
                  </section>
                </div>
                
                
                <div>
                    <img src="" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }

    export default DemoCarousel;