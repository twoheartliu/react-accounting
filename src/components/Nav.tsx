import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const NavWrapper = styled.nav`
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
        .icon {
          width: 24px;
          height: 24px;
        }
      }      
    }
  }
`;

const Nav = () => {
  return <NavWrapper>
    <ul>
      <li>
        <Link to="/tags">
          <Icon name={'tags'}/>
          标签</Link>
      </li>
      <li>
        <Link to="/money">
          <Icon name={'money'}/>
          记一笔</Link>
      </li>
      <li>
        <Link to="/statistics">
          <Icon name={'statistics'}/>
          统计</Link>
      </li>
    </ul>
  </NavWrapper>;
};

export default Nav;