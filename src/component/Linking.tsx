/* eslint-disable prettier/prettier */
const config = {
  screens: {
    News: {
      path: 'News',
    },
    Details: {
      path: 'Details/:id',
      parse: {
        id: id => `${id}`,
      },
    },
  },
};

const linking = {
  prefixes: ['demo://app'],
  config,
};

export default linking;
