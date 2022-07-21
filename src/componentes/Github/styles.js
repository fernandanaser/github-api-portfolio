import styled from 'styled-components';

export const GithubContainer = styled.div`
    width:100%;
    margin:0 auto;
    margin-bottom: 7rem;
    padding: 20px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #171717;
;`

export const ContentGithub = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    wigth: 100%;

    h2{
        text-align: center;
        color: #c73897;
    }
`;

export const Itens = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`;

export const Foto = styled.div`
    width: 100%;
    border-radius: 50%;
    max-width: calc(200px + 4rem);
    text-align: center;

    img{
        border-radius: 50%;
        width: 100%;
        max-width: 200px;
        height: 100%;
    }

    h3{
        color: #fff;
    }

    h4{
        color: #c73897;
    }

    p{
        color: #fff;
    }
`;

export const ListaProjetos = styled.div`
    width: 100%;
    border-radius: 10px;
    padding: 0.5rem 1rem;
`;