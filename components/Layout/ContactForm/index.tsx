import { useRef } from 'react';
import UploadFileIcon from '@mui/icons-material/UploadFile';

export const ContactForm = () => {
  const inputFile = useRef<HTMLInputElement>(null);
  const attachFile = () => {
    inputFile?.current?.click();
  };

  return (
    <div>
      <h1 className="text-2xl md:text-4xl text-center text-white uppercase">
        Contact Us
      </h1>
      <div className="flex flex-col md:flex-row md:justify-between  py-6 gap-10">
        <div className="flex flex-col w-full gap-y-4">
          <h3 className="text-lg md:text-2xl text-white">
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
        <div className="flex flex-col w-full text-white gap-y-4 pt-10">
          <p>
            Let us tailor a service package that meets your needs. Tell us a
            little about your business, and we will get back to you with some
            ideas as soon as possible.
          </p>
          <h4 className="text-xl">Hours</h4>
          <div>
            <p>Monday - Friday: 9am - 5pm</p>
            <p>Saturday - Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};
