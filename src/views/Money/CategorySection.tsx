import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  font-size: 24px;
  > ul {
    display: flex;
    background: #C4C4C4;
    > li {
      width: 50%;
      text-align:center;
      padding: 16px 0;
      position: relative;
      &.selected::after {
        content: '';
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
      }
    }
  }
`;

const CategorySection: React.FC = () => {
  const categoryMap = {
    '-': '支出',
    '+': '收入'
  };
  type Keys = keyof typeof categoryMap;
  const [categoryList] = useState<Keys[]>(['-', '+']);
  // '+' 表示收入， '-' 表示支出
  const [category, setCategory] = useState('-');


  return <Wrapper>
    <ul>
      {
        categoryList.map(item => {
          return <li
            key={item}
            className={category === item ? 'selected' : ''}
            onClick={() => setCategory(item)}
          >
            {categoryMap[item]}
          </li>;
        })
      }
    </ul>
  </Wrapper>;
};

export {CategorySection};