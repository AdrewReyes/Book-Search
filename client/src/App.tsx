import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import './App.css'; 
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SavedBooks from './pages/SavedBooks';
import SearchBooks from './pages/SearchBooks';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchBooks />} />
        <Route path="/saved" element={<SavedBooks />} />
      </Routes>
    </>
  );
}

export default function WrappedApp() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}