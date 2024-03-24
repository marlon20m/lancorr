import React from "react";
import "react-bulma-components/lib/components/navbar";
import EcoVentures from "../../pages/Representacoes/EcoVentures";

function EcoVenturesCard() {

  return (
    <>
      <br />
      <br />

      <section className="blog-posts" id={"section1"}>
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="columns featured-post is-multiline">
                <div className="column is-12 post">
                  <article className="columns featured">

                    <div className="column is-5 featured-content va">
                      <div>
                        <h3 className="heading post-category">Company Name</h3>
                        <h1 className="title post-title has-text-link">Beplast</h1>
                        <p className="post-excerpt">This template is based off of the official default blog template created by the fine folks over at <a href="https://ghost.io">Ghost</a>. If you are looking for a fully featured blog platform, I highly recommend checking them out!</p>
                        <br />
                        <a href="http://beplast.com.br" target="_blank" className="button is-primary">Website</a>
                      </div>
                    </div>
                    <div className="column is-7 post-img ">
                      <img src="https://i.ibb.co/myr83xp/Screen-Shot-2020-11-08-at-8-05-24-PM.png" alt="Beplast" />
                    </div>
                  </article>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </section>
      <section className="blog-posts color-container" id={"section2"}>
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="columns featured-post is-multiline">
                <div className="column is-12 post">
                  <article className="columns featured">

                    <div className="column is-5 featured-content va">
                      <div>
                        <h3 className="heading post-category">Company Name</h3>
                        <h1 className="title post-title has-text-link">Eco Ventures Bioplastics</h1>
                        <p className="post-excerpt">This template is based off of the official default blog template created by the fine folks over at <a href="https://ghost.io">Ghost</a>. If you are looking for a fully featured blog platform, I highly recommend checking them out!</p>
                        <br />
                        <a href="http://www.ecoventuresbrasil.com" target="_blank" className="button is-primary">Website</a>
                      </div>
                    </div>
                    <div className="column is-7 post-img ">
                      <img src="https://i.ibb.co/fpbdWM4/Screen-Shot-2020-11-08-at-8-57-25-PM.png" alt="Eco Ventures Bioplastics" />
                    </div>
                  </article>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </section>
      <section className="blog-posts" id={"section4"}>
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="columns featured-post is-multiline">
                <div className="column is-12 post">
                  <article className="columns featured">

                    <div className="column is-5 featured-content va">
                      <div>
                        <h3 className="heading post-category">Company Name</h3>
                        <h1 className="title post-title has-text-link">Tritec Resinas</h1>
                        <p className="post-excerpt">This template is based off of the official default blog template created by the fine folks over at <a href="https://ghost.io">Ghost</a>. If you are looking for a fully featured blog platform, I highly recommend checking them out!</p>
                        <br />

                      </div>
                    </div>

                  </article>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </section>



    </>

  )
}

export default EcoVenturesCard;