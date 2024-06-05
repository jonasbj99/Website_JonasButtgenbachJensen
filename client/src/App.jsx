import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";
import Guest from "./pages/Guest.jsx";

function App() {
  let Page;
  switch (window.location.pathname) {
    case "/":
      Page = Home;
      break;
    case "/projects":
      Page = Projects;
      break;
    case "/about":
      Page = About;
      break;
    case "/guest":
      Page = Guest;
      break;
  }

  return (
    <>
      <Header />
      <Page />
      <Footer />
    </>
  );
}

export default App;
