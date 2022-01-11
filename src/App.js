import logo from './logo.svg';
import './App.css';
import DestinationCards from './Components/DestinationCards';
import trips from './trips';
import Searchbar from './Components/Searchbar';

function App() {
return (

<div>
<Searchbar />
<div>

{trips.map((trip) => (<DestinationCards trip={trip} key={trip.id}/> ))}

</div>
</div>
  );
}

export default App;
