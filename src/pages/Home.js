import Hero from "../components/Hero";
import DonationBar from "../components/DonationBar";
import HomeAbout from "../components/HomeAbout";
import HomeImageGrid from "../components/HomeImageGrid";
import HomeStatsBar from "../components/HomeStatsBar";
import HomeMakeDifference from "../components/HomeMakeDifference";
import HomeCampaignCards from "../components/HomeCampaignCards";
import HomeGalleryStrip from "../components/HomeGalleryStrip";
import HomeWelfareProjects from "../components/HomeWelfareProjects";
import CorePillars from "../components/CorePillars";
import EventsSection from "../components/EventsSection";
import VolunteersMap from "../components/VolunteersMap";
import SEO from "../components/SEO";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <SEO 
        title="Shivmala Foundation | Empowering Rural Maharashtra with AI & Digital Revolution"
        description="Shivmala Foundation brings FREE AI, Robotics training to Bardapur villages. Medical camps, skill development, tree plantation. Join Mission 2026!"
      />
      <Hero />
      <DonationBar />
      <HomeAbout />
      <CorePillars />
      <HomeImageGrid />
      <HomeStatsBar />
      <HomeMakeDifference />
      <HomeCampaignCards />
      <HomeGalleryStrip />
      <HomeWelfareProjects />
      <EventsSection />
      <VolunteersMap />
    </div>
  );
}

export default Home;
