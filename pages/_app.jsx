import Sidebar from "src/components/Sidebar";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Sidebar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
