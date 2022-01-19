import React from 'react';

import { AuthMap } from 'components/map/googleMap/AuthMap';

export default {
  title: 'Map/googleMap/AuthMap',
  component: AuthMap,
};

const Template = (args) => <AuthMap {...args} />;

export const Map = Template.bind({});
Map.args = {
};

