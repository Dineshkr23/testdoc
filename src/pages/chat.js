import React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function ChatHelpCenter() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div>
        <h1>Chat Help Center</h1>
        <p>
          Welcome to the Chatbot Help Center. Find all the relevant Chat
          documentation below:
        </p>
        <ul>
          <li>
            <Link to="/chat/docs/introduction">Introduction to chat</Link>
          </li>
          <li>
            <Link to="/chat/docs/setup">Getting Started with chat</Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
