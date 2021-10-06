import React from "react";
import { useSelector } from "react-redux";
import { translate } from "../i18n/index";

const Home = () => {
  const { language } = useSelector((state) => state.language);
  return (
    <div className="home">
      <div className="init">
        <h1>{translate("title", language)}</h1>
        <p style={{ textAlign: language === "en" ? "left" : "right" }}>
          {translate("text", language)}
        </p>
      </div>
    </div>
  );
};

export default Home;
