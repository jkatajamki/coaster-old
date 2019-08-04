export default [
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
    url: '/signIn',
    title: 'Sign in',
    displayCondition: isAuthenticated => !isAuthenticated,
  },
  {
    id: 4,
    url: '/signUp',
    title: 'Sign up',
    displayCondition: isAuthenticated => !isAuthenticated,
  },
  {
    id: 5,
    url: '/signOut',
    title: 'Sign out',
    displayCondition: isAuthenticated => isAuthenticated,
  },
];
