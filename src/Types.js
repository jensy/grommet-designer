import React from 'react';
import {
  Anchor, Box, Button, Calendar, CheckBox, FormField,
  Grid, Grommet, Heading, Layer,
  Menu, Meter, Paragraph,
  Select, Stack, Text, TextArea, TextInput, base, grommet,
} from 'grommet';
import Icon, { names as iconNames } from './Icon';

const internalColors = ['active', 'background', 'focus', 'icon', 'placeholder', 'selected', 'text' ]
const colors = Object.keys({ ...base.global.colors, ...grommet.global.colors })
  // prune out colors we tend to use internally
  .filter(color => (typeof base.global.colors[color] === 'string'
    && !internalColors.includes(color)))
  .sort((c1, c2) => (c1 > c2 ? 1 : -1)); // sort alphabetically

export const componentTypes = {
  Box: {
    component: Box,
    name: 'Box',
    sample: <Box pad="xsmall" border>Box</Box>,
    defaultProps: {
      align: 'center',
      justify: 'center',
      pad: 'small',
    },
    properties: {
      align: ['stretch', 'start', 'center', 'end'],
      animation: ['fadeIn', 'slideUp', 'slideDown', 'slideLeft', 'slideRight', 'zoomIn', 'zoomOut'],
      background: colors,
      basis: ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'full', '1/2', '1/3', '2/3', '1/4', '3/4', 'auto'],
      direction: ['column', 'row'],
      elevation: ['none', 'xsmall', 'small', 'medium', 'large', 'xlarge'],
      fill: ['horizontal', 'vertical'],
      flex: ['grow', 'shrink'],
      gap: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      height: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      justify: ['between', 'start', 'center', 'end'],
      margin: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      overflow: ['auto', 'hidden', 'scroll', 'visible'],
      pad: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      round: ['xsmall', 'small', 'medium', 'large', 'full'],
      width: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
    },
  },
  Grid: {
    component: Grid,
    name: 'Grid',
    sample: <Box pad="xsmall" border={{ side: 'vertical', size: 'xlarge' }}>Grid</Box>,
  },
  Stack: {
    component: Stack,
    name: 'Stack',
    sample: (
      <Stack guidingChild="last">
        <Box width="xxsmall" background={{ color: 'brand', opacity: 'medium' }} fill="vertical" round="full"/>
        <Box pad="xsmall" border>Stack</Box>
      </Stack>
    ),
    properties: {
      anchor: ['center', 'top', 'bottom', 'left', 'right'],
      fill: false,
      guidingChild: ['first', 'last'],
    },
  },
  Layer: {
    component: Layer,
    name: 'Layer',
    sample: <Box pad="xsmall" border={{ side: 'right', size: 'xlarge' }}>Layer</Box>,
  },
  Grommet: { component: Grommet, name: 'Grommet' },
  Heading: {
    component: Heading,
    name: 'Heading',
    sample: <Heading size="small" margin="none">Heading</Heading>,
    text: 'Heading',
    properties: {
      level: ['1', '2', '3', '4'],
      margin: ['none', 'small', 'medium', 'large'],
      size: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
    },
  },
  Paragraph: {
    component: Paragraph,
    name: 'Paragraph',
    text: 'Paragraph',
    properties: {
      size: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
    },
  },
  Text: {
    component: Text,
    name: 'Text',
    text: 'Text',
    properties: {
      size: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
    },
  },
  Icon: {
    component: Icon,
    name: 'Icon',
    properties: {
      icon: iconNames,
      size: ['small', 'medium', 'large'],
    }
  },
  Anchor: {
    component: Anchor,
    name: 'Anchor',
    sample: <Text style={{ textDecoration: 'underline' }}>Anchor</Text>,
    properties: {
      color: colors,
      label: 'anchor',
      size: ['xsmall', 'small', 'medium', 'large'],
    },
  },
  Button: {
    component: Button,
    name: 'Button',
    sample: (
      <Box
        round="medium"
        border={{ color: 'brand', size: 'medium' }}
        align="center"
      >
        Button
      </Box>
    ),
    properties: {
      color: colors,
      label: 'Click Me',
    },
  },
  Menu: {
    component: Menu,
    name: 'Menu',
    properties: {
      disabled: false,
      icon: false,
      label: 'Actions',
      open: false,
      size: ['small', 'medium', 'large', 'xlarge'],
    },
  },
  CheckBox: {
    component: CheckBox,
    name: 'CheckBox',
    properties: {
      checked: false,
      disabled: false,
      label: 'enabled?',
      reverse: false,
      toggle: false,
    },
  },
  FormField: {
    component: FormField,
    name: 'FormField',
    properties: {
      color: colors,
      error: 'error',
      help: 'help',
      label: 'label',
    },
  },
  Select: {
    component: Select,
    name: 'Select',
  },
  TextArea: {
    component: TextArea,
    name: 'TextArea',
  },
  TextInput: {
    component: TextInput,
    name: 'TextInput',
    properties: {
      placeholder: '',
    }
  },
  Calendar: {
    component: Calendar,
    name: 'Calendar',
    properties: {
      animate: false,
      daysOfWeek: false,
      range: false,
      size: ['small', 'medium', 'large'],
    },
  },
  Meter: {
    component: Meter,
    name: 'Meter',
    properties: {
      background: colors,
      round: false,
      size: ['xsmall', 'small', 'medium', 'large', 'xlarge', 'full'],
      thickness: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      type: ['bar', 'circle'],
    },
  },
};

export const Adder = ({ onAdd, onClose }) => (
  <Layer
    position="top-left"
    margin="medium"
    onEsc={onClose}
    onClickOutside={onClose}
  >
    <Box fill="vertical" overflow="auto">
      <Grid columns="small" rows="xxsmall">
        {Object.keys(componentTypes).filter(key => key !== 'Grommet').map((key) => {
          const componentType = componentTypes[key];
          return (
            <Box fill key={key} round="small" overflow="hidden">
              <Button fill hoverIndicator onClick={() => onAdd(key)}>
                <Box pad={{ horizontal: 'small', vertical: 'xxsmall' }}>
                  {componentType.sample || componentType.name}
                </Box>
              </Button>
            </Box>
          );
        })}
      </Grid>
    </Box>
  </Layer>
);