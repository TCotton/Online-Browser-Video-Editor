import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

function Index() {
    return (
        <Layout>
            <div className="index-container">
                <Helmet title={`About | ${config.siteTitle}`} />
            </div>
        </Layout>
    );
}

export default Index;
