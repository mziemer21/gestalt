// @flow strict
import React from 'react';
import Example from './components/Example.js';
import PropTable from './components/PropTable.js';
import PageHeader from './components/PageHeader.js';

const cards = [];
const card = c => cards.push(c);

card(
  <PageHeader
    name="Sticky"
    description="Sticky allows an element to become fixed when it reaches a threshold (top, left, bottom, or right)."
  />
);

card(
  <PropTable
    props={[
      {
        name: 'bottom',
        type: 'number | string',
        description: `Use numbers for pixels: bottom={100} and strings for percentages: width="100%"`,
      },
      {
        name: 'children',
        type: 'React.Node',
      },
      {
        name: 'left',
        type: 'number | string',
        description: `Use numbers for pixels: left={100} and strings for percentages: left="100%"`,
      },
      {
        name: 'right',
        type: 'number | string',
        description: `Use numbers for pixels: right={100} and strings for percentages: right="100%"`,
      },
      {
        name: 'top',
        type: 'number | string',
        description: `Use numbers for pixels: top={100} and strings for percentages: top="100%"`,
      },
      {
        name: 'zIndex',
        type: 'interface Indexable { index(): number; }',
        description: `An object representing the zIndex value of the Sticky.`,
      },
    ]}
  />
);

card(
  <Example
    name="Example: Sticky top"
    defaultCode={`
<Box color="white" height={200} overflow="scroll">
  <Box height={500} marginTop={10}>
    <Box>
      <Sticky top={0}>
        <Box alignItems="center" color="lightGray" display="flex" height={40}>
          <Text>This should stick</Text>
        </Box>
      </Sticky>
      <Box marginTop={10} position="relative">
        <Text>Scroll</Text>
        <Text>Keep scrolling</Text>
        <Text>Scroll more</Text>
      </Box>
    </Box>
    <Box>
      <Sticky top={0} dangerouslySetZIndex={{ __zIndex: 3 }}>
      <Box alignItems="center" color="lightGray" display="flex" height={40} position="relative" dangerouslySetInlineStyle={{ __style: { zIndex: 2 } }}>
          <Text>This should also stick</Text>
        </Box>
      </Sticky>
      <Box marginTop={10}>
        <Text>Still scrolling</Text>
        <Text>Tadaaaaa</Text>
      </Box>
    </Box>
  </Box>
</Box>
`}
  />
);

export default cards;
