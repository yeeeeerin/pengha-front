import React, { useEffect, useState } from "react";
import styled from "styled-components";
import close from "../../static/img/close-icon.svg";

const DatePickerView = (props) => {

    const { datePicker } = props;

    const [dateArr, setDateArr] = useState([]);
    const currentDate = new Date();

    useEffect(() => {
        const newDateArr = [
            currentDate.getDay() - 2,
            currentDate.getDay() - 1,
            currentDate.getDay(),
            currentDate.getDay() + 1,
            currentDate.getDay() + 2
        ]

        setDateArr(newDateArr);
    }, [])




    return (
        <Wrapper >
            <img src={close} alt="" onClick={datePicker} className="close" />
            <div className="dateList">
                {
                    dateArr.map((date, index) => {
                        return (
                            <DateTitle index={index} onClick={datePicker}>
                                {2019}년 {currentDate.getMonth()}월 {date}일
                            </DateTitle>
                        )

                    })
                }
            </div>
        </Wrapper>
    )
}

export default DatePickerView;


const Wrapper = styled.div`
    position:absolute;
    width:72.3%;
    height:51.3%;

    top:24.3%;
    left:13.9%;

    border-radius: 10px;
    box-shadow: 0 0 11px 0 #4f5053;

    background:#fff;

    z-index:100;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &>.close{
        position:absolute;
        width:24px;
        right:16px;
        top:16px;
    }

    &>.dateList{
        position:absolute;
        width:79.1%;
        height:234px;

    }

`

const DateTitle = styled.div`
    color : #5458cb;
    font-size:22px;

    margin-bottom:26px;

    text-align:center;
    font-family:"OTOmniGothicH";
`