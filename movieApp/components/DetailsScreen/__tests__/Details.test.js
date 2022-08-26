import React from 'react';
import renderer from 'react-test-renderer';
import Details from '../Details';

describe('<Details />', () => {
    test('details screen renders correctly', () => {
        const mockedParams = {
            route: { params: { movieId: '1', otherParams: {original_title: 'title', poster_path: 'url', vote_average: '8.1', release_date: '2022-09-02', overviewposter_path: 'path'}} },
            navigation: ''
          };
          const tree = renderer.create(<Details {...mockedParams} />).toJSON();
          expect(tree).toMatchSnapshot();
    })

    
})