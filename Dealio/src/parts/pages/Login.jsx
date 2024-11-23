import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CircleUserRound,
  Eye,
  Facebook,
  Instagram,
  Lock,
  Twitter,
} from "lucide-react";
import Swal from "sweetalert2";

export const awal = () => {
  const [isValid, setIsValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false)

 const handleShowPassword = () => {
  setShowPassword(!showPassword)
 }

  return (
    <div className="w-full flex h-[100vh]">
      <div className="lg:w-1/2 absolute rotate-90 w-32 lg:static lg:rotate-0">
        <img
          src="../../src/parts/assets/img/loginpic.png"
          alt=""
          className="rotate-90 w-[100vh]"
        />
      </div>
      <div className="flex flex-col  lg:w-1/2 px-10 py-5 justify-center h-full items-center gap-10 lg:gap-2">
        <h1 className="text-6xl ">
          <strong className="text-[#572dff] font-geo">Dealio</strong>
        </h1>
        <div className="w-full flex justify-center">
          <form
            action=""
            className="flex flex-col gap-3 items-center w-full lg:p-10 justify-center"
          >
            <div className="space-y-2 w-full">
              <div className="space-y-2 w-full">
                <label htmlFor="user" className="font-bold text-gray-500">
                  Username
                </label>
                <div className="flex gap-2  border-2 items-center rounded-full px-4 py-2 w-full">
                  <CircleUserRound color="#572dff" />
                  <input
                    type="text"
                    className="p-1 outline-none w-full "
                    id="user"
                    placeholder="ketik disini..."
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="pass" className="font-bold text-gray-500">
                  Password
                </label>
                <div className="flex gap-2  border-2 items-center rounded-full px-4 py-2 w-full">
                  <Lock color="#572dff" />
                  <input
                    type={showPassword ? "text" : "password"}
                    className="p-1 outline-none w-full"

                    placeholder="ketik disini..."
                  />
                  <button
                    onClick={handleShowPassword}
                    type="button"
                    // onClick={(e) => {
                    //   if (document.getElementById("pass").type === "password") {
                    //     document.getElementById("pass").type = "text";
                    //     e.preventDefault();
                    //   } else {
                    //     e.preventDefault();
                    //     document.getElementById("pass").type = "password";
                    //   }
                    // }}
                  >
                    <Eye color="black" className="cursor-pointer" />
                  </button>
                </div>
              </div>
            </div>

            <Link to="/Beranda" className="w-full">
              <button
                className="bg-[#572dff] p-2 text-white rounded-full px-4 font-bold w-full"
                type="submit"
                onClick={() => {
                
                  if (
                    document.getElementById("user").value == "admin" &&
                    document.getElementById("pass").value == "admin"
                  ) {
                    setIsValid(true);
                  } else if (
                    document.getElementById("user").value == "" &&
                    document.getElementById("pass").value == ""
                  ) {
                    Swal.fire({
                      position: "bottom-end",
                      icon: false,
                      text: "Masukkan Username dan Password",
                      showConfirmButton: false,
                      backdrop: false,
                      timer: 1500,
                    });
                  } else {
                    Swal.fire({
                      position: "bottom-end",
                      icon: false,
                      text: "Username dan Password Salah!",
                      showConfirmButton: false,
                      backdrop: false,
                      timer: 1500,
                    });
                    document.getElementById("user").value = "";
                    document.getElementById("pass").value = "";
                  }
                }}
              >
                Sign-in
              </button>
            </Link>
          </form>
        </div>
        <div className="flex items-start justify-center gap-5 mb-4">
          <a
            href=""
            className="hover:-translate-y-1 transition-all border p-2 rounded-lg hover:shadow-md"
          >
            <Facebook color="#572dff" />
          </a>
          <a
            href=""
            className="hover:-translate-y-1 transition-all border p-2 rounded-lg hover:shadow-md"
          >
            <Instagram color="#572dff" />
          </a>
          <a
            href=""
            className="hover:-translate-y-1 transition-all border p-2 rounded-lg hover:shadow-md"
          >
            <Twitter color="#572dff" />
          </a>
        </div>
        <p className="text-center">
          Belum Punya Akun?
          <span className="text-[#572dff] underline">Daftar Disni</span>
        </p>
      </div>
    </div>
  );
};

export default awal;

// import React, { useState } from 'react';

// const awal = () => {
//   const [isValid, setIsValid] = useState(false);

//   const handleValidation = () => {
//     // Add your validation logic here
//     // For example, set isValid to true if validation passes
//     setIsValid(true);
//   };

//   return (
//     <div className='w-full h-[100vh] flex flex-col justify-center items-center'>
//       <h1>Welcome to Doelio</h1>
//       <Link to={isValid ? "/Beranda" : "#"}>
//         <button
//           className="bg-[#572dff] p-2 text-white rounded"
//           onClick={handleValidation}
//         >
//           Get Started
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default awal;
