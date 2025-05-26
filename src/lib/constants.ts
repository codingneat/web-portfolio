export const SECTIONS = ["projects", "skills", "experience"];

export const JOBS = ["jobs.toumoro", "jobs.zemoga", "jobs.psl", "jobs.itmg", "jobs.885"] as const;

export const JOB_KEYS = ["description1", "description2", "description3"] as const;

export const SKILL_KEYS = ["languages", "DBMS", "frameworks"] as const;

export const SKILLS = {
  languages: ["Javascript", "TypeScript", "Python", "C#", "PHP", "CSS"],
  DBMS: ["SQL Server", "MySQL", "Entity Framework", "MongoDB", "DynamoDB"],
  frameworks: [
    "Node.js",
    "Angular",
    "Sass",
    "Nest.js",
    "Redux",
    "Tailwind",
    "MVC",
    "React.js",
    "Fast Api",
    "React Native",
    "Flask",
    "Laravel",
    "Sails.js",
    "Open Layers",
  ],
} as { [key: string]: string[] };
