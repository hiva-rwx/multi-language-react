import classNames from "classnames";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { translate } from "../i18n/index";
import { getLangs, setLang } from "./../redux/actions/languageAction";
const Header = () => {
  const { languages } = useSelector((state) => state.languages);
  const { language } = useSelector((state) => state.language);
  const dispatch = useDispatch();

  const handleChangeLang = useCallback(
    (lang) => {
      dispatch(setLang(lang));
    },
    [dispatch]
  );
  return (
    <div className="header">
      <div className="logo">
        <h2>React</h2>
      </div>
      <div className="details">
        <div className="links">
          <ul>
            <li>{translate("about", language)}</li>
            <li>{translate("sign", language)}</li>
          </ul>
        </div>
        <div className="select-language" onClick={() => dispatch(getLangs())}>
          <span>{language}</span>
          <ul className={classNames({ active: languages })}>
            <li onClick={() => handleChangeLang("en")}>En</li>
            <li onClick={() => handleChangeLang("fa")}>Fa</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
