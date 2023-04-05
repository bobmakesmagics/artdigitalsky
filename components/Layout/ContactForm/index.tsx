import { useRef, useState } from 'react';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { IconSend } from '@/components/Common/Icons';

export const ContactForm = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [errors, setErrors] = useState<{ [key: string]: boolean }>();
  const [buttonText, setButtonText] = useState('Send');

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const inputFile = useRef<HTMLInputElement>(null);
  const attachFile = () => {
    inputFile?.current?.click();
  };

  const handleValidation = () => {
    let tempErrors: { [key: string]: boolean } = {};
    let isValid = true;

    if (!name?.length) {
      tempErrors['name'] = true;
      isValid = false;
    }

    if (!email?.length) {
      tempErrors['email'] = true;
      isValid = false;
    }

    // if (!subject?.length) {
    //   tempErrors['subject'] = true;
    //   isValid = false;
    // }

    if (!message?.length) {
      tempErrors['message'] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log('errors', errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowSuccessMessage(false);
    setShowFailureMessage(false);
    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText('Sending');
      const res = await fetch('/api/sendgrid', {
        body: JSON.stringify({
          email: email,
          name: name,
          subject: subject,
          message: message,
        }),
        headers: {
          Content_Type: 'application/json',
        },
        method: 'POST',
      });
      const { error } = await res.json();
      if (error) {
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText('Send');

        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
        setSubject('');
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText('Send');
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
      setSubject('');
    }
  };

  return (
    <div>
      <h1 className="text-2xl md:text-4xl text-center text-white uppercase">
        Contact Us
      </h1>
      <div className="flex flex-col md:flex-row md:justify-between  py-6 gap-10">
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-y-4">
          <h3 className="text-lg md:text-2xl text-white">
            For Questions and Quotes:
          </h3>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="rounded-lg p-2"
          />
          {errors?.name && (
            <p className="text-red-500">Name cannot be empty.</p>
          )}
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email*"
            className="rounded-lg p-2"
          />
          {errors?.email && (
            <p className="text-red-500">Email cannot be empty.</p>
          )}
          {/* <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            className="rounded-lg p-2"
          />
          {errors?.subject && (
            <p className="text-red-500">Subject cannot be empty.</p>
          )} */}
          <textarea
            name="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="rounded-lg p-2"
          />
          {errors?.message && (
            <p className="text-red-500">Message body cannot be empty.</p>
          )}
          <div className="cursor-pointer" onClick={attachFile}>
            <input type="file" ref={inputFile} hidden />
            <UploadFileIcon className="text-white mr-2" />
            <span className="text-white">Attach Files</span>
          </div>
          <button
            type="submit"
            className="text-center p-2 border rounded-xl text-white flex justify-center items-center"
          >
            <span className="mr-2">{buttonText}</span>
            <IconSend className="h-5 w-5" />
          </button>
          <div className="text-left">
            {showSuccessMessage && (
              <p className="text-green-500 font-semibold text-sm my-2">
                Thankyou! Your Message has been delivered.
              </p>
            )}
            {showFailureMessage && (
              <p className="text-red-500">
                Oops! Something went wrong, please try again.
              </p>
            )}
          </div>
        </form>
        <div className="flex flex-col w-full text-white gap-y-4 pt-10">
          <p>
            Let us tailor a service package that meets your needs. Tell us a
            little about your business, and we will get back to you with some
            ideas as soon as possible.
          </p>
          <h4 className="text-xl">
            You can contact to these emails or the Whatsapp directly.
          </h4>
          <div>
            <p>Email: tajana@artdigitalsky.com</p>
            <p>Email: denis@artdigitalsky.com</p>
            <p>Whatsapp: +1 (689) 267-4035</p>
          </div>
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
