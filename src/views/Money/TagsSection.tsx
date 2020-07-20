import styled from 'styled-components';
import React, {useState} from 'react';
import {useTags} from '../../useTags';

const Wrapper = styled.section`
  background: #fff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  > ol {
    margin: 0 -12px;
    > li {
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 16px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected {
        background: #333333;
        color: #fff;
      }
    }
  }
  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`;

type Props = {
  value: string[];
  onChange: (selected: string[]) => void;
}
const TagsSection: React.FC<Props> = (props) => {
  const {tags, setTags} = useTags();
  const selectedTags = props.value;
  const onAddTag = () => {
    const tagName = window.prompt('请输入要添加的标签');
    if (tagName !== null) {
      setTags([...tags, tagName]);
    }
  };

  const onToggleTag = (item: string) => {
    if (selectedTags.includes(item)) {
      const left = selectedTags.filter(t => t !== item);
      props.onChange(left);
    } else {
      props.onChange([...selectedTags, item]);
    }
  };

  return <Wrapper>
    <ol>
      {
        tags.map((item) => {
          return <li
            key={item}
            onClick={() => onToggleTag(item)}
            className={selectedTags.includes(item) ? 'selected' : ''}
          >
            {item}
          </li>;
        })
      }
    </ol>
    <button onClick={onAddTag}>新增标签</button>
  </Wrapper>;
};
export {TagsSection};