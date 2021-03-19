import React from "react";
import {Helmet} from "react-helmet";
import config from "../../data/SiteConfig";
import Interface from '../components/new/Interface';
import "../css/index.scss";
import VideoSettings from "../components/new/PlayerComponents/VideoSettings";
import ErrorBoundary from "../components/ErrorBoundary/Error";
import TimeDisplay from "../components/new/PlayerDisplay/TimeDisplay";
import DurationDisplay from "../components/new/PlayerDisplay/DurationDisplay";
import ChannelDisplay from "../components/new/PlayerComponents/ChannelDisplay";
import {TimeLines} from "../components/new/TimelineDisplay/TimeLines";
import {FileListComponent} from "../components/new/FileListDisplay/FileListComponent";

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
                            <ErrorBoundary>
                                <FileListComponent />
                            </ErrorBoundary>
                            <section className={`message`}>
                                <p>
                                    Upload and covert video files for use on social media.
                                </p>
                                <p>This is a lockdown project by <a href="">Andrew Walpole</a>, built using D3.js,
                                    the Web Audio API, IndexedDB and Web Assembly (WASM) on a Gatsby/React/Redux base. The app
                                    comes pre-loaded with a video clip from It's Grim Up North by
                                    The Justified Ancients of Mu Mu. <a href="">This is an alpha release</a>.
                                </p>
                            </section>
                        </div>
                        <div className="column-two">
                            <div className="viewer">
                                <ErrorBoundary>
                                    <VideoSettings/>
                                </ErrorBoundary>
                            </div>
                        </div>
                        <div className="column-three">
                            <div className="levels">
                                <ErrorBoundary>
                                    <ChannelDisplay/>
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
                                        <TimeDisplay/>&nbsp;&nbsp;<span className='break'>|</span>&nbsp;&nbsp;
                                        <DurationDisplay/>
                                    </ErrorBoundary>
                                </div>
                            </div>
                        </div>
                        <div className="column-two">
                            <Interface/>
                        </div>
                    </section>
                    <TimeLines/>
                </article>
            </main>
        </div>
    );
}

export default MainLayout;