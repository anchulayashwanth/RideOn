export default function HeroSection() {
  return (
    <section className="container mt-8">
      <div className="bg-brand-purple text-white rounded-2xl p-10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Experience the road like never before
          </h2>
          <p className="mt-4 text-white/90 max-w-xl">
            Book your dream car and make every journey unforgettable. Simple pricing, instant booking.
          </p>
          <button className="mt-6 bg-brand-yellow text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90">
            Book Now
          </button>
        </div>
        <div className="flex-1 w-full">
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur border border-white/20">
            <h3 className="text-lg font-semibold mb-4">Book your car</h3>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input placeholder="Car type" className="px-3 py-2 rounded-md text-black" />
              <input placeholder="Place of rental" className="px-3 py-2 rounded-md text-black" />
              <input placeholder="Pickup date" type="date" className="px-3 py-2 rounded-md text-black" />
              <input placeholder="Return date" type="date" className="px-3 py-2 rounded-md text-black" />
              <button type="button" className="sm:col-span-2 bg-brand-yellow text-black px-4 py-2 rounded-md font-semibold">
                Search now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
