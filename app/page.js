// app/page.js
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <p>This is the home page of a simple Next.js app using the new App Router.</p>
      <nav>
        <ul>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}
