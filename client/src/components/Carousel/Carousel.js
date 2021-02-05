import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';




function DemoCarousel() {
  return (

    <Carousel autoPlay={true}
      showArrows={true}
      infiniteLoop={true}
      interval={4500}
      stopOnHover={false}
      swipeable={true}
      showThumbs={false}
      showStatus={false}
      showIndicators={true}
      transitionTime={650}
      emulateTouch={true}>

      <div>
        <section className="hero third-carousel-homepage is-medium has-bg-img">
          <div className="hero-body">
            <div className="container has-text-left inicio-hero-one">
              <br />
              <br />
              <br />
              <br />
              <br />
              <h2 className="title has-text-white has-text-left is-size-2 is-size-3-mobile is-uppercase">
                Produtos e Serviços Para <br /> Transformação de Plásticos
                </h2>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="hero carousel-inicio is-medium has-bg-img">
          <div className="hero-body">
            <div className="container has-text-left inicio-hero-one">
              <br />
              <br />
              <br />
              <br />
              <br />
              <h1 className="title has-text-white  has-text-left is-size-2 is-size-3-mobile is-uppercase">
                Produtos e Serviços Para <br /> Transformação de Plásticos
                      </h1>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </section>
      </div>

      <section className="hero inicial-hero-homepage is-medium has-bg-img">
        <div className="hero-body">
          <div className="container has-text-left inicio-hero-one">
            <br />
            <br />
            <br />
            <br />
            <br />            <h1 className="title has-text-white inicio-hero-one has-text-left is-size-2 is-size-3-mobile is-uppercase">
              Produtos e Serviços Para <br /> Transformação de Plásticos
                      </h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </section>
    </Carousel>
  );
}

export default DemoCarousel;