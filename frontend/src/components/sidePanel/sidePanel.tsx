import React from 'react';
import { BiLayout } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import { Stack } from '@chakra-ui/react';

import SidePanelTab from './tabs/sidePanelTab';

interface ISidePanel {
  tab: string;
}

const SidePanel = ({ tab }: ISidePanel) => {
  return (
    <Stack width="150px" pt="20px" pr="15px" bg="blue.600">
      <Link to="/home">
        <SidePanelTab
          text="Templates"
          icon={BiLayout}
          active={tab === 'templates' ? true : false}
        />
      </Link>
    </Stack>
  );
};

export default SidePanel;
