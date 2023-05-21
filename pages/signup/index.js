import { useEffect, useState } from "react";
import { signup } from "../../client/request";
import { useRouter } from "next/router";
import { getValue } from "../../utils/common";
import { useStore } from "../../client/context";
import Loader from "../../components/Loader";

const Signup = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();
  const [state] = useStore();
  const user = getValue(state, ["user"], null);

  const signupHandler = async (e) => {
    e.preventDefault();

    const payload = { name, email, password };
    const result = await signup(payload);
    //console.log({ result });
  };

  if (user && user.authenticating) {
    return <Loader />;
  }

  if (user && user.authenticated) {
    router.replace(`/`);
    return null;
  }

  return (
    <main className="">
      <form onSubmit={signupHandler}>
        <h1 className="">Please sign up</h1>

        {errorMessage && (
          <p style={{ textTransform: "capitalize", color: "red" }}>
            {errorMessage}
          </p>
        )}

        <div className="">
          <input
            type="text"
            className=""
            id="floatingInput"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label ht="">Name</label>
        </div>
        <div className="form-floating">
          <input
            type="email"
            className=""
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label ht="floatingInput">Email address</label>
        </div>
        <div className="">
          <input
            type="password"
            className=""
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label ht="floatingPassword">Password</label>
        </div>
        <button className="" type="submit">
          Sign up
        </button>
        <p className="">&copy; 2017–2021</p>
      </form>
    </main>
  );
};

export default Signup;
