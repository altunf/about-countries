import styled from "styled-components";

export const RegionFilterStyle = styled.div`
  width: 270px;
  cursor: pointer;
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
    border-top: 1px solid #e5e8ec;

    background-color: ${(props) => props.theme.body};
  }

  .dropdown-body.open {
    width: 200px;
    display: block;
  }

  .dropdown-item {
    opacity: 0.6;
    padding: 10px;
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
