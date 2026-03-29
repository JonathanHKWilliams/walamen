import { Link } from 'react-router-dom';
import Container from './Container';

interface CTASectionProps {
  title?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTASection = ({
  title = "Let's build what's next.",
  buttonText = 'Start a Conversation',
  buttonLink = '/contact'
}: CTASectionProps) => {
  return (
    <section className="py-16 bg-[#043685]">
      <Container>
        <div className="text-center">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
          >
            {title}
          </h2>
          <div className="w-12 h-0.5 bg-white mb-8 mx-auto"></div>
          <Link
            to={buttonLink}
            className="inline-block bg-[#BE000B] text-white px-6 py-3 text-base font-semibold hover:bg-[#9B0009] transition-colors"
          >
            {buttonText}
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
