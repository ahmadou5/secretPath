import { Inter, Glegoo, Numans, Nunito_Sans, Neucha, Nunito, Neuton, Questrial } from "next/font/google";
import "./globals.css";
import { SecretContextProvider } from "@/context/context";
import { EthProvider } from "@/provider";

const inter = Inter({ subsets: ["latin"] });
const rock = Questrial({ subsets: ["latin"], weight: "400"} )

export const metadata = {
  title: "Secret Path",
  description: "The Secret path to Ethereum",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rock.className} bg-black`}>
        <SecretContextProvider>
          <EthProvider>
          {children}
          </EthProvider>
        </SecretContextProvider>
      </body>
    </html>
  );
}
