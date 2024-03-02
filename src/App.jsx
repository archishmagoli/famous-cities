import globeLogo from './assets/rotating_globe.gif';
import './App.css';
import Card from './Card';
import newYork from './assets/new_york_city.jpg';
import tokyo from './assets/tokyo.jpg';
import paris from './assets/paris.jpg';
import sydney from './assets/sydney.jpg';
import istanbul from './assets/istanbul.jpg';
import rio from './assets/rio.jpg';
import newDelhi from './assets/new_delhi.jpg';
import cairo from './assets/cairo.jpg';
import moscow from './assets/moscow.jpg';
import bangkok from './assets/bangkok.jpg';

function App() {
  const cityData = [
    {
        "id": 1,
        "name" : "New York City, United States",
        "link" : "https://en.wikipedia.org/wiki/New_York_City",
        "image" : newYork
    },
    {
        "id": 2,
        "name" : "Tokyo, Japan",
        "link" : "https://en.wikipedia.org/wiki/Tokyo",
        "image" : tokyo
    },
    {
        "id": 3,
        "name" : "Paris, France",
        "link" : "https://en.wikipedia.org/wiki/Paris",
        "image" : paris
    },
    {
        "id": 4,
        "name" : "Sydney, Australia",
        "link" : "https://en.wikipedia.org/wiki/Sydney",
        "image" : sydney
    },
    {
        "id": 5,
        "name" : "Istanbul, Turkey",
        "link" : "https://en.wikipedia.org/wiki/Istanbul",
        "image" : istanbul
    },
    {
        "id": 6,
        "name" : "Rio de Janeiro, Brazil",
        "link" : "https://en.wikipedia.org/wiki/Rio_de_Janeiro",
        "image" : rio
    },
    {
        "id": 7,
        "name" : "New Delhi, India",
        "link" : "https://en.wikipedia.org/wiki/New_Delhi",
        "image" : newDelhi
    },
    {
        "id": 8,
        "name" : "Cairo, Egypt",
        "link" : "https://en.wikipedia.org/wiki/Cairo",
        "image" : cairo
    },
    {
        "id": 9,
        "name" : "Moscow, Russia",
        "link" : "https://en.wikipedia.org/wiki/Moscow",
        "image" : moscow
    },
    {
        "id": 10,
        "name" : "Bangkok, Thailand",
        "link" : "https://en.wikipedia.org/wiki/Bangkok",
        "image" : bangkok
    }
  ]

  return (
    <>
      <div>
        <a href="https://en.wikipedia.org/wiki/Earth" target="_blank">
          <img src={globeLogo} className="logo globe" alt="Spinning Globe" />
        </a>
      </div>
      <h1>Top 10 Cities To Visit In Your Lifetime</h1>
      <h2>Made for Adventurous Tourists!</h2>

      <div className="cities">
        {cityData.map(city => (
          <Card key={city.id} cityName={city.name} aboutLink={city.link} image={city.image}/>
        ))}
      </div>
    </>
  )
}

export default App;
