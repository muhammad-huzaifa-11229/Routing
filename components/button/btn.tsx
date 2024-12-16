import Link from "next/link";

export default function Button() {
    return (
        <div>
            <button className="text-5xl text-sky-700 hover:underline">
                <Link href="/country/pakistan">Pakistan</Link>
            </button>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="text-5xl text-sky-700 hover:underline">
                <Link href="/country/india">India</Link>
            </button>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="text-5xl text-sky-700 hover:underline">
                <Link href="/country/china">China</Link>
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="text-5xl text-sky-700 hover:underline">
                <Link href="/country/usa">USA</Link>
            </button>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="text-5xl text-sky-700 hover:underline">
                <Link href="/country/france">France</Link>
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    );
}
