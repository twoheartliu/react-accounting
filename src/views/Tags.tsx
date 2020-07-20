import React from 'react';
import Layout from '../components/Layout';
import {useTags} from '../useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';

const TagList = styled.ol`
  font-size: 16px;
  > li {
    border-bottom: 1px solid #BCBBC1;
    line-height: 20px;
    padding: 12px 16px 12px 0;
    margin: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  background: #767676;
  color: #fff;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Space = styled.div`
  height: 16px;
`

const Tags = () => {
  const {tags} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(item => {
          return <li key={item}>
            <span className="oneLine">{item}</span>
            <Icon name='right'/>
          </li>;
        })}
      </TagList>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button>新增标签</Button>
      </Center>
    </Layout>
  );
};

export default Tags;