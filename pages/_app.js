import "../styles/globals.css";
import { Windmill } from "@windmill/react-ui";
import myTheme from "../components/StyleChanges/myTheme";
import { AuthProvider } from "../components/data/authProvider";
import Head from "next/head";
import { GoogleFonts } from "next-google-fonts";
import React from 'react';
import ReactDOM from 'react-dom';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" />
      <Head>
        <title>GymRoutines</title>
        <meta name="Description" content="This is a home page of my website!" />
        <meta name="title" property="og:title" content="GymRoutines" />
        <meta property="og:type" content="Website" />
        <meta name="description" property="og:description" content="Workout Tracking App" />
        <meta name="author" content="Rohan Wadhwa" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AuthProvider>
        <Windmill usePreferences theme={myTheme}>
          <Component {...pageProps} />
        </Windmill>
      </AuthProvider>
    </React.Fragment>
  );
}

export default MyApp;
