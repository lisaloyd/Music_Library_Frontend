const MusicTable = (props) => {
  return (
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
        <tbody>
          {props.parentSongs.map((song) => {
            return (
              <tr>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MusicTable;
