import styled from 'styled-components'

export const ContainerMenu = styled.div`
    ul{
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
        justify-content: end;
        align-items: center;
        li{
            margin-left: 10px;
            margin-right: 10px;
            a{
                text-decoration: none;
                color: #fff;
                cursor: pointer;
                font-size: 1 rem;

                &:hover{
                    color: #c73897;
                    transition-duration: 2s;
                }
            }
        }
    }
 
`;