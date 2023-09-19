import "./Body.css";
import Sidebar from "./Sidebar/Sidebar";

function Body() {
  return (
    <main className="grid wide">
      <div className="row no-gutters">
        <div className="col l-4 m-0 c-0">
          <Sidebar></Sidebar>
        </div>
        <div className="col l-8 m-0 c-0">
          <h1>List</h1>
        </div>
      </div>
    </main>
  );
}

export default Body;
