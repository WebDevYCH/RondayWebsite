import Head from "next/head";

import About from "../components/About/About";
import Features from "../components/Features/Features";
import Header from "../components/Header/Header";
import Reviews from "../components/Reviews/Reviews";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ronday</title>
        {/* Icons */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        {/* End Icons */}
        <meta
          name="description"
          content="A new kind of connection and collaboration platform"
        />

        <meta property="og:title" content="Ronday" />
        <meta
          property="og:description"
          content="A new kind of connection and collaboration platform"
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://www.rondayapp.com" />

        <meta property="twitter:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Getronday" />
      </Head>
      <main>
        {/* Header */}
        <Header />
        {/* End Header */}

        {/* Reviews */}
        <Reviews />
        {/* End Reviews */}

        {/* What's unique about ronday */}
        <About />
        {/* End What's unique about ronday */}

        {/* Features */}
        <Features />
        {/* End Features */}
      </main>
    </div>
  );
}
