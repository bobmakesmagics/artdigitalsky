import type { NextPage } from 'next';
import LayoutBase from '@/components/Layout/base';
import IconArrowRight from '@/components/Common/Icons/IconArrowRight';
import Link from 'next/link';
import Image from 'next/image';

const Services: NextPage = () => {
  return (
    <LayoutBase>
      {(state) => (
        <div className="min-h-screen">
          <div className="flex flex-col p-10  bg-cover bg-center bg-[url('/images/background/background_1.png')]">
            <h1 className="text-4xl text-center text-white">Our Services</h1>
            <div className="flex flex-wrap justify-between py-6 gap-y-6">
              <div className="max-w-[290px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link href="#">
                  <Image
                    className="rounded-t-lg w-full h-auto"
                    width="0"
                    height="0"
                    sizes="100vw"
                    src="/images/img/graphic.png"
                    alt="graphic design"
                  />
                </Link>
                <div className="p-5">
                  <Link href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Graphic Design
                    </h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {`We help individuals and businesses create visually appealing
                    and effective designs that communicate their message clearly
                    to their target audience. We specialize in providing a wide
                    range of graphic design services.`}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <IconArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="max-w-[290px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link href="#">
                  <Image
                    className="rounded-t-lg w-full h-auto"
                    width="0"
                    height="0"
                    sizes="100vw"
                    src="/images/img/social.png"
                    alt="social media content"
                  />
                </Link>
                <div className="p-5">
                  <Link href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Social Media Content
                    </h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {`We create high-quality social media content, including
                    images, videos, and captions, that is aligned with the
                    brand's voice and values. Our team ensures that the content
                    is visually appealing, informative, and engaging to attract
                    the target audience.`}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <IconArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="max-w-[290px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link href="#">
                  <Image
                    className="rounded-t-lg w-full h-auto"
                    width="0"
                    height="0"
                    sizes="100vw"
                    src="/images/img/web.png"
                    alt="web development"
                  />
                </Link>
                <div className="p-5">
                  <Link href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Web Development
                    </h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {`Our team of developers creates websites using the latest
                    technologies and best practices to ensure high performance
                    and user experience.`}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <IconArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="max-w-[290px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link href="#">
                  <Image
                    className="rounded-t-lg w-full h-auto"
                    width="0"
                    height="0"
                    sizes="100vw"
                    src="/images/img/app.png"
                    alt="app development"
                  />
                </Link>
                <div className="p-5">
                  <Link href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Desktop/Mobile Apps
                    </h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {`Our mobile and desktop app development services are geared
                    towards businesses looking to create custom applications to
                    enhance their online presence, improve customer experience,
                    and increase revenue.`}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <IconArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </LayoutBase>
  );
};

export default Services;
