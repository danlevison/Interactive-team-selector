import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>404</h1>
      <Link href={"/"}>Back to home</Link>
    </main>
  );
}
