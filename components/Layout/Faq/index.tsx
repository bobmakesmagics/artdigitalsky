import { Accordion } from '@/components/Widgets/Accordion';

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
export const Faq = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl text-center text-white uppercase">
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
  );
};
