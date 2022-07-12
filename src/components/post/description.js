import { useEffect, useState } from 'react'
import { getAbilityDetails } from '../../services'
import styled from 'styled-components'

const Description = (props) => {

    const [abilityDesciption, setAbilityDesciption] = useState('')

    const url = props.urlProp

    useEffect(() => {
        async function fetchData() {
            const abilityDesciption = await getAbilityDetails(url)
            setAbilityDesciption(abilityDesciption)
        }
        fetchData()
    }, [])

    return (
        <TextDescription>
            {abilityDesciption}
        </TextDescription>
    )
}

const TextDescription = styled.p`
    padding: 10px;
    padding-left: 20px;
    text-justify: auto;
`

export { Description }