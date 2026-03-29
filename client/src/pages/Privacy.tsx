import Container from '../components/Container';
import SectionWrapper from '../components/SectionWrapper';

const Privacy = () => {
  return (
    <div>
      <div className="bg-[#001b46] text-white py-20 sm:py-24 lg:py-32 pt-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
            >
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Your privacy is fundamental to our relationship and business practices.
            </p>
          </div>
        </Container>
      </div>

      <SectionWrapper background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Walamen, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy outlines how we collect, use, and safeguard data when you interact with our consulting 
                services, website, and professional communications.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                <strong>Last Updated:</strong> March 27, 2026<br />
                <strong>Effective Date:</strong> March 27, 2026
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-16">
              <h2 
                className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6"
                style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
              >
                Information We Collect
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We collect various types of information to provide our consulting services effectively:
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Personal Information:</strong> Name, title, contact information, professional email, phone number, 
                company name, position, business address, and professional credentials.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Business Information:</strong> Industry and sector details, company size and structure, 
                technical infrastructure details, project requirements, and strategic business information.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Technical Information:</strong> IP address, browser information, device and usage data, 
                cookies and tracking technologies, website interaction patterns, and system performance metrics.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Communications:</strong> Email correspondence, meeting notes, project documentation, 
                feedback and survey responses, and marketing preferences.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-16">
              <h2 
                className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6"
                style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
              >
                How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use your information to deliver exceptional consulting services and maintain professional relationships:
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Service Delivery:</strong> To provide engineering solutions, technology services, and strategic consulting 
                tailored to your business needs and project requirements.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Communication:</strong> To respond to inquiries, schedule consultations, share project updates, 
                and maintain ongoing professional relationships with your team.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Project Management:</strong> To manage engagement timelines, coordinate deliverables, track progress, 
                and collaborate effectively with your team members and stakeholders.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Business Operations:</strong> For invoicing, contract administration, compliance with legal and 
                regulatory requirements, and internal business process optimization.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Marketing:</strong> To share relevant insights, event invitations, and information about our services 
                (with your explicit consent and preference settings).
              </p>
            </div>

            {/* Data Protection and Security */}
            <div className="mb-16">
              <h2 
                className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6"
                style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
              >
                Data Protection and Security
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We implement industry-standard security measures to protect your information from unauthorized access, 
                alteration, disclosure, or destruction. Our security framework includes 256-bit SSL encryption for all data 
                transmissions, secure cloud infrastructure with regular security audits, access controls and authentication 
                protocols, regular data backup and disaster recovery systems, and comprehensive employee training on 
                confidentiality and security practices.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Data Retention:</strong> We retain personal information only as long as necessary to fulfill the purposes 
                for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>International Transfers:</strong> Your information may be transferred to and processed in countries 
                where Walamen operates. We ensure appropriate safeguards are in place for international data transfers.
              </p>
            </div>

            {/* Your Privacy Rights */}
            <div className="mb-16">
              <h2 
                className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6"
                style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
              >
                Your Privacy Rights
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Access and Correction:</strong> You may request access to or correction of your personal information 
                by contacting us at privacy@walamen.com. We will respond within 30 days of your request.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Data Portability:</strong> You have the right to request a copy of your personal information in a 
                structured, machine-readable format for transfer to other service providers.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Objection and Restriction:</strong> You may object to or request restriction of certain processing 
                activities, subject to legal and contractual obligations and legitimate business interests.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Right to Erasure:</strong> You may request deletion of your personal information, subject to legal 
                retention requirements and legitimate business interests that may require us to maintain certain data.
              </p>
            </div>

            {/* Cookies and Tracking Technologies */}
            <div className="mb-16">
              <h2 
                className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6"
                style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
              >
                Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We use cookies and similar technologies to enhance your experience, analyze website usage, and deliver 
                relevant content. You can control cookie settings through your browser preferences at any time.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Essential Cookies:</strong> Required for basic website functionality and cannot be disabled in our systems.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website to improve user experience.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Marketing Cookies:</strong> Used to deliver personalized content and advertisements based on your interests.
              </p>
            </div>

            {/* Third-Party Sharing */}
            <div className="mb-16">
              <h2 
                className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6"
                style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
              >
                Third-Party Sharing
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We do not sell your personal information. We may share your data only in the following circumstances:
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Service Providers:</strong> With trusted third-party vendors who assist in delivering our services, 
                such as cloud hosting providers, payment processors, and communication platforms.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Legal Requirements:</strong> When required by law, court order, or government regulation to comply 
                with legal obligations or protect our rights and interests.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Business Transfers:</strong> In connection with mergers, acquisitions, or sales of business assets, 
                where your information may be transferred as part of the business transaction.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-16">
              <h2 
                className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6"
                style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
              >
                Children's Privacy
              </h2>
              <p className="text-gray-600">
                Our services are directed at business professionals and organizations. We do not knowingly collect personal 
                information from children under 18 years of age. If we become aware that we have collected such information, 
                we will take steps to delete it promptly and notify the appropriate authorities if required by law.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-16">
              <h2 
                className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6"
                style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
              >
                Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Privacy Inquiries:</strong> privacy@walamen.com<br />
                <strong>Phone:</strong> +1 (555) 123-4567<br />
                <strong>Address:</strong> 123 Consulting Plaza, Suite 100, Business City, BC 12345, United States
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Data Protection Officer:</strong> dpo@walamen.com<br />
                <strong>Response Time:</strong> Within 30 days<br />
                <strong>Languages:</strong> English, Spanish
              </p>
            </div>

            {/* Policy Updates */}
            <div className="mb-12">
              <h2 
                className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6"
                style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
              >
                Policy Updates
              </h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, 
                or business operations. We will notify you of significant changes by posting the updated policy on our 
                website and, where appropriate, through direct communication with affected parties.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
};

export default Privacy;
