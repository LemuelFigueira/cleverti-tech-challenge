import styled from "styled-components";

export const FeedBackContainer = styled.div`
  display: flex;

  flex-wrap: wrap;

  width: 100%;

  gap: 1rem;

  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  .header {
    display: flex;

    padding: 1em 1em 0 1rem;

    width: 100%;

    justify-content: space-between;
    align-items: center;

    height: fit-content;

    border-radius: 5px;

    .title {
      display: flex;
      font-weight: 800;

      font-size: 0.875rem;

      gap: 0.5rem;
    }
  }

  .body {
    width: 100%;
    text-align: start;

    padding: 0 1rem;
    .description {
      font-weight: 400;
      font-size: 0.875rem;

      color: darkslategray;
      strong {
        font-weight: 600;
        font-size: 0.875rem;

        color: black;
      }
    }
  }

  .footer {
    display: flex;

    width: 100%;

    align-items: center;
    justify-content: flex-end;

    div:nth-child(odd) {
      border-right: 1px solid lightgray;
    }

    div {
      border-top: 1px solid darkgray;
    }
  }
`;

export const PercentStatus = styled.div`
  display: flex;

  flex-direction: column;

  align-items: flex-start;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: aliceblue;

  padding: 0.5em 0 0.5em 1rem;

  .title {
    font-size: 2rem;
    font-weight: bold;

    color: #22ab55;

    line-height: 80%;

    text-transform: uppercase;
  }

  .label {
    font-size: 0.75rem;

    font-weight: bold;

    color: darkgray;

    text-transform: uppercase;
  }
`;

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  overflow: hidden;

  min-width: 200px;
  width: 500px;
  max-width: 80vw;

  gap: 1rem;
`;

export const Header = styled.div`
  display: flex;

  justify-content: flex-start;
  align-items: center;

  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;

    align-items: flex-start;
    justify-content: center;
  }

  > .title {
    min-width: fit-content;

    font-size: 1.275em;
    /* font-weight: 300; */

    color: darkslategray;
  }

  gap: 2rem;
`;

export const SupportContactContainer = styled.div`
  display: flex;

  justify-content: flex-start;

  flex-wrap: wrap;

  gap: 0.5rem;

  width: 100%;

  .avatar {
    display: flex;

    align-items: center;
    justify-content: center;

    width: 3rem;
    height: 1.5rem;

    font-size: 0.875rem;
    font-weight: bold;

    border-radius: 5px;

    text-transform: uppercase;

    background: #f9cf03;
  }

  > .title {
    color: darkgray;

    text-align: left;
    font-size: 0.675rem;
    font-weight: bold;

    width: 100%;
  }

  .body {
    display: flex;

    justify-content: space-between;
    align-items: center;

    gap: 0.875rem;

    .footer {
      display: flex;
      flex-wrap: wrap;

      .name {
        width: 100%;
        text-align: left;
      }
      .contact {
        display: flex;

        align-items: center;
        width: 100%;

        color: darkgray;
        font-size: 0.675rem;

        gap: 2px;
      }
    }
  }
`;