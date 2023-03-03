import StripeProvider from "@/stripecontext/context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <StripeProvider>
        <Component {...pageProps} />
      </StripeProvider>
    </>
  );
}
