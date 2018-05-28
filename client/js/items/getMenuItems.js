const getMenuItems = () => [
  {
    id: 1,
    url: '/',
    title: 'Home',
  },
  {
    id: 2,
    url: '/about',
    title: 'About',
  },
  {
    id: 3,
    url: '/authentication',
    title: 'Sign in',
    displayCondition: isAuthenticated => !isAuthenticated,
  },
  {
    id: 4,
    url: '/signOut',
    title: 'Sign out',
    displayCondition: isAuthenticated => isAuthenticated,
  },
];

export default getMenuItems;
