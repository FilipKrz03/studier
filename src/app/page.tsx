import Features from "./components/Features/Features";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import Support from "./components/SupportSection/Support";

export default function Home() {
  return (
      <main>
        <Hero />
        <Features />
        <Stats />
        <Support />
      </main>
  );
}
