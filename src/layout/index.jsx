import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Helmet} from "react-helmet";
import config from "../../data/SiteConfig";
import Interface from '../components/new/Interface';
import "../css/index.scss";
import {increment, selectCount} from '../components/new/slices/counterSlice';
import VideoSettings from "../components/new/PlayerComponents/VideoSettings";
import ErrorBoundary from "../components/ErrorBoundary/Error";
import TimeDisplay from "../components/new/PlayerComponents/TimeDisplay";
import DurationDisplay from "../components/new/PlayerComponents/DurationDisplay";
import ChannelDisplay from "../components/new/PlayerComponents/ChannelDisplay";

const Counter = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
    )
}

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
                    <Counter/>
                </header>
                <article>
                    <section className="top">
                        <div className="column-one">
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
                                        <TimeDisplay />  |  <DurationDisplay />
                                    </ErrorBoundary>
                                </div>
                            </div>
                        </div>
                        <div className="column-two">
                            <Interface/>
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

export default MainLayout;