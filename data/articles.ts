export const articles: ArticleCategory[] = [
  {
    name: 'coding',
    articles: [
      {
        title: 'Coding - Learn the Basics in 7 Days',
        link: 'https://www.linkedin.com/pulse/coding-learn-basics-7-days-andy-mcgunagle/',
      },
    ],
  },
  {
    name: 'strength training',
    articles: [
      {
        title: 'Max-out, Back-off: A Simple Protocol for Size and Strength',
        link: 'https://www.elitefts.com/education/training/max-out-back-off-a-simple-protocol-for-size-and-strength/',
      },
      {
        title: 'Systematically Educating Clients for Lifting Success',
        link: 'https://www.elitefts.com/education/training/systematically-educating-clients-for-lifting-success/',
      },
      {
        title: 'The Science and Importance of Taking It to the Limit',
        link: 'https://www.elitefts.com/education/training/the-science-and-importance-of-taking-it-to-the-limit/',
      },
    ],
  },
];

export interface TitleAndLink {
  title: string,
  link: string,
};

interface ArticleCategory {
  name: string,
  articles: TitleAndLink[]
};
