
import { prefetchDNS } from "react-dom";
import App from "../App";
const filter = {props} => {
    const {setFilterState } = props;
    
} 
<div className="filter-buttons">
<button
  className={`filter-button ${filter === "all" ? "active" : ""}`}
  onClick={() => setFilter("all")}
>
  All
</button>
<button
  className={`filter-button ${filter === "active" ? "active" : ""}`}
  onClick={() => setFilter("active")}
>
  Active
</button>
<button
  className={`filter-button ${filter === "completed" ? "active" : ""}`}
  onClick={() => setFilter("completed")}
>
  Completed
</button>
<button
  className={`filter-button ${filter === "log" ? "active" : ""}`}
  onClick={() => setFilter("log")}
>
  Log
</button>
</div>
export default App