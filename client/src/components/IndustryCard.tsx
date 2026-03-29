interface IndustryCardProps {
  title: string;
  image: string;
}

const IndustryCard = ({ title, image }: IndustryCardProps) => {
  return (
    <div className="relative h-60 overflow-hidden cursor-pointer group">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-[#043685] bg-opacity-60 flex flex-col items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-70 p-6">
        <h3
          className="text-xl font-bold text-white text-center mb-4"
          style={{ fontFamily: 'Domine, serif' }}
        >
          {title}
        </h3>
        <div className="w-12 h-0.5 bg-white"></div>
      </div>
    </div>
  );
};

export default IndustryCard;
