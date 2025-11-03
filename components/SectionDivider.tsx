
import React from 'react';
import { HeartDividerIcon } from './Icons';

const SectionDivider: React.FC = () => {
  return (
    <div className="py-10 bg-transparent flex justify-center items-center">
      <HeartDividerIcon className="w-64 h-auto" />
    </div>
  );
};

export default SectionDivider;