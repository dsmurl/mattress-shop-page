import styled from "styled-components";
import NextHead from "next/head";
import Header from "./header";
import Footer from "./footer";

const BodyContent = styled.div`
  position: "relative";
  padding: 20px 0;
  margin-bottom: 62px;
`;

export default function BaseLayout({ children, title = "Mattress Shop Page" }) {
  return (
    <div>
      <NextHead>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@200;300;400;600&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Questrial&family=Roboto+Mono:wght@200;300;400&display=swap"
          rel="stylesheet"
        />
      </NextHead>
      <Header />
      <BodyContent>{children}</BodyContent>
      <Footer />
    </div>
  );
}
