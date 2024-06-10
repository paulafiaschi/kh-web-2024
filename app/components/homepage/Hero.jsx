import Link from "next/link";
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
        <div className="lg:max-w-xl">
          <h1 className="mb-5 text-5xl lg:text-6xl font-bold">
            Welcome to our Hockey Club in Copenhagen!
          </h1>
          <p className="mb-5">
            Experience the spirit and energy of our club, where international
            players come together to play in the top division of Denmark. Join
            us for exciting matches and social activities!
          </p>
          <Link href="#findOut" className="btn btn-primary">
            Learn More
          </Link>
          {/* <Link
            href="https://www.facebook.com/Copenhagenhockeyclub"
            target="_blank"
            className="btn btn-outline btn-primary ml-3"
          >
            Contact Us
          </Link> */}
          <Link
            href="/about#contact"
            className="btn btn-outline btn-primary ml-3"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
