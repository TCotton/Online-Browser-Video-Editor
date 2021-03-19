import React from "react";
import {Helmet} from "react-helmet";
import config from "../../data/SiteConfig";
import Interface from '../components/new/Interface';
import "../css/index.scss";
import VideoSettings from "../components/new/PlayerComponents/VideoSettings";
import ErrorBoundary from "../components/ErrorBoundary/Error";
import TimeDisplay from "../components/new/PlayerComponents/TimeDisplay";
import DurationDisplay from "../components/new/PlayerComponents/DurationDisplay";
import ChannelDisplay from "../components/new/PlayerComponents/ChannelDisplay";
import {TimeLines} from "../components/new/TimelineDisplay/TimeLines";

const MainLayout = () => {
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
                            <div className="filelists">

                                <section className="file-row">

                                    <div className="column-1">
                                        <img src={`./file.svg`} alt={`file`} />
                                    </div>
                                    <div className="column-2">
                                        File Name
                                    </div>
                                    <div className="column-3">
                                        File size
                                    </div>
                                </section>

                            </div>
                        </div>
                        <div className="column-two">
                            <div className="viewer">
                                <ErrorBoundary>
                                    <VideoSettings />
                                </ErrorBoundary>
                            </div>
                        </div>
                        <div className="column-three">
                            <div className="levels">
                                <ErrorBoundary>
                                    <ChannelDisplay />
                                </ErrorBoundary>
                            </div>
                        </div>
                    </section>
                    <section className="middle">
                        <div className="column-one">
                            <div className="time">
                                <div className="admin-icon">
                                    <img src={"./admin.svg"} alt="admin" className="admin"/>
                                    <ErrorBoundary>
                                        <TimeDisplay />&nbsp;&nbsp;<span className='break'>|</span>&nbsp;&nbsp;<DurationDisplay />
                                    </ErrorBoundary>
                                </div>
                            </div>
                        </div>
                        <div className="column-two">
                            <Interface/>
                        </div>
                    </section>
                    <TimeLines />
                </article>
            </main>
        </div>
    );
}

export default MainLayout;