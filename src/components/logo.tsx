import Link from 'next/link';
import { Leaf, Sprout } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative flex items-center justify-center h-9 w-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 shadow-md">
        <Leaf className="h-5 w-5 text-white absolute rotate-12" />
        <Sprout className="h-4 w-4 text-white/80 absolute -rotate-12 translate-x-1 translate-y-1" />
      </div>
      <span className="text-2xl font-extrabold text-gray-800">
        Kisan<span className="text-orange-500">Sathi</span>
      </span>
    </Link>
  );
}