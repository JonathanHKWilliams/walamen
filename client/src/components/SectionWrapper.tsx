interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'blue';
}

const SectionWrapper = ({
  children,
  className = '',
  background = 'white'
}: SectionWrapperProps) => {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-[#F5F7FA]',
    blue: 'bg-[#043685]',
  };

  return (
    <section className={`py-32 ${bgColors[background]} ${className}`}>
      {children}
    </section>
  );
};

export default SectionWrapper;
