# Component inclusions and refernces

**index.html** - html framework, everything starts here, root div
 * **src/main.tsx** - render App at html root div
   * **src/App.tsx** - MantineProvicer, Router, theme
     * **MantineProvider** - Global styling and context
       * **Router** - Wrapper for React router

**pages**
  * **HomePage** - Home.page.tsx (/)

**components**
  * **Welcome** - Link to mantine vite dev guide
  * **ColorSchemeToggle** - Little Mantine magic to switch between dark and light modes
