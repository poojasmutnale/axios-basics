import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import List from "./components/List";
import Form from "./components/form";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main">
        <List />
        <Form />
      </main>
    </div>
  );
}

export default App;
