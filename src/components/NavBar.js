import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <Link href="/" passHref>
            <div className="text-gray-400 text-xl font-semibold cursor-pointer hover:text-gray-600">blabbr.buzz</div>
          </Link>
        </div>
        <div className="space-x-4 flex items-center">
          <Link href="/about" passHref>
            <div className="text-gray-400 cursor-pointer hover:text-gray-600">About</div>
          </Link>
          <Link href="/privacy" passHref>
            <div className="text-gray-400 cursor-pointer hover:text-gray-600">Privacy</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
