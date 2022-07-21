import { useEffect, useState } from 'react';
import axios from "axios";
import { ContentGithub, Foto, GithubContainer, Itens, ListaProjetos } from "./styles";

const Github = () => {

  const [userGit, setUserGit] = useState([])
  const [projects, setProjects] = useState([])
  const [errorMensagem, setErrorMensagem] = useState("")

  useEffect(() => {
    getApiGit()
    getApiReposGit()
  }, [])
    
  const getApiGit = () => {
    axios.get('https://api.github.com/users/fernandanaser', {

    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
      setErrorMensagem("")
      setErrorMensagem("Github temporariamente fora de serviço")
    })
  }
  
  const getApiReposGit = () => {
    axios.get('https://api.github.com/users/fernandanaser/repos', {

    })
    .then(function (response) {
      setUserGit(response) //se a conexão ser certo pega o response e armazena dentro do state
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
      setErrorMensagem("Github temporariamente fora de serviço")
    })
  }

  return (
    <GithubContainer>
      <ContentGithub>
        <h2>Projetos</h2>
          <Itens>
            <Foto>
              <img src={userGit.avatar_url} alt="Foto Perfil" />
              <h3>{userGit.name}</h3>
              <h4>{userGit.login}</h4>
              <p>{userGit.bio}</p>
            </Foto>
            <ListaProjetos>
              <div>
                <a href="">
                  <h3>Título</h3>
                  <p>Lorem Ipsum</p>
                </a>
              </div>
            </ListaProjetos>
            <p>{errorMensagem}</p>
          </Itens>
      </ContentGithub>

    </GithubContainer>
  //   const [ repositories, setRepositories] = useState([])
  
  //   useEffect( () => {
  //     fetch('https://api.github.com/users/fernandanaser/repos') //caminho da api
  //     .then( response => response.json()) //pega a resposta e transforma em json
  //     .then(data => setRepositories(data)) //pega os dados da resposta se seta dentro do repositório
  //   }, []) //o que ele vai executar, e quando
    
  //   return (
  //     <div>
  //     <ul>
  //       { repositories.map(repository => { //passar por cada item de repositories, e repository recebe uma função que retorna as informções
  //         return (
  //           <li>
  //             <h3>{ repository.name }</h3>
  //             <p>{ repository.description }</p> 
  //             <a href={repository.html_url} target="blank">Saiba mais</a>
  //           </li>
  //         )
  //       })}
  //     </ul>
  //     </div>
  )
  
}

export default Github;