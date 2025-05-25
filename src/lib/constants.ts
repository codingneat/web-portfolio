export const SECTIONS = ["skills", "experience"];

export const JOBS = ["jobs.toumoro", "jobs.zemoga", "jobs.psl", "jobs.itmg", "jobs.885"] as const;

export const JOB_KEYS = ["description1", "description2", "description3"] as const;

export const SKILL_KEYS = ["languages", "DBMS", "frameworks"] as const;

export const SKILLS = {
  languages: ["Javascript", "HTML5", "CSS", "TypeScript", "Python", "C#", "PHP"],
  DBMS: ["SQL Server", "MySQL", "Entity Framework", "MongoDB", "DynamoDB"],
  frameworks: [
    "Node.js",
    "Angular",
    "Sass",
    "Nest.js",
    "MVC",
    "React.js",
    "AngularJs",
    "React Native",
    "Flask",
  ],
} as { [key: string]: string[] };
