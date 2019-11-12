import React from 'react';
import { storiesOf  } from '@storybook/react';
import { CardListItem } from '../../../components/CardListItem/CardListItem.tsx';

const card =
    {
        text: "A",
        title: "By Cubby for Brian",
        detail: "Details",
        src: "tjlavin_bottom.png",
    };

storiesOf('Pages|Tjlavin/CardListItem', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'CardListItem',
    () => {
      return (
        <div>
          <label> Default CardListItem </label><br /><br />
          <CardListItem text={card.text} src={card.src} detail={card.detail} title={card.title} />
        </div>
      )
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } })
  .add(
    'Changed CardListItem',
    () => {
      return (
        <div>
          <label> You can change text, image, detail and title whatever you want </label><br /><br />
          <CardListItem text="B" src="tjlavin_top.png" detail="DetailText" title="Title"/>
        </div>
      )
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } })