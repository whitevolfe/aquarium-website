import { useState } from 'react';

const VideoSection = () => {
  const videos = [
    { id: 1, src: '/videos/aquareef-video1.mp4' },
    { id: 2, src: '/videos/aquareef-video2.mp4' },
    { id: 3, src: '/videos/aquareef-video3.mp4' },
    { id: 4, src: '/videos/aquareef-video4.mp4' },
    { id: 5, src: '/videos/aquareef-video5.mp4' },
    { id: 6, src: '/videos/aquareef-video6.mp4' },
    { id: 7, src: '/videos/aquareef-video7.mp4' },
    { id: 8, src: '/videos/aquareef-video8.mp4' },
    { id: 9, src: '/videos/aquareef-video9.mp4' },
  ];

  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const handleVideoClick = (videoId: number) => {
    setActiveVideo(videoId === activeVideo ? null : videoId);
  };

  return (
    <section className='section-white'>
      <div className='container-max'>
        <div className='text-center mb-12'>
          <h2 className='section-title text-3xl md:text-4xl'>Our Work</h2>
          <p className='text-muted-foreground mt-3 max-w-2xl mx-auto text-sm'>
            Watch our stunning aquarium installations come to life
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-6'>
          {videos.map((video) => (
            <div
              key={video.id}
              className='relative overflow-hidden rounded-lg bg-gray-800'
              style={{ aspectRatio: '16/9' }}
            >
              <video
                src={video.src}
                autoPlay
                muted
                loop
                playsInline
                preload='auto'
                className='w-full h-full object-cover transition-all duration-300'
                onClick={() => handleVideoClick(video.id)}
                style={{
                  transform:
                    activeVideo === video.id ? 'scale(1.1)' : 'scale(1)',
                }}
              />

              {/* Overlay */}
              <div className='absolute inset-0 bg-black/30 flex items-center justify-center pointer-events-none'>
                <span className='text-white text-3xl'>
                  {activeVideo === video.id ? '❚❚' : '►'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
