
"use client";

import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    window.location.replace("/");
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1>Page Not Found</h1>
      <p>Redirecting you to Smart Money Tools...</p>
      <a href="/">Go to Homepage</a>
    </main>
  );
}
