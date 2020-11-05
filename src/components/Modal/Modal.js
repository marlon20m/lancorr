import React from "react";
import "react-bulma-components/lib/components/navbar";

function Modal() {
        
        return(
          <div>
          <section className="hero is-info is-small">
            <div className="hero-body">
              <div className="container has-text-centered">
                <p className="title">
                  Modal Cards
                </p>
                <p className="subtitle">
                  Subtitle
                </p>
              </div>
            </div>
          </section>
          <div className="box cta">
            <p className="has-text-centered">
              <span className="tag is-primary">New</span> Here we have modal cards. When you click on them they will open functional modal examples.
            </p>
          </div>
          <section className="container">
            <div className="columns features">
              <div className="column is-4">
                <div className="card is-shady">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="https://source.unsplash.com/RWnpyGtY1aU" alt="Placeholder image" className="modal-button" data-target="modal-image2" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h4>Click on image above</h4>
                      <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                      <span className="button is-link modal-button" data-target="modal-image2">Image modal</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-4">
                <div className="card is-shady">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="https://source.unsplash.com/6Ticnhs1AG0" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h4>Tempor orci dapibus faber in.</h4>
                      <p>Ut venenatis tellus in metus vulputate. Amet consectetur adipiscing elit pellentesque. Sed arcu non odio euismod lacinia at quis risus. Faucibus turpis in eu mi bibendum neque egestas cmonsu songue. Phasellus vestibulum lorem
                        sed risus.</p>
                      <span className="button is-link modal-button" data-target="modal-card">Modal Card</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-4 modal-button" data-target="modal-image">
                <div className="card is-shady">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="https://res.cloudinary.com/ameo/image/upload/v1568711475/pexels-photo-1302883_fjje0f.jpg" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h4>Click anywhere on card</h4>
                      <p>Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut placerat orci nulla pellentesque dignissim enim. Libero id faucibus nisl tincidunt eget nullam. Commodo viverra maecenas accumsan lacus vel facilisis.</p>
                      <span className="button is-link modal-button" data-target="modal-image">Image modal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns features">
              <div className="column is-4 modal-button" data-target="modal-card">
                <div className="card is-shady">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="https://res.cloudinary.com/ameo/image/upload/v1568711475/pexels-photo-1302883_fjje0f.jpg" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h4>Click anywhere on card to <br />expand into modal card</h4>
                      <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                      <span className="button is-link modal-button">Modal card</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-4">
                <div className="card is-shady">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="https://source.unsplash.com/hLyd1LukQ7E" alt="butterfly image" className="modal-button" data-target="modal-image4" />
                    </figure>
                  </div>
                  <div className="card-content  modal-button" data-target="modal-card2">
                    <div className="content">
                      <h4>Click anywhere on card to <br />expand into modal card - header image expands into bigger image</h4>
                      <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis.</p>
                      <span className="button is-link modal-button">Modal card</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer>
            <section className="section">
              <div className="container">
                <div className="columns is-multiline">
                  <div className="column is-one-third">
                    <article className="notification media has-background-white">
                      <figure className="media-left">
                        <span className="icon">
                          <i className="has-text-warning fa fa-columns fa-lg" />
                        </span>
                      </figure>
                      <div className="media-content">
                        <div className="content">
                          <h1 className="title is-size-4">Columns</h1>
                          <p className="is-size-5 subtitle">
                            The power of <strong>Flexbox</strong> in a simple interface
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="column is-one-third">
                    <article className="notification has-background-white media">
                      <figure className="media-left">
                        <span className="icon has-text-info">
                          <i className="fa fa-lg fa-wpforms" />
                        </span>
                      </figure>
                      <div className="media-content">
                        <div className="content">
                          <h1 className="title is-size-4">Form</h1>
                          <p className="is-size-5 subtitle">
                            The indispensable <strong>form controls</strong>, designed for maximum clarity
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="column is-one-third">
                    <article className="notification has-background-white media">
                      <figure className="media-left">
                        <span className="icon has-text-danger">
                          <i className="fa fa-lg fa-cubes" />
                        </span>
                      </figure>
                      <div className="media-content">
                        <div className="content">
                          <h1 className="title is-size-4">Components</h1>
                          <p className="is-size-5 subtitle">
                            Advanced multi-part components with lots of possibilities
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="column is-one-third">
                    <article className="notification has-background-white media">
                      <figure className="media-left">
                        <span className="icon has-text-grey">
                          <i className="fa fa-lg fa-cogs" />
                        </span>
                      </figure>
                      <div className="media-content">
                        <div className="content">
                          <h1 className="title is-size-4">Modifiers</h1>
                          <p className="is-size-5 subtitle">
                            An <strong>easy-to-read</strong> naming system designed for humans
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="column is-one-third">
                    <article className="notification has-background-white media">
                      <figure className="media-left">
                        <span className="icon has-text-primary">
                          <i className="fa fa-lg fa-superpowers" />
                        </span>
                      </figure>
                      <div className="media-content">
                        <div className="content">
                          <h1 className="title is-size-4">Layout</h1>
                          <p className="is-size-5 subtitle">
                            Design the <strong>structure</strong> of your webpage with these CSS classes
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="column is-one-third">
                    <article className="notification has-background-white media">
                      <figure className="media-left">
                        <span className="icon has-text-danger">
                          <i className="fa fa-lg fa-cube" />
                        </span>
                      </figure>
                      <div className="media-content">
                        <div className="content">
                          <h1 className="title is-size-4">Elements</h1>
                          <p className="is-size-5 subtitle">
                            Essential interface elements that only require a <strong>single CSS class</strong>
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </section>
            <div className="content has-text-centered">
              <div className="control level-item">
                <a href="https://github.com/BulmaTemplates/bulma-templates">
                  <div className="tags has-addons">
                    <span className="tag is-dark">Bulma Templates</span>
                    <span className="tag is-info">MIT license</span>
                  </div>
                </a>
              </div>
            </div>
          </footer>
          </div>

        )
}

export default Modal;