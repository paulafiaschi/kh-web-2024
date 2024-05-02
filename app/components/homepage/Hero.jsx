export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/ladies-men-2023.jpg)",
        backgroundPosition: "center bottom",
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-xl">
          <h1 className="mb-5 text-6xl font-bold">
            Welcome to our Hockey Club in Copenhagen!
          </h1>
          <p className="mb-5">
            Experience the spirit and energy of our club, where international
            players come together to play in the top division of Denmark. Join
            us for exciting matches and social activities!
          </p>
          <button className="btn btn-primary">Learn More</button>
          <button className="btn btn-outline btn-primary ml-3">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
