import { motion } from 'framer-motion';
import Link from 'next/link';

interface CardProps {
  href: string;
  imgSrc: string;
  layoutId: string;
}

const Card: React.FC<CardProps> = ({ href, imgSrc, layoutId }) => (
  <Link href={href}>
    <div className="relative h-20 md:h-40 bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition">
      <motion.img key={layoutId} src={imgSrc} className="w-full h-full" />
    </div>
  </Link>
);

export default function Home() {
  return (
    <div>
      <header>
        <h1 className="text-4-1 sm:text-6x1 lg:text-7x1 mt-10 md:mt-24 leading-none font-extrabold tracking-tight text-gray-600">Something</h1>
      </header>

      <div className="grid w-full grid-cols-1 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-1">
        <Card href={'/nextjs'} imgSrc={'/img/nextjs.svg'} layoutId={'nextjs-logo'} />
        <Card href={'/tailwind'} imgSrc={'/img/tailwind.svg'} layoutId={'tailwind-logo'} />
        <Card href={'/framermotion'} imgSrc={'/img/framermotion.svg'} layoutId={'framermotion-logo'} />
      </div>
    </div>
  )
}
