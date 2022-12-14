// @flow strict
import { type Node, useEffect, useRef, useState } from 'react';
import { Box, Flex, IconButton, Layer, Popover, Text } from 'gestalt';

export default function Example(): Node {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef();

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <Box alignItems="center" display="flex" justifyContent="center" height="100%" width="100%">
      <Flex width={400} justifyContent="center">
        <IconButton
          accessibilityLabel="Default IconButton"
          icon="filter"
          iconColor="darkGray"
          onClick={() => {}}
          ref={anchorRef}
          size="lg"
        />

        {open && (
          <Layer>
            <Popover
              anchor={anchorRef.current}
              color="blue"
              id="popover-educate-2"
              idealDirection="down"
              showCaret
              onDismiss={() => {}}
              positionRelativeToAnchor={false}
              size="xs"
            >
              <Box padding={3}>
                <Text color="inverse" align="center">
                  Filter your board to see your favorite Pins, and more
                </Text>
              </Box>
            </Popover>
          </Layer>
        )}
      </Flex>
    </Box>
  );
}
