export interface Blog {
  id: string;
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  image?: string;
  imageCaption?: string;
}

export const blogs: Blog[] = [
  {
    id: "first-week-internship",
    slug: "my-first-week-of-internship",
    title: "my first week of internship",
    date: "friday, 10 october 2025",
    description:
      "my first day of internship at silverlake - nervous beginnings, meeting the team, and discovering that working in a team can be a whole lot of fun.",
    content: `6 October 2025 is my first day of internship. The day before, I felt abit nervous cus I never done an internship before. The instruction given to me was to go to the office and sign in at the receptionist. After that, I waited about 2 hours until I decided to text my supervisor. Only then I know that all of other interns were assigned to the client office.

Arriving there, I can see my teams who are working on the current project. I was greeted and get to know all of them which changes my perspective of working at this company. I never know working in a team could be this a whole lot of fun! In a week I was able to learn a lot about the real process that is being done in a financial industry project. From development until the final testing process, it was a lot to be kept in mind at that time. Thanks to my friends and the senior here, I was able to adapt myself and get along with them. To a whole lot more adventure with my team! :)`,
    image: "/blog/first-week-internship.jpg",
    imageCaption: "me in silverlake office",
  },
];

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((b) => b.slug === slug);
}
