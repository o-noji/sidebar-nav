import Sidebar from "src/components/Sidebar";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Sidebar />
    </div>
  );
}

export default MyApp;
