import React from "react";
import styled from "styled-components";

const MonthTitle = (props) => {

    const { year, month } = props;

    return (
        <Wrapper>
            <div className="month">
                {year}년 {month}월
            </div>
        </Wrapper>
    )
}

export default MonthTitle;

const Wrapper = styled.div`
    position:absolute;
    width:30%;
    height:10%;

`