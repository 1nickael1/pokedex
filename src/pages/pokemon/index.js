import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../util/Api';
// import { Container } from './styles';

function Pokemon() {
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function getPokemon() {
      const { data } = await api.get(`/${id}`);
      console.log(data);
      setPokemon(data);
    };
    getPokemon();
  },[id]);

  

  return (
      <div>
        {pokemon?.name}
        <div>
          <img alt={pokemon?.name} src={pokemon?.sprites?.front_default} />
        </div>
      </div>
  );
}

export default Pokemon;