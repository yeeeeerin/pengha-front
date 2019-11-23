import React from "react";
import styled from "styled-components";

const InputBox = props => {
    const handleChange = e => {
        props.onChange(e.target.value);
    };

    const { text, width, top, value } = props;
    return (
        <InputTag
            onChange={handleChange}
            placeholder={text}
            width={width}
            position={top}
            value={value}
            type="text"
            maxLength='15'
        />
    );
};

export default InputBox;

const InputTag = styled.input`
    position: absolute;
    box-sizing: border-box;

    width: ${props => `${props.width}%`};
    height: 44px;

    background:#f6f7fa;
    top:50.8%;
    left:12%;

    border: none;
    font-size: 15px;
    font-family:"OTOmniGothicH";
    font-weight:bold;

    text-align:center;

    border-bottom: solid 1px #dbdbdb;

    &:hover {
    border: none;
    border-bottom: solid 1px #dbdbdb;

    }

    &:focus {
    outline: none;
    border-bottom: solid 1px #dbdbdb;
    }

    &::placeholder {
    color: #aaaaaa;
    }
`;