import styled from "styled-components";

export const RegionFilterStyle = styled.div`
  width: 200px;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.body};

  header {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .dropdown-body {
    padding: 5px;
    border-top: 1px solid #e5e8ec;
    display: none;
  }

  .dropdown-body.open {
    display: block;
  }

  .dropdown-item {
    padding: 10px;
  }

  .dropdown-item:hover {
    cursor: pointer;
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
