import React from "react";
import Interface from '../components/Interface';
import "../css/index.scss";
import VideoSettings from "../components/PlayerComponents/VideoSettings";
import ErrorBoundary from "../components/ErrorBoundary/Error";
import TimeDisplay from "../components/PlayerDisplay/TimeDisplay";
import DurationDisplay from "../components/PlayerDisplay/DurationDisplay";
import ChannelDisplay from "../components/PlayerComponents/ChannelDisplay";
import {TimeLines} from "../components/TimelineDisplay/TimeLines";
import {FileListComponent} from "../components/FileListDisplay/FileListComponent";
import {MessageComponent} from "../components/LoadDemoComponents/MessageComponent";

const MainLayout = () => {
    return (
        <div className="wrapper" data-testid="wrapper">
            <main>
                <header>
                    <img src={"./had.svg"} alt=""/>
                </header>
                <article>
                    <section className="top">
                        <div className="column-one">
                            <ErrorBoundary>
                                <FileListComponent/>
                            </ErrorBoundary>
                            <MessageComponent/>
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