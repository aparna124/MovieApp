import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../Card';

describe('<Card />', () => {
  test('card renders correctly', () => {
    const tree = renderer.create(<Card />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});