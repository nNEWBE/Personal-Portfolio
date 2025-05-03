export type IconProps = React.HTMLAttributes<SVGElement>;
export type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The animations and simplicity of Acernity are just next level. Highly recommended!",
    name: "Jared Thompson",
    designation: "Frontend Developer, PixelForge",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=faces&fit=crop&w=200&h=200",
  },
  {
    quote: "We integrated it within hours and the results were stunning!",
    name: "Amira Haddad",
    designation: "UX Lead, NovaWorks",
    src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?crop=faces&fit=crop&w=200&h=200",
  },
  {
    quote: "Saves tons of time while maintaining a high standard of design.",
    name: "Lina Chowdhury",
    designation: "Software Engineer, HorizonSoft",
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&fit=crop&w=200&h=200",
  },
];
