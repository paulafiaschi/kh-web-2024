import Image from "next/image";
export default function SubHero(props) {
  return (
    <div className="hero py-20 highlightSection">
      <div className="hero-content text-center">
        <div className="max-w-md">
          {/* <p className="text-xs	mb-3 tracking-widest	">{props.word}</p> */}
          <h1 className="text-5xl font-bold">{props.title}</h1>
          {/* <p className="py-6">{props.subtitle}</p> */}
        </div>
      </div>
    </div>
  );
}
