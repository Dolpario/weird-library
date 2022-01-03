import React from 'react';

import { ColumnLineChart } from 'components/chart/amchart/ColumnLineChart';

export default {
  title: 'Chart/Amchart/ColumnLineChart',
  component: ColumnLineChart,
};

const Template = (args) => <ColumnLineChart {...args} />;

export const LineColumn = Template.bind({});
LineColumn.args = {
};

