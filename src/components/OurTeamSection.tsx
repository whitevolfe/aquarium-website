import { useState } from 'react';

import ourteamImg1 from '../assets/ourteam-img1.jpeg';
import ourteamImg2 from '../assets/ourteam-img2.jpeg';
import ourteamImg3 from '../assets/ourteam-img3.jpeg';
import ourteamImg4 from '../assets/ourteam-img4.jpeg';
import ourteamImg5 from '../assets/ourteam-img5.jpeg';
import ourteamImg6 from '../assets/ourteam-img6.jpeg';

const mediaItems = [
  { id: 1, type: 'image', src: ourteamImg1 },
  { id: 2, type: 'image', src: ourteamImg2 },
  { id: 3, type: 'image', src: ourteamImg3 },
  { id: 4, type: 'image', src: ourteamImg4 },
  { id: 5, type: 'image', src: ourteamImg5 },
  { id: 6, type: 'image', src: ourteamImg6 },
  { id: 7, type: 'video', src: '/videos/ourteam1.mp4' },
  { id: 8, type: 'video', src: '/videos/ourteam2.mp4' },
];

const OurPartnersSection = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setActiveItem(id === activeItem ? null : id);
  };

  return (
    <section className='w-full py-20 px-4 bg-[#f8fafc]'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-14'>
          <p className='text-green-600 uppercase tracking-[3px] text-sm font-semibold mb-3'>
            Trusted Collaborations
          </p>

          <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
            Our Partners
          </h2>

          <p className='text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-7'>
            We proudly collaborate with trusted partners and businesses to
            deliver premium quality products and exceptional services.
          </p>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {mediaItems.map((item) => (
            <div
              key={item.id}
              className='relative overflow-hidden rounded-3xl bg-gray-200 shadow-lg group'
              style={{ aspectRatio: '4/5' }}
            >
              {/* IMAGE */}
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt='Partner'
                  onClick={() => handleClick(item.id)}
                  className='w-full h-full object-cover cursor-pointer transition-all duration-500 group-hover:scale-105'
                  style={{
                    transform:
                      activeItem === item.id ? 'scale(1.08)' : 'scale(1)',
                  }}
                />
              ) : (
                /* VIDEO */
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload='auto'
                  onClick={() => handleClick(item.id)}
                  className='w-full h-full object-cover cursor-pointer transition-all duration-500'
                  style={{
                    transform:
                      activeItem === item.id ? 'scale(1.08)' : 'scale(1)',
                  }}
                />
              )}

              {/* Overlay */}
              <div className='absolute inset-0 bg-black/20 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition duration-300'>
                <div className='w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30'>
                  <span className='text-white text-2xl'>
                    {item.type === 'video'
                      ? activeItem === item.id
                        ? '❚❚'
                        : '►'
                      : '✦'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartnersSection;
