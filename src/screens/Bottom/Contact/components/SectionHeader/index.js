import {Block, Text} from '@components';
import React from 'react';

const SectionHeader = ({title}) => {
  return (
    <Block
      paddingBottom={12}
      borderBottomWidth={0.5}
      borderColor="gray"
      backgroundColor="black">
      <Text md type="medium" color="gray_500">
        {title}
      </Text>
    </Block>
  );
};

export default SectionHeader;
