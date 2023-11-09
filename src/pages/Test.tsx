import * as React from 'react';
import {
  JsonView,
  allExpanded,
  darkStyles,
  defaultStyles,
} from 'react-json-view-lite';
import styled from 'styled-components';

import { useAxios } from '~/hooks';
import { useLocation, useParams } from 'react-router-dom';
// import TOKEN from '~/sample/token';

import 'react-json-view-lite/dist/index.css';

const TestPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  console.log(params.get('address'));
  // const methodRef = React.useRef<HTMLInputElement>(null);
  // const pathRef = React.useRef<HTMLInputElement>(null);

  // const { response, loading, error, refetch } = useAxios(
  //   {
  //     method: methodRef.current?.value ?? 'GET',
  //     url: pathRef.current?.value ?? '',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   },
  //   false
  // );

  // const getAPI = () => {
  //   if (methodRef.current === null) return;
  //   if (pathRef.current === null) return;
  //   refetch();
  // };

  return (
    <div>
      <h1>Test</h1>
      {/* {TOKEN.map((token: any, index: number) => (
        <JsonView
          key={index}
          data={token}
          shouldExpandNode={allExpanded}
          style={darkStyles}
        />
      ))} */}

      {/* {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      <ResultBox>
        {!loading && !error && (
          <JsonView
            data={response?.data}
            shouldExpandNode={allExpanded}
            style={darkStyles}
          />
        )}
      </ResultBox> */}
    </div>
  );
};

export default TestPage;

const Button = styled.button`
  padding: 4px;
  color: white;
  background: black;
`;

const ResultBox = styled.div`
  padding: 8px;
  border: 1px dotted red;
`;
