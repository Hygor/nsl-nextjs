import Image from 'next/image';
import Link from 'next/link'

const Header: React.FC = () => {
  return <header className="flex justify-center md:justify-between py-2 md:py-4 items-center">
    <Image src="/img/logo.svg" alt="Logotype" width={128} height={48} />

    <nav className="hidden md:block space-x-8">
      <Link href="/next-js">
        <a className="tracking-wide hover:text-gray-300">Next.js</a>
      </Link>
    </nav>
  </header>;
}

export default Header;