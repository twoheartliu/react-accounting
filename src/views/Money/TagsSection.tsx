import styled from 'styled-components';
import React, {useState} from 'react';

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
        background: #f60;
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

const TagsSection: React.FC = () => {
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const onAddTag = () => {
    const tagName = window.prompt('请输入要添加的标签');
    if (tagName !== null) {
      setTags([...tags, tagName]);
    }
  };

  const onToggleTag = (item: string) => {
    if (selectedTags.includes(item)) {
      const left = selectedTags.filter(t => t !== item);
      setSelectedTags(left);
    } else {
      setSelectedTags([...selectedTags, item]);
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