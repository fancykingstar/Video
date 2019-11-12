import React from 'react';
import { storiesOf  } from '@storybook/react';
import { RelatedCard } from '../../../components/RelatedCard/RelatedCard.tsx';

const card =
    {
        price: "$25",
        src: "tjlavin_bottom.png",
        smallTitle: "MTV - The Challenge",
        title: "Zach Nichols"
    };

storiesOf('Pages|Tjlavin/RelatedCard', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'RelatedCard',
    () => {
      return (
        <div>
          <label> Default RelatedCard </label><br /><br />
          <RelatedCard price={card.price} src={card.src} smallTitle={card.smallTitle} title={card.title}/>
        </div>
      )
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } })
  .add(
    'Changed RelatedCard',
    () => {
      return (
        <div>
          <label> You can change price, image, text and title whatever you want </label><br /><br />
          <RelatedCard price="$50" src="tjlavin_top.png" smallTitle="SmallTitle" title="Title"/>
        </div>
      )
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } })