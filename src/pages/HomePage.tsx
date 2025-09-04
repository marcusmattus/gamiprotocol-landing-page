import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { CoreComponents } from '../components/CoreComponents';
import { Technology } from '../components/Technology';
import { DeveloperResources } from '../components/DeveloperResources';
import { Roadmap } from '../components/Roadmap';
import { Community } from '../components/Community';
import { CTA } from '../components/CTA';

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <CoreComponents />
      <Technology />
      <DeveloperResources />
      <Roadmap />
      <Community />
      <CTA />
    </>
  );
}