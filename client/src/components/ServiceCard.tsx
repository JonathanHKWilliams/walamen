interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard = ({ title, description }: ServiceCardProps) => {
  return (
    <div className="group cursor-pointer transition-all duration-300 hover:translate-y-[-4px]">
      <div className="border-t-2 border-[#043685] pt-6">
        <h3 className="text-xl font-bold text-[#0A0A0A] mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
