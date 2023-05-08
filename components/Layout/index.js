import Head from "next/head";
import Headers from "../Headers/Header";
import { useEffect } from "react";
import { useStore } from "../../client/context";
import { getValue } from "../../utils/common";
import { getSession } from "next-auth/client";
import { authConstants } from "../../client/context/constants";

const Layout = ({ children }) => {
  const [state, dispatch] = useStore();

  useEffect(() => {
    const data = async () => {
      const authenticated = getValue(state, ["user", "authenticated"], false);
      if (!authenticated) {
        console.log("layout => ", authenticated);
        dispatch({ type: authConstants.LOGIN_REQUEST });
        const session = await getSession();
        if (session) {
          dispatch({
            type: authConstants.LOGIN_SUCCESS,
            payload: session,
          });
        } else {
          dispatch({
            type: authConstants.LOGIN_FAILURE,
            payload: session,
          });
        }
      }
    };
    data();
  }, []);

  return <div>{children}</div>;
};

export default Layout;
