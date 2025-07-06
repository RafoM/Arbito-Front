import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../store/api/authApi';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [register, { isLoading, error }] = useRegisterMutation();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    phoneNumber: '',
    telegramUserName: '',
    referralCode: '',
    promoCode: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData).unwrap();
      navigate('/login');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  return (
    <div className="register-page">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Last Name
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Country
            <input
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Phone Number
            <input
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Telegram Username
            <input
              name="telegramUserName"
              value={formData.telegramUserName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Referral Code
            <input
              name="referralCode"
              value={formData.referralCode}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Promo Code
            <input
              name="promoCode"
              value={formData.promoCode}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Confirm Password
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit" disabled={isLoading}>Register</button>
        {error && (
          <p className="error">{error.data?.message || 'Registration failed'}</p>
        )}
      </form>
    </div>
  );
};

export default RegisterPage;
