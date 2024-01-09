import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';


function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcept />
        <Examples />        
      </main>
    </div>
  );
}

export default App;
