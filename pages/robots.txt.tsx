import type { GetServerSideProps } from "next";

const RobotsTxt = () => null;

const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "cohere-ai",
  "Applebot-Extended",
  "Amazonbot",
  "meta-externalagent",
  "meta-externalfetcher",
  "YouBot",
  "Diffbot",
  "CCBot",
  "Bytespider",
];

const buildRobots = () => {
  const aiBlocks = AI_CRAWLERS.map(
    (ua) => `User-agent: ${ua}\nAllow: /\n`
  ).join("\n");

  return `
User-agent: *
Allow: /

${aiBlocks}
Sitemap: https://www.sierraskyeview.com/sitemap.xml
`.trim();
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "text/plain");
  res.write(buildRobots());
  res.end();

  return {
    props: {},
  };
};

export default RobotsTxt;
