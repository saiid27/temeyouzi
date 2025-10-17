import React, { useState } from 'react';
import './LoginPage.css'; // استيراد ملف CSS الخاص بالتنسيق

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('يرجى ملء جميع الحقول');
      return;
    }
    // إرسال البيانات إلى API أو Google Form أو أي طريقة أخرى
    alert('تم تسجيل الدخول بنجاح');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>تسجيل الدخول</h2>
        <form onSubmit={handleSubmit}>
          <div className="textbox">
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="textbox">
            <input
              type="password"
              placeholder="كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            تسجيل الدخول
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
