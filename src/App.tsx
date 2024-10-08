import { Route, Routes } from 'react-router-dom';
import './App.css';
import BooksApp from './features/books/BooksApp';
import FormDialog from './features/books/FormDialog';
import DeletionDialog from './features/books/DeletionDialog';
import NotFound from './NotFound';
import LoginForm from './features/login/LoginForm';
import Nav from './features/navMenu/Nav';
import { useAppSelector } from './app/hooks';
import { selectToken } from './features/login/login.slice';

function App() {
  const loginToken = useAppSelector(selectToken);

  return (
    <div className="App">
      <Nav />
      <div className='App-content'>
        <Routes>
          <Route path='/' element={loginToken ? <BooksApp /> : <p>Sie müssen sich anmelden, um den Inhalt zu sehen.</p>}>
            <Route path='/new' element={<FormDialog />} />
            <Route path='/edit/:id' element={<FormDialog />} />
            <Route path='/delete/:id' element={<DeletionDialog />} />
          </Route>
          <Route path='/login' element={<LoginForm />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
