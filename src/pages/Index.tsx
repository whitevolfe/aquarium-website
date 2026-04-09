import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/HeroSection';
import CategoryBar from '@/components/CategoryBar';
import IntroSection from '@/components/IntroSection';
import ReviewsSection from '@/components/ReviewsSection';
import CTABanner from '@/components/CTABanner';
import EditorialBlocks from '@/components/EditorialBlocks';
import ThreeColumnInfo from '@/components/ThreeColumnInfo';
import ServicesGrid from '@/components/ServicesGrid';
import WhyChooseUs from '@/components/WhyChooseUs';
import VideoSection from '@/components/VideoSection';

const Index = () => (
  <>
    <Helmet>
      <title>
        Aqua Reef Aquarium | Luxury Marine Aquarium Design Sri Lanka
      </title>
      <meta
        name='description'
        content='Premium custom marine aquarium design & installation in Sri Lanka. Luxury reef tanks for homes, offices & commercial spaces. Get a free consultation today.'
      />
      <link rel='canonical' href='https://aquareefaquarium.lk' />
      <script type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Aqua Reef Aquarium',
          description:
            'Luxury marine aquarium design and installation in Sri Lanka',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Colombo',
            addressCountry: 'LK',
          },
          telephone: '+94771234567',
          url: 'https://aquareefaquarium.lk',
        })}
      </script>
    </Helmet>
    <HeroSection />
    <CategoryBar />
    <IntroSection />
    <EditorialBlocks />
    <ThreeColumnInfo />
    <ServicesGrid />
    <WhyChooseUs />
    <VideoSection />
    <ReviewsSection />
    <CTABanner />
  </>
);

export default Index;
