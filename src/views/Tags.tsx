import React, {useState} from 'react';
import Layout from '../components/Layout';
import {useTags} from '../useTags';

const Tags = () => {
  const {tags, setTags} = useTags();
  return (
    <Layout>
      <ul>
        {tags.map(item => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </Layout>
  );
};

export default Tags;