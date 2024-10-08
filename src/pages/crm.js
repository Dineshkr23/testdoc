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
        <h1>CRM Help Center</h1>
        <p>
          Welcome to the CRM Help Center. Find all the relevant CRM
          documentation below:
        </p>
        <ul>
          <li>
            <Link to="/crm/docs/introduction">Introduction to CRM</Link>
          </li>
          <li>
            <Link to="/crm/docs/setup">Getting Started with CRM</Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
