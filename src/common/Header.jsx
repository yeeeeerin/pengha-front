import React, { useState } from "react";
import styled from "styled-components";
import graph from "../static/img/graph-icon.svg";
import add from "../static/img/add-icon.svg";
import { Redirect } from "react-router";


const Header = (props) => {

    const [isEdit, setIsEdit] = useState(false);


    const handleIsEdit = () => {
        setIsEdit(!isEdit);
    }



    return (
        <Wrapper>
            <div className="logo">
                펭수의 하루
            </div>
            <img className="graph icon" src={graph}/>

            <img className="add icon" src={add} onClick={handleIsEdit} />

            {isEdit && <Redirect push to={`/save/1`} />}



        </Wrapper>

    )
}

export default Header;

const Wrapper = styled.div`
    position:fixed;
    width:100%;
    height:108px;

    .logo{
        position:absolute;
        font-size:30px;
        left:7.5%;
        bottom:17.6%;
        color:#18193f;

        font-family:"OTOmniGothicH";
        font-weight:bold;
    }

    .graph{
        right:22.1%;
    }

    .add{
        right:9.3%;
    }

    .icon{
        position:absolute;
        width:6.4%;
        bottom:25%;
    }

`