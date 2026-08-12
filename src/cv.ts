/**
 * CV content, kept separate from presentation so updating it never means
 * touching layout code. src/pages/about.astro renders whatever is here.
 *
 * Source: "July 2026 Resume Joseph Busbin". Keep this and the downloadable
 * PDF in public/ in sync when either changes.
 */

export interface CvEntry {
  /** Organization, institution, or project name. */
  title: string;
  /** Role, degree, or one-line description. */
  subtitle?: string;
  /** Free-form date range, right-aligned on wide screens. */
  dates?: string;
  location?: string;
  bullets?: string[];
}

export interface CvSection {
  heading: string;
  entries: CvEntry[];
}

export const education: CvSection = {
  heading: 'Education',
  entries: [
    {
      title: 'William & Mary',
      subtitle: 'B.S., Computational and Applied Mathematics and Statistics; Biology',
      dates: 'Expected May 2027',
      location: 'Williamsburg, VA',
      bullets: [
        'GPA 3.6 · Dean’s List 2024, 2025, 2026',
        'Mathematics and computing: Data Structures, Algorithms, Software Development, Multivariable Calculus, Linear Algebra, Foundations of Mathematics, Ordinary Differential Equations, Mathematical Modeling in Biology, Probability',
        'Life and physical sciences: Molecular Cell Biology, Microbiology, Animal Behavior, Organic Chemistry, General Chemistry, Introduction to Psychology',
        'Beyond STEM: Creative Writing, Philosophy and Technology, Intermediate Spanish, Traditional Chinese Literature',
      ],
    },
  ],
};

export const skills = [
  {
    group: 'Technology',
    items:
      'Python, Java, C++, MATLAB, SQL, Git/GitHub; software development practices, Excel and Microsoft Office',
  },
  {
    group: 'Mathematics',
    items:
      'Probabilistic methods, constructing and interpreting mathematical models, reading and writing proofs, multivariable calculus, ordinary differential equations',
  },
  {
    group: 'Biology',
    items:
      'Molecular techniques (gels, antibodies, immuno-methods); cell biology, protein structure and function, gene expression, transport signaling, enzymatic control. Microbiology lab work: streaking for isolation, culturing, staining, genetic screening, antibiotic resistance, transduction, phage-mediated gene selection. Observational and experimental behavioral study',
  },
  {
    group: 'Chemistry',
    items:
      'Purification and analysis of organic and inorganic compounds, spectroscopy (¹H, ¹³C), gas chromatography, thin-layer chromatography, extractions, titrations, compound analysis',
  },
];

export const research: CvSection = {
  heading: 'Research Experience',
  entries: [
    {
      title:
        'Nanoparticle delivery vehicles to the nucleus for gene repair',
      subtitle: 'Literature review and experiment proposal',
      bullets: [
        'Wrote an academic biology paper with a mock implementation of methods and results, applying cell biology and protein function to experimental design.',
        'Developed literature search technique, research writing, and a working grasp of ethical research practice.',
      ],
    },
    {
      title: 'Conveying understanding of complex topics in cinema presentation',
      subtitle: 'Academic paper and formal presentation',
      bullets: [
        'Used both quantitative and qualitative approaches across experiment design, data collection, and interpretation.',
        'Practiced citation, bibliography management, and peer review; delivered a formal presentation and oral defense.',
      ],
    },
  ],
};

export const projects: CvSection = {
  heading: 'Projects',
  entries: [
    {
      title: 'Huffman tree encoding',
      subtitle: 'Python',
      bullets: [
        'Built the tree data structures behind optimal custom encodings for signal transmission, producing consistently minimized representations of a message.',
      ],
    },
    {
      title: 'Puzzle game development',
      subtitle: 'Java',
      bullets: [
        'Implemented back-end logic for several puzzles driving a GUI, following the designs of Wordle and 2048.',
      ],
    },
    {
      title: 'Tribe Capture The Flag',
      subtitle: 'Two-day cybersecurity competition',
      dates: '2025',
      bullets: [
        'Worked through combined challenges in coding, forensics, cryptography, and hardware.',
      ],
    },
  ],
};

export const experience: CvSection = {
  heading: 'Experience',
  entries: [
    {
      title: 'Williamsburg Occasions LLC',
      subtitle: 'Bed and Breakfast Staff',
      dates: 'June 2026 – Present',
      location: 'Williamsburg, VA',
      bullets: [
        'Serve a full breakfast each morning around guests’ preferences, dietary restrictions, and allergy concerns.',
        'Highly independent work in a small business: logistics, problem solving, and direct customer communication.',
      ],
    },
    {
      title: 'Chipotle Mexican Grill',
      subtitle: 'Crew',
      dates: 'April – August 2023',
      bullets: [
        'Delivered service to standard on schedule in a fast-paced, high-volume environment.',
        'Coordinated responsibilities as part of a team under minimal oversight.',
      ],
    },
  ],
};

export const leadership: CvSection = {
  heading: 'Leadership & Volunteering',
  entries: [
    {
      title: 'Atrium Health Wake Forest Baptist Hospital',
      subtitle: 'Volunteer Advisory Council',
      dates: 'July – August 2021',
      location: 'Winston-Salem, NC',
      bullets: [
        'Part of a mentor team leading roughly 50 volunteers, guiding and training student volunteer operations.',
        'Promoted a culture of service while respecting the often difficult realities of patient care.',
      ],
    },
    {
      title: 'Atrium Health Wake Forest Baptist Hospital',
      subtitle: 'Volunteer',
      dates: 'June – August 2019',
      location: 'Winston-Salem, NC',
      bullets: [
        'Shadowed roles across departments from medical staff to administration, building a broad picture of hospital operations.',
        'Learned to give direct interpersonal patient care.',
      ],
    },
  ],
};

export const activities = [
  {
    name: 'Computational and Applied Mathematics and Statistics (CAMS) Club',
    note: 'The interdisciplinary side of CAMS — research directions, applications, and careers.',
  },
  {
    name: 'Association for Computing Machinery (ACM), W&M student chapter',
    note: 'Computer science workshops, career development, and special events.',
  },
  {
    name: 'Robotics Club',
    note: 'Building robots, software and hardware both.',
  },
  {
    name: 'Pre-Health Club',
    note: 'Understanding the medical field and the path into it.',
  },
  {
    name: 'Finance Academy',
    note: 'Student-led career development with recruiters from banking, investment, and corporate finance.',
  },
  {
    name: 'Braun Financial Literacy Program',
    note: 'A multi-year personal finance curriculum for the general student body.',
  },
];

export const awards = ['Dean’s List, William & Mary — 2024, 2025, 2026'];
