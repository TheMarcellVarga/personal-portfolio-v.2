import Link from "next/link";
import Image from "next/image";

// Header component
const Header = () => {
  return (
    <header className="flex justify-between items-center w-full max-w-5xl mb-12">
      <div className="flex items-center">
        {/* Icon */}
        <Link href="/">
          <Image
            src="/icons/indexSig.svg"
            alt="Icon"
            width={32}
            height={32}
          />
        </Link>
      </div>
      <nav className="flex space-x-4">
        {/* Links */}
        <Link href="/about">
          <div className="text-sm font-medium">About</div>
        </Link>
        <Link href="/work">
          <div className="text-sm font-medium">Work</div>
        </Link>
        <Link href="/contact">
          <div className="text-sm font-medium">Contact</div>
        </Link>
      </nav>
    </header>
  );
};

// Footer component
// Footer component
const Footer = () => {
  return (
    <div className="flex w-full flex-row justify-between items-center">
      <div className="flex w-full mx-8">© 2024 Marcell Varga</div>
      <div className="flex space-x-4">
        <Image
          src="/icons/linkedin.svg"
          alt="Linkedin Icon"
          width={32}
          height={32}
        />
        <Image
          src="/icons/github.svg"
          alt="Icon"
          width={32}
          height={32}
        />
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col p-6">main</main>
      <Footer />
    </>
  );
}
