import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import StripeProvider from "@/stripecontext/context";
import "@/styles/globals.css";
import ScrollObserver from "@/utils/scroll-osberver";
import SizeObserver from "@/utils/size-osberver";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SizeObserver>
        <ScrollObserver>
          <StripeProvider>
            <ChakraProvider>
              <Navbar />
              <Component {...pageProps} />
              <Footer />
            </ChakraProvider>
          </StripeProvider>
        </ScrollObserver>
      </SizeObserver>
    </>
  );
}
