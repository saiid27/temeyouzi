import React, { useState } from "react";
import { HiOutlineLogin } from "react-icons/hi";
import { FaAddressBook } from "react-icons/fa";


function Header() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
      amount: "1000 MRU", // المبلغ ثابت
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
    const { name, number, amount, section, paymentMethod } = formData;

    // تحقق من ملء الحقول
    if (!name || !number || !amount || !section || !paymentMethod) {
      alert("يرجى تعبئة جميع الحقول قبل الإرسال");
      return;
    }

    // رسالة الاشتراك
     const message = `  مرحبا منصة temeyouzi اود الاشتراك عندكم  ،\n\nاسم الطالب: ${name}\nرقم الهاتف: ${number}\nالمبلغ: ${amount}\nالقسم: ${section}\nطريقة الدفع: ${paymentMethod}`;
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
        

          <div className="account">
            <ul>
              <img src="LOGO.png" alt="go" className="logo-soura" />
              <li>
                <a href="https://login-amzm.vercel.app/">
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
            <h2>📋 نموذج التسجيل</h2>
            <form onSubmit={handleSubmit}>
              <label>اسم الطالب:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label>رقم الهاتف:</label>
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
              />

              <label>المبلغ:</label>
              <input
                type="text"
                name="amount"
                value={formData.amount} // هنا المبلغ ثابت
                disabled // يجعل الحقل غير قابل للتعديل
              />

              <label>القسم:</label>
              <input
                type="text"
                name="section"
                value={formData.section}
                onChange={handleChange}
                required
              />
<img src="bankili.jpg" alt="go" className="prof-img" />
              <label>طريقة الدفع:</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                required
              >
                <option value="">اختر طريقة الدفع</option>
                <option value="بنكي">بنكيلي</option>
                <option value="مصرفي">مصرفي</option>
                <option value="سداد">سداد</option>
                <option value="بيم بنك">بيم بنك</option>
              </select>

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
