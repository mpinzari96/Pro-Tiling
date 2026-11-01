export const googleReviewsUrl =
  "https://www.google.com/search?q=pro+tiling+sacramento#lrd=0x88d2c3091dca9121:0x87513116cc22015c,1,,,,";

export type Review = {
  name: string;
  initials: string;
  quote: string;
  location?: string;
};

export const reviews: Review[] = [
  {
    name: "Marcel Pinzari",
    initials: "MP",
    quote:
      "I hired these guys to handle tile work on both our downstairs and upstairs showers. I shared my vision for expanding the downstairs shower, and they brought it to life perfectly. From demo and cleanup to framing, plumbing, and final installation, every step was seamless and stress free. As a first timer with this kind of project, I didn’t know what to expect, but they made the whole process easy and professional. Pricing was also very reasonable compared to the other quotes I received. I highly recommend working with them!",
  },
  {
    name: "Lilian Rosco",
    initials: "LR",
    quote:
      "It was a pleasure to have Pro Tiling work on our shower. The Shower looks amazing and I am very happy with the results. I Would recommend Pro Tiling for you future tile project.",
  },
  {
    name: "Thomas Simon",
    initials: "TS",
    quote:
      "I highly recommend Pro Tiling for their exceptional floor, tile, and shower installation services. As a general contractor specializing in high-end custom homes and commercial buildings, I have had the pleasure of working with them for the past 10 years, and my experience has been nothing short of outstanding.",
  },
  {
    name: "William Golub",
    initials: "WG",
    location: "Sacramento, CA",
    quote:
      "I highly recommend Pro Tiling! They did the tile work for my bathroom remodel, and I couldn’t be happier with how everything turned out. The workmanship was excellent, with great attention to detail and a very clean, professional finish. They were reliable, easy to communicate with, and took the time to make sure everything was done right. Would definitely use Pro Tiling again for future projects and would recommend them for any quality tile work.",
  },
  {
    name: "Rachel Stephens",
    initials: "RS",
    location: "Sacramento, CA",
    quote:
      "We had a fantastic experience with Pro Tiling for our bathroom remodel! The team was professional, timely, and communicated with us every step of the way. The entire process was seamless, and the finished product exceeded our expectations. We couldn’t be happier with our new bathroom and would highly recommend them!",
  },
  {
    name: "Jessica M.",
    initials: "JM",
    location: "Elk Grove, CA",
    quote:
      "We had our master bathroom completely retiled and the results are stunning. Clean lines, zero lippage on the large-format tile. The team was in and out in 4 days, no mess left behind.",
  },
  {
    name: "David R.",
    initials: "DR",
    location: "Roseville, CA",
    quote:
      "Got three quotes for my kitchen backsplash. Pro Tiling wasn't the cheapest but they were clearly the most knowledgeable. The finished product looks like it belongs in a magazine.",
  },
  {
    name: "Sandra T.",
    initials: "ST",
    location: "Folsom, CA",
    quote:
      "Had a complex herringbone pattern in my entryway that two other contractors said they couldn't do. Pro Tiling came out, assessed it the same day, and knocked it out in two days. Exceptional.",
  },
];
