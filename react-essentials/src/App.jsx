import Header from '../components/Header.jsx';
import CoreConcept from "../components/CoreComponents.jsx"

import componentsImg from './assets/components.png'
import { CORE_CONCEPTS } from './data.js'

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts' >
          <h2>Core Concepts</h2>
          <ul>

            {/* First Method to sending the props */}
            <CoreConcept
              title='Components'
              description='The core UI building block - compose the user interface by combining multiple components.'
              image={componentsImg}
            />

            {/* Second Method of Sending the props */}
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />

            {/* Third Method of Sending the Props */}
            <CoreConcept {...CORE_CONCEPTS[2]} />

            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />


          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
