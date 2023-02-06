import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import AddSong from './Components/AddSong/AddSong';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect (() => {
    getAllSongs();
  }, []);

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data);
  }

  function addNewSong(song){
    let tempSongs = [song, ...songs];
    setSongs(tempSongs);
  }

  async function createSong(newSong) {
    let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
    if(response.status===201){
      await getAllSongs();
    }
  }
  function searchMusic(songs, searchInput) {
    let filteredSongs = songs.filter((song) =>{
      if(song === searchInput.song){
        return true;
      }
    })
    return filteredSongs
    //use .filter to create new array of only the songs who match the searchInput    
    //you will need an if statement that will only be true for the songs that match
    //last step, call setSongs and pass in filteredSongs
  }
  console.log(searchMusic(songs, setSongs)); 

  return (
    <div>
      <MusicTable songs={songs} />
      <AddSong AddNewSongProperty={addNewSong} />
      <SearchBar searchMusic={searchMusic} />
    </div> 
  );
}

export default App;
