import React from 'react';
import Typewriter from 'typewriter-effect';

export default function TypewriterText() {
  return (
    <Typewriter
      options={{
        cursor: '|',
        delay: 75,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString('Felipe Valdez')
          .start();
      }}
    />
  );
}
