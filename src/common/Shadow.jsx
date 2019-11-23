import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const Shadow = (props) => {

    const { check } = props;

    const [shadow, setShadow] = useState({
        opacity: 0,
        index: -10
    });

    useEffect(() => {
        handleShadow();
    }, [check])

    const handleShadow = () => {

        if (!check) {

            const newShadow = {
                opacity: 0,
                index: 99
            }
            setShadow(newShadow)

            setTimeout(() => {

                const newShadow = {
                    opacity: 0,
                    index: -99
                }
                setShadow(newShadow)

            }, 300)

        } else {
            const newShadow = {
                opacity: 0.8,
                index: 99
            }
            setShadow(newShadow)
        }

    }

    return (
        <Wrapper opacity={shadow.opacity} index={shadow.index} />
    )

}

export default Shadow;


const Wrapper = styled.div`
  z-index:${props => `${props.index}`};
  position: absolute;
  width: 100%;
  height: 100%;
  background-color:#000000;
  opacity: ${props => `${props.opacity}`};
  transition: opacity  0.3s cubic-bezier(0.4, 0, 0.2, 1);
`