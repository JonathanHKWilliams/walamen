import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  number: string;
}

const ProcessStep = ({ icon: Icon, title, description, number }: ProcessStepProps) => {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#043685] text-white mb-3 sm:mb-4">
        <Icon size={20} className="sm:hidden" />
        <Icon size={28} className="hidden sm:block" />
      </div>
      <div className="text-sm font-bold text-[#BE000B] mb-1 sm:mb-2">{number}</div>
      <h3 className="text-lg sm:text-xl font-bold text-[#0A0A0A] mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default ProcessStep;
