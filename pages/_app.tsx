import type { AppProps } from "next/app";
import { useEffect } from "react";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList.add(
      ..."bg-white dark:bg-gray-800 dark:text-gray-300 min-h-screen".split(" ")
    );
  });
  return <Component {...pageProps} />;
}

export default MyApp;
