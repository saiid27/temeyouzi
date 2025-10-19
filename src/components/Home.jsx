import React, { useState } from "react";


function Home() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    amount: "100MRU", // المبلغ ثابت
    section: "",
    paymentMethod: "", // طريقة الدفع
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

    // ✅ تحقق من ملء الحقول
    if (!name || !number || !amount || !section || !paymentMethod) {
      alert("يرجى تعبئة جميع الحقول قبل الإرسال");
      return;
    }

    // ✅ الرسالة المرسلة إلى واتساب
    const message = `  مرحبا منصة Temeyouzi اود التسجيل   ،\n\nاسم الطالب: ${name}\nرقم الهاتف: ${number}\nالمبلغ: ${amount}\nالقسم: ${section}\nطريقة الدفع: ${paymentMethod}`;
    const encoded = encodeURIComponent(message);

    // ✅ رقمك على واتساب بصيغة دولية (بدون +)
    const phone = "22249677414"; // 🔴 غيّر هذا الرقم إلى رقمك الحقيقي

    // ✅ فتح واتساب
    window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank");
  };

  return (
    <>
      {/* 1) HERO */}
      <section id="home">
        <div className="container">
          <div className="home-header">
            <span>انضم إلينا</span>
            <h1>دروس تعليم عن بعد</h1>
            <p>دروس موثقة بالصوت والصورة ,دقة عالية ,تمارين مع حلول ,دعم مستمر</p>
            <p>7D , 7O , 4AS</p>
            <button className="btn btn-red" onClick={() => setShowForm(true)}>
              ابدأ الآن
            </button>
            <a href="#" className="btn btn-transparent">اعرف المزيد</a>
          </div>
        </div>
      </section>






      {/* 2) SD (CTA خفيف/معلومة) */}
      <section id="sd">
        <div className="container">
          <div className="h3">نتائج الباكالوريا 2025 الدورة العادية</div>
          <p> يمكنك البحث عن نتيجتك بالإسم او رقم الجلوس </p>
          <div className="mt-2">
            <a
              href="https://couratbac.blogspot.com/p/blog-page_19.html"
              className="btn red"
            >
              الدخول إلي صفحة البحث
            </a>
          </div>
        </div>
      </section>




      {/* 3) SD (CTA خفيف/معلومة) */}
      <section id="sd">
        <div className="container">
          <div className="h3">نتائج الباكالوريا 2025 الدورة التكميلية</div>
          <p> يمكنك البحث عن نتيجتك بالإسم او رقم الجلوس </p>
          <div className="mt-2">
            <a
              href="https://couratbac.blogspot.com/p/blog-page_86.html"
              className="btn red"
            >
              الدخول إلي صفحة البحث
            </a>
          </div>
        </div>
      </section>

      {/* 4) SD (CTA خفيف/معلومة) */}
      <section id="sd">
        <div className="container">
          <div className="h3">نتائج إبريفة2025</div>
          <p> يمكنك البحث عن نتيجتك بالإسم او رقم الجلوس </p>
          <div className="mt-2">
            <a
              href="https://couratbac.blogspot.com/p/blog-page.html"
              className="btn red"
            >
              الدخول إلي صفحة البحث
            </a>
          </div>
        </div>
      </section>

      {/* 5) SD (CTA خفيف/معلومة) */}
      <section id="sd">
        <div className="container">
          <div className="h3">نتائج كونكور 2025</div>
          <p> يمكنك البحث عن نتيجتك بالإسم او رقم الجلوس </p>
          <div className="mt-2">
            <a href="#" className="btn red">
              الدخول إلي صفحة البحث
            </a>
          </div>
        </div>
      </section>
 {/* 6) صورة */}
      <section id="gh">
        <div className="fg">
          <img src="Les profs.jpg" alt="go" className="prof-img" />
        </div>
      </section>
     

      {/* نموذج التسجيل المنبثق */}
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

export default Home;
