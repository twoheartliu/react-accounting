import styled from 'styled-components';
import React from 'react';
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
  value: number[];
  onChange: (selected: number[]) => void;
}
const TagsSection: React.FC<Props> = (props) => {
  const {tags, setTags} = useTags();
  const selectedTagIds = props.value;
  const onAddTag = () => {
    const tagName = window.prompt('请输入要添加的标签');
    if (tagName !== null) {
      setTags([...tags, {id: Math.random(), name: tagName}]);
    }
  };

  const onToggleTag = (tagId: number) => {
    if (selectedTagIds.includes(tagId)) {
      const left = selectedTagIds.filter(t => t !== tagId);
      props.onChange(left);
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };

  return <Wrapper>
    <ol>
      {
        tags.map((tag) => {
          return <li
            key={tag.id}
            onClick={() => onToggleTag(tag.id)}
            className={selectedTagIds.includes(tag.id) ? 'selected' : ''}
          >
            {tag.name}
          </li>;
        })
      }
    </ol>
    <button onClick={onAddTag}>新增标签</button>
  </Wrapper>;
};
export {TagsSection};