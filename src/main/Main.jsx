import React, { useEffect } from "react";
import styled from "styled-components";

import Header from "../common/Header";
import CalendarList from "./component/CalendarList";
import Calendar from "./component/Calendar";


const Main = () => {


    useEffect(() => {

    }, [])

    return (
        <Wrapper>
            <Header></Header>
            <CalendarList>
                <Calendar height={30} month={9} />
                <Calendar height={60} month={10} />
                <Calendar height={80} month={11} />
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
