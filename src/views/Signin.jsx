import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

export default function Signin() {
    let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const data = {
        username: username,
        password: password,
      };
  
      try {
        const response = await fetch('http://100.78.16.82:3000/sock/api/auth/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          const responseData = await response.json();
          // Handle the successful login response here (e.g., store tokens or redirect).
        //   cookieStorage.setItem('access_token', responseData.token)
        Cookies.set('token', responseData.token, { expires: 7 });
          sessionStorage.setItem('roles', responseData.profile.userRoles);
          const roles = sessionStorage.getItem('roles');
        //   if (roles == 'customer') {
        //     navigate('/')
        //   } else {
        //     navigate('/admin')
        //   }
        const token = Cookies.get('token');
          console.log(token);
          const decoded = jwtDecode(responseData.token, { header: true })
          console.log(decoded);
        } else {
          // Handle error response (e.g., show an error message).
          console.error('Login failed');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };


  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="flex justify-center items-center pt-12 mt-12">
            <img className="h-20" src="/sockenergy.png" alt="SockEnergy Logo" />
          </div>
          <div className="flex justify-center items-center font-medium text-gray-900 dark:text-white">
            Welcome back! Please enter your details.
          </div>
          <div className="ml-20 mt-10">
            <form onSubmit={handleSubmit} enctype="multipart/form-data">
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your Username
              </label>
              <div className="relative mb-2">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                    </svg>
                </div>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Please input username"
                />
              </div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your Password
              </label>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                    </svg>
                </div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Please input password"
                />
              </div>
              <button
                type="submit"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm w-5/6 px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1">
            <div>
              <img className="" src="/bgcoverbaru.png" alt="Background Cover" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
