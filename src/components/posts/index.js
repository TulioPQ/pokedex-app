import { useContext, useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { getPokes } from '../../services/'
import { PokeCardContainer } from './poke-card-container'
import { ThemeContext, glassEffect } from '../../context'

const PostsList = () => {
    const [pokeCards, setPokeCards] = useState([])

    const loadMore = async () => setPokeCards(await getPokes(pokeCards))

    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        async function fetchData() {
            const response = await getPokes(pokeCards)
            setPokeCards(response)
        }
        fetchData()
    }, [])

    return (
        <>
            <ThemeProvider theme={theme}>
                <Section >
                    {pokeCards.length > 0 && pokeCards.map((post, index) =>
                        <PokeCardContainer key={index} index={index} name={post.name} />
                    )
                    }
                    <Divbutton>
                        <Button onClick={async () => { await loadMore() }}>Load more pokemons</Button>
                    </Divbutton>
                </Section>
            </ThemeProvider>
        </>
    )
}

const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    background-color: ${props => props.theme.background};
    justify-content: space-around;
    margin-top: 50px;
    position: relative;
    z-index: 0;
`

const Divbutton = styled.div`
    ${props => glassEffect(props.theme.color, props.theme.color2)}
    width: 100%;
    text-align: center;
`

const Button = styled.button`
    font-size: 20px;
    border: none;
    background-color: inherit;
    cursor: pointer;
    color: ${props => props.theme.color};
    
    &:hover {
        color: ${props => props.theme.color2};
    }
`

export { PostsList }