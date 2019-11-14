import React from 'react';
import { storiesOf  } from '@storybook/react';
import { CustomImageButton } from 'components/ImageButton/CustomImageButton.tsx';

storiesOf('Pages|Book/CustomImageButton', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'Custom Image',
    () => {
      return (
        <div>
          <label> custom image button</label><br />
          <CustomImageButton text="Custom Image" src="download-to-storage-drive.svg"/>
        </div>
      )
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  );