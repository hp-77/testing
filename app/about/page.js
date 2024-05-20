// app/about/page.js
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page.</p>
      <Link href="/">Go back to Home</Link>
    </div>
  );
}
