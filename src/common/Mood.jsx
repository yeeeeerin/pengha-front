import React from "react";
import styled from "styled-components";
import peng from "../static/img/peng.png";


const Mood = (props) => {

    const { size } = props;
    const width = size === 'small' ? 20 :
        size === 'middle' ? 70 : 90;


    return (
        <Wrapper src={peng} width={width} />
    )

}
export default Mood;

const Wrapper = styled.img`
    position:relative;
    width: ${props => `${props.width}%`};
    background : #000;

    margin-right:6%;
`