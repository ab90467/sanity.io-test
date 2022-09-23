import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import qm from './qm';
import am from './am';
import flag from './flag';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    am,
    qm,
    flag,
  ]),
});
