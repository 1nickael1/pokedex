import React, {useEffect, useState} from 'react';
import { api } from './util/Api';
import { useNavigate } from 'react-router-dom';

import { 
  Container, 
  Button, 
  List, 
  BackLeftContainer,
  BackButton,
  BackButtonDisabled,
  NextButton,
  NextButtonDisabled,
} from './styles';

function App() {
  const [pokemons, setPokemons] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getPokemons();
  });

  async function getPokemons() {
    const { data } = await api.get('/');
    setPokemons(data);
  }

  async function getNextOrPreviewsPage(url) {
    const { data } = await api.get(url);
    setPokemons(data);
  }

  function goToPokemon(url) {
    let urlList = url.split('/');
    let id = urlList[urlList.length - 2];
    navigate(`/pokemon/${id}`);
  }
  
  return (
    <Container>
      <List>
        {pokemons?.results?.map((e, index) => (
          <Button onClick={() => goToPokemon(e.url)} key={index}>{e.name}</Button>
        ))}
      </List>
      <BackLeftContainer>
          {pokemons?.previous != null ? (
            <BackButton onClick={() => getNextOrPreviewsPage(pokemons.previous)}>
              Previews
            </BackButton>
          ) : (
            <BackButtonDisabled>
              Previews
            </BackButtonDisabled>
          )}
          
          {pokemons?.next != null ? (
            <NextButton onClick={() => getNextOrPreviewsPage(pokemons.next)}>
              Next
            </NextButton>
          ) : (
            <NextButtonDisabled>
              Next
            </NextButtonDisabled>
          )}
      </BackLeftContainer>
    </Container>
  );
}

export default App;