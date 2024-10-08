import React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function CRMHelpCenter() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div>
        <h1>Whatsapp Business API Help Center</h1>
        <p>
          Welcome to the Whatsapp Business API Help Center. Find all the
          relevant Whatsapp Business API documentation below:
        </p>
        <ul>
          <li>
            <Link to="/whatsapp-business-api/docs/SUMMARY">
              Introduction to Whatsapp Business API
            </Link>
          </li>
          <li>
            <Link to="/whatsapp-business-api/docs/setup">
              Getting Started with Whatsapp Business API
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
