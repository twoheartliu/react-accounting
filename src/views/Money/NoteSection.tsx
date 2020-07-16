import styled from 'styled-components';
import React, {useRef, useState} from 'react';

const Wrapper = styled.section`
  background:#f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label {
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px;
      white-space: nowrap;
    }
    > input {
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;
const NoteSection: React.FC = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const inputOnBlur = () => {
    if (inputRef.current !== null) {
      const res = inputRef.current.value;
      setValue(res);
    }
  };

  return <Wrapper>
    <label>
      <span>备注</span>
      <input type="text" placeholder="在这里添加备注" onBlur={inputOnBlur} ref={inputRef} defaultValue={value}/>
    </label>
  </Wrapper>;
};
export {NoteSection};