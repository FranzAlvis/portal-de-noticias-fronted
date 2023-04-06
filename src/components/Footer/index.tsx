import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      &#169; Copyright Portal de Noticias {new Date().getFullYear()} All Rights
      Reserved.
    </div>
  );
};

export default Footer;
