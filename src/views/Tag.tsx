import React from 'react';
import {useTags} from '../useTags';
import {useParams, useHistory} from 'react-router-dom';
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
  const {findTag, updateTag, deleteTag} = useTags();
  let {id:idString} = useParams<Params>();
  const tag = findTag(parseInt(idString));
  const tagContent = () => {
    return (
      <div>
        <InputWrapper>
          <Input
            label='标签名'
            value={tag.name}
            placeholder='请输入标签名称'
            onChange={(e) => {
              const nowTagName = e.target.value;
              updateTag(tag.id, {name: nowTagName})
            }}
            type='text'
          />
        </InputWrapper>
        <Center>
          <Space />
          <Space />
          <Space />
          <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
        </Center>
      </div>
    )
  };

  const history = useHistory();
  const onClickBack = () => {
    history.goBack();
  }
  return <div>
    <Layout>
      <TopBar>
        <Icon name={'left'} onClick={onClickBack}/>
        <span>编辑标签</span>
        <Icon />
      </TopBar>
      {tag ? tagContent() : <Center>tag 不存在</Center>}
    </Layout>
  </div>;
};

export {Tag};