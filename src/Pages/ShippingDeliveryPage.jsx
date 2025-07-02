import React from "react";

const ShippingDeliveryPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Shipping & Delivery Policy
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
              At Zippty, we strive to provide reliable, timely, and affordable
              shipping options for all our pet products. This Shipping &
              Delivery Policy outlines our shipping methods, delivery
              timeframes, costs, and other important information to ensure a
              smooth shopping experience.
            </p>
            <p>
              By placing an order on our website, you agree to the terms of this
              Shipping & Delivery Policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Order Processing
            </h2>

            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Processing Time
              </h3>
              <p>
                All orders are processed within 1-2 business days (Monday
                through Friday, excluding holidays) after receiving your order
                confirmation email. Orders placed after 2:00 PM IST may be
                processed the following business day.
              </p>
              <p className="mt-2">
                During peak seasons or promotional periods, processing times may
                be slightly longer. We will notify you if there are any
                significant delays in processing your order.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Order Confirmation
              </h3>
              <p>
                You will receive an order confirmation email once your order has
                been placed. This email will include your order number and a
                summary of the items purchased.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Shipping Confirmation
              </h3>
              <p>
                Once your order has been shipped, you will receive a shipping
                confirmation email with tracking information (when available).
                This will allow you to track your package's journey to your
                doorstep.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Shipping Methods & Delivery Times
            </h2>

            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Domestic Shipping (Within India)
              </h3>
              <p>
                We offer the following shipping methods for deliveries within
                India:
              </p>
              <div className="overflow-x-auto mt-3">
                <table className="min-w-full border border-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-2 border border-gray-200 text-left">
                        Shipping Method
                      </th>
                      <th className="px-4 py-2 border border-gray-200 text-left">
                        Estimated Delivery Time
                      </th>
                      <th className="px-4 py-2 border border-gray-200 text-left">
                        Cost
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border border-gray-200">
                        Standard Shipping
                      </td>
                      <td className="px-4 py-2 border border-gray-200">
                        4-7 business days
                      </td>
                      <td className="px-4 py-2 border border-gray-200">
                        ₹49 (Free for orders above ₹499)
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-2 border border-gray-200">
                        Express Shipping
                      </td>
                      <td className="px-4 py-2 border border-gray-200">
                        2-3 business days
                      </td>
                      <td className="px-4 py-2 border border-gray-200">₹99</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-200">
                        Same-Day Delivery
                      </td>
                      <td className="px-4 py-2 border border-gray-200">
                        Same day (orders placed before 12 PM)
                      </td>
                      <td className="px-4 py-2 border border-gray-200">
                        ₹199 (Available only in select cities)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                Same-day delivery is currently available in the following
                cities: Delhi NCR, Mumbai, Bangalore, Chennai, Hyderabad, Pune,
                Jaipur, and Kolkata.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800">
                International Shipping
              </h3>
              <p>
                We currently ship to select countries in Asia, Europe, North
                America, and Oceania. International shipping rates and delivery
                times vary based on the destination country, package weight, and
                shipping method selected at checkout.
              </p>
              <p className="mt-2">
                Estimated delivery times for international orders:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Asia:</strong> 7-14 business days
                </li>
                <li>
                  <strong>Europe:</strong> 10-21 business days
                </li>
                <li>
                  <strong>North America:</strong> 10-21 business days
                </li>
                <li>
                  <strong>Oceania:</strong> 14-28 business days
                </li>
              </ul>
              <p className="mt-2">
                Please note that international orders may be subject to customs
                duties, taxes, and fees imposed by the destination country.
                These charges are the responsibility of the recipient and are
                not included in our shipping fees.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Shipping Costs
            </h2>
            <p>
              Shipping costs are calculated based on the weight of your order,
              the shipping method selected, and your delivery location. The
              exact shipping cost will be displayed during checkout before you
              complete your purchase.
            </p>
            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Free Shipping
              </h3>
              <p>
                We offer free standard shipping on all domestic orders over
                ₹499. This offer applies only to standard shipping within India
                and does not extend to express or same-day delivery options.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Shipping Restrictions
            </h2>
            <p>
              Some products may have shipping restrictions due to their nature,
              size, or regulatory requirements. These restrictions will be
              clearly indicated on the product page.
            </p>
            <p>
              We reserve the right to refuse shipping to certain locations where
              we cannot guarantee safe delivery of our products or where
              shipping is prohibited by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Tracking Your Order
            </h2>
            <p>
              Once your order has been shipped, you will receive a shipping
              confirmation email with tracking information (when available). You
              can also track your order by:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                Logging into your Zippty account and viewing your order history
              </li>
              <li>
                Clicking the tracking link in your shipping confirmation email
              </li>
              <li>
                Contacting our customer service team with your order number
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Delivery Issues
            </h2>

            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Incorrect or Incomplete Address
              </h3>
              <p>
                It is your responsibility to provide accurate and complete
                shipping information. If a package is returned to us due to an
                incorrect or incomplete address, you will be responsible for the
                cost of reshipping the order.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Failed Delivery Attempts
              </h3>
              <p>
                If the shipping carrier makes multiple failed delivery attempts,
                the package may be returned to our facility. In such cases, you
                may be responsible for the cost of reshipping the order.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Lost or Damaged Packages
              </h3>
              <p>
                If your package appears to be lost or damaged during transit,
                please contact our customer service team within 7 days of the
                expected delivery date. We will work with the shipping carrier
                to locate your package or process a claim for damaged items.
              </p>
              <p className="mt-2">
                For damaged packages, please take photos of the damaged
                packaging and contents before contacting us. This will help
                expedite the claims process.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Shipping to Multiple Addresses
            </h2>
            <p>
              Currently, we can only ship an order to a single address. If you
              wish to ship products to multiple addresses, please place separate
              orders for each shipping address.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Order Pickup
            </h2>
            <p>
              We offer in-store pickup at our Jaipur location for customers who
              prefer to collect their orders in person. To use this service,
              select "Store Pickup" as your shipping method during checkout.
            </p>
            <p>
              You will receive an email notification when your order is ready
              for pickup. Please bring a valid photo ID and your order
              confirmation when collecting your order.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Changes to Your Order
            </h2>
            <p>
              If you need to make changes to your order after it has been
              placed, please contact our customer service team as soon as
              possible. We will do our best to accommodate your request, but we
              cannot guarantee changes once an order has entered the processing
              stage.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Changes to This Policy
            </h2>
            <p>
              We reserve the right to modify this Shipping & Delivery Policy at
              any time. Changes will be effective immediately upon posting on
              our website. It is your responsibility to review this policy
              periodically for changes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Contact Us
            </h2>
            <p>
              If you have any questions about our Shipping & Delivery Policy,
              please contact us at:
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

export default ShippingDeliveryPage;
