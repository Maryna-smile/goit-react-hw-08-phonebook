import styled from '@emotion/styled/macro';

export const Button = styled.button`
margin-top: 10px;
margin-left: 20px;
  align-items: center;
  align-self: center;
  background-color: rgb(116, 1, 81);
  background-image: none;
  background-position: 0 90%;
  background-repeat: repeat no-repeat;
  background-size: 4px 3px;
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  border-style: solid;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, 0.2) 15px 28px 25px -18px;
  box-sizing: border-box;
  color: #f3eff2;
  cursor: pointer;
  display: inline-block;
  font-family: inherit, 
  font-size: 1rem;
  line-height: 23px;
  outline: none;
  padding: 5px 10px;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
    transform: translate3d(0, 2px, 0);
  }

  &focus {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;
  }
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
  min-width: 250px;
  padding: 10px 20px;
  font-size: 20px;

  border: 1px solid rgb(116, 1, 81);
  border-radius: 5px;
`;


export const FormEl = styled.form`
  display: flex;
position: relative;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
  min-width: 250px;
  padding: 10px 20px;
  font-size: 15px;

  border: 1px solid rgb(116, 1, 81);
  border-radius: 5px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.label`
  position: relative;
`;
export const Input = styled.input`
  border: none;
  border-bottom: 1px solid rgb(116, 1, 81);
  background: transparent;
  outline: none;
`;

export const Span = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s ease;
  ${Input}:focus-within + & {
    transform: translateX(-180%);
  }
  ${Input}:not(:placeholder-shown) + & {
    transform: translateX(-180%);
  }
`;

export const Edit = styled.button`
  position: absolute;
  top: 5px;
  left: 2px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const OkBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 5px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const DeleteBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 5px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;
