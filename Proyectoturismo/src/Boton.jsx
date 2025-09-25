import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router'

const Boton = (props) => {
  return (
    <StyledWrapper>

    <Link to={props.link} className='flex text-2xl'> 
      <button className='sd:w-1/8'> 
          {props.text}
      </button>
      
    </Link>

     
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
   padding: 0.6em 1em;
   border: 4px solid #004718;
   transition: ease-in-out 0.3s;
   background-color: #61AB44;
   color: #004718;
   font-weight: bolder;
   font-size: 16px;
  }

  button:hover {
   transform: scale(1.2) rotate(10deg);
   background-color: #329909;
   color: black;
  }`;

export default Boton;
