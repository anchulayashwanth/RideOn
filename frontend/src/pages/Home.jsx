import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "RideOn | Home";
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section - Full Window */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage: "url('/src/assets/hero-bg-car.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero content */}
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Experience the Road Like Never Before
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Book your dream car and make every journey unforgettable.
            From budget rides to luxury wheels — RideOn has you covered.
          </p>
        </div>

        {/* Optional scroll indicator */}
        <div className="absolute bottom-8 text-sm text-gray-300 animate-bounce">
          Scroll Down ↓
        </div>
      </section>

      {/* Why RideOn Section */}
      <section id="why-rideon" className="container mx-auto my-20 px-6">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">
          Why Choose RideOn?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center border hover:shadow-xl transition">
            <img
              src="/src/assets/icons/affordable.png"
              alt="Affordable Pricing"
              className="mx-auto w-16 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
            <p className="text-gray-600">
              Enjoy transparent pricing with zero hidden fees. Choose a car that
              fits your budget without compromise.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center border hover:shadow-xl transition">
            <img
              src="/src/assets/icons/wide-selection.png"
              alt="Wide Selection"
              className="mx-auto w-16 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Wide Car Selection</h3>
            <p className="text-gray-600">
              From compact hatchbacks to luxury SUVs, RideOn offers a variety of
              vehicles for every type of traveler.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center border hover:shadow-xl transition">
            <img
              src="/src/assets/icons/support.png"
              alt="24/7 Support"
              className="mx-auto w-16 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Our friendly customer support is always ready to assist you —
              before, during, and after your trip.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
