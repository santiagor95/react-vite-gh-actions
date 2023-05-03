import { useState, useEffect } from 'react';
import { Characters } from '../types/characters.type';

export function RickAndMortyCharacters() {

  const [characters, setCharacters] = useState<Characters[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setTotalPages(data.info.pages)
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching characters:', error);
        setLoading(false);
      });
  }, [page]);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Rick and Morty Characters</h1>

      <ul>
        {characters.map((character) => (
          <div key={character.id}>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <p>{ character.origin.name }</p>
          </div>
        ))}
      </ul>
      <button disabled={page === 1} onClick={handlePrevPage}>
        Prev Page
      </button>
      <button disabled={page === totalPages} onClick={handleNextPage}>Next Page</button>
    </>
  );
}
