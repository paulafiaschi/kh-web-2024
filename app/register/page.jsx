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
              width={600}
              height={200}
              alt="Ladies Team picture"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Ladies Team</h2>
            <p>+ 18 years old</p>
            <div className="card-actions justify-end">
              <Link href="#" className="btn btn-primary">
                Register &#9656;
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl image-full m-auto">
          <figure>
            <Image
              src="/men-2024.jpg"
              width={600}
              height={200}
              alt="Men's Team picture"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Men&apos;s Team</h2>
            <p>+ 18 years old</p>
            <div className="card-actions justify-end">
              <Link href="#" className="btn btn-primary">
                Register &#9656;
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl image-full m-auto">
          <figure>
            <Image
              src="/youth.jpg"
              width={600}
              height={200}
              alt="U13 Team picture"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Youth Team</h2>
            <p>&lt; 18 years old</p>
            <div className="card-actions justify-end">
              <Link href="#" className="btn btn-primary">
                Register &#9656;
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl image-full m-auto">
          <figure>
            <Image
              src="/masters2024.jpg"
              width={600}
              height={200}
              alt="Masters' Team picture"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Masters&apos; Team</h2>
            <p>+ 35 years old</p>
            <div className="card-actions justify-end">
              <Link href="#" className="btn btn-primary">
                Register &#9656;
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl image-full m-auto">
          <figure>
            <Image
              src="/social2.jpg"
              width={600}
              height={200}
              alt="Masters' Team picture"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">KH&apos;s Venner Team</h2>
            <p>Support club for Københavns Hockeyklub</p>
            <div className="card-actions justify-end">
              <Link href="#" className="btn btn-primary">
                Register &#9656;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}
