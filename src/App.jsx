import {Content} from "./components/Content/Content.jsx";
import {Nav} from "./components/Nav/Nav.jsx";
import {Products} from "./components/Products/Products.jsx";

function App() {
  return (
    <div className="flex flex-col bg-lime-100">
      <Nav/>
      <Content/>
      <Products/>
    </div>
  )
}

export default App
