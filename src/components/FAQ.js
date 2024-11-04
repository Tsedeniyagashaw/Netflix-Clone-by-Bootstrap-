import React, { useState, useEffect } from 'react';
import $ from 'jquery';



function FAQ() {
  const [openAnswers, setOpenAnswers] = useState({});

  const toggleAnswer = (index) => {
    setOpenAnswers((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  useEffect(() => {
    
    faqData.forEach((_, index) => {
      const answerElement = $(`#answer-${index}`);
      if (openAnswers[index]) {
        answerElement.stop(true, true).slideDown(); 
      } else {
        answerElement.stop(true, true).slideUp(); 
      }
    });
  }, [openAnswers]);

  return (
    <div>
      <div className="faq bg-black row text-center text-white px-lg-4 mytxt ">
        <h3 className="bolder-lg text-left pt-3 pb-3 mytitle">Frequently Asked Questions</h3>
        {faqData.map((faq, index) => (
          <>
            <div className="spans">
              <p className="text-white border border-black bg-dark pt-2 pb-2 mx-5 mb-0 ">
                {faq.question}
                <span
                  className="open cursor-pointer float-end pe-2"
                  onClick={() => toggleAnswer(index)}
                >
                  {openAnswers[index] ? '×' : '+'}
                </span>
              </p>
              <div
                id={`answer-${index}`} 
                className="drop-menu bg-dark text-white px-2 mx-5 mytxt"
                style={{ display: 'none' }} 
              >
                {faq.answer.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </>
        ))}
        <p className="px-3 mt-5 mb-3 mytxt">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
    




    </div>
    
  );
}

export default FAQ;







const faqData = [
  {
    question: 'What is Netflix?',
    answer: [
      'Netflix is a streaming service that offers a wide variety of award winning TV shows, movies, anime, documentaries, and more on thousand of internet-connected devices.',
      'You can watch as much as you want, whenever you want without a single commercial - all for one low monthly price. There\'s always something new to discover and new TV shows and movies are added every week!',
    ],
  },
  {
    question: 'How much does Netflix cost?',
    answer: [
      'Watch Netflix on your smartphone,tablet, SmartTV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD 9.99 to USD 2.99 a month. No extra costs, no contracts.',
    ],
  },
  {
    question: 'Where can i watch?',
    answer: [
      'Watch anywhere, anytime. sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.',
      'You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you\'re on the go and without an internet connection. Take Netflix with you anywhere.',
    ],
  },
  {
    question: 'How do i Cancel?',
    answer: [
      'Netflix is flexible. There are no pesky contracts and no commitments. Your account online in two clicks. there are no cancellation fees - starts or stop your account anytime.',
    ],
  },
  {
    question: 'What can i watch on Netflix?',
    answer: [
      'Netflix has an extension library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
    ],
  },
  {
    question: 'Is Netflix good for kids?',
    answer: [
      'The Netflix Kids experiance is included in your membership to give parents control while kids Enjoy family-friendly TV shows and movies in their own space.',
      'Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don\'t want kids to see.',
    ],
  },
];