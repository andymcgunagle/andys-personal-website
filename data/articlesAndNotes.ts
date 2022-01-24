export const articlesAndNotes: ArticlesAndNotesCategory[] = [
  {
    name: 'coding',
    content: [
      {
        title: 'Coding - Learn the Basics in 7 Days',
        link: 'https://www.linkedin.com/pulse/coding-learn-basics-7-days-andy-mcgunagle/',
      },
      {
        title: 'PostgreSQL Notes',
        link: 'https://github.com/andymcgunagle/postgresql-express-example',
      },
      {
        title: 'Redux with TypeScript Notes',
        link: 'https://github.com/andymcgunagle/redux-typescript-notes',
      },
      {
        title: 'VS Code Shortcuts Notes',
        link: 'https://github.com/andymcgunagle/vs-code-shortcuts-notes',
      },
      {
        title: 'Understanding JavaScript Generators',
        link: 'https://github.com/andymcgunagle/understanding-js-generators',
      },
      {
        title: 'SVG Animations with Figma and React',
        link: 'https://github.com/andymcgunagle/react-svg-animations',
      },
    ],
  },
  {
    name: 'strength training',
    content: [
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

export interface Content {
  title: string,
  link: string,
};

interface ArticlesAndNotesCategory {
  name: string,
  content: Content[]
};
