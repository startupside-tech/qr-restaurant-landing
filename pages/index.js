import Image from "next/image";
import { Inter } from "next/font/google";
import Index from "./home";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Index/>
  );
}
