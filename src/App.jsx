import { useEffect, useState  } from 'react'
import './App.css'
import getRandomNumber from './services/getRandomNumber'
import Locationinfo from './Components/LocationInfo' 
import ResidentCard from './Components/ResidentCard'
import useFetch from './hooks/useFetch'
import FormSearch from './Components/FormSearch'
import Rick_and_Morty from './Components/img/Rick_and_Morty.png';

function App() {
  
  const randomLocation =  getRandomNumber(126)
  
  const [locationSelected, setLocationSelected] = useState(randomLocation)

  const url = `https://rickandmortyapi.com/api/location/${locationSelected || getRandomNumber(126) }`;

  const [location, getLocation, hasError] = useFetch(url)  

  useEffect(() => {
    getLocation();
  },[locationSelected]);
  
  return (    
      <div className='app'>
       <h1 className='app__title'><img src={Rick_and_Morty} alt="" /></h1>
       <FormSearch 
       setLocationSelected={setLocationSelected}
       />
       {
        hasError
        ? <h2 className='app__error'>❌ Hey! You must provide an id from 1 to 126  </h2>
        : (
          <>  
     <Locationinfo
      location={location}
     />
     <div className='container-resident'>
      {
        location?.residents.map(url =>(
          <ResidentCard 
            key={url}
            url={url}
          />  
        ))
      }
     </div>
      </>
        )    
     }
     
     </div>
  )

}

export default App
