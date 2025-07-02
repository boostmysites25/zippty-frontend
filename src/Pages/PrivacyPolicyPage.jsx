import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Privacy Policy
        </h1>

        <div className="text-gray-600 space-y-6">
          <p className="text-sm italic">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Introduction
            </h2>
            <p>
              Welcome to Zippty ("we," "our," or "us"). At Zippty, we are
              committed to protecting your privacy and ensuring the security of
              your personal information. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website and use our services.
            </p>
            <p>
              By accessing or using our website and services, you acknowledge
              that you have read and understood this Privacy Policy. If you do
              not agree with our policies and practices, please do not use our
              website or services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Information We Collect
            </h2>

            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Personal Information
              </h3>
              <p>
                We may collect personal information that you voluntarily provide
                to us when you:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Create an account</li>
                <li>Place an order</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact our customer service</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p className="mt-2">This information may include:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Shipping and billing address</li>
                <li>
                  Payment information (processed securely through our payment
                  processor)
                </li>
                <li>Pet information (type, breed, age, etc.)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Automatically Collected Information
              </h3>
              <p>
                When you visit our website, we may automatically collect certain
                information about your device and usage patterns, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Device information</li>
                <li>Pages visited and time spent on those pages</li>
                <li>Referring website</li>
                <li>Click patterns and interactions with our website</li>
              </ul>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              How We Use Your Information
            </h2>
            <p>
              We use the information we collect for various purposes, including
              to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Process and fulfill your orders</li>
              <li>Create and manage your account</li>
              <li>Provide customer support</li>
              <li>
                Send transactional emails (order confirmations, shipping
                updates)
              </li>
              <li>Send marketing communications (if you've opted in)</li>
              <li>Improve our website and product offerings</li>
              <li>Analyze usage patterns and trends</li>
              <li>Prevent fraudulent transactions and monitor against theft</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Cookies and Similar Technologies
            </h2>
            <p>
              We use cookies and similar tracking technologies to collect
              information about your browsing activities. Cookies are small text
              files stored on your device that help us provide you with a better
              browsing experience.
            </p>
            <p>The types of cookies we use include:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>Essential cookies:</strong> Necessary for the website to
                function properly
              </li>
              <li>
                <strong>Functional cookies:</strong> Remember your preferences
                and settings
              </li>
              <li>
                <strong>Analytical cookies:</strong> Help us understand how
                visitors interact with our website
              </li>
              <li>
                <strong>Marketing cookies:</strong> Track your browsing habits
                to deliver targeted advertising
              </li>
            </ul>
            <p className="mt-2">
              You can control cookies through your browser settings. However,
              disabling certain cookies may limit your ability to use some
              features of our website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Third-Party Services
            </h2>
            <p>
              We may share your information with trusted third parties who
              assist us in operating our website, conducting our business, or
              servicing you. These third parties include:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>Payment processors (Razorpay):</strong> To process your
                payments securely
              </li>
              <li>
                <strong>Shipping providers:</strong> To deliver your orders
              </li>
              <li>
                <strong>Email service providers:</strong> To send you
                communications
              </li>
              <li>
                <strong>Analytics providers:</strong> To help us understand
                website usage
              </li>
              <li>
                <strong>Customer service platforms:</strong> To assist with your
                inquiries
              </li>
            </ul>
            <p className="mt-2">
              These third parties are contractually obligated to keep your
              information confidential and use it only for the purposes for
              which we disclose it to them.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information from unauthorized access,
              disclosure, alteration, and destruction. However, no method of
              transmission over the Internet or electronic storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>
            <p>
              Your payment information is processed through our secure payment
              processor, Razorpay, which maintains high-level security standards
              to protect your financial data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Your Rights and Choices
            </h2>
            <p>
              Depending on your location, you may have certain rights regarding
              your personal information, including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate or incomplete information</li>
              <li>Deletion of your personal information</li>
              <li>Restriction or objection to processing</li>
              <li>Data portability</li>
              <li>Withdrawal of consent</li>
            </ul>
            <p className="mt-2">
              To exercise these rights, please contact us using the information
              provided in the "Contact Us" section below.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Children's Privacy
            </h2>
            <p>
              Our website is not intended for children under 13 years of age. We
              do not knowingly collect personal information from children under
              13. If you are a parent or guardian and believe your child has
              provided us with personal information, please contact us, and we
              will delete such information from our records.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. The updated policy will be posted on this page
              with a revised "Last Updated" date. We encourage you to review
              this Privacy Policy periodically.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Contact Us
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="mt-2">
              <p>
                <strong>Email:</strong> info@zippty.com
              </p>
              <p>
                <strong>Address:</strong> JP Colony, Shastri Nagar, Jaipur,
                Rajasthan - 302016
              </p>
              <p>
                <strong>Phone:</strong> +91-XXXXX XXXXX
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
