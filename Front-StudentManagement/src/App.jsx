import './App.css'
import ListStudentComponent from "./components/ListStudentComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import StudentComponent from './components/StudentComponent';

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<ListStudentComponent />}></Route>
          <Route path="/students" element={<ListStudentComponent />}></Route>
          <Route path="/add-student" element={<StudentComponent />}></Route>
          <Route path="/edit-student/:id" element={<StudentComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App
