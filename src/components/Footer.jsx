import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <UserLinks config={config} labeled />
            <div className="notice-container">
                <h4>{copyright}</h4>

                <Link to={url}>
                    <button type="button">Subscribe</button>
                </Link>
                <h4>
                    Based on{" "}
                    <a href="https://github.com/Vagr9K/gatsby-advanced-starter">
                        Gatsby Advanced Starter
                    </a>
                    .
                </h4>
            </div>
        </footer>
    );
}

export default Footer;
