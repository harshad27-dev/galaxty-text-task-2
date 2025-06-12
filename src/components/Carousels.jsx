import { useState } from 'react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-22">
      <p className='text-4xl flex justify-center m-3 text-white'>Projects</p>
      <div className="relative h-96 overflow-hidden rounded-lg">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${
              index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full"
      >
        &lt;
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full"
      >
        &gt;
      </button>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Usage example
const App = () => {
  const carouselItems = [
    <div className="h-full w-full flex items-center justify-center text-white text-4xl"><img src="https://i.etsystatic.com/20116942/r/il/ebb4be/6607106719/il_1588xN.6607106719_ha19.jpg" alt="" /></div>,
    <div className="h-full w-full flex items-center justify-center text-white text-4xl"><img src="https://happenings.lpu.in/wp-content/uploads/2021/06/Are-Projects-in-Engineering-Worth-the-Effort.jpg" alt="" /></div>,
    <div className=" h-full w-full flex items-center justify-center text-white text-4xl"><img src="https://happenings.lpu.in/wp-content/uploads/2021/06/Are-Projects-in-Engineering-Worth-the-Effort.jpg" alt="" /></div>,
  ];

  return (
    <div className="p-8">
      <Carousel items={carouselItems} />
    </div>
  );
};

export default App;