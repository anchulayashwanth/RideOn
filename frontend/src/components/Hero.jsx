import React from 'react'

// Render the background image filling the viewport, with the overlay text centered on it.
export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1920"
        alt="Background car"
        className="w-full h-full object-cover"
      />

      {/* Overlay content centered on the image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black/45 backdrop-blur-sm rounded-2xl p-8 mx-4 max-w-3xl">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-3 leading-tight">
              Drive Your Dreams
            </h1>
            <h2 className="text-lg sm:text-2xl font-semibold text-yellow-300 mb-4">
              Rent with Confidence
            </h2>
            <p className="text-md sm:text-lg text-white/90 leading-relaxed">
              Discover our premium fleet of vehicles for any occasion. From luxury sedans to practical SUVs, we've got your journey covered.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
