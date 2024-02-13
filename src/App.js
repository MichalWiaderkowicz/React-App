import List from './components/List/List';
import Hero from './components/Hero/Hero'
import SearchForm from './components/SearchForm/SearchForm'
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar.js'

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Hero />
        <SearchForm />
        <List />
      </Container>
    </main>
  );
};

export default App;
