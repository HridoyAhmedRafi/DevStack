import { Suspense } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navber from "./components/Navber";
import Technologies from "./components/technologies/Technologies";
import type { TechnologiesType } from "./types/TechnologieType";
import Footer from "./components/Footer";

const TechnologiesPromiseFetch = async (): Promise<TechnologiesType[]> => {
  const res = await fetch("/data.json");
  const data = res.json();
  return data;
};

const TechnologiesPromise = TechnologiesPromiseFetch();

function App() {
  return (
    <>
      <Navber></Navber>
      <Hero></Hero>
      <Suspense fallback={<h1 className="text-2xl container mx-auto px-4">Loading...</h1>}>
        <Technologies TechnologiesPromise={TechnologiesPromise}></Technologies>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
