import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Consectetur adipiscing elit, sed do",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Eiusmod tempos Lorem ipsum",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    question: "Lorem ipsum dolor sit amet",
    answer:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    question: "Lorem ipsum dolor sit amet",
    answer:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
  },
];

const FAQ = () => {
  return (
    <div className=" w-full px-4 py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Online coaching lessons for remote learning
      </h2>
      <div className="mx-auto w-full max-w-7xl divide-y divide-gray-200 rounded-xl bg-white shadow">
        {faqs.map((faq, index) => (
          <Disclosure as="div" key={index} className="p-6 border-b last:border-none">
            {({ open }) => (
              <>
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span className="text-base font-medium text-gray-800 group-hover:text-gray-600">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    className={`w-5 h-5 transform transition-transform duration-200 ${open ? 'rotate-180' : ''} text-gray-500 group-hover:text-gray-400`}
                  />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm text-gray-600">
                  {faq.answer}
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
