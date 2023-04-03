import LayoutBase from '@/components/Layout/base';
import { Accordion } from '@/components/Widgets/Accordion';
import { useEffect, useRef } from 'react';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const faqs = [
  {
    question: 'What types of businesses do you typically work with?',
    answer:
      'We  work with a wide range of businesses across various industries, including small businesses, corporations, non-profit organizations, educational institutions, e-commerce businesses, healthcare providers, law firms, real estate agencies, hospitality and tourism businesses, and creative agencies. ',
  },
  {
    question: 'How long does it take to complete a project?',
    answer:
      'The time it takes to complete a project can vary based on several factors such as the scope of work, complexity of the project, and the timeline agreed upon by the client and us.  Our company will work with you to understand your project requirements and provide you with a timeline estimate that meets your specific needs. ',
  },
  {
    question:
      'What type of ongoing support and maintenance do you offer after a project or service is completed?',
    answer:
      'We offers a range of ongoing support and maintenance services tailored to meet the specific needs of our clients. We will work with you to develop a support and maintenance plan that ensures the continued success of your website or product. ',
  },
];
const ContactUs = () => {
  const inputFile = useRef<HTMLInputElement>(null);
  const attachFile = () => {
    console.log('attach');
    inputFile?.current?.click();
  };

  useEffect(() => {
    const divElement = inputFile.current;
    console.log(divElement); // logs <div>I'm an element</div>
  }, []);
  return (
    <LayoutBase>
      {(state) => (
        <div className="min-h-screen">
          <div className="flex flex-col p-10  bg-cover bg-center bg-[url('/images/background/background_1.png')]">
            <div>
              <h1 className="text-4xl text-center text-white uppercase">
                Frequently asked questions
              </h1>
              <p className="text-center text-slate-500">
                Please contact us if you cannot find an answer to your question
              </p>

              <div className="flex flex-col justify-center py-6 mb-[24px] md:mb-[48px] text-white">
                {faqs.map((item, index) => (
                  <Accordion
                    classNameActive="border-transparent"
                    key={index}
                    title={
                      <p className="font-500 text-gray-c2 dark:text-white">
                        {item.question}
                      </p>
                    }
                    content={item.answer}
                  />
                ))}
              </div>
            </div>
            <div>
              <h1 className="text-4xl text-center text-white uppercase">
                Contact Us
              </h1>
              <div className="flex justify-between py-6 gap-10">
                <div className="flex flex-col w-1/2 gap-y-4">
                  <h3 className="text-2xl text-white">
                    For Questions and Quotes:
                  </h3>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="rounded-lg p-2"
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Email*"
                    className="rounded-lg p-2"
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    className="rounded-lg p-2"
                  />
                  <div className="cursor-pointer" onClick={attachFile}>
                    <input type="file" ref={inputFile} hidden />
                    <UploadFileIcon className="text-white mr-2" />
                    <span className="text-white">Attach Files</span>
                  </div>
                  <button className="text-center p-2 border rounded-xl text-white">
                    Send
                  </button>
                </div>
                <div className="flex flex-col w-1/2 text-white gap-y-4 pt-10">
                  <p>
                    Let us tailor a service package that meets your needs. Tell
                    us a little about your business, and we will get back to you
                    with some ideas as soon as possible.
                  </p>
                  <h4 className="text-xl">Hours</h4>
                  <div>
                    <p>Monday - Friday: 9am - 5pm</p>
                    <p>Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </LayoutBase>
  );
};

export default ContactUs;
