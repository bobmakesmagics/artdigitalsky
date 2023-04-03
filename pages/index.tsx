import type { NextPage } from 'next';
import LayoutBase from '@/components/Layout/base';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <LayoutBase>
      {(state) => (
        <div className="flex min-h-screen flex-col items-center justify-center">
          <main className="flex w-full h-[500px] flex-col items-center justify-center px-20 text-center bg-[url('/images/img/main.png')]">
            <h1 className="text-6xl font-bold text-white">
              Designing the future of the world
            </h1>
            <p className="mt-3 text-2xl text-white">
              Innovative Web Solutions for Modern Business{' '}
            </p>
            <a
              className="font-bold text-2xl text-pink-400 uppercase backdrop-blur-md bg-white/30 p-2 rounded-md"
              href="/"
            >
              Our ArtDigitalSky!
            </a>
          </main>
          <div className="flex flex-col bg-cover bg-center w-full items-center justify-between py-12 px-20 text-center bg-[url('/images/background/background_1.png')]">
            <div>
              <h1 className="text-4xl font-bold text-white uppercase">
                About us
              </h1>
            </div>
            <div className="flex gap-10 p-8">
              <div className="flex-auto">
                <p className="text-white text-left text-xl">
                  At our company, we believe that the future of business lies in
                  the digital world. That's why we're dedicated to designing
                  innovative web solutions that empower our clients to succeed
                  in the online marketplace. We bring together cutting-edge
                  technology and inspired design to create web and mobile
                  experiences that are not only visually stunning, but also
                  intuitive and user-friendly. Whether you're looking to launch
                  a new website, develop a mobile app, or enhance your online
                  presence, we have the skills and expertise to bring your
                  vision to life. Our team of talented designers, developers,
                  and strategists are committed to pushing the boundaries of
                  digital design and building a better future, one website at a
                  time. So why settle for an average online presence when you
                  can partner with us to create something truly exceptional?
                  Join us in designing the future of the digital world
                </p>
              </div>
              {/* <div className="flex-auto">
                <img
                  src="/images/img/about.png"
                  alt="About us"
                  className="w-auto h-atuo"
                />
              </div> */}
            </div>
          </div>
        </div>
      )}
    </LayoutBase>
  );
};

export default Home;
