import React from "react";

const CancellationRefundPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Cancellation & Refund Policy
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
              At Zippty, we want you to be completely satisfied with your
              purchase. We understand that sometimes you may need to cancel an
              order or return a product. This Cancellation & Refund Policy
              outlines the procedures and guidelines for cancellations, returns,
              and refunds.
            </p>
            <p>
              By placing an order on our website, you agree to the terms of this
              Cancellation & Refund Policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Order Cancellation
            </h2>

            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Cancellation Before Shipping
              </h3>
              <p>
                You may cancel your order at any time before it has been
                shipped. To cancel an order, please contact our customer service
                team immediately with your order number and a request for
                cancellation.
              </p>
              <p className="mt-2">
                If your order has not yet been processed or shipped, we will
                cancel it and issue a full refund to your original payment
                method within 5-7 business days.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Cancellation After Shipping
              </h3>
              <p>
                Once your order has been shipped, it cannot be cancelled.
                However, you may refuse to accept the delivery or return the
                product after delivery according to our return policy.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Return Policy
            </h2>

            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Return Eligibility
              </h3>
              <p>
                You may return most new, unopened items within 30 days of
                delivery for a full refund. We also accept returns of opened
                items within 7 days of delivery if the item is defective,
                damaged, or significantly different from what was described on
                our website.
              </p>
              <p className="mt-2">
                To be eligible for a return, your item must be:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>In the same condition that you received it</li>
                <li>In the original packaging, when possible</li>
                <li>Complete with all accessories, tags, and documentation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Non-Returnable Items
              </h3>
              <p>The following items cannot be returned:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Personalized or custom-made products</li>
                <li>
                  Hygiene products that have been opened or used (for pet health
                  and safety reasons)
                </li>
                <li>Edible items such as pet treats once opened</li>
                <li>Downloadable products or digital content</li>
                <li>Gift cards</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Return Process
              </h3>
              <p>To initiate a return, please follow these steps:</p>
              <ol className="list-decimal pl-6 mt-2 space-y-1">
                <li>
                  Contact our customer service team with your order number and
                  reason for return
                </li>
                <li>
                  Our team will review your request and provide you with a
                  Return Merchandise Authorization (RMA) number
                </li>
                <li>
                  Pack the item securely in its original packaging, if possible
                </li>
                <li>Include the RMA number on the outside of the package</li>
                <li>
                  Ship the package to the address provided by our customer
                  service team
                </li>
              </ol>
              <p className="mt-2">
                We recommend using a trackable shipping service and purchasing
                shipping insurance for valuable items. We cannot guarantee that
                we will receive your returned item.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Refund Process
            </h2>

            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Refund Timeline
              </h3>
              <p>
                Once we receive and inspect your return, we will notify you of
                the status of your refund. If your return is approved, we will
                initiate a refund to your original payment method. The time it
                takes for the refund to appear in your account depends on your
                payment provider's processing time, but typically takes 5-7
                business days.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Full Refunds
              </h3>
              <p>Full refunds will be issued for:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Items returned in their original, unopened condition within 30
                  days of delivery
                </li>
                <li>
                  Defective or damaged items reported within 7 days of delivery
                </li>
                <li>
                  Items significantly different from their description on our
                  website
                </li>
                <li>Orders cancelled before shipping</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Partial Refunds
              </h3>
              <p>Partial refunds may be issued for:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Items returned with missing parts or accessories</li>
                <li>Items showing signs of use or wear beyond inspection</li>
                <li>
                  Items returned outside the 30-day return window but within 45
                  days
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Refund Methods
              </h3>
              <p>
                Refunds will be issued to the original payment method used for
                the purchase:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Credit/Debit Card: Refunded to the same card</li>
                <li>
                  Razorpay: Processed through Razorpay to your original payment
                  method
                </li>
                <li>Store Credit: Added to your Zippty account</li>
              </ul>
              <p className="mt-2">
                In some cases, we may offer store credit instead of a monetary
                refund, especially for returns made after the standard return
                window.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Shipping Costs for Returns
            </h2>
            <p>
              The customer is responsible for paying the shipping costs for
              returning the item. Shipping costs are non-refundable.
            </p>
            <p>
              If you receive a refund, the cost of return shipping will be
              deducted from your refund.
            </p>
            <p>
              However, if the return is due to our error (you received an
              incorrect or defective item), we will cover the return shipping
              costs and issue a full refund including any original shipping
              charges.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Exchanges
            </h2>
            <p>
              We do not process direct exchanges. If you wish to exchange an
              item, please return the original item for a refund and place a new
              order for the desired item.
            </p>
            <p>
              If the exchange is due to a defective product or our error, please
              contact our customer service team for assistance.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Damaged or Defective Items
            </h2>
            <p>
              If you receive a damaged or defective item, please contact our
              customer service team within 7 days of delivery with:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Your order number</li>
              <li>A description of the damage or defect</li>
              <li>Photos of the damaged or defective item</li>
            </ul>
            <p className="mt-2">
              We will arrange for the return of the item and provide a full
              refund or replacement, at your choice.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Late or Missing Refunds
            </h2>
            <p>
              If you haven't received a refund within 10 business days after our
              confirmation of your refund approval, please check your bank
              account again.
            </p>
            <p>
              Then contact your credit card company or bank, as it may take some
              time for the refund to be officially posted to your account. There
              is often some processing time before a refund is posted.
            </p>
            <p>
              If you've done all of this and you still have not received your
              refund, please contact our customer service team.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Changes to This Policy
            </h2>
            <p>
              We reserve the right to modify this Cancellation & Refund Policy
              at any time. Changes will be effective immediately upon posting on
              our website. It is your responsibility to review this policy
              periodically for changes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Contact Us
            </h2>
            <p>
              If you have any questions about our Cancellation & Refund Policy,
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

export default CancellationRefundPage;
