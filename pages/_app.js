import StripeProvider from "@/stripecontext/context";
import "@/styles/globals.css";
import ScrollObserver from "@/utils/scroll-osberver";
import SizeObserver from "@/utils/size-osberver";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SizeObserver>
        <ScrollObserver>
          <StripeProvider>
            <Component {...pageProps} />
          </StripeProvider>
        </ScrollObserver>
      </SizeObserver>
    </>
  );
}
