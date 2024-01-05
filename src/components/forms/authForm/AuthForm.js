// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import app from "../../../firebase/Firebase";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import TextField from "@mui/material/TextField";

// const AuthForm = ({ buttonName }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const auth = getAuth(app);

//     if (buttonName === "Login") {
//       signInWithEmailAndPassword(auth, email, password)
//         .then(() => {
//           navigate("/");
//         })

//         .catch((err) => {alert("User Doesn't Exists, Please Sign-Up");
//         navigate("/signup");});
//     } else {
//       createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredentials) => {
//           userCredentials.user.displayName = username;

//           navigate("/");
//         })
//         .catch((err) => {
//           navigate("/login");
//           alert("User Already Exists, Please Login");
//           console.log(err);
//         });
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {buttonName === "Sign Up" && (
//         <div className="form-group">

//           <TextField
//             type="text"
//             className="form-input"
//             onChange={(event) => setUsername(event.target.value)}
//             defaultValue={username}
//             style={{ marginTop: "1vh" }}
//             label="Name"
//             size="small"
//           />
//         </div>
//       )}

//       <div className="form-group">

//         <TextField
//         label="Enter your email"
//         size="small"
//           className="form-input"
//           onChange={(event) => setEmail(event.target.value)}
//           defaultValue={email}
//         />
//       </div>

//       <div className="form-group">

//         <TextField
//         label="Enter your password"
//         size="small"
//           type="password"
//           className="form-input"
//           onChange={(event) => setPassword(event.target.value)}
//           defaultValue={password}
//         />
//       </div>

//       {buttonName === "Sign Up" && (
//         <div className="form-group">

//           <TextField 

//           size="small"
//           type="date" className="form-input" />
//         </div>
//       )}

//       {buttonName === "Sign Up" && (
//         <div className="form-group">

//           <TextField 
//           label="Enter your mobile number"
//           size="small"
//           type="number" className="form-input" />
//         </div>
//       )}

//       {buttonName === "Login" && (
//         <p>
//           Forgot Password ? <a style={{ textDecoration: "underline" }}>Reset</a>
//         </p>
//       )}

//       <div className="form-group">
//         <input type="submit" className="button-primary" value={buttonName} />
//       </div>
//       {buttonName === "Login" && (
//         <Link to="/signup" className={'nav-links-dark'}>New User ? Sign up</Link>
//       )}
//       {buttonName === "Sign Up" && (
//         <Link to="/login" className={'nav-links-dark'} style={{"marginTop" : "1vh"}} >Already Have an Accont, Login</Link>
//       )}
//     </form>
//   );
// };

// export default AuthForm;
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import app from "../../../firebase/Firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import TextField from "@mui/material/TextField";
import axios from "axios";

const AuthForm = ({ buttonName }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic form validation
    if (!email || !password) {
      alert("Email and password are required!");
      return;
    }

    if (buttonName === "Sign Up") {
      if (!username || !dob || !mobile) {
        alert("All fields are required for signup!");
        return;
      }
    }

    const auth = getAuth(app);

    if (buttonName === "Login") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate("/");
        })
        .catch((err) => {
          alert("User Doesn't Exist, Please Sign Up");
          navigate("/signup");
        });
    } else {
      try {
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(userCredentials.user, { displayName: username });

        // You can use Axios for additional operations like saving user data to your server
        await axios.post("http://your-api-url/user", {
          email: userCredentials.user.email,
          username: userCredentials.user.displayName,
          mobile,
          dob,
        });

        navigate("/");
      } catch (err) {
        navigate("/login");
        alert("User Already Exists, Please Login");
        console.error(err);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {buttonName === "Sign Up" && (
        <div className="form-group">
          <TextField
            type="text"
            className="form-input"
            onChange={(event) => setUsername(event.target.value)}
            defaultValue={username}
            style={{ marginTop: "1vh" }}
            label="Name"
            size="small"
          />
        </div>
      )}

      <div className="form-group">
        <TextField
          label="Enter your email"
          size="small"
          className="form-input"
          onChange={(event) => setEmail(event.target.value)}
          defaultValue={email}
        />
      </div>

      <div className="form-group">
        <TextField
          label="Enter your password"
          size="small"
          type="password"
          className="form-input"
          onChange={(event) => setPassword(event.target.value)}
          defaultValue={password}
        />
      </div>

      {buttonName === "Sign Up" && (
        <div className="form-group">
          <TextField
            size="small"
            type="date"
            className="form-input"
            onChange={(event) => setDob(event.target.value)}
          />
        </div>
      )}

      {buttonName === "Sign Up" && (
        <div className="form-group">
          <TextField
            label="Enter your mobile number"
            size="small"
            type="number"
            className="form-input"
            onChange={(event) => setMobile(event.target.value)}
          />
        </div>
      )}

      {buttonName === "Login" && (
        <p>
          Forgot Password ?{" "}
          <a style={{ textDecoration: "underline" }}>Reset</a>
        </p>
      )}

      <div className="form-group">
        <input type="submit" className="button-primary" value={buttonName} />
      </div>

      {buttonName === "Login" && (
        <Link to="/signup" className={'nav-links-dark'}>New User ? Sign up</Link>
      )}
      {buttonName === "Sign Up" && (
        <Link to="/login" className={'nav-links-dark'} style={{ "marginTop": "1vh" }} >Already Have an Accont, Login</Link>
      )}
    </form>
  );
};

export default AuthForm;
