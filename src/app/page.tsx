import Features from "./components/Features/Features";
import Hero from "./components/Hero";
import Stats from "./components/Stats/Stats";
export default function Home() {
  return (
    <>
       <main>
      <Hero />
      <Features />
    </main>
    <Stats />
    </>

  );
}
