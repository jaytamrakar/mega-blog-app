import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authintication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    // TODO: make more easy

    // if (authStatus === true) {
    //   navigate("/");
    // } else if (authStatus === false) {
    //   navigate("/login");
    // }

    if (authintication && authStatus !== authintication) {
      navigate("/login");
    } else if (!authintication && authStatus !== authintication) {
      navigate("/");
    }

    setLoader(false);
  }, [authStatus, navigate, authintication]);
  return loader ? <h1 className="">Loading...</h1> : { children };
}
