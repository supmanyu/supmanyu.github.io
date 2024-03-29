import styled from 'styled-components';

type WrapperProps = {
  desktop?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  a {
    color: #fff;
    text-decoration: none;

    @media (max-width: 960px) {
    }
  }

  ${({ desktop }) =>
    desktop
      ? `
			align-items: center;
			display: flex;

			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`;
