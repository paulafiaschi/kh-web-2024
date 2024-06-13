import Link from "next/link";
import Image from "next/image";
import SubHero from "../components/teams/SubHero";
import FAQ from "../components/homepage/FAQ";

export default function Register() {
  return (
    <>
      <main>
        <SubHero
          title="Welcome"
          subtitle="Join our club today"
          word="Københavns Hockeyklub"
        />
      </main>

      <section className="justify-center">
        <div className="card w-full bg-base-100 shadow-xl image-full m-auto">
          <figure>
            <Image
              src="/ladies2023.jpg"
              width={900}
              height={500}
              alt="Ladies Team picture"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">Women&apos;s Team</h2>
            <p className="text-white">+ 18 years old</p>
            <div className="card-actions justify-end">
              <Link
                href="https://www.holdsport.dk/team_invitation/139527/bfab9e39d968a64582c573e3995632a876a31dfa?fbclid=IwAR2LA-kzYiygh4FoXHkjDBBFvZfza0qXiDqaXLWaRtGN78zYa1QONDSwRrE"
                className="btn btn-primary"
              >
                Sign Up &#9656;
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl image-full m-auto">
          <figure>
            <Image
              src="/men-2024.jpg"
              width={900}
              height={500}
              alt="Men's Team picture"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">Men&apos;s Team</h2>
            <p className="text-white">+ 18 years old</p>
            <div className="card-actions justify-end">
              <Link
                href="https://www.holdsport.dk/team_invitation/139528/4fad7b974cc5ac639e59d3e3cda15986fd1d10a9?fbclid=IwAR2eenwpH8YeicDxjp6WQrWqrj3sWTgLw3mnXY0XMNDYPR5xTEj6PpKcUmQ"
                className="btn btn-primary"
              >
                Sign Up &#9656;
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl image-full m-auto">
          <figure>
            <Image
              src="/youth.jpg"
              width={900}
              height={500}
              alt="U13 Team picture"
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-white">Youth Team</h2>
            <p className="text-white">&lt; 18 years old</p>
            <div className="card-actions justify-end">
              <Link
                href="https://www.holdsport.dk/team_invitation/139531/dcdb16a148c7b193ea7c18ba7aa2901adfd4c9df?fbclid=IwAR3dFGEzoji_hJ9yT9hPKSNVZUjL7rLR9SkByOq3vu6Aovi1lyf8dqBLtDg"
                className="btn btn-primary "
              >
                Sign Up &#9656;
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl image-full m-auto">
          <figure>
            <Image
              src="/masters2024.jpg"
              width={900}
              height={500}
              alt="Masters' Team picture"
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-white">Masters&apos; Team</h2>
            <p className="text-white">+ 35 years old</p>
            <div className="card-actions justify-end">
              <Link href="#" className="btn btn-primary">
                Sign Up &#9656;
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl image-full m-auto">
          <figure>
            <Image
              src="/social2.jpg"
              width={900}
              height={500}
              alt="Masters' Team picture"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">
              &quot;KH&apos;s Venner&quot; Club
            </h2>
            <p className="text-white">Support club for Københavns Hockeyklub</p>
            <div className="card-actions justify-end">
              <Link
                href="https://www.holdsport.dk/team_invitation/139537/15de952cacd5e037a09e931b5c6740b54d43a3d2"
                className="btn btn-primary"
              >
                Sign Up &#9656;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}
