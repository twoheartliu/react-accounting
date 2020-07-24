import React, {useState} from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {NoteSection} from './Money/NoteSection';
import {CategorySection} from './Money/CategorySection';
import {NumberPadSection} from './Money/NumberPadSection';
import {useRecords} from '../hooks/useRecords';


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Category = '-' | '+';

const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0
}
const Money = () => {
  const [selected, setSelected] = useState(defaultFormData);
  const {records, addRecord}= useRecords();
  console.log(records);
  //Partial 类型是父类型的一部分
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };
  const submit = () => {
    addRecord(selected);
    alert('保存成功')
    setSelected(defaultFormData)
  }
  return (
    <MyLayout>
      {JSON.stringify(selected)}
      <TagsSection
        value={selected.tagIds}
        onChange={(tagIds) => onChange({tagIds})}
      />
      <NoteSection
        value={selected.note}
        onChange={(note) => onChange({note})}/>
      <CategorySection
        value={selected.category}
        onChange={(category) => onChange({category})}/>
      <NumberPadSection
        value={selected.amount}
        onChange={(amount) => onChange({amount})}
        onOk={submit}
      />
    </MyLayout>
  );
};

export default Money;