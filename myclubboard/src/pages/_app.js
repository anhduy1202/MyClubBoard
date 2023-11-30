import {
  UniversityContext,
  UniversityDispatchContext,
} from "@/components/Context/UniversityContext";
import "@/styles/globals.css";
import { Poppins, Roboto } from "next/font/google";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  subsets: ["latin-ext"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  subsets: ["latin-ext"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function App({ Component, pageProps }) {
  const initialUniversity = {
    name: "",
    logo: "",
  };
  function universityReducer(uni, action) {
    switch (action.type) {
      case "update": {
        return {
          name: action.name,
          logo: action.logo,
        };
      }
      default: {
        throw Error("Unknown action: " + action.type);
      }
    }
  }
  const [universities, dispatch] = React.useReducer(
    universityReducer,
    initialUniversity,
  );

  return (
    <ClerkProvider {...pageProps}>
      <main className={`${poppins.variable} bg-bg_white text-black`}>
        <UniversityContext.Provider value={universities}>
          <UniversityDispatchContext.Provider value={dispatch}>
            <Component {...pageProps} />
          </UniversityDispatchContext.Provider>
        </UniversityContext.Provider>
      </main>
    </ClerkProvider>
  );
}
