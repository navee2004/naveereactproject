        import React from 'react';
        import AuthBgImg from '../../assets/auth-bg.jpg';
        import Navbar from '../../components/layouts/navbar/Navbar';
        import AuthForm from '../../components/forms/authForm/AuthForm';
        const Login= () => {
    return (
        <React.Fragment>
            <Navbar darkText={true}/>
            <section className="signup-container">
                <div className='signup-img-container'>
                    <img src={AuthBgImg} alt="authentication-background" />
                </div>
                <div className="signup-content-container">
                    <div className="container">
                        <div className="content-wrapper">
                            <h2>Login</h2>
                            

                            <AuthForm buttonName="Login" />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Login;

// import React, { useState } from 'react';
// import AuthBgImg from '../../assets/auth-bg.jpg';
// import Navbar from '../../components/layouts/navbar/Navbar';
// import AuthForm from '../../components/forms/authForm/AuthForm';
// import axios from 'axios';

// const Login = () => {
//   const [userData, setUserData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleLogin = async () => {
//     try {
//       // Send a POST request to the server for login
//       const response = await axios.post("http://localhost:3001/users", userData);
      
//       // Handle the server response, redirect or perform actions accordingly
//       console.log('Login successful:', response.data);
//     } catch (error) {
//       console.error('Login failed:', error.message);
//     }
//   };

//   const handleInputChange = (fieldName, value) => {
//     setUserData((prevData) => ({ ...prevData, [fieldName]: value }));
//   };

//   return (
//     <React.Fragment>
//       <Navbar darkText={true} />
//       <section className="signup-container">
//         <div className='signup-img-container'>
//           <img src={AuthBgImg} alt="authentication-background" />
//         </div>
//         <div className="signup-content-container">
//           <div className="container">
//             <div className="content-wrapper">
//               <h2>Login</h2>
//               <AuthForm
//                 buttonName="Login"
//                 onInputChange={handleInputChange}
//                 onSubmit={handleLogin}
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </React.Fragment>
//   );
// }

// export default Login;
