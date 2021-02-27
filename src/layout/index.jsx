import React from "react";
import {Helmet} from "react-helmet";
import config from "../../data/SiteConfig";
import Interface from '../components/new/Interface';
import "../css/index.scss";
//{children}
export default function MainLayout() {
    return (
        <div className="wrapper">
            <Helmet>
                <meta name="description" content={config.siteDescription}/>
                <html lang="en"/>
            </Helmet>
            <main>
                <header>
                    <img src={"./had.svg"} alt=""/>
                </header>
                <article>
                    <section className="top">
                        <div className="column-one">
                        </div>
                        <div className="column-two">
                            <div className="viewer">
                            </div>
                        </div>
                        <div className="column-three">
                            <div className="levels"></div>
                        </div>
                    </section>
                    <section className="middle">
                        <div className="column-one">
                            <div className="time">
                                <div className="admin-icon">
                                    <img src={"./admin.svg"} alt="admin" className="admin"/>
                                    <time>00:00:10:00</time>
                                </div>
                            </div>
                        </div>
                        <div className="column-two">
                            <Interface />
                        </div>
                    </section>
                    <section className="bottom">
                        <div className="row-one">
                            <div className="controls">
                                <button>
                                    <img className="eye" src={"./eye.svg"} alt=""/>
                                </button>
                            </div>
                            <div className="timeline">
                            </div>
                        </div>
                        <div className="row-two">
                            <div className="controls">
                                <button>
                                    <img className="eye" src={"./eye.svg"} alt=""/>
                                </button>
                            </div>
                            <div className="timeline">
                            </div>
                        </div>
                    </section>
                </article>
            </main>
        </div>
    );
}
