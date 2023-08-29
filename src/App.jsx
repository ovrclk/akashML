import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="lg:px-[40px] xl:px-auto">
      <Navbar />
      <Home />;
      <Footer />
    </div>
  );
}

export default App;
