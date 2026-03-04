import { HeroSection } from '../sections/HeroSection';
import { StatsSection } from '../sections/StatsSection';
import { AboutSection } from '../sections/AboutSection';
import { PathwaysPreview } from '../sections/PathwaysPreview';
import { MentorsSection } from '../sections/MentorsSection';
import { NewsletterSection } from '../sections/NewsletterSection';

export function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsSection />
      <div className="aboutsection">
        <AboutSection />
      </div>
      <PathwaysPreview />
      <div className="mentorssection">
        <MentorsSection />
      </div>
      <NewsletterSection />
    </div>
  );
}
