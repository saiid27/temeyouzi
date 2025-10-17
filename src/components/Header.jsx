import React, { useState } from "react";
import { HiOutlineLogin } from "react-icons/hi";
import { FaAddressBook } from "react-icons/fa";


function Header() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    section: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, section } = formData;

    // تحقق من ملء الحقول
    if (!name || !email || !phone || !section) {
      alert("يرجى تعبئة جميع الحقول قبل الإرسال");
      return;
    }

    // رسالة الاشتراك
    const message = `👋 مرحبًا،\n\nاسم المشترك: ${name}\nالبريد الإلكتروني: ${email}\nرقم الهاتف: ${phone}\nالقسم: ${section}`;
    const encoded = encodeURIComponent(message);

    // رقمك على واتساب بصيغة دولية
    const phoneNumber = "22249677414"; // 🔴 غيّر هذا الرقم إلى رقمك

    // فتح واتساب
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, "_blank");
  };

  return (
    <>
      <header id="header">
        <nav className="navbar">
          <a href="#" className="logo">
            تميزي | temeyouzi
          </a>

          <div className="account">
            <ul>
              <li>
                <a href="https://login-peach-mu.vercel.app/">
                  <HiOutlineLogin />
                  تسجيل الدخول
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="btn-join"
                  onClick={() => setShowForm(true)} // عند الضغط، يظهر النموذج
                >
                  <FaAddressBook />
                  اشترك الآن
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* نموذج الاشتراك المنبثق */}
      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()} // منع إغلاق المودال عند الضغط داخله
          >
            <h2>📋 نموذج الاشتراك</h2>
            <form onSubmit={handleSubmit}>
              <label>اسم المشترك:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label>البريد الإلكتروني:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>رقم الهاتف:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <label>القسم:</label>
              <input
                type="text"
                name="section"
                value={formData.section}
                onChange={handleChange}
                required
              />

              <div className="btns">
                <button type="submit" className="btn btn-red">
                  إرسال عبر واتساب
                </button>
                <button
                  type="button"
                  className="btn btn-transparent"
                  onClick={() => setShowForm(false)}
                >
                  إغلاق
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
