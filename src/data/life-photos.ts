export type LifePhoto = {
  /** File name inside `public/images/life/team/`. Drop your photo here with this exact name. */
  file: string;
  caption: string;
  alt: string;
  /** Tailwind span classes for the bento grid. */
  span: string;
};

/**
 * Real photos of the Nova team outside the office.
 *
 * HOW TO ADD YOUR OWN PHOTOS
 * --------------------------
 * Save each image into `public/images/life/team/` using the exact `file`
 * names below. That's it — the gallery picks them up automatically.
 *
 * Until a file exists, a neat placeholder is shown instead of a broken image.
 */
export const teamLifePhotos: LifePhoto[] = [
  {
    file: "team-bazaar.jpg",
    caption: "Team run to the bazaar between sprints",
    alt: "Nova Solution team members talking on a street during a break",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    file: "team-outing.jpg",
    caption: "Weekend outing with the whole crew",
    alt: "Nova Solution team taking a selfie together on a day out",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    file: "team-night.jpg",
    caption: "Late-night chai after a launch",
    alt: "Three Nova Solution team members out in the city at night",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    file: "ceo-ansar-arshad.jpg",
    caption: "Ansar Arshad — Founder & CEO",
    alt: "Ansar Arshad, Founder and CEO of Nova Solution",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    file: "team-evening.jpg",
    caption: "Team dinner after a project handover",
    alt: "Two Nova Solution team members in shalwar kameez at an evening event",
    span: "md:col-span-1 md:row-span-2",
  },
];
