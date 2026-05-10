import React from "react";
import sampleImg from "../assets/logo.png";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 py-20 sm: pl-14"
    >
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-lg p-8 md:p-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ================= LEFT : CONTACT DETAILS ================= */}
          <div>
            <h2 className="text-3xl font-extrabold text-black mb-2">
              Contact Me
            </h2>

            <p className="text-gray-600 mb-6">
              Feel free to reach out. I’d love to hear from you!
            </p>

            {/* ================= CONTACT INFO ================= */}
            <div className="space-y-4 text-lg">
              <p className="text-gray-700">
                📧 Email:{" "}
                <a
                  href="mailto:nuhasamsun@gmail.com"
                  className="text-black font-semibold hover:underline"
                >
                  nuhasamsun@gmail.com
                </a>
              </p>

              <p className="text-gray-700">
                📞 Phone:{" "}
                <a
                  href="tel:+94753360265"
                  className="text-black font-semibold hover:underline"
                >
                  +94 75 336 0265
                </a>
              </p>
            </div>
          </div>

          {/* ================= RIGHT : LOGO ================= */}
          <div className="hidden lg:flex justify-center">
            <div className="w-72 h-72 rounded-full overflow-hidden shadow-xl border border-gray-300">
              <img
                src={sampleImg}
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

        {/* ================= MOBILE / TABLET LOGO ================= */}
        <div className="flex lg:hidden justify-center mt-12">
          <div className="w-56 h-56 rounded-full overflow-hidden shadow-xl border border-gray-300">
            <img
              src={sampleImg}
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <footer className="mt-12 text-center text-gray-500 text-sm">
          © 2026 Samsun Nuha. All Rights Reserved.
        </footer>

      </div>
    </section>
  );
};

export default Contact;
