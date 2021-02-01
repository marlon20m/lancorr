import React from "react";
import "react-bulma-components/lib/components/navbar";

function ProductCards() {
        
        return(
          <>
          <br>
          </br>
          <br>
          </br>
          
          <section className="container">
            <div className="columns is-spaced ">
              <div className="column is-4" data-target="modal-card">
              <a href="/AditivosFuncionais" class="custom-card">
                <div className="card is-shady">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="https://i.ibb.co/W6N2FJn/mohan-murugesan-a-PUi7w4k-Kb-I-unsplash.jpg" alt="Aditivos Funcionais" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h4>Aditivos Funcionais</h4>
                      <p>Purus semper eget duis at tellus at urna condimentum mattis. </p>
                    </div>
                  </div>
                </div>
                </a>
              </div>

              <div className="column is-4" data-target="modal-card">
              <a href="/AditivosBiodegradaveis">
                <div className="card is-shady">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="https://i.ibb.co/n0TnmtS/Green-Soil.jpg" alt="Aditivos Biodegradáveis" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h4>Aditivos Biodegradáveis</h4>
                      <p>Purus semper eget duis at tellus at urna condimentum mattis. </p>
                    </div>
                  </div>
                </div>
               </a>
              </div>

              <div className="column is-4 " data-target="modal-card">
              <a href="/CompostosTermoplasticos">
                <div className="card is-shady">
                  <div className="card-image">
                    <figure className="image is-4by3 world-pic">
                      <img src="https://i.ibb.co/qMyV1T0/pvcpipes.jpg" alt="Compostos Termoplásticos" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h4>Compostos Termoplásticos</h4>
                      <p>Purus semper eget duis at tellus at urna condimentum mattis. </p>
                    </div>
                  </div>
                </div>
                </a>
              </div>
            </div>
          </section>
          <br>
          </br>
          <br>
          </br>
          <section className="container">
            <div className="columns">
              <div className="column is-4" data-target="modal-card">
              <a href="/Masterbatches">
                <div className="card is-shady">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="https://i.ibb.co/gvmqyqd/Inicio-Imagecropped.jpg" alt="Masterbatches" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h4>Masterbatches</h4>
                      <p>Purus semper eget duis at tellus at urna condimentum mattis. </p>
                    </div>
                  </div>
                </div>
                </a>
              </div>
              <div className="column is-4" data-target="modal-card">
              <a href="/ResinasPetroquimicas">
                <div className="card is-shady">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="https://i.ibb.co/8cF1xLw/White-Resin.jpg" alt="Resinas Petroquímicas" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h4>Resinas Petroquímicas</h4>
                      <p>Purus semper eget duis at tellus at urna condimentum mattis. </p>
                    </div>
                  </div>
                </div>
               </a>
              </div>
            </div>
          </section>
          <br />
          <br />
          
          </>
         
        )
}

export default ProductCards;