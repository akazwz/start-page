import styled from '@emotion/styled'

type props = {
	separator: 2 | 4;
};

export const Container = styled.div<props>`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(${({ separator }) => separator}, 32px);
  grid-template-rows: repeat(6, 32px);
  margin-bottom: 10rem;
  align-items: center;
  direction: rtl;
  @media only screen and (max-width: 1400px) {
    & {
      grid-template-columns: repeat(${({ separator }) => separator}, 28px);
      grid-template-rows: repeat(6, 28px);
    }
  }
  @media only screen and (max-width: 1150px) {
    & {
      grid-template-columns: repeat(${({ separator }) => separator}, 28px);
      grid-template-rows: repeat(6, 28px);
    }
  }
  @media only screen and (max-width: 900px) {
    & {
      grid-template-columns: repeat(${({ separator }) => separator}, 23px);
      grid-template-rows: repeat(6, 23px);
    }
  }
  @media only screen and (max-width: 700px) {
    & {
      grid-template-columns: repeat(${({ separator }) => separator}, 18px);
      grid-template-rows: repeat(6, 18px);
    }
  }
  @media only screen and (max-width: 500px) {
    & {

      grid-template-columns: repeat(${({ separator }) => separator}, 13px);
      grid-template-rows: repeat(6, 13px);
    }
  }
`

export const fuck = ''