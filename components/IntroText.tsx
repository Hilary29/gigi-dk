import React from 'react';

interface IntroTextProps {
  title: string;
  description: string;
}

const IntroText: React.FC<IntroTextProps> = ({ title, description }) => {
  return (
    <div
      className="flex flex-col items-center sm:items-start gap-1 absolute md:static "
    >
      {/* Title */}
      <p className="text-2xl sm:text-3xl font-semibold  text-black">
        {title}
      </p>
      {/* Description */}
      <p
        className="text-base sm:text-lg font-normal leading-6 text-secondary-600 "
      >
        {description}
      </p>
    </div>
  );
};

export default IntroText;
