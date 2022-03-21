import { BrowserRouter } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./components/Home";
import Footer from "./components/footer";

function App() {
  return (
    <main>
      <section id="title" className="container-fluid">
        <div>
          <BrowserRouter>
            <Nav />
          </BrowserRouter>
        </div>
      </section>
      <section>
        <div>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </div>
      </section>
      <section>
        <div>
          <BrowserRouter>
            <Footer />
          </BrowserRouter>
        </div>
      </section>
    </main>
  );
}

export default App;
