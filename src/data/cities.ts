export type ServiceLink = {
  href: string;
  label: string;
};

export type CityFaq = {
  question: string;
  answer: string;
};

export type City = {
  name: string;
  slug: string;
  path: string;
  description: string;
  intro: string;
  paragraphs: [string, string, string];
  services: ServiceLink[];
  neighbors: string[];
  faqs: [CityFaq, CityFaq];
  areaType: "City" | "AdministrativeArea";
  ogTitle?: string;
  ogDescription?: string;
};

const ALL_SERVICES: ServiceLink[] = [
  { href: "/tile-installation-sacramento", label: "Tile Installation" },
  { href: "/bathroom-tile-sacramento", label: "Bathroom Tile Remodeling" },
  { href: "/shower-tile-installation-sacramento", label: "Shower Tile Installation" },
  { href: "/backsplash-installation-sacramento", label: "Kitchen Backsplash" },
];

export const cities: City[] = [
  {
    name: "Folsom",
    slug: "folsom",
    path: "/tile-contractor-folsom",
    description:
      "Tile contractor in Folsom, CA for bathroom remodels, custom showers, and kitchen backsplashes. Pro Tiling offers free on-site estimates near Sacramento.",
    intro:
      "Local tile craftsmanship for Folsom homes — from lakeside remodels to new construction finishes — installed clean and built to last.",
    paragraphs: [
      "Folsom sits about 20 miles east of downtown Sacramento, where many homeowners are updating older lake-area houses and finishing newer builds in the hills. Pro Tiling is a tile contractor Folsom residents call when they want precise layout, solid waterproofing, and a crew that protects the rest of the home while we work.",
      "We regularly handle shower tile, bathroom floors and walls, and kitchen backsplash projects in Folsom. Large-format porcelain, subway patterns, and mosaic niches are common requests here — we dry-layout every pattern before mortar so the finished lines look intentional, not rushed.",
      "Whether you are refreshing a primary bath near Folsom Lake or tying a backsplash into new counters, we give a clear written estimate and stick to the schedule we commit to. Call (916) 432-0365 to book a free on-site visit.",
    ],
    services: ALL_SERVICES,
    neighbors: ["El Dorado Hills", "Orangevale", "Rancho Cordova"],
    faqs: [
      {
        question: "Do you offer free estimates in Folsom?",
        answer:
          "Yes. We provide free on-site estimates for Folsom tile projects. Tell us about the room, tile type if you have one, and timeline — we’ll usually respond the same business day.",
      },
      {
        question: "How far is Folsom from Sacramento?",
        answer:
          "Folsom is roughly 20 miles east of downtown Sacramento along Highway 50. We schedule Folsom jobs regularly and travel there as part of our core service area.",
      },
    ],
    areaType: "City",
  },
  {
    name: "Rocklin",
    slug: "rocklin",
    path: "/tile-contractor-rocklin",
    description:
      "Rocklin tile contractor for floors, walk-in showers, and kitchen backsplashes. Licensed Pro Tiling serves Rocklin and the greater Sacramento area daily.",
    intro:
      "Dependable tile installation for Rocklin kitchens, baths, and living spaces — careful prep, clean lines, and no half-finished rooms.",
    paragraphs: [
      "Rocklin’s mix of established neighborhoods and newer subdivisions means we see everything from dated builder baths to open-concept kitchens ready for a statement backsplash. Based in Sacramento, Pro Tiling travels north regularly to serve Rocklin homeowners who want a specialist — not a general crew juggling other trades.",
      "Popular Rocklin projects include walk-in shower surrounds, bathroom floor tile, and kitchen backsplash installation. We waterproof wet areas properly, check floors for deflection, and use mortars matched to the tile size so lippage stays under control.",
      "If you are comparing quotes for tile work in Rocklin, ask how surface prep and waterproofing are handled. That is where long-term performance is won or lost — and it is standard on every Pro Tiling job.",
    ],
    services: [
      ALL_SERVICES[0],
      ALL_SERVICES[2],
      ALL_SERVICES[3],
      ALL_SERVICES[1],
    ],
    neighbors: ["Roseville", "Loomis", "Granite Bay"],
    faqs: [
      {
        question: "Do you offer free estimates in Rocklin?",
        answer:
          "Yes. Rocklin homeowners get free estimates with no obligation. We can meet on-site to measure, review tile options, and outline a realistic timeline.",
      },
      {
        question: "How far is Rocklin from Sacramento?",
        answer:
          "Rocklin is about 20–25 miles northeast of Sacramento via I-80. It is a regular stop on our Placer County route.",
      },
    ],
    areaType: "City",
  },
  {
    name: "Antelope",
    slug: "antelope",
    path: "/tile-contractor-antelope",
    description:
      "Tile contractor in Antelope, CA for bathroom tile, showers, and flooring. Pro Tiling brings Sacramento-area craftsmanship with free local on-site estimates.",
    intro:
      "Straightforward, high-quality tile work for Antelope homes — bathrooms, showers, and floors done right the first time.",
    paragraphs: [
      "Antelope sits in north Sacramento County, close enough that we treat it as a same-week service stop for most projects. Homeowners here often want practical upgrades: a safer shower floor, a brighter bath, or durable tile flooring that holds up to family traffic.",
      "Pro Tiling handles bathroom tile remodeling, shower waterproofing and tile, and general floor tile installation in Antelope. We contain dust, protect adjacent rooms, and leave the job site broom-clean every day.",
      "When you hire us for tile installation in Antelope, you get a licensed California contractor with written estimates and clear communication — no surprise add-ons mid-project.",
    ],
    services: [ALL_SERVICES[0], ALL_SERVICES[1], ALL_SERVICES[2]],
    neighbors: ["Citrus Heights", "Roseville", "Fair Oaks"],
    faqs: [
      {
        question: "Do you offer free estimates in Antelope?",
        answer:
          "Yes. Free estimates are available for Antelope projects. Call or use our contact form and we’ll schedule a visit that fits your calendar.",
      },
      {
        question: "How far is Antelope from Sacramento?",
        answer:
          "Antelope is roughly 12–15 miles northeast of central Sacramento. Travel time is typically under half an hour depending on traffic.",
      },
    ],
    areaType: "City",
  },
  {
    name: "Elk Grove",
    slug: "elk-grove",
    path: "/tile-contractor-elk-grove",
    description:
      "Elk Grove tile contractor for custom showers, bathroom remodels, and kitchen backsplashes. Pro Tiling serves Elk Grove with free on-site estimates today.",
    intro:
      "Trusted tile contractor serving Elk Grove families — custom showers, baths, and kitchen backsplashes with careful waterproofing.",
    paragraphs: [
      "Elk Grove has grown into one of the largest cities south of Sacramento, with newer tracts and established streets that both need quality tile work. Pro Tiling is familiar with the area’s popular finishes — from soft green subway showers to large-format bathroom floors — and we plan layouts so cuts stay balanced on every wall.",
      "Homeowners often hire us for shower tile installation, full bathroom tile remodels, and kitchen backsplash projects. We install sheet waterproofing membranes on wet walls and floors before any tile goes up, because that is what keeps showers dry years later.",
      "Looking for a tile contractor in Elk Grove who shows up on time and finishes clean? Request a free estimate and we will walk the space with you, discuss materials, and put the scope in writing before work starts.",
    ],
    services: ALL_SERVICES,
    neighbors: ["Sacramento", "Rancho Cordova", "Folsom"],
    faqs: [
      {
        question: "Do you offer free estimates in Elk Grove?",
        answer:
          "Yes. Elk Grove estimates are free and typically scheduled within a few days. We measure on-site and email a clear proposal — no hard sell.",
      },
      {
        question: "How far is Elk Grove from Sacramento?",
        answer:
          "Elk Grove is about 15 miles south of downtown Sacramento via Highway 99. It is one of our most frequently served cities.",
      },
    ],
    areaType: "City",
  },
  {
    name: "Fair Oaks",
    slug: "fair-oaks",
    path: "/tile-contractor-fair-oaks",
    description:
      "Fair Oaks tile contractor for bathroom tile, walk-in showers, and kitchen backsplashes. Craftsmanship from Pro Tiling near Sacramento — free local quotes.",
    intro:
      "Detail-focused tile installation for Fair Oaks homes — heritage houses and newer remodels alike.",
    paragraphs: [
      "Fair Oaks stretches along the American River with a mix of mid-century homes and updated properties. Many projects involve working around existing finishes carefully — matching elevations, protecting hardwood adjacent to baths, and planning tile that fits the character of the house rather than fighting it.",
      "We focus on bathroom wall and floor tile, custom shower surrounds with niches, and kitchen backsplash installation. Natural stone and porcelain both show up often in Fair Oaks; we use the right thinset and sealing approach for each.",
      "Pro Tiling is happy to meet Fair Oaks homeowners on-site for a free estimate. Bring inspiration photos if you have them — we will tell you what will work best for your substrate and budget.",
    ],
    services: [ALL_SERVICES[1], ALL_SERVICES[2], ALL_SERVICES[3]],
    neighbors: ["Carmichael", "Orangevale", "Citrus Heights"],
    faqs: [
      {
        question: "Do you offer free estimates in Fair Oaks?",
        answer:
          "Yes. We offer free Fair Oaks estimates. Share your address and a short project description and we will confirm a visit time.",
      },
      {
        question: "How far is Fair Oaks from Sacramento?",
        answer:
          "Fair Oaks is about 15–20 miles northeast of downtown Sacramento. We serve the community throughout the week.",
      },
    ],
    areaType: "City",
  },
  {
    name: "Fairfield",
    slug: "fairfield",
    path: "/tile-contractor-fairfield",
    description:
      "Tile contractor serving Fairfield, CA for showers, bathroom tile, and kitchen backsplashes. Pro Tiling covers the Solano corridor from Sacramento weekly.",
    intro:
      "Quality tile work for Fairfield residences — showers, baths, and kitchen backsplashes with Sacramento-area standards.",
    paragraphs: [
      "Fairfield sits west along I-80 between Sacramento and the Bay Area, so we plan travel deliberately and keep communication tight on timing. Homeowners here often want durable bathroom and shower systems that stand up to busy households, plus kitchen backsplashes that finish a remodel cleanly.",
      "Our Fairfield work typically includes walk-in shower tile, bathroom floor and wall installations, and kitchen backsplash layout. We bring the same waterproofing and surface-prep standards we use closer to Sacramento — no shortcuts because of the drive.",
      "If you need tile installation in Fairfield from a licensed crew that documents the scope up front, reach out for a free estimate. We will confirm whether your timeline and location fit our next available window.",
    ],
    services: [ALL_SERVICES[0], ALL_SERVICES[2], ALL_SERVICES[3]],
    neighbors: ["Vacaville", "Napa", "Benicia"],
    faqs: [
      {
        question: "Do you offer free estimates in Fairfield?",
        answer:
          "Yes. Fairfield estimates are free. Because of the distance from Sacramento, we may group nearby visits — we will tell you expected timing when you call.",
      },
      {
        question: "How far is Fairfield from Sacramento?",
        answer:
          "Fairfield is roughly 40–45 miles southwest of Sacramento via I-80. We include it in our greater service region for scheduled projects.",
      },
    ],
    areaType: "City",
  },
  {
    name: "Roseville",
    slug: "roseville",
    path: "/tile-contractor-roseville",
    description:
      "Roseville tile contractor for bathroom remodels, custom showers, and kitchen backsplashes. Licensed Pro Tiling installers — free local estimates available.",
    intro:
      "Polished tile installations for Roseville kitchens and baths — from builder upgrades to full primary-suite remodels.",
    paragraphs: [
      "Roseville is one of the busiest remodel markets north of Sacramento, with everything from Westpark and East Roseville updates to downtown-adjacent renovations. Pro Tiling works in Roseville often, so logistics and material runs are familiar — that means fewer delays once your start date is set.",
      "Signature jobs here include custom shower tile with benches and niches, bathroom tile remodeling, and kitchen backsplash installation that lines up with cabinets and outlets. We dry-fit critical walls and photograph progress so you always know where the project stands.",
      "Choose Pro Tiling when you want a Roseville tile contractor who specializes in tile only. We do not dilute focus across unrelated trades — your floor, shower, or backsplash gets our full attention.",
    ],
    services: ALL_SERVICES,
    neighbors: ["Rocklin", "Citrus Heights", "Granite Bay"],
    faqs: [
      {
        question: "Do you offer free estimates in Roseville?",
        answer:
          "Yes. Free Roseville estimates are available Monday through Saturday for scheduling. Most homeowners hear back the same business day.",
      },
      {
        question: "How far is Roseville from Sacramento?",
        answer:
          "Roseville is about 15–20 miles northeast of Sacramento. It is a core city in our service area.",
      },
    ],
    areaType: "City",
  },
  {
    name: "Vacaville",
    slug: "vacaville",
    path: "/tile-contractor-vacaville",
    description:
      "Vacaville tile contractor for bathroom tile, showers, and kitchen backsplashes. Pro Tiling serves Vacaville from the greater Sacramento region with care.",
    intro:
      "Reliable tile craftsmanship for Vacaville homes — clean installs for showers, baths, and kitchen backsplashes.",
    paragraphs: [
      "Vacaville sits further west on the I-80 corridor, and we schedule projects there when scope and timing align. Many homeowners are refreshing builder-grade baths or adding a kitchen backsplash after new counters — both are strong fits for our crew.",
      "We install shower tile with full membrane waterproofing, bathroom floor and wall tile, and kitchen backsplash patterns from classic subway to herringbone. Surface prep is included in the plan, not treated as an afterthought.",
      "Ask us about availability for tile work in Vacaville when you request an estimate. We will be honest about the calendar and give you a written number before any demolition starts.",
    ],
    services: [ALL_SERVICES[1], ALL_SERVICES[2], ALL_SERVICES[3]],
    neighbors: ["Fairfield", "Dixon", "Napa"],
    faqs: [
      {
        question: "Do you offer free estimates in Vacaville?",
        answer:
          "Yes. Vacaville estimates are free. We may coordinate the visit with other west-corridor appointments to keep scheduling efficient.",
      },
      {
        question: "How far is Vacaville from Sacramento?",
        answer:
          "Vacaville is approximately 35 miles southwest of Sacramento via I-80. We serve it as part of our extended Sacramento-region coverage.",
      },
    ],
    areaType: "City",
  },
  {
    name: "Carmichael",
    slug: "carmichael",
    path: "/tile-contractor-carmichael",
    description:
      "Carmichael tile contractor for showers, bathroom remodels, and kitchen backsplashes. Local Pro Tiling service near Sacramento with free on-site estimates.",
    intro:
      "Thoughtful tile work for Carmichael residences — showers, baths, and kitchens finished with care.",
    paragraphs: [
      "Carmichael’s tree-lined streets and established homes often need remodelers who respect existing architecture. We take time to protect flooring outside the work zone, plan transitions into adjacent rooms, and match the feel of the house rather than forcing a one-size layout.",
      "Common Carmichael requests include tiled showers with recessed niches, bathroom floor replacements, and kitchen backsplash installation. Porcelain and ceramic remain popular; we also set glass mosaic accents when the design calls for them.",
      "Pro Tiling is nearby in the Sacramento metro, so Carmichael jobs fit naturally into our weekly route. Request a free estimate and we will review your space in person.",
    ],
    services: [ALL_SERVICES[1], ALL_SERVICES[2], ALL_SERVICES[3]],
    neighbors: ["Fair Oaks", "Sacramento", "Citrus Heights"],
    faqs: [
      {
        question: "Do you offer free estimates in Carmichael?",
        answer:
          "Yes. Carmichael homeowners receive free estimates. We prefer on-site visits so measurements and substrate conditions are accurate.",
      },
      {
        question: "How far is Carmichael from Sacramento?",
        answer:
          "Carmichael is about 10–15 miles northeast of downtown Sacramento. Travel is typically quick for our crew.",
      },
    ],
    areaType: "City",
  },
  {
    name: "Orangevale",
    slug: "orangevale",
    path: "/tile-contractor-orangevale",
    description:
      "Orangevale tile contractor for bathroom tile, custom showers, and flooring. Pro Tiling serves Orangevale with free estimates and fully licensed crews.",
    intro:
      "Solid, detail-minded tile installations for Orangevale bathrooms, showers, and living spaces.",
    paragraphs: [
      "Orangevale sits between Fair Oaks and Folsom with a suburban feel and a lot of mid-size remodel projects. We often replace worn bath floors, rebuild shower surrounds, and install kitchen backsplashes after cabinet or counter updates.",
      "Our scope covers shower waterproofing and tile, bathroom wall and floor tile, and general tile installation throughout the home. We check slopes in showers carefully so water drains correctly — a detail that is easy to get wrong.",
      "When you need a tile contractor Orangevale homeowners recommend for clean workmanship, Pro Tiling is ready with written estimates and licensed, insured crews.",
    ],
    services: [ALL_SERVICES[0], ALL_SERVICES[1], ALL_SERVICES[2]],
    neighbors: ["Fair Oaks", "Folsom", "Citrus Heights"],
    faqs: [
      {
        question: "Do you offer free estimates in Orangevale?",
        answer:
          "Yes. Free estimates are available in Orangevale. Call (916) 432-0365 or send project details through our contact page.",
      },
      {
        question: "How far is Orangevale from Sacramento?",
        answer:
          "Orangevale is roughly 15–20 miles northeast of Sacramento. We serve it regularly alongside nearby Fair Oaks and Folsom.",
      },
    ],
    areaType: "City",
  },
  {
    name: "Sacramento",
    slug: "sacramento",
    path: "/tile-contractor-sacramento",
    description:
      "Sacramento tile contractor for custom showers, bathroom remodels, floors, and kitchen backsplashes. Licensed Pro Tiling — free on-site estimates citywide.",
    intro:
      "Sacramento’s tile specialists — custom showers, baths, floors, and kitchen backsplashes installed with precision.",
    paragraphs: [
      "As our home base, Sacramento is where Pro Tiling built its reputation: Midtown condos, East Sac bungalows, Natomas new builds, and Land Park remodels. We know local housing stock, HOA constraints, and how to keep job sites orderly in dense neighborhoods.",
      "Day to day we install shower tile systems, full bathroom tile packages, floor tile, and kitchen backsplashes across the city. Large-format porcelain and classic subway remain favorites; we bring the tools and mortars those formats require.",
      "If you are searching for a tile contractor in Sacramento who answers the phone and stands behind the finish, start with a free estimate. Same-day responses are common during business hours.",
    ],
    services: ALL_SERVICES,
    neighbors: ["Elk Grove", "Carmichael", "Rancho Cordova"],
    faqs: [
      {
        question: "Do you offer free estimates in Sacramento?",
        answer:
          "Yes. Sacramento estimates are free and often scheduled within a day or two. We meet on-site to review scope before quoting.",
      },
      {
        question: "What Sacramento neighborhoods does Pro Tiling serve?",
        answer:
          "We work throughout Sacramento including Midtown, East Sacramento, Land Park, Natomas, and surrounding areas. As our home base, we can usually schedule estimates within a day or two.",
      },
    ],
    areaType: "City",
  },
  {
    name: "Granite Bay",
    slug: "granite-bay",
    path: "/tile-contractor-granite-bay",
    description:
      "Granite Bay tile contractor for luxury showers, bathroom tile, and kitchen backsplashes. High-end installs by Pro Tiling with free on-site estimates now.",
    intro:
      "High-standard tile installations for Granite Bay homes — refined showers, baths, and kitchen finishes.",
    paragraphs: [
      "Granite Bay’s larger lots and custom homes often call for elevated finishes: book-matched walls, linear drains, heated floors, and carefully aligned large-format tile. Pro Tiling approaches these projects with extra layout time and premium materials suited to the design.",
      "We specialize in custom shower tile, bathroom remodeling, and kitchen backsplash work that complements high-end cabinetry and stone. Waterproofing membranes and proper floor prep are non-negotiable on every wet area.",
      "Granite Bay sits northeast of Sacramento near Folsom Lake. We schedule these projects with the care they deserve — clear milestones, protected living spaces, and a final walkthrough before we call the job complete.",
    ],
    services: [ALL_SERVICES[1], ALL_SERVICES[2], ALL_SERVICES[3]],
    neighbors: ["Roseville", "Loomis", "Folsom"],
    faqs: [
      {
        question: "Do you offer free estimates in Granite Bay?",
        answer:
          "Yes. Granite Bay estimates are free. Complex custom baths may take a longer on-site review so the quote reflects niches, benches, and specialty tile.",
      },
      {
        question: "How far is Granite Bay from Sacramento?",
        answer:
          "Granite Bay is about 20–25 miles northeast of Sacramento. We include it in our Placer County and Folsom Lake service route.",
      },
    ],
    areaType: "City",
  },
  {
    name: "Cameron Park",
    slug: "cameron-park",
    path: "/tile-contractor-cameron-park",
    description:
      "Cameron Park tile contractor for showers, bathroom tile, and kitchen backsplashes. Pro Tiling serves El Dorado County homes with free on-site estimates.",
    intro:
      "Dependable tile craftsmanship for Cameron Park — bathrooms, showers, and kitchen backsplashes done to Sacramento standards.",
    paragraphs: [
      "Cameron Park sits along Highway 50 east of Sacramento toward the foothills. Homes here range from established neighborhoods to newer builds; both benefit from careful tile layout and solid wet-area waterproofing when baths and showers are remodeled.",
      "We install shower surrounds, bathroom floor and wall tile, and kitchen backsplash systems for Cameron Park clients. Expect tidy work areas, daily cleanup, and a written plan for demo through grout.",
      "Pro Tiling is glad to travel for tile installation in Cameron Park when the project fits our calendar. Start with a free estimate so we can confirm timing and scope.",
    ],
    services: [ALL_SERVICES[0], ALL_SERVICES[2], ALL_SERVICES[3]],
    neighbors: ["El Dorado Hills", "Placerville", "Folsom"],
    faqs: [
      {
        question: "Do you offer free estimates in Cameron Park?",
        answer:
          "Yes. Cameron Park estimates are free. Share photos ahead of time if helpful — we will still verify measurements on-site before locking the quote.",
      },
      {
        question: "How far is Cameron Park from Sacramento?",
        answer:
          "Cameron Park is roughly 30 miles east of Sacramento on Highway 50. We serve it as part of our El Dorado County coverage.",
      },
    ],
    areaType: "City",
  },
  {
    name: "Loomis",
    slug: "loomis",
    path: "/tile-contractor-loomis",
    description:
      "Loomis tile contractor for bathroom remodels, showers, and kitchen backsplashes. Pro Tiling serves Loomis and nearby Placer towns — free local quotes.",
    intro:
      "Careful tile work for Loomis homes — showers, baths, and kitchen backsplashes with a personal-crew approach.",
    paragraphs: [
      "Loomis keeps a small-town character just beyond Rocklin and Roseville. Projects are often family baths, guest showers, and kitchen updates where homeowners want a contractor who communicates directly — you talk to us, not a call center.",
      "We provide shower tile installation, bathroom remodeling, and kitchen backsplash work. Prep and waterproofing are included in the process so the finish is as durable as it is attractive.",
      "If you want tile work in Loomis handled by a Sacramento-based specialist, request a free estimate. We will outline materials, labor, and schedule in plain language.",
    ],
    services: [ALL_SERVICES[1], ALL_SERVICES[2], ALL_SERVICES[3]],
    neighbors: ["Rocklin", "Granite Bay", "Roseville"],
    faqs: [
      {
        question: "Do you offer free estimates in Loomis?",
        answer:
          "Yes. Loomis estimates are free and obligation-free. We can usually visit the same week you inquire.",
      },
      {
        question: "How far is Loomis from Sacramento?",
        answer:
          "Loomis is about 25 miles northeast of Sacramento via I-80. It pairs naturally with our Rocklin and Roseville schedule.",
      },
    ],
    areaType: "City",
  },
  {
    name: "Placer County",
    slug: "placer-county",
    path: "/tile-contractor-placer-county",
    description:
      "Placer County tile contractor for Roseville, Rocklin, Loomis, and Granite Bay. Showers, baths, and backsplashes by Pro Tiling — free local estimates now.",
    intro:
      "Tile contractor coverage across Placer County — from Roseville and Rocklin to Loomis and Granite Bay.",
    paragraphs: [
      "Placer County stretches from busy suburban centers to quieter foothill communities. Pro Tiling serves homeowners throughout the county with the same installation standards we use in Sacramento: proper prep, waterproofing on wet areas, and finishes that look sharp after the crew leaves.",
      "Whether your project is a primary shower in Granite Bay, a bathroom remodel in Roseville, or a kitchen backsplash in Rocklin, we bring specialized tile skills — not a general contractor split across unrelated trades.",
      "Browse our city pages for Roseville, Rocklin, Loomis, and Granite Bay, or contact us for a free estimate anywhere in Placer County. We will confirm travel and timing up front.",
    ],
    services: ALL_SERVICES,
    neighbors: ["Roseville", "Rocklin", "Loomis"],
    faqs: [
      {
        question: "Do you offer free estimates in Placer County?",
        answer:
          "Yes. Free estimates are available across Placer County communities we serve. Tell us your city and project type so we can schedule efficiently.",
      },
      {
        question: "How far is Placer County from Sacramento?",
        answer:
          "Southern Placer County (Roseville, Rocklin) starts about 15–20 miles from Sacramento; communities like Loomis and Granite Bay are typically 20–30 miles. We travel the county regularly.",
      },
    ],
    areaType: "AdministrativeArea",
  },
  {
    name: "Citrus Heights",
    slug: "citrus-heights",
    path: "/tile-contractor-citrus-heights",
    description:
      "Citrus Heights tile contractor for bathroom tile, showers, and kitchen backsplashes. Pro Tiling offers free estimates for Sacramento-area homes nearby.",
    intro:
      "Practical, high-quality tile installs for Citrus Heights bathrooms, showers, and kitchens.",
    paragraphs: [
      "Citrus Heights sits northeast of Sacramento with a strong base of mid-century and later homes ready for bath and kitchen updates. We help homeowners replace tired floors, rebuild showers that leak, and add backsplashes that freshen the whole kitchen.",
      "Services include bathroom tile remodeling, shower waterproofing and tile, and kitchen backsplash installation. We keep the workspace contained and communicate clearly about each phase from demo to grout.",
      "Pro Tiling is a short drive away for Citrus Heights clients. Book a free estimate and we will assess substrate conditions before quoting — surprises under old tile should not show up mid-job.",
    ],
    services: [ALL_SERVICES[1], ALL_SERVICES[2], ALL_SERVICES[3]],
    neighbors: ["Roseville", "Fair Oaks", "Antelope"],
    faqs: [
      {
        question: "Do you offer free estimates in Citrus Heights?",
        answer:
          "Yes. Citrus Heights estimates are free. Most inquiries get a same-day or next-day response during business hours.",
      },
      {
        question: "How far is Citrus Heights from Sacramento?",
        answer:
          "Citrus Heights is about 12–15 miles northeast of downtown Sacramento. It is a frequent stop on our north-county route.",
      },
    ],
    areaType: "City",
  },
  {
    name: "Rancho Cordova",
    slug: "rancho-cordova",
    path: "/tile-contractor-rancho-cordova",
    description:
      "Rancho Cordova tile contractor for floors, showers, and kitchen backsplashes. Licensed Pro Tiling with free local estimates and clear project timelines.",
    intro:
      "Clean, durable tile work for Rancho Cordova homes — floors, showers, baths, and kitchen backsplashes.",
    paragraphs: [
      "Rancho Cordova sits east of Sacramento along Highway 50, with a blend of established tracts and newer developments. Remodel projects often balance budget and durability — porcelain floors, waterproofed showers, and backsplashes that finish a kitchen without drama.",
      "We install floor tile, shower surrounds, bathroom wall tile, and kitchen backsplash systems. Layout planning happens before mortar so doorways, niches, and outlets land in sensible places.",
      "Need a tile contractor in Rancho Cordova who puts prep and waterproofing in writing? Contact Pro Tiling for a free estimate and a clear start date.",
    ],
    services: [ALL_SERVICES[0], ALL_SERVICES[2], ALL_SERVICES[3]],
    neighbors: ["Folsom", "Sacramento", "Elk Grove"],
    faqs: [
      {
        question: "Do you offer free estimates in Rancho Cordova?",
        answer:
          "Yes. Rancho Cordova estimates are free. We can often visit within a few days of your request.",
      },
      {
        question: "How far is Rancho Cordova from Sacramento?",
        answer:
          "Rancho Cordova is roughly 10–15 miles east of downtown Sacramento via Highway 50. Travel is short and frequent for our crew.",
      },
    ],
    areaType: "City",
  },
  {
    name: "El Dorado Hills",
    slug: "el-dorado-hills",
    path: "/tile-contractor-el-dorado-hills",
    description:
      "El Dorado Hills tile contractor for custom showers, bathroom tile, and kitchen backsplashes. Pro Tiling serves EDH homes with free on-site estimates now.",
    intro:
      "Refined tile installations for El Dorado Hills — custom showers, baths, and kitchen backsplashes.",
    paragraphs: [
      "El Dorado Hills sits in the foothills east of Folsom, where many homes feature open kitchens and spa-style primary baths. Clients often want large-format walls, curated niches, and backsplashes that match stone counters — work that rewards careful layout and premium setting materials.",
      "Pro Tiling installs custom shower tile, bathroom remodeling packages, and kitchen backsplash designs throughout El Dorado Hills. Waterproofing and floor prep stay front and center so luxury finishes perform as well as they look.",
      "We schedule El Dorado Hills projects alongside nearby Folsom and Cameron Park work. Request a free estimate to review your plans and timeline.",
    ],
    services: [ALL_SERVICES[1], ALL_SERVICES[2], ALL_SERVICES[3]],
    neighbors: ["Folsom", "Cameron Park", "Placerville"],
    faqs: [
      {
        question: "Do you offer free estimates in El Dorado Hills?",
        answer:
          "Yes. El Dorado Hills estimates are free. Bring finish selections if you have them — we will confirm quantities and labor on-site.",
      },
      {
        question: "How far is El Dorado Hills from Sacramento?",
        answer:
          "El Dorado Hills is about 25–30 miles east of Sacramento via Highway 50. It is a standard part of our foothill service area.",
      },
    ],
    areaType: "City",
  },
  {
    name: "Placerville",
    slug: "placerville",
    path: "/tile-contractor-placerville",
    description:
      "Placerville tile contractor for bathroom remodels, showers, and kitchen backsplashes. Pro Tiling serves Gold Country homes with free on-site estimates.",
    intro:
      "Thoughtful tile craftsmanship for Placerville and Gold Country homes — showers, baths, and kitchens.",
    paragraphs: [
      "Placerville sits further into El Dorado County’s Gold Country, where historic downtown charm meets hillside residences. Remodel work here sometimes means older substrates and creative transitions — we inspect carefully before quoting so the plan matches what is behind the walls.",
      "Typical Placerville projects include bathroom tile updates, shower rebuilds with proper membranes, and kitchen backsplash installation. We are candid about travel logistics and only book when we can give your job the attention it needs.",
      "If you want tile installation in Placerville from a Sacramento-region specialist, start with a free estimate. We will discuss scope, access, and a realistic schedule before anything is demolished.",
    ],
    services: [ALL_SERVICES[0], ALL_SERVICES[1], ALL_SERVICES[2]],
    neighbors: ["Cameron Park", "El Dorado Hills", "Folsom"],
    faqs: [
      {
        question: "Do you offer free estimates in Placerville?",
        answer:
          "Yes. Placerville estimates are free. Because of the distance, we may schedule the visit alongside other foothill appointments — we will say so when you call.",
      },
      {
        question: "How far is Placerville from Sacramento?",
        answer:
          "Placerville is roughly 40–45 miles east of Sacramento on Highway 50. We serve it as part of our extended El Dorado County coverage.",
      },
    ],
    areaType: "City",
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug || city.path === `/${slug}`);
}

export function getCityByPathSlug(pathSlug: string): City | undefined {
  // pathSlug is like "tile-contractor-elk-grove"
  return cities.find((city) => city.path === `/${pathSlug}`);
}

export const cityPathSlugs = cities.map((city) => city.path.replace(/^\//, ""));
