import React from "react";
import "react-bulma-components/lib/components/navbar";

function Modal() {
        
        return(
          <>
          <section className="container">
            <div className="columns">
              <div className="column is-4" data-target="modal-card">
                <div className="card is-shady">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="https://i.ibb.co/W6N2FJn/mohan-murugesan-a-PUi7w4k-Kb-I-unsplash.jpg" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h4>Aditivos Funcionais</h4>
                      <p>Purus semper eget duis at tellus at urna condimentum mattis. </p>
                      
                    </div>
                  </div>
                </div>
              </div><div className="column is-4" data-target="modal-card">
                <div className="card is-shady">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="https://i.ibb.co/wspjCM0/Screen-Shot-2020-11-06-at-1-06-13-PM.png" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h4>Aditivos Biodegradáveis</h4>
                      <p>Purus semper eget duis at tellus at urna condimentum mattis. </p>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-4 " data-target="modal-card">
                <div className="card is-shady">
                  <div className="card-image">
                    <figure className="image is-4by3 world-pic">
                      <img src="https://i.ibb.co/rHYhyq7/Screen-Shot-2020-11-06-at-1-16-55-PM.png" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h4>Compostos Termoplásticos</h4>
                      <p>Purus semper eget duis at tellus at urna condimentum mattis. </p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="container">
            <div className="columns">
              <div className="column is-4" data-target="modal-card">
                <div className="card is-shady">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="https://i.ibb.co/7SBL89W/shutterstock-223956427.jpg" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h4>Masterbatches</h4>
                      <p>Purus semper eget duis at tellus at urna condimentum mattis. </p>
                      
                    </div>
                  </div>
                </div>
              </div><div className="column is-4" data-target="modal-card">
                <div className="card is-shady">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="https://i.ibb.co/qBVmvxD/Screen-Shot-2020-11-06-at-12-29-14-PM.png" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h4>Resinas Petroquímicas</h4>
                      <p>Purus semper eget duis at tellus at urna condimentum mattis. </p>
                      
                    </div>
                  </div>
                </div>
              </div>            
            </div>
          </section>
          
          </>
         
        )
}

export default Modal;