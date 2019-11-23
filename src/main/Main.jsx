import React from "react";
import styled from "styled-components";

import Header from "../common/Header";
import CalendarList from "./component/CalendarList";
import Calendar from "./component/Calendar";


const Main = () => {

    return (
        <Wrapper>
            <Header></Header>
            <CalendarList>
                <Calendar>

                </Calendar>
                <Calendar>

                </Calendar>
                <Calendar>

                </Calendar>
            </CalendarList>
        </Wrapper>
    )
}

export default Main;

const Wrapper = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    
`
