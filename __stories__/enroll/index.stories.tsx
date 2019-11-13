import React from 'react';
import { storiesOf  } from '@storybook/react';
import { FormInput } from '../../components/FormInput/FormInput.tsx';

const options = [
    { text: "Your name", placeholder: "Michael Jordan" },
    { text: "Email", placeholder: "you@example.com" },
]

storiesOf('Pages|enroll/FormInput', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'FormInput',
    () => {
    	return (
    		<div>
    			<FormInput text={options[0].text} placeholder={options[0].placeholder} />
    		</div>
    	)
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )
  .add(
    'FormInput List',
    () => {
      return (
        <div>
          {
            options.map((option, i) => {
              return <FormInput text={option.text} placeholder={option.placeholder} />
            })
          }
        </div>
      )
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )