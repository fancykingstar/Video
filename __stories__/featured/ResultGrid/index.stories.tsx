import React from 'react';
import { storiesOf  } from '@storybook/react';
import { ResultsGrid, Image } from '../../../pages/featured.tsx';
import { results } from '../../../utils/data';

storiesOf('Pages|Featured/ResultsGrid', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'Results Grid',
    () => {
    	return (
    		<div>
    			<label> result grid</label><br />
    			<ResultsGrid>
            {results.map((item, i) => (
              <Image
                key={i}
                price={item.price}
                image={item.image}
                title={item.title}
                name={item.name}
                tags={item.tags}
              />
            ))}
          </ResultsGrid>
    		</div>
    	)
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )