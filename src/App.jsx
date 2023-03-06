
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./compornants/Main";

function App() {

  return (
    <>
    
<div className="overflow-x-hidden" >
   
      <Router>
        <Routes>
  
          <Route path="/" element={<Main />} />
  
        </Routes>
      </Router>

</div>      
    </>
  );
}

export default App;
