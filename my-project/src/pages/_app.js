import "../styles/globals.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-ral",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${raleway.variable} font-ral`}>
      <Component {...pageProps} />
    </main>
  );
}
