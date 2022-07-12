import { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getPokeData } from '../../services'
import styled, { ThemeProvider } from 'styled-components'
import { ThemeContext, glassEffect } from '../../context'
import { Ability } from './ability'
import { Moves } from './moves'

const PokeDetails = () => {
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
                <Section>
                    <CardContainer>
                        <ImgContainer>
                            <Img src={pokeCard.sprites?.other["official-artwork"].front_default} alt={pokeName} /><br />
                        </ImgContainer>
                        <TitleContainer>
                            <H1 >{pokeName}</H1>
                        </TitleContainer>
                        <Ability />
                        <Moves />
                        <ButtonContainer>
                            <Link to='/'>
                                <Button>Back</Button>
                            </Link>
                        </ButtonContainer>
                    </CardContainer>
                </Section>
            </ThemeProvider>
        </>
    )
}

const Section = styled.section`
    max-width= 1440px;
    background-color: ${(props) => props.theme.background}
`

const CardContainer = styled.div`
    width: 100%;
    padding: 50px 12px 12px 0;
    align-items: center;
    justify-content: center;
    display: grid;
    grid-template-areas: "image  name   name"
                         "image  moves  ability"
                         "button button button";
    grid-template-columns: 2fr 0.7fr 1.3fr;
    grid-template-rows: 10rem auto 30px;
    gap: 12px;

    @media(max-width: 426px){
        grid-template-areas: "name" "image" "ability" "moves" "button";
        grid-template-columns: none;
        grid-template-rows: none;
        gap: 20px;
    }
        
`

const ImgContainer = styled.div`
    position: relative;
    grid-area: image;
    height: 90%;
    @media(max-width: 426px){
        position: static;
        
    }
`

const Img = styled.img`
    width: 80%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    max-width: 450px;
    ${props => glassEffect(props.theme.color, props.theme.color2)}
    @media(max-width: 426px){
        position: static;
        transform: none;
        margin: 0 auto;
        display: block;
        height: 100%;
    }
    
`

const TitleContainer = styled.div`
    grid-area: name;
    margin-right: 15px;
    @media(max-width: 426px){
        margin: 0 auto;
        width: 90%
    }
    
`

const H1 = styled.h1`
    color: ${props => props.theme.color2};
    font-family: 'The Nautigal', cursive;
    font-size: 7rem;
    text-align: center;
    margin: 0 auto;
    text-transform: capitalize;
    ${props => glassEffect(props.theme.color, props.theme.color2)}
`

const ButtonContainer = styled.div`
    padding-top: 10px;
    margin: 0 15px;
    grid-area: button;
`

const Button = styled.button`
    ${props => glassEffect(props.theme.color, props.theme.color2)};
    color: ${props => props.theme.color};
    font-size: 20px;
    width: 100%;
    height: 30px;
    &:hover{
        color: ${props => props.theme.color2};
    }
    
`
export { PokeDetails }