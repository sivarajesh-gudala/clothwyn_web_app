import Button from "../../../components/Button/Button";
import ClothwynLogo from "../../../components/clothwynlogo/ClothWynLogo";
import Input from "../../../components/Input/Input";
import "../auth.scss";

const Signup = () => {
  return (
    <section className="auth-page">
      <div className="auth-card">
        <ClothwynLogo size="large" />

        <Input placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />

        <Button>Create Account</Button>

        <Button variant="outline">Already have an account? Login</Button>
      </div>
    </section>
  );
};

export default Signup;
