import React, { useEffect, useState } from "react";
import "./App.css";
import AlbumCards from "./components/AlbumCards";
import Header from "./components/Header";
import axios from "axios";

function App() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    //get method to display getAlbum data

    const getAlbumData = async () => {
      return await axios
        .get(`https://jsonplaceholder.typicode.com/albums`)
        .then((response) => {
          setAPIData(response.data);
        })
        .catch((err) => console.log(err));
    };

    getAlbumData();
  }, []);
  return (
    <div className="App">
      <Header />
      <AlbumCards APIData={APIData} />
    </div>
  );
}

export default App;
