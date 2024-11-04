import React from 'react';


const Footer = () => {
  const footerSections = [
    {
      links: [
        { href: '#hd', text: 'FAQ' },
        { href: '#hd', text: 'Account' },
        { href: '#hd', text: 'Investor Relation' },
        { href: '#hd', text: 'Ways to Watch' },
      ],
    },
    {
      links: [
        { href: '#hd', text: 'Privacy' },
        { href: '#hd', text: 'Corporate Information' },
        { href: '#hd', text: 'Speed Test' },
        { href: '#hd', text: 'Only on Netflix' },
      ],
    },
    {
      links: [
        { href: '#hd', text: 'Help Center' },
        { href: '#hd', text: 'Media Center' },
        { href: '#hd', text: 'Jobs' },
        { href: '#hd', text: 'Terms of Use' },
      ],
    },
    {
      links: [
        { href: '#hd', text: 'Cookies Preferences' },
        { href: '#hd', text: 'Contact Us' },
        { href: '#hd', text: 'Legal Notices' },
      ],
    },
  ];

  return (
    <div>
      <div className="bg-black row border-bottom footer pb-5  px-4">
        <a href="#hd" className="mb-2 pt-5 d-flex justify-content-start text-gray footer">
          Questions? Contact us.
        </a>
        <div className="footer list-unstyled row">
          {footerSections.map((section, index) => (
            <div className="col-lg-3 col-sm-6" key={index}>
              <ul className="list-unstyled d-flex flex-column pb-0 mb-0">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="px-0">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="language mt-3 mb-3 d-flex justify-content-start">
          <span className="border border-black bg-dark rounded pt-1 pb-1 px-3 text-white">
            English
          </span>
        </div>
        <p className="text-gray d-flex justify-content-start">Netflix Ethiopia</p>
      </div>
    </div>
  );
};

export default Footer;