import "./PrivacyPolicy.scss";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      <div className="privacy-card">
        <h1>Privacy Policy</h1>
        <p className="text-muted">Last updated: {new Date().getFullYear()}</p>

        <section>
          <h3>1. Introduction</h3>
          <p>
            Welcome to Clothwyn. Your privacy is important to us. This Privacy
            Policy explains how we collect, use, and protect your information
            when you use our website.
          </p>
        </section>

        <section>
          <h3>2. Information We Collect</h3>
          <p>
            We may collect personal information such as your name, email
            address, phone number, shipping address, and payment details when
            you place an order or create an account.
          </p>
        </section>

        <section>
          <h3>3. How We Use Your Information</h3>
          <ul>
            <li>To process and deliver your orders</li>
            <li>To improve our products and services</li>
            <li>To communicate with you about your orders and offers</li>
            <li>To provide customer support</li>
          </ul>
        </section>

        <section>
          <h3>4. Data Security</h3>
          <p>
            We take appropriate security measures to protect your personal data
            against unauthorized access, alteration, or disclosure.
          </p>
        </section>

        <section>
          <h3>5. Cookies</h3>
          <p>
            Clothwyn may use cookies to improve your browsing experience and
            analyze website traffic.
          </p>
        </section>

        <section>
          <h3>6. Third-Party Services</h3>
          <p>
            We may use trusted third-party services for payment processing,
            analytics, and delivery services. These services have their own
            privacy policies.
          </p>
        </section>

        <section>
          <h3>7. Your Rights</h3>
          <p>
            You have the right to access, update, or delete your personal
            information. You can contact us for any privacy-related concerns.
          </p>
        </section>

        <section>
          <h3>8. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at <strong>support@clothwyn.com</strong>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
