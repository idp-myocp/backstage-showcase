import { EntitySwitch, isKind } from '@backstage/plugin-catalog';
import { EntityJiraOverviewCard, isJiraAvailable } from '@roadiehq/backstage-plugin-jira';

import React from 'react';

import {
  componentPage,
  defaultEntityPage,
  apiPage,
  groupPage,
  userPage,
  systemPage,
  domainPage,
  resourcePage,
} from './Pages';
import { Grid } from '@mui/material';

export const entityPage = (
  <EntitySwitch>
    <EntitySwitch.Case if={isKind('component')} children={componentPage} />
    <EntitySwitch.Case if={isKind('api')} children={apiPage} />
    <EntitySwitch.Case if={isKind('group')} children={groupPage} />
    <EntitySwitch.Case if={isKind('user')} children={userPage} />
    <EntitySwitch.Case if={isKind('system')} children={systemPage} />
    <EntitySwitch.Case if={isKind('domain')} children={domainPage} />
    <EntitySwitch.Case if={isKind('resource')} children={resourcePage} />
    <EntitySwitch.Case if={isJiraAvailable}>
        <Grid item md={6}>
          <EntityJiraOverviewCard />
        </Grid>
        </EntitySwitch.Case>
    <EntitySwitch.Case>{defaultEntityPage}</EntitySwitch.Case>
  </EntitySwitch>
);
