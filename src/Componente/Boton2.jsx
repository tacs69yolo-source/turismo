import styled from 'styled-components';

const Boton2 = () => {
  return (
    <StyledWrapper>
      <button className="btn"> Reservar
        <link rel="alternate" href="https://latrochita.org.ar/" type="application/atom+xml" title="Atom" />
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn {
   padding: 1.1em 2em;
   background: none;
   border: 2px solid #fff;
   font-size: 15px;
   background: #2A7B9B;
background: linear-gradient(90deg, rgba(42, 123, 155, 1) 0%, rgba(87, 177, 199, 1) 50%, rgba(180, 228, 240, 1) 100%);
   cursor: pointer;
   position: relative;
   overflow: hidden;
   transition: all 0.3s;
   border-radius: 12px;
   font-weight: bolder;
   box-shadow: 0 2px 0 2px #000;
  }

  .btn:before {
   content: "";
   position: absolute;
   width: 100px;
   height: 120%;
   background: #002404;
background: linear-gradient(90deg, rgba(0, 36, 4, 1) 0%, rgba(24, 121, 9, 1) 35%, rgba(91, 212, 78, 1) 100%);
   top: 50%;
   transform: skewX(30deg) translate(-150%, -50%);
   transition: all 0.5s;
  }

  .btn:hover {
    background: #084d00;
background: linear-gradient(90deg, rgba(8, 77, 0, 1) 0%, rgba(28, 156, 28, 1) 50%, rgba(143, 237, 133, 1) 100%);
   box-shadow: 0 2px 0 2px #0d3b66;
  }

  .btn:hover::before {
   transform: skewX(30deg) translate(150%, -50%);
   transition-delay: 0.1s;
  }

  .btn:active {
   transform: scale(0.9);
  }`;

export default Boton2;