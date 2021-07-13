import './App.css';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="app">
      <div className="container">
        <BookContextProvider>
        <Navbar/>
        <hr/>
        <BookForm/>
        <BookList/>
        </BookContextProvider>
      </div>
    </div>
  );
}

export default App;
