import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../context'
import { themes } from '../../context'

const logoLocation = require('../../images/pokemon-logo.png')

const GlobalHeader = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    const changeTheme = (value) => {
        setTheme(themes[value])
    }

    return (
        <>
            <Section>
                <HeaderContainer>
                    <Img src={logoLocation} alt="Logo" />
                    <MenuContainer>
                        <Select onChange={(value) => changeTheme(value.target.value)} name="Themes" id="Theme">
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </Select>
                    </MenuContainer>
                </HeaderContainer>
            </Section>
        </>
    )
}

const Section = styled.section`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
`

const HeaderContainer = styled.div`
    display: flex;
    background: linear-gradient(to top, #2E688B , #FFC54D, #2E688B); 
    width: 100%;
    position: relative;
    height: 50px;
`

const MenuContainer = styled.div`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    
`

const Select = styled.select`
    background-color: inherit;
    border: none;
    cursor: pointer;
    outline: 0;
`

const Img = styled.img`
    height: 50px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
`

export { GlobalHeader }