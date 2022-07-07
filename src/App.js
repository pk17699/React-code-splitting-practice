import './App.css'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Home from './Components/Display/display';
import ManageBookId from './Components/ManageBookId/manageBookId';
//import AddBook from './Components/AddBooks/addBooks';
const AddBook = lazy(()=>import('./Components/AddBooks/addBooks')) // lazy loaded
//import ManageBooks from './Components/ManageBooks/manageBooks';
const ManageBooks = lazy(()=>import('./Components/ManageBooks/manageBooks')) // lazy loaded



function App() {
  return(
    <div className='App'>
        <h1>React.js code splitting</h1>
        <BrowserRouter>
          <button><Link to="/home" style={{textDecoration:"none"}}>Home</Link></button>
          <button><Link to="/add-books" style={{textDecoration:"none"}}>Add Books</Link></button>
          <button><Link to="/manage-books" style={{textDecoration:"none"}}>Manage Books</Link></button>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/home' element={<Home />}></Route>
              <Route path='/add-books' element={<AddBook />}></Route>
              <Route path='/manage-books' element={<ManageBooks />}></Route>
              <Route path='/manage-books/:bookId' element={<ManageBookId />}></Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
    </div>
  )
}

export default App;
