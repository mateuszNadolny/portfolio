type NavbarElement = {
  id: string;
  text: string;
  url: string;
};

export const NAV_ELEMENTS: NavbarElement[] = [
  {
    id: 'aboutme',
    text: '<about me />',
    url: '/'
  },
  {
    id: 'techs',
    text: '<techs />',
    url: '/techs'
  },
  {
    id: 'projects',
    text: '<projects />',
    url: '/projects'
  },

  {
    id: 'contact',
    text: '<contact />',
    url: '/contact'
  }
];
