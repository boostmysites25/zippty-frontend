import React from "react";

const TermsConditionsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Terms and Conditions
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
              Welcome to Zippty. These Terms and Conditions govern your use of
              our website and the purchase of products from our online store. By
              accessing our website or placing an order, you agree to be bound
              by these Terms and Conditions.
            </p>
            <p>
              Please read these Terms and Conditions carefully before using our
              website or making a purchase. If you do not agree to all the terms
              and conditions, you must not use our website or services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Definitions
            </h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>"We," "us," "our," and "Zippty"</strong> refer to Zippty
                and its owners, directors, officers, employees, and affiliates.
              </li>
              <li>
                <strong>"Website"</strong> refers to the website located at
                www.zippty.com and all associated subdomains.
              </li>
              <li>
                <strong>"You" and "your"</strong> refer to the user or viewer of
                our website or the purchaser of our products.
              </li>
              <li>
                <strong>"Products"</strong> refers to the pet playing products
                and accessories available for purchase on our website.
              </li>
              <li>
                <strong>"Terms"</strong> refers to these Terms and Conditions.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Account Registration
            </h2>
            <p>
              To make purchases on our website, you may need to create an
              account. When you create an account, you agree to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Keep your password confidential and secure</li>
              <li>
                Be responsible for all activities that occur under your account
              </li>
              <li>
                Notify us immediately of any unauthorized use of your account
              </li>
            </ul>
            <p className="mt-2">
              We reserve the right to suspend or terminate your account if we
              suspect any fraudulent activity or violation of these Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Products and Pricing
            </h2>
            <p>
              We strive to provide accurate product descriptions, images, and
              pricing information. However, we do not warrant that product
              descriptions, images, or other content on our website are
              accurate, complete, reliable, current, or error-free.
            </p>
            <p>
              All prices are displayed in Indian Rupees (INR) and are inclusive
              of applicable taxes unless stated otherwise. We reserve the right
              to change prices at any time without notice.
            </p>
            <p>
              In the event of a pricing error, we reserve the right to cancel
              any orders placed for products listed at an incorrect price.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Order Placement and Acceptance
            </h2>
            <p>
              When you place an order through our website, you are making an
              offer to purchase the products in your cart. We reserve the right
              to accept or decline your order for any reason, including but not
              limited to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Product unavailability</li>
              <li>Errors in pricing or product information</li>
              <li>Suspected fraudulent activity</li>
              <li>Inability to verify your payment information</li>
            </ul>
            <p className="mt-2">
              An order is not accepted until we send you an order confirmation
              email. If you do not receive an order confirmation email within 24
              hours, please contact our customer service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Payment
            </h2>
            <p>
              We accept various payment methods as indicated on our website. All
              payments are processed securely through our payment processor,
              Razorpay.
            </p>
            <p>
              By providing your payment information, you represent and warrant
              that:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                You have the legal right to use the payment method you provide
              </li>
              <li>
                The payment information you provide is true, correct, and
                complete
              </li>
              <li>
                You authorize us to charge your payment method for the total
                amount of your order (including taxes and shipping fees)
              </li>
            </ul>
            <p className="mt-2">
              We reserve the right to verify your payment information before
              processing your order.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Shipping and Delivery
            </h2>
            <p>
              We ship products to the addresses provided by you during the
              checkout process. You are responsible for providing accurate
              shipping information.
            </p>
            <p>
              Shipping times and costs are estimated and may vary based on your
              location, the products ordered, and other factors. We are not
              responsible for delays caused by shipping carriers, customs, or
              other circumstances beyond our control.
            </p>
            <p>
              Risk of loss and title for products pass to you upon delivery of
              the products to the shipping carrier.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Returns and Refunds
            </h2>
            <p>
              We want you to be completely satisfied with your purchase. If you
              are not satisfied, you may return eligible products within 30 days
              of delivery for a refund or exchange, subject to the following
              conditions:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                Products must be unused, in their original packaging, and in
                resalable condition
              </li>
              <li>
                Certain products, such as personalized items or hygiene
                products, may not be eligible for return
              </li>
              <li>
                You are responsible for the cost of return shipping unless the
                product is defective or we made an error
              </li>
              <li>Refunds will be issued to the original payment method</li>
            </ul>
            <p className="mt-2">
              To initiate a return, please contact our customer service with
              your order number and reason for return.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Product Warranties
            </h2>
            <p>
              We warrant that our products will be free from defects in
              materials and workmanship under normal use for a period of 90 days
              from the date of delivery. This warranty does not cover damage
              caused by accident, misuse, abuse, or normal wear and tear.
            </p>
            <p>
              If a product is defective, your sole remedy is to return the
              product for repair, replacement, or refund, at our discretion.
            </p>
            <p>
              EXCEPT AS EXPRESSLY PROVIDED HEREIN, WE MAKE NO WARRANTIES,
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY IMPLIED
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
              OR NON-INFRINGEMENT.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Intellectual Property
            </h2>
            <p>
              All content on our website, including but not limited to text,
              graphics, logos, images, product descriptions, and software, is
              the property of Zippty or its content suppliers and is protected
              by copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, display, sell, lease, transmit,
              create derivative works from, translate, modify, reverse-engineer,
              disassemble, decompile, or otherwise exploit our website or any
              portion of it without our express written consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              User Conduct
            </h2>
            <p>When using our website, you agree not to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Submit false or misleading information</li>
              <li>Upload or transmit viruses or malicious code</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>
                Attempt to gain unauthorized access to our systems or user
                accounts
              </li>
              <li>
                Engage in any activity that could damage, disable, or impair our
                website or servers
              </li>
            </ul>
            <p className="mt-2">
              We reserve the right to terminate your access to our website for
              violation of these Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Limitation of Liability
            </h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL ZIPPTY,
              ITS DIRECTORS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR ANY
              INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS
              OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES,
              ARISING OUT OF OR RELATING TO YOUR USE OF OR INABILITY TO USE OUR
              WEBSITE OR PRODUCTS.
            </p>
            <p>
              OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATING
              TO THESE TERMS OR YOUR USE OF OUR WEBSITE OR PRODUCTS SHALL NOT
              EXCEED THE AMOUNT PAID BY YOU FOR THE PRODUCTS GIVING RISE TO SUCH
              LIABILITY.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Indemnification
            </h2>
            <p>
              You agree to indemnify, defend, and hold harmless Zippty, its
              directors, officers, employees, agents, and affiliates from and
              against any and all claims, liabilities, damages, losses, costs,
              expenses, or fees (including reasonable attorneys' fees) arising
              from or relating to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Your violation of these Terms</li>
              <li>Your use of our website or products</li>
              <li>Your violation of any rights of another person or entity</li>
              <li>Your violation of any applicable laws or regulations</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Governing Law and Jurisdiction
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of India, without regard to its conflict of law
              principles.
            </p>
            <p>
              Any dispute arising out of or relating to these Terms or your use
              of our website or products shall be subject to the exclusive
              jurisdiction of the courts located in Jaipur, Rajasthan, India.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Changes to These Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. The
              updated Terms will be posted on this page with a revised "Last
              Updated" date. Your continued use of our website after any such
              changes constitutes your acceptance of the new Terms.
            </p>
            <p>
              It is your responsibility to review these Terms periodically for
              changes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Contact Us
            </h2>
            <p>
              If you have any questions or concerns about these Terms, please
              contact us at:
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

export default TermsConditionsPage;
