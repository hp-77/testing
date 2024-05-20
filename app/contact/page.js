// app/contact/page.js
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>This is the contact page.</p>
      <Link href="/">Go back to Home</Link>
    </div>
  );
}
