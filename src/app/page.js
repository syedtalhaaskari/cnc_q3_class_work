import Link from "next/link";

export default function Home() {
	return (
		<ul>
			<li><Link href={"/"}>Home</Link></li>
			<li><Link href={"/portfolio"}>Portfolio</Link></li>
			<li><Link href={"/portfolio/nhaps"}>Nhaps</Link></li>
			<li><Link href={"/portfolio/hkk"}>Hkk</Link></li>
		</ul>
	)
}
