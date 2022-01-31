export const socialLinks: Site[] = [
  {
    name: "LinkedIn",
    src: "/the-linkedin-logo.png",
    url: "https://www.linkedin.com/in/andy-mcgunagle/",
  },
  {
    name: "Twitter",
    src: "/twitter-logo.png",
    url: "https://twitter.com/andymcgunagle",
  },
];

export interface Site {
  name: string,
  src: string,
  url: string,
};