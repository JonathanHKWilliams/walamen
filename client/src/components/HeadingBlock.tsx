interface HeadingBlockProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  label?: string; // New prop for section label
}

const HeadingBlock = ({
  title,
  subtitle,
  centered = false,
  light = false,
  label
}: HeadingBlockProps) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      {label && (
        <p className={`text-lg md:text-xl mb-4 ${
          light ? 'text-gray-200' : 'text-gray-600'
        }`}>
          {label}
        </p>
      )}
      <h2
        className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ${
          light ? 'text-white' : 'text-[#0A0A0A]'
        }`}
        style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
      >
        {title}
      </h2>
      <div className={`w-12 h-0.5 ${light ? 'bg-white' : 'bg-[#BE000B]'} mb-6 ${centered ? 'mx-auto' : ''}`}></div>
      {subtitle && (
        <p
          className={`text-lg md:text-xl max-w-3xl ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-gray-200' : 'text-gray-600'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default HeadingBlock;
