import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureGrid from "./components/FeatureGrid";
import TechBreakdown from "./components/TechBreakdown";
import RunnerChart from "./components/RunnerChart";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeatureGrid />
      <TechBreakdown />
      <RunnerChart />
      <Footer />
    </main>
  );
}
