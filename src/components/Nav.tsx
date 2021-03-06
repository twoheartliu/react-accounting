import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const NavWrapper = styled.nav`
  background: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0,  0.25) ;
  line-height: 24px;
  > ul {  
    display: flex;
    > li {
      width: 33.33%;
      text-align: center;
      a {
        padding: 4px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #999999;
        &.selected {
          color: #333333;
          .icon {
            fill: #333333;
          }
        }
        .icon {
          width: 24px;
          height: 24px;
          fill: #999999;
        }
      }      
    }
  }
`;

const Nav = () => {
  return <NavWrapper>
    <ul>
      <li>
        <NavLink to="/tags" activeClassName="selected">
          <Icon name={'tags'}/>
          标签
        </NavLink>
      </li>
      <li>
        <NavLink to="/money" activeClassName="selected">
          <Icon name={'money'}/>
          记一笔
        </NavLink>
      </li>
      <li>
        <NavLink to="/statistics" activeClassName="selected">
          <Icon name={'statistics'}/>
          统计
        </NavLink>
      </li>
    </ul>
  </NavWrapper>;
};

export default Nav;