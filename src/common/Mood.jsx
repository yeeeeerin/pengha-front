import React from "react";
import styled from "styled-components";

const Mood = (props) => {

    const { size } = props;
    const width = size === 'small' ? 56 :
        size === 'middle' ? 70 : 90;


    return (
        <Wrapper width={width}>

        </Wrapper>
    )

}
export default Mood;

const Wrapper = styled.div`
    width: ${props => `${props.width}px`};
    background : #000;
`