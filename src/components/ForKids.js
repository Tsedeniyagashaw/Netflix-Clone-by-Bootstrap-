import React from 'react';
import Kids from '../assets/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3 (1).png';
import Section from './Section';

function ForKids() {
  return (
    <Section
      image={Kids}
      title="Create profiles for kids"
      description="Send kids on adventures with their favorite character in a space made just for them - free with membership."
      reverse={true}
    />
  );
}

export default ForKids;
