import Image from "next/image";
import Link from "next/link";
export default function TeamCard(props) {
  return (
    <div className="card bg-base-100">
      <div
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          minHeight: "250px",
          width: "100%",
        }}
      ></div>
      <div className="pt-6 ">
        <h2 className="card-title">{props.team} Team</h2>
        <div className="icon-container text-sm">
          <Image src="/clock.svg" width={20} height={20} alt="Clock icon" />
          <p className="text-sm">
            Practice Time:<br></br>
            <span className="text-gray-500"> {props.time}</span>
          </p>
        </div>
        <div className="icon-container">
          <Image src="/messages.svg" width={20} height={20} alt="Clock icon" />
          <Link href={`mailto: ${props.contact}`}>
            <p className="text-sm">
              Contact Person:<br></br>
              <span className="text-gray-500 link"> {props.contact}</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
