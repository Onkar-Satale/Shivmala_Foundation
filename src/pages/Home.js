import Hero from "../components/Hero";
import DonationBar from "../components/DonationBar";
import HomeCampaignCards from "../components/HomeCampaignCards";
import HomeAbout from "../components/HomeAbout";
import EventsSection from "../components/EventsSection";
import HomeGalleryStrip from "../components/HomeGalleryStrip";
import VolunteersMap from "../components/VolunteersMap";
import HomeStatsBar from "../components/HomeStatsBar";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <DonationBar />
      <HomeCampaignCards />
      <HomeAbout />
      <EventsSection />
      <HomeGalleryStrip />
      <VolunteersMap />
      <HomeStatsBar />
    </div>
  );
}

export default Home;
