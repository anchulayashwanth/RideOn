import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FiStar } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: 'Ramesh Kumar',
    role: 'Farmer',
    image: 'https://images.unsplash.com/photo-1531123414780-f1d2444499f6?auto=format&fit=crop&w=800&q=80',
    text: "RideOn's service is excellent. The cars are well-maintained and booking is very simple. I'll use them again.",
    rating: 5
  },
  {
    id: 2,
    name: 'Sarita Reddy',
    role: 'Business Traveler',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    text: "Very reliable service. Customer support was helpful and responsive.",
    rating: 5
  },
  {
    id: 3,
    name: 'Jyothi Varaprasad',
    role: 'Photographer',
    image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=800&q=80',
    text: "Great variety of cars and fair prices. It's easy to find vehicles even in our district.",
    rating: 4
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their RideOn experience.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col border border-gray-100 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center mb-5">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 ring-2 ring-amber-100"
                  />
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                    {/* App badge: keep app name and a small logo/photo in each review as requested */}
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      {/* Simple inline SVG car logo to represent the app */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-amber-500">
                        <path d="M3 13l1.5-4.5A2 2 0 0 1 6.4 7h11.2a2 2 0 0 1 1.9 1.5L21 13" stroke="#D97706" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm14 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="#D97706"/>
                      </svg>
                      <span className="ml-2 font-semibold">RideOn</span>
                    </div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-500' : 'text-gray-200'}`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 flex-grow">{testimonial.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}