import SongRow from "../SongRow/SongRow.jsx";

const MusicTable = ({songs}) => {
  const rows = songs.map(song => {
    return <SongRow song={song} />;
  });

  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Release Date</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default MusicTable;
