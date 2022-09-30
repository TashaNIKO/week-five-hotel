import { useState } from 'react';
import { data } from "./data";
import './App.css';

function App() {
const [hotels, setHotels] = useState(data);

const [showText, setShowText] = useState(false);

const removeHotel=(id)=> {
  let newHotels = hotels.filter((hotel)=> hotel.id !== id);
  setHotels(newHotels)
}
const showTextClick = (hotel) => {
  hotel.showMore = !hotel.showMore
  setShowText(!showText)
}
  return (
  <div>
    <div className="container">
      <h1>nyc top {hotels.length} hotels</h1>
    </div>
    {hotels.map((hotel=> {
      const { id, hotelName, description, image, source, showMore} = hotel
      return (<div key={id}>
        <div className="container">
          <h2> {id} - {hotelName}</h2>
        </div>
        <div className="container">
          <p>{ showMore ? description : description.substring(0,220)+ "...." }
          <button onClick={()=>showTextClick(hotel)}>{showMore ? "Show less" : "Show more"}</button>
          </p>
        </div>
        <div className="container">
          <img src={ image } width="500px" alt='hotel'/>
        </div>
        <div className="container">
          <p>{ source }</p>
        </div>
        <div className="container">
        <button className='btn' onClick ={()=>removeHotel(id)}>Remove</button>
        </div>
      </div>)
    }))}
  </div>
  );
}

export default App;
