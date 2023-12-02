import CoreConcept from "./CoreConcept.jsx"
import { CORE_CONCEPTS } from '../data.js';
import Section from "./Section.jsx";
//import componentsImg from './assets/components.png'

export default function CoreConcepts(){
    return(
        <Section id='core-concepts' >
          <h2>Core Concepts</h2>
          <ul>
              {/* Efficient Method */}
            {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key={conceptItem.title} {...conceptItem} /> ))}


            {/* First Method to sending the props */}
            {/* <CoreConcept
              title='Components'
              description='The core UI building block - compose the user interface by combining multiple components.'
              image={componentsImg}
            /> */}

            {/* Second Method of Sending the props */}
            {/* <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            /> */}

            {/* Third Method of Sending the Props */}
            {/* <CoreConcept {...CORE_CONCEPTS[2]} />

            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            /> */}


          </ul>
        </Section>
    );
}