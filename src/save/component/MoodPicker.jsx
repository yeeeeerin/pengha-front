import React from "react";
import styled from "styled-components";
import { moodList } from "../../util/moodList"
import Mood from "../../common/Mood";

const MoodPicker = (props) => {
    const { handleMoodPicker } = props;
    const handleClickMood = (type) => {
        handleMoodPicker(type)
    }

    return (
        <Wrapper>
            <div className="moodList">
                {
                    moodList.map(mood => {
                        return (
                            <Mood size="small" type={mood.type} onClick={handleClickMood} />
                        )
                    })
                }
            </div>

        </Wrapper>
    )
}

export default MoodPicker;

const Wrapper = styled.div`
    position:absolute;
    bottom:0px;
    height: 220px;

    border-top-left-radius: 29px;
    border-top-right-radius: 29px;
    background:#ebeef7;

    width:100%;

    &>.moodList{
        position:absolute;
        width:84.6%;
        height:80%;
        left:8.3%;
        top:20px;
    }

`