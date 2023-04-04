import type { NextPage } from 'next';
import LayoutBase from '@/components/Layout/base';
import IconArrowRight from '@/components/Common/Icons/IconArrowRight';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/utils/data';
import { useMemo, useState } from 'react';
import Modal from '@/components/Widgets/Modal';

const Services: NextPage = () => {
  const [serviceDatail, setServiceDetail] = useState(false);
  const [service, setService] = useState<typeof services[number]>();

  const handleServiceDetail = () => {
    setServiceDetail(!serviceDatail);
  };
  const showServiceDetail = (index: number) => {
    setService(services[index]);
    handleServiceDetail();
  };

  const modalContent = useMemo(
    () =>
      service && (
        <div>
          {service?.detail.map((detail, index) => (
            <div key={index}>
              <h4 className="mt-2 font-semibold text-slate-600 text-xl">
                {detail.section}
              </h4>
              <p className="text-black indent-4">{detail.content}</p>
            </div>
          ))}
        </div>
      ),
    [service]
  );

  return (
    <LayoutBase>
      {(state) => (
        <div className="min-h-screen">
          <div className="flex flex-col p-10  bg-cover bg-center bg-[url('/images/background/background_1.png')]">
            <h1 className="text-4xl text-center text-white">Our Services</h1>
            <div className="flex flex-wrap md:justify-between justify-center py-6 gap-y-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="max-w-[290px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <Link href="#">
                    <Image
                      className="rounded-t-lg w-full h-auto"
                      width="0"
                      height="0"
                      sizes="100vw"
                      src={service.image}
                      alt="graphic design"
                    />
                  </Link>
                  <div className="p-5">
                    <Link href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {service.title}
                      </h5>
                    </Link>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 md:line-clamp-none line-clamp-3">
                      {service.content}
                    </p>
                    <button
                      onClick={() => showServiceDetail(index)}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <IconArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {service && serviceDatail && (
              <Modal
                modalImage={service.image}
                modalTitle={service.title}
                escKeyFunc={handleServiceDetail}
                modalContent={modalContent}
              />
            )}
          </div>
        </div>
      )}
    </LayoutBase>
  );
};

export default Services;
