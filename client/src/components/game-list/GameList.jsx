import *  as gamesAPI from '../../api/games-api';
import { useEffect, useState } from 'react';
import GameListItem from './game-list-item/GameListItem';

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    gamesAPI.getAll()
      .then(result => setGames(result));
  }, []);


  return (
    <section id="catalog-page">
      <h1>All Games</h1>
      {/* <!-- Display div: with information about every game (if any) --> */}
      {games.length > 0
        ? games.map(game => <GameListItem key={game._id} {...game} />)
        : <h3 className="no-articles">No articles yet</h3>
      }
    </section>
  );
};
export default GameList;