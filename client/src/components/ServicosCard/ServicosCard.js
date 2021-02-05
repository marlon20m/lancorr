import React from "react";
import "react-bulma-components/lib/components/navbar";

function ServicosCard() {

    return (
        <>
            <br />
            <br />
            <br />
            <section className="blog-posts" id={"section1"}>
                <div className="container">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="columns featured-post is-multiline">
                                <div className="column is-12 post">
                                    <article className="columns featured">

                                        <div className="column is-10 featured-content va">
                                            <div>
                                                {/* <h3 className="heading post-category">Company Name</h3> */}
                                                <h1 className="title post-title has-text-link">INDUSTRIALIZAÇÃO</h1>
                                                <p className="post-excerpt">Através dos parceiros estratégicos oferecemos serviços de industrialização sob encomenda, como: pigmentação; aditivação; modificação de
    polímeros; e extrusão de blendas.</p>
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
            <section className="blog-posts" id={"section2"}>
                <div className="container">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="columns featured-post is-multiline">
                                <div className="column is-12 post">
                                    <article className="columns featured">

                                        <div className="column is-10 featured-content va">
                                            <div>
                                                {/* <h3 className="heading post-category">Company Name</h3> */}
                                                <h1 className="title post-title has-text-link">DESENVOLVIMENTOS</h1>
                                                <p className="post-excerpt">Através de visitas técnicas de dimensionamento das necessidades dos clientes, desenvolve-se soluções personalizadas para cada projeto.</p>
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

export default ServicosCard;