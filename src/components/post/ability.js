import { Fragment, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPokeData } from '../../services'
import styled, { ThemeProvider } from 'styled-components'
import { ThemeContext, glassEffect } from '../../context'
import { Description } from './description'

const Ability = () => {
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
                <AbilityContainer>
                    <H3>Type(s):</H3>
                    <TypeContainer>
                        {pokeCard.types?.map((type, index) =>
                            <Text key={index}>{type.type.name}</Text>
                        )
                        }
                    </TypeContainer>
                    <H3>Abilit(y/ies):</H3>
                    <AbilityDescription>
                        {pokeCard.abilities?.map((item, index) =>
                            <Fragment key={index}>
                                <AbilityName> {item.ability.name}: </AbilityName>
                                <Description urlProp={item.ability.url}></Description>
                            </Fragment>
                        )
                        }
                    </AbilityDescription>
                </AbilityContainer>
            </ThemeProvider>
        </>
    )
}

const AbilityContainer = styled.div`
    color: ${props => props.theme.color2};
    height: 100%;
    grid-area: ability;
    margin: 5px;
    margin-right: 15px;
    ${props => glassEffect(props.theme.color, props.theme.color2)}
    
    @media(max-width: 426px){
        margin: 0 auto;
        width: 90%;
        display: block;
    }
`

const H3 = styled.h3`
    font-size: 2rem;
`

const TypeContainer = styled.div`
    padding: 10px;

    @media(max-width: 426px){
        margin: 0 auto;
        width: 90%;
        display: block;
        padding: 0;
    }
`

const Text = styled.p`
    font-size: 1rem;
    text-transform: capitalize;
`

const AbilityName = styled.h4`
    font-size: 1.5rem;
    padding-left: 10px;
    text-transform: capitalize;
`

const AbilityDescription = styled.div`
    overflow: hidden;
    overflow-y: scroll;
    height:200px;

    &::-webkit-scrollbar {
        width: 2px;
    }
    
    &::-webkit-scrollbar-thumb {
        background: #fff;
    }
`

export { Ability }