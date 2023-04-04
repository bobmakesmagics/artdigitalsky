import Link from 'next/link';

export const MainBanner = () => {
  return (
    <main
      style={{
        backgroundImage: `url('/images/img/main.png')`,
      }}
      className="!flex w-full h-[500px] flex-col items-center justify-center px-20 text-center bg-cover md:bg-auto"
    >
      <h1 className="font-bold text-white md:text-4xl lg:text-6xl text-3xl ">
        Designing the Future of Digital World
      </h1>
      <p className="mt-3 text-lg md:text-2xl lg:text-4xl text-white">
        Innovative Web Solutions for Modern Business
      </p>
      <Link
        className="font-bold mt-4 text-2xl text-pink-400 uppercase backdrop-blur-md bg-black/50 p-2 rounded-md"
        href="/services"
      >
        Artdigitalsky
      </Link>
    </main>
  );
};
