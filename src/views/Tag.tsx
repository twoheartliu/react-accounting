import React from 'react';
import {useTags} from '../useTags';
import {useParams} from 'react-router-dom';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';
import {Center} from '../components/Center';
import {Space} from '../components/Space';

type Params = {
  id: string;
}
const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: #fff;
`
const InputWrapper = styled.div`
  background:#fff;
  margin-top: 8px;
  padding: 0 16px;
`
const Tag: React.FC = () => {
  const {findTag} = useTags();
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id));
  return <div>
    <Layout>
      <TopBar>
        <Icon name={'left'}/>
        <span>编辑标签</span>
        <Icon />
      </TopBar>
      <InputWrapper>
        <Input
          label='标签名'
          defaultValue={tag.name}
          placeholder='请输入标签名称'
          type='text'
        />
      </InputWrapper>
      <Center>
        <Space />
        <Space />
        <Space />
        <Button>删除标签</Button>
      </Center>
    </Layout>
  </div>;
};

export {Tag};