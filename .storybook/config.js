import { addParameters, configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';

import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
    @font-face{
        font-family:spinnler;font-weight:500;
        src:url(https://d3el26csp1xekx.cloudfront.net/static/assets/aauxnextcond-medium-custom.woff2) 
        format("woff2"),url(://dhttps3el26csp1xekx.cloudfront.net/static/assets/aauxnextcond-medium-custom.woff) 
        format("woff"),url(https://d3el26csp1xekx.cloudfront.net/static/assets/aauxnextcond-medium-custom.ttf) 
        format("truetype"),url(https://d3el26csp1xekx.cloudfront.net/static/assets/aauxnextcond-medium-custom.otf) 
        format("opentype")}
      @font-face{
        font-family:fresh;font-weight:500;
        src:url(/font/Rushink-Demo.otf) format("opentype"),
        url(/font/Rushink-Demo.ttf) format("truetype")}
    body {
        font-family: spinnler, sans-serif, fresh;
    }
`

// Option defaults:
addParameters({
  options: {
    /**
     * show story component as full screen
     * @type {Boolean}
     */
    isFullscreen: false,
    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    showNav: true,
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: true,
    /**
     * where to show the addon panel
     * @type {('bottom'|'right')}
     */
    panelPosition: 'bottom',
    /**
     * regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex}
     */
    hierarchySeparator: /\/|\./,
    /**
     * regex for finding the hierarchy root separator
     * @example:
     *   null - turn off multiple hierarchy roots
     *   /\|/ - split by `|`
     * @type {Regex}
     */
    hierarchyRootSeparator: /\|/,
    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: true,
    /**
     * enable/disable shortcuts
     * @type {Boolean}
     */
    enableShortcuts: true,
    /**
     * show/hide tool bar
     * @type {Boolean}
     */
    isToolshown: true,
    /**
     * theme storybook, see link below
     */
    theme: undefined,
    /**
     * function to sort stories in the tree view
     * common use is alphabetical `(a, b) => a[1].id.localeCompare(b[1].id)`
     * if left undefined, then the order in which the stories are imported will
     * be the order they display
     * @type {Function}
     */
    storySort: undefined,
  },
});

function withGlobalStyles(storyFn) {
  return (
    <React.Fragment>
      <GlobalStyles />
      {storyFn()}
    </React.Fragment>
  );
}

addDecorator(withGlobalStyles);

configure(require.context('../__stories__', true, /\.stories\.tsx$/), module);