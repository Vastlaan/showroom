import React, {useContext} from "react";
import styled from "styled-components";
import {Context} from '../../store'

export default function ButtonMenu() {
    //this button takes its state as a props, uncomment code below if it does't
    //const [isOpen, setIsOpen] = useState(false);

    const {store, dispatch} = useContext(Context)
    
    return (
        <Button
            isOpen={store.isMenuOpen}
            onClick={() => dispatch({type: 'switchMenu', payload: undefined})}
        >
            <div></div>
        </Button>
    );
}

const Button = styled.button`
    width: 3rem;
    height: 3rem;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: ${p=>p.isOpen?'absolute':'fixed'};
    top:1rem;
    right: 1rem;

    &:active,
    :focus {
        outline: none;
    }

    div {
        width: 3rem;
        height: 2px;
        background-color: ${p=>p.theme.secondary};
        position: relative;
        transition: all 0.3s;
        transform: ${(props) => (props.isOpen ? "rotate(135deg)" : "")};
        pointer-events: none;

        &:after {
            width: 3rem;
            height: 2px;
            content: "";
            display: block;
            position: absolute;
            background-color: ${p=>p.theme.secondary};
            top: -1rem;
            left: 0;
            transition: all 0.3s;
            transform: ${(props) =>
                props.isOpen ? "translate(0%,1rem) rotate(90deg)" : ""};
        }
        &:before {
            width: 3rem;
            height: 2px;
            content: "";
            display: ${(props) => (props.isOpen ? "none" : "block")};
            position: absolute;
            background-color: ${p=>p.theme.secondary};
            top: 1rem;
            left: 0;
        }
    }
`;
