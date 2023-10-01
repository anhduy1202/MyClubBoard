import "@/styles/globals.css";
import { Poppins, Roboto } from "next/font/google";

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
  return (
    <main className={`${poppins.variable} bg-bg_white text-black`}>
      <Component {...pageProps} />
    </main>
  );
}
