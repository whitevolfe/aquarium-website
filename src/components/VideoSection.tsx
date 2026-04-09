import { useState, useEffect } from 'react';

const VideoSection = () => {
  const videos = [
    { id: 1, src: '/src/assets/aquareef-video1.mp4' },
    { id: 2, src: '/src/assets/aquareef-video2.mp4' },
    { id: 3, src: '/src/assets/aquareef-video3.mp4' },
    { id: 4, src: '/src/assets/aquareef-video4.mp4' },
    { id: 5, src: '/src/assets/aquareef-video5.mp4' },
    { id: 6, src: '/src/assets/aquareef-video6.mp4' },
    { id: 7, src: '/src/assets/aquareef-video7.mp4' },
    { id: 8, src: '/src/assets/aquareef-video8.mp4' },
    { id: 9, src: '/src/assets/aquareef-video9.mp4' },
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
          <p className='text-muted-foreground mt-3 max-w-2xl mx-auto font-body text-sm'>
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
                playsInline
                className='w-full h-full object-cover transition-all duration-300'
                muted
                loop
                onClick={() => handleVideoClick(video.id)}
                style={{
                  transform:
                    activeVideo === video.id ? 'scale(1.1)' : 'scale(1)',
                }}
              />
              <div className='absolute inset-0 bg-black/50 flex items-center justify-center'>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleVideoClick(video.id);
                  }}
                  className='text-white text-3xl'
                >
                  {activeVideo === video.id ? '❚❚' : '►'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
