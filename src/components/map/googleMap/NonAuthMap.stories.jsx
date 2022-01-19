import React from 'react';

import { NonAuthMap } from 'components/map/googleMap/NonAuthMap';

export default {
  title: 'Map/googleMap/NonAuthMap',
  component: NonAuthMap,
};

const Template = (args) => <NonAuthMap {...args} />;

export const Map = Template.bind({});
Map.args = {
};

