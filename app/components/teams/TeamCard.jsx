import Image from "next/image";
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
      <div className="pt-6">
        <h2 className="card-title">{props.team} Team</h2>
        <p className="text-sm">
          Practice Time:<br></br>
          {props.time}
        </p>
      </div>
    </div>
  );
}
