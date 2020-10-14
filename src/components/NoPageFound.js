import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
`;

export default class NoMatchPage extends React.Component {
  state = {};

  render() {
    return (
      <div className="nomatch-page">
        <Wrapper>
          <h2>No Match</h2>
        </Wrapper>
      </div>
    );
  }
}
