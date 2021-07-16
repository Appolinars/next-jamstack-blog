import Head from "next/head";
import Navbar from "./Navbar";
import Script from "next/script";

const Layout = ({ title = "Main page", children = [] }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <Script src="/netlifyIdentity.js" />
      </Head>

      <Navbar />

      <main className="container">{children}</main>
    </div>
  );
};

export default Layout;
