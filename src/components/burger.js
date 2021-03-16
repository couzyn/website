import React, { useState } from "react"
import '../styles/global.scss'
import styled from "styled-components"

const BurgerSlices = styled.div`
width: 55px;
height: 50px;
display: flex;
flex-direction: column;
justify-content: space-around;
transition: all 200ms ease;
transform: ${({ isClicked }) => isClicked ? "rotate(0deg)" : "rotate(90deg)"};

&:hover{
    transform: rotate(0deg);
}

@media (max-width: 600px) {
    transform: rotate(0deg);
    &:hover{
        transform: rotate(00deg);
    }
}

div{
    display: block;
    height: 2px;
    width: 100%;
    flex-shrink: 0;
    background-color: #353535;
    transition: transform 200ms ease;
    transform-origin: 1px;

    :nth-child(1){
        transform: ${({ isClicked }) => isClicked ? "rotate(45deg)" : "rotate(0)"};
    }
    :nth-child(2){
        opacity: ${({ isClicked }) => isClicked ? "0" : "1"};
    }
    :nth-child(3){
        transform: ${({ isClicked }) => isClicked ? "rotate(-45deg)" : "rotate(0)"};
    }
    }
}

`

const MenuSlider = styled.div`

width: 100%;
height: 100vh;
position: absolute;
left: 0;
top: 0;
transform: ${({ isClicked }) => isClicked ? "translateX(0%)" : "translateX(-100%)"};
transition: all 500ms ease;
border-right: solid 2px #353535;
padding: 0;
margin: 0;
`

const BurgerMenu = () => {

    const [isClicked, setClicked] = useState(false)

    function openMenu() {
        setClicked(!isClicked)
    }

    return (
        <>
        <button className="burgerBtn" onClick = {() => openMenu()}>
           <BurgerSlices isClicked={isClicked}>
            <div/>
            <div/>
            <div/>
            </BurgerSlices>
        </button>
        <MenuSlider isClicked={isClicked}>
            <div className = "menuContainer">
                <div>00 - Home</div>
                <div>01 - About</div>
                <div>02 - Résumé</div>
                <div>03 - Portfolio</div>
                <div>Get in Touch</div>
            </div>
        </MenuSlider>
        </>
    )
}

export default BurgerMenu