import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-16 bg-[var(--c-ink)] text-[var(--c-cloud)]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/bcdslogo-light.png"
                alt="Brant County Dental Society"
                width={200}
                height={100}
                className="h-auto w-48 object-contain"
              />
            </Link>
            <p className="text-sm mt-4">
              Growing community. Advancing dentistry.
            </p>
          </div>

          <div className="space-y-4">
            <div className="eyebrow text-[var(--c-neon)]">Quick Links</div>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm hover:text-[var(--c-neon)] transition-colors">
                Home
              </Link>
              <Link href="/events" className="text-sm hover:text-[var(--c-neon)] transition-colors">
                Events
              </Link>
              <Link href="/executive" className="text-sm hover:text-[var(--c-neon)] transition-colors">
                Executive Team
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <div className="eyebrow text-[var(--c-neon)]">Connect</div>
            <div className="text-sm space-y-2">
              <p>Email: info@thebcds.com</p>
              <p>Brantford, Ontario</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--c-steel)] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--c-mid-grey)]">
          <p>&copy; {new Date().getFullYear()} Brant County Dental Society. All rights reserved.</p>
          <p>Designed with purpose. Built for community.</p>
        </div>
      </div>
    </footer>
  );
}

