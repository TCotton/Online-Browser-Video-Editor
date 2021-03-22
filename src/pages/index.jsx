import React from "react";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO/SEO";
import {Helmet} from "react-helmet";

function Index() {
    return (
        <>
            <SEO />
            <Layout />
        </>
    );
}

export default Index;
