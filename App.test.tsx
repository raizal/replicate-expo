import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

describe('<App />', () => {
  it('has 1 child', () => {
    let tree;
    renderer.act(() => {
      tree = renderer.create(<App />);
    });
    expect(tree).not.toBeNull();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const asJson = tree.toJSON();
    console.log(asJson);

    expect(asJson.children.length).toBeGreaterThan(0);
  });
});
