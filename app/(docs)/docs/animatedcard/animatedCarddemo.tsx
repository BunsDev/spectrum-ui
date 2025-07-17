'use client'
import AnimatedCard from './animatedCard';
import { easeInOut, motion } from 'framer-motion';
import { useState } from 'react';


const tools = [
  {
    imgSrc: '/tailwind.svg',
    title: 'Tailwind CSS',

    aboutProduct: 'A utility-first CSS framework for rapidly building custom UIs.',
  },
  {
    imgSrc: '/nextjs.svg',
    title: 'Next.js',

    aboutProduct:
      'A React framework for production with server-side rendering and static site generation.',
  },
  {
    imgSrc: '/shadcn.svg',
    title: 'Shadcn UI',

    aboutProduct: 'Beautiful, accessible components built using Radix UI and Tailwind CSS.',
  },
  {
    imgSrc: '/aceternity.svg',
    title: 'Aceternity UI',

    aboutProduct: 'Beautiful, accessible components built using Shadcn UI and Tailwind CSS.',
  },
];

export default function AnimatedCardDemo() {
  const [touchComponent, setTouchComponent] = useState(false);

  const rotateDegree = [-20, -10, 5, 17];
  const xAxis = [-300, -85, 150, 340];
  const yAxis = [-65, -120, -135, -94];
  const initialRotation = [0, 6, 12, 17];
  const zIndex = [40, 30, 20, 10];

  return (
    <div
      className="hidden md:flex justify-center min-h-screen items-center"
      onClick={() => setTouchComponent(!touchComponent)}
    >
      {tools.map((tool, ind) => (
        <motion.div
          key={ind}
          initial={{ x: 0, y: 0 }}
          animate={
            touchComponent
              ? { x: xAxis[ind], y: yAxis[ind], rotate: rotateDegree[ind] }
              : { x: 0, y: 0 }
          }
          transition={{ ease: easeInOut }}
          style={{
            zIndex: zIndex[ind],
            rotate: initialRotation[ind],
          }}
          className="absolute flex justify-center items-center "
        >
          <AnimatedCard imgSrc={tool.imgSrc} title={tool.title} aboutProduct={tool.aboutProduct} />
        </motion.div>
      ))}
    </div>
  );
}
