import IconSeach from '../../assets/search.svg';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;
const InputCustom = styled.input`
    ${props => props.offMargin ? `
    margin-top: 0;
    width: 99%;
    ` : `
    margin-top: 60px;
    width: 100%;
    `}
    padding-top: 10px;
    padding-bottom: 10px;
    text-indent: 35px;
    background: #e8e8e8;
    border-radius: 28px;
    border-color: transparent;
    background-image: url(${IconSeach});
    background-repeat: no-repeat;
    background-position: 6px;
    box-shadow: 0 2px 5px;
    outline: none;
    &:hover{
      background: #dedede;
      background-image: url(${IconSeach});
      background-repeat: no-repeat;
      background-position: 6px;
    }
    
`;

export {Container, InputCustom};