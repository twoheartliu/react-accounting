import React, {useState} from 'react';
import Layout from '../components/Layout';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components';
import {useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';

const CategoryWrapper = styled.div`
  background:#fff;
`;
const Item = styled.div`
  display: flex;
  //border-bottom: 1px solid #888;
  justify-content: space-between;
  background: #fff;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note {
    margin-right: auto;
    margin-left: 16px;
    color:#999;
  }
`

const Statistics = () => {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection
          value={category}
          onChange={(value) => setCategory(value)}/>
      </CategoryWrapper>
      {
        records.map((r, index) => {
          return (
            <Item key={index}>
              <div className="tags">
                {r.tagIds.map(tagId => <span key={tagId}>{getName(tagId)}</span>)}
              </div>
              {r.note && <div className="note">
                {r.note}
              </div>}
              <div className="amount">
                ￥{r.amount}
              </div>
              {/*{day(r.createdAt).format('YYYY年MM月DD日')} */}
            </Item>
          );
        })
      }
    </Layout>
  );
};

export default Statistics;