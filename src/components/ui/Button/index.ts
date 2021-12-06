import styled from 'styled-components';

type ButtonProps = {
  secondary?: boolean;
};

const Button = styled.button<ButtonProps>`
  cursor: pointer;
  border-radius: 3px;
  padding: 0.7rem 2.5rem;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff;
  background: #5d55d2;
  transition: all 250ms ease;

  &:focus {
    outline: none;
  }

  &:hover {
    background: rgba(93, 85, 210, 0.8);
  }

  &:disabled {
    background: gray;
  }

  ${({ secondary }) =>
    secondary &&
    `
		background: #95b6f0;
		&:hover {
			background: rgba(149, 182, 240, 0.8);
		}
	`}
`;

export default Button;
