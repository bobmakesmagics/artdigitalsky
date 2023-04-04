import LayoutBase from '@/components/Layout/base';
import { Faq } from '@/components/Layout/Faq';
import { ContactForm } from '@/components/Layout/ContactForm';

const ContactUs = () => {
  return (
    <LayoutBase>
      {(state) => (
        <div className="min-h-screen">
          <div className="flex flex-col p-10  bg-cover bg-center bg-[url('/images/background/background_1.png')]">
            <Faq />
            <ContactForm />
          </div>
        </div>
      )}
    </LayoutBase>
  );
};

export default ContactUs;
