import React from 'react'
import styled from '@emotion/styled'

const SliderContent = styled.div`
transform: translate(-${props => props.translate})px;
transition: transform ease-out ${props => props.transition}s;
height: 100%;
width: ${props => props.width}px;
display: flex;
`


// () => {
//     return <div>Blah</div>
// }

export default SliderContent