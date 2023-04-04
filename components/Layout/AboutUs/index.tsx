import { aboutUs } from '@/utils/data';

export const AboutUs = () => {
  return (
    <div className="flex flex-col bg-cover bg-center w-full items-center justify-between py-12 md:px-20 px-4 text-center bg-[url('/images/background/background_1.png')]">
      <div>
        <h1 className="md:text-4xl text-2xl font-bold text-white uppercase">
          About us
        </h1>
      </div>
      <div className="flex gap-10 md:p-8 p-0">
        <div className="flex-auto">
          <p className="text-white text-left md:text-xl text-md text-justify">
            {aboutUs}
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
  );
};
