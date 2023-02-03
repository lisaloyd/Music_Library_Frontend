import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import AddSong from './Components/AddSong/AddSong';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect (() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data);
  }

  function addNewSong(song){
    let tempSongs = [song, ...songs];
    setSongs(tempSongs);
  }

  return (
    <div>
      <MusicTable parentSongs={songs} />
      <AddSong AddNewSongProperty={addNewSong} />
    </div> 
  );
}

export default App;
