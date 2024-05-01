export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Welcome to our Hockey Club in Copenhagen!
          </h1>
          <p className="mb-5">
            Experience the spirit and energy of our club, where international
            players come together to play in the top division of Denmark. Join
            us for exciting matches and social activities!
          </p>
          <button className="btn btn-primary">Learn More</button>
          <button className="btn btn-outline btn-primary">Contact Us</button>
        </div>
      </div>
    </div>
  );
}
