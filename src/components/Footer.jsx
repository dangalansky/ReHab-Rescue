import React from "react";
import styled from "styled-components";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Wrapper>
      <footer>
        <p>Copyright ⓒ {year}</p>
      </footer>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.section`
  footer {
    /* display: fixed; */
    /* position: absolute; */
    /* margin-bottom: 0; */
  }
`;
