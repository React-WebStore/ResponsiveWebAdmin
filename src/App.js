import Login from "./Components/Login";
import AddItem from "./Components/AddItem";
import PreviewItem from "./Components/PreviewItem";
const App = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <AddItem />
    <PreviewItem />
  </div>
);

export default App;
