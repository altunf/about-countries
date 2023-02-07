import styled from "styled-components";

export const RegionFilterStyle = styled.div`
  cursor: pointer;

  width: 270px;

  box-shadow: var(--box-shadow-2);
  border-radius: var(--border-radius-m);

  background-color: ${(props) => props.theme.body};

  header {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .dropdown-body {
    padding: 5px;
    z-index: 9999;
    display: none;
    position: absolute;

    border-radius: var(--border-radius-m);

    background-color: ${(props) => props.theme.body};
    border-top: 5px solid ${(props) => props.theme.dropDown};
  }

  .dropdown-body.open {
    width: 270px;
    display: block;
  }

  .dropdown-item {
    opacity: 0.6;
    padding: 8px;
  }

  .dropdown-item:hover {
    opacity: 2;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .dropdown-item-dot {
    opacity: 0;
    color: #91a5be;
    transition: all 0.2s ease-in-out;
  }

  .dropdown-item-dot.selected {
    opacity: 1;
  }

  .icon {
    font-size: 13px;
    color: #91a5be;
    transform: rotate(0deg);
    transition: all 0.2s ease-in-out;
  }

  .icon.open {
    transform: rotate(90deg);
  }
`;
