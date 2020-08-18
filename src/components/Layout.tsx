import Nav from './Nav';
import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-flow: column nowrap;
`;

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
  &::-webkit-scrollbar{
    display:none;
    }
  scrollbar-width: none;
`;

type Props = {
  className?: string;
  scrollTop?: number;
}
const Layout: React.FC<Props> = (props) => {
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      if (!mainRef.current) {
        return;
      }
      mainRef.current.scrollTop = props.scrollTop!;
    }, 0);
  }, [props.scrollTop]);
  return <Wrapper>
    <Main className={props.className} ref={mainRef}>
      {props.children}
    </Main>
    <Nav/>
  </Wrapper>;
};

Layout.defaultProps = {
  scrollTop: 0
};
export default Layout;