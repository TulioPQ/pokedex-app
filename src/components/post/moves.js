import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPokeData } from '../../services'
import styled, { ThemeProvider } from 'styled-components'
import { ThemeContext, glassEffect } from '../../context'

const Moves = () => {
    const [pokeCard, setPokeCard] = useState({})

    const { pokeName } = useParams()

    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        async function fetchData() {
            const pokeCard = await getPokeData(pokeName)
            setPokeCard(pokeCard)
        }
        fetchData()
    }, [])

    return (
        <>
            <ThemeProvider theme={theme}>
                <MovesContainer>
                    <H3>Moves:</H3>
                    <Ul>
                        {pokeCard.moves?.map((move, index) =>
                            <MoveItem key={index}>{move.move.name}</MoveItem>
                        )
                        }
                    </Ul>
                </MovesContainer>
            </ThemeProvider>
        </>
    )
}

const H3 = styled.h3`
    font-size: 2rem;
`

const MovesContainer = styled.nav`
    grid-area: moves;
    color: ${props => props.theme.color2};
    height: 100%;
    margin: 5px;
    ${props => glassEffect(props.theme.color, props.theme.color2)}
    
    @media(max-width: 426px){
        margin: 0 auto;
        width: 90%;
        display: block;
        margin-bottom: 10px;
    }

`

const Ul = styled.ul`
    height: 300px;
    width: 100%;
    overflow: hidden;
    overflow-y: scroll;
    text-transform: capitalize;

    &::-webkit-scrollbar {
        width: 2px;
    }
    
    &::-webkit-scrollbar-thumb {
        background: #fff;
    }
    
`

const MoveItem = styled.li`
    padding-left: 10px;
`

export { Moves }