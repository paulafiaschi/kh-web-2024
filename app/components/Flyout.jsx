import Image from "next/image";
import Link from "next/link";
export default function TeamCard(props) {
  return (
    <Link href="/join" className="flyout shadow-xl">
      Join <span>the Club</span>
    </Link>
  );
}
