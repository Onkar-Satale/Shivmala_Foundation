import Hero from "../components/Hero";
import DonationBar from "../components/DonationBar";
import HomeAbout from "../components/HomeAbout";
import HomeImageGrid from "../components/HomeImageGrid";
import HomeStatsBar from "../components/HomeStatsBar";
import HomeMakeDifference from "../components/HomeMakeDifference";
import HomeCampaignCards from "../components/HomeCampaignCards";
import HomeGalleryStrip from "../components/HomeGalleryStrip";
import HomeWelfareProjects from "../components/HomeWelfareProjects";
import EventsSection from "../components/EventsSection";
import VolunteersMap from "../components/VolunteersMap";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <DonationBar />
      <HomeAbout />
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
