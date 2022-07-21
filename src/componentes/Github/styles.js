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
    width: 90vw;
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
    padding: 0.5rem 3rem;
    margin-left: 30px;
    display: grid;
    grid-template-columns: 200px 200px 200px;
    gap: 20px;
    cursor:pointer;
    color: #fff;

`;

export const ButtonDefault = styled.button`
    width: 100%;
    display: flex;
    justify-content: end;
    background-color: transparent;
    border: none;

    a, button{
        max-width: 150px;
        width: 100%;
        border: solid 1px #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        background-color: #c73897;
        border-radius: 42px;
        font-size: 1em;
        padding: 12px 15px;
        margin-bottom: 1em;
        margin-top: 2rem;
        transition-duration: 1s;
        cursor: pointer;
        text-decoration: none;

        &:hover{
            border:solid 1px #fff;
            background-color: transparent;
            color: #c73897;
    }
`;