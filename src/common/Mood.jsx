import React from "react";
import styled from "styled-components";
import { moodList } from "../util/moodList"


const Mood = (props) => {

    const { size, type, onClick } = props;
    const width = size === 'small' ? 20 :
        size === 'middle' ? 20 : 42;

    const mood = moodList.find(m => m.type === type);
    const clickMood = () => {


        onClick && onClick(mood.type)

    }

    return (
        <Wrapper src={require(`../static/img/mood/${mood.img}`)} width={width} onClick={clickMood} override={props.override} />
    )

}
export default Mood;

const Wrapper = styled.img`
    position:relative;
    float: ${props => props.override || 'left'}
    width: ${props => `${props.width}%`};

    margin-right:5%;
    margin-bottom:27px;
`