import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { getPokeImage } from '../../services/'
import { ThemeContext, glassEffect } from '../../context'

const PokeCardContainer = (props) => {

    const { theme } = useContext(ThemeContext)

    return (
        <ThemeProvider theme={theme}>
        <PokeCardDiv key={props.index}>
            <Link to={`/pokemon/${props.name}`}>
                <Img className='poke-image' src={getPokeImage(props.index + 1)} />
                <H2 className='poke-name'>{props.name}</H2>
            </Link>
        </PokeCardDiv>
        </ThemeProvider>
    )
}

const Img = styled.img`
    width: 160px;
    padding: 3px;
    -webkit-filter: drop-shadow(1px 1px 0 #bbb)
                    drop-shadow(-1px -1px 0 #bbb);
    filter: drop-shadow(1px 1px 0 #bbb) 
            drop-shadow(-1px -1px 0 #bbb);
    
`

const PokeCardDiv = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    max-width: 250px;
    text-align: center;
    ${props => glassEffect(props.theme.color,props.theme.color2)};
    
    &:hover .poke-name{
        color: ${props => props.theme.color2};
    }

    &:hover .poke-image{
    -webkit-filter: drop-shadow(1px 1px 0 black)
                    drop-shadow(-1px -1px 0 black);
    filter: drop-shadow(1px 1px 0 black) 
            drop-shadow(-1px -1px 0 black);
    }
    
    @media(max-width: 426px){
        & .poke-image{
            -webkit-filter: drop-shadow(1px 1px 0 black)
                            drop-shadow(-1px -1px 0 black);
            filter: drop-shadow(1px 1px 0 black)
                    drop-shadow(-1px -1px 0 black);
        }
    }
`

const H2 = styled.h2`
    text-transform: capitalize;
    font-family: 'The Nautigal', cursive;
    font-size: 44px;
    color: ${props => props.theme.color};
    
    @media(max-width: 426px){
        color: ${props => props.theme.color2};
    }
`

export {PokeCardContainer}