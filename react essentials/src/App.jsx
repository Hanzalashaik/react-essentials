import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png'
import { CORE_CONCEPTS } from './data.js'

const reactDescription = ["Fundamental", "Crucial", "Core"]

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

function Header() {
  const description = reactDescription[genRandomInt(2)]
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}

// function CoreConcept(props)
//            or 
function CoreConcept({image,title,description}) {
  return (
    <li>
      {/* <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p> */}
      
                {/* OR */}

      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

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
            <CoreConcept {...CORE_CONCEPTS[2]}/>

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
