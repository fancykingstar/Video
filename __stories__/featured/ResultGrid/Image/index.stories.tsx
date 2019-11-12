import React from 'react';
import { storiesOf  } from '@storybook/react';
import { Image } from '../../../../pages/featured.tsx';
import { GridImageWrapper, GridImageContainer, Price, ImageItem, SmallTitle, Title, ImageContent } from '../../../../pages/featured.tsx';

const result = [{
  name: "Gilbert",
  title: "Comedian",
  image: "https://d31wcbk3iidrjq.cloudfront.net/static/user/NuLZJ326L.jpeg",
  tags: ["Actors", "Legends", "Comedian"],
  price: "$150"
},
{
  name: "Abcccbc",
  title: "Musician",
  image: "https://d31wcbk3iidrjq.cloudfront.net/static/user/qVl2Vogqd.jpg",
  tags: ["Actors", "TV", "Comedian"],
  price: "$35"
}]

storiesOf('Pages|Featured/ResultsGrid/Image', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'Default Button',
    () => {
    	return (
    		<div>
    			<label> default image</label><br /><br />
    			<Image price={result[0].name} image={result[0].image} title={result[0].title} name={result[0].name} tags={result[0].tags} />
    		</div>
    	)
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  ).add(
    'Other Button',
    () => {
      return (
        <div>
          <label> 
            name = "Abcccbc"  <br/>
            title =  "Musician" <br/>
            image = "https://d31wcbk3iidrjq.cloudfront.net/static/user/qVl2Vogqd.jpg"
            tags = "Actors", "TV", "Comedian" <br/>
          </label><br/><br/>
          <Image price={result[1].name} image={result[1].image} title={result[1].title} name={result[1].name} tags={result[1].tags} />
        </div>
      )
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )