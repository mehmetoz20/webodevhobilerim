import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © 2025 Mehmet Öz 2121032741
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "white",
    textAlign: "center",
    padding: "15px",
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
  },
  text: {
    margin: 0,
    fontSize: "14px",
  },
};

export default Footer;
