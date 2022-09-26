import BookList from './components/book/BookList';
import './App.css';
import { Route } from 'react-router-dom';
import BookDetail from './components/book/BookDetail';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <Route exact path='/books/:id'>
        <BookDetail />
      </Route>
      <Route exact path='/books'>
        <BookList />
      </Route>
    </main>
  );
}

export default App;
