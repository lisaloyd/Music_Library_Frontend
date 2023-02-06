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
  function searchMusic(searchInput) {
    console.log('searchInput in searchMusic in App:', searchInput)
  }

  return (
    <div>
      <MusicTable songs={songs} />
      <AddSong AddNewSongProperty={addNewSong} />
      <SearchBar searchMusic={searchMusic} />
    </div> 
  );
}

export default App;
