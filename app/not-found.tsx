
export default function NotFound() {
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
      <h1>404 - Page Not Found</h1>
      <p>
        Sorry, the page you are looking for
        does not exist.
      </p>
      <a href="/">Go to Homepage</a>
    </main>
  );
}
