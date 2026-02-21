import { useMemo, useState } from "react";

type Project = {
  title: string;
  description: string;
  link: string;
};

const starterProjects: Project[] = [
  {
    title: "Interactive Dashboard",
    description: "Built a responsive analytics dashboard with reusable UI components.",
    link: "https://example.com/dashboard",
  },
  {
    title: "Commerce Experience",
    description: "Shipped a faster checkout flow that improved conversion by 18%.",
    link: "https://example.com/commerce",
  },
];

export default function App() {
  const [mode, setMode] = useState<"resume" | "portfolio">("resume");
  const [name, setName] = useState("Your Name");
  const [role, setRole] = useState("Product-focused Frontend Engineer");
  const [email, setEmail] = useState("you@email.com");
  const [phone, setPhone] = useState("+1 (000) 000-0000");
  const [location, setLocation] = useState("Remote");
  const [summary, setSummary] = useState(
    "I design and build fast, accessible interfaces with an eye for delightful details and measurable business outcomes."
  );
  const [skills, setSkills] = useState("React, TypeScript, Tailwind CSS, Node.js, UX");
  const [experience, setExperience] = useState(
    "Senior Frontend Engineer — Pixel Labs (2022 - Present)\n- Led design-system migration and reduced UI defects by 35%.\n- Improved Core Web Vitals and raised LCP score from 58 to 89."
  );
  const [projects, setProjects] = useState(starterProjects);

  const parsedSkills = useMemo(
    () => skills.split(",").map((skill) => skill.trim()).filter(Boolean),
    [skills]
  );

  const updateProject = (index: number, key: keyof Project, value: string) => {
    setProjects((prev) => prev.map((p, i) => (i === index ? { ...p, [key]: value } : p)));
  };

  const addProject = () => {
    setProjects((prev) => [
      ...prev,
      { title: "New Project", description: "Describe business impact.", link: "https://" },
    ]);
  };

  const buildPrintableDocument = () => {
    const projectHtml = projects
      .map(
        (project) => `
          <div class="pdf-project">
            <h4>${project.title}</h4>
            <p>${project.description}</p>
            <a href="${project.link}">${project.link}</a>
          </div>`
      )
      .join("");

    const skillsHtml = parsedSkills.map((skill) => `<span class="pill">${skill}</span>`).join("");

    return `
      <!doctype html>
      <html>
      <head>
        <meta charset="utf-8" />
        <title>${name} ${mode}</title>
        <style>
          * { box-sizing: border-box; }
          body { font-family: Arial, sans-serif; margin: 0; background: #ffffff; color: #111827; }
          .sheet { width: 210mm; min-height: 297mm; margin: 0 auto; padding: 20mm; }
          .top { border: 3px solid #1f3c88; padding: 14px; border-radius: 10px; box-shadow: 8px 8px 0 #7aa2ff; }
          h1 { margin: 0 0 6px; color: #1f3c88; }
          h2 { margin: 22px 0 10px; color: #102553; border-bottom: 2px solid #dbe7ff; padding-bottom: 6px; }
          h4 { margin: 0 0 6px; }
          p { margin: 0 0 10px; line-height: 1.5; }
          .meta { margin: 0; color: #374151; }
          .pill-wrap { display: flex; gap: 8px; flex-wrap: wrap; }
          .pill { border: 2px solid #355fc0; padding: 4px 10px; border-radius: 999px; font-size: 12px; }
          .experience { white-space: pre-line; background: #f8faff; border-left: 4px solid #355fc0; padding: 10px 12px; border-radius: 6px; }
          .pdf-project { border: 2px solid #c7d8ff; border-radius: 8px; padding: 10px; margin-bottom: 10px; }
          a { color: #1f3c88; text-decoration: none; }
          @media print { .sheet { margin: 0; width: auto; min-height: auto; } }
        </style>
      </head>
      <body>
        <main class="sheet">
          <section class="top">
            <h1>${name}</h1>
            <p class="meta"><strong>${role}</strong></p>
            <p class="meta">${email} · ${phone} · ${location}</p>
          </section>

          <section>
            <h2>${mode === "resume" ? "Professional Summary" : "About"}</h2>
            <p>${summary}</p>
          </section>

          <section>
            <h2>Skills</h2>
            <div class="pill-wrap">${skillsHtml}</div>
          </section>

          <section>
            <h2>${mode === "resume" ? "Experience" : "Highlights"}</h2>
            <p class="experience">${experience}</p>
          </section>

          <section>
            <h2>Projects</h2>
            ${projectHtml}
          </section>
        </main>
      </body>
      </html>
    `;
  };

  const exportPdf = () => {
    const popup = window.open("", "_blank", "noopener,noreferrer,width=900,height=900");
    if (!popup) {
      return;
    }

    popup.document.write(buildPrintableDocument());
    popup.document.close();
    popup.focus();
    popup.print();
  };

  return (
    <main className="shell">
      <section className="panel controls">
        <h1>2D Portfolio / Resume PDF Generator</h1>
        <p>Build your content, then click export to open print-to-PDF.</p>

        <div className="modeRow" role="tablist" aria-label="mode toggle">
          <button className={mode === "resume" ? "on" : ""} onClick={() => setMode("resume")}>Resume</button>
          <button className={mode === "portfolio" ? "on" : ""} onClick={() => setMode("portfolio")}>Portfolio</button>
          <button className="export" onClick={exportPdf}>Export PDF</button>
        </div>

        <div className="grid">
          <label>Name<input value={name} onChange={(e) => setName(e.target.value)} /></label>
          <label>Role<input value={role} onChange={(e) => setRole(e.target.value)} /></label>
          <label>Email<input value={email} onChange={(e) => setEmail(e.target.value)} /></label>
          <label>Phone<input value={phone} onChange={(e) => setPhone(e.target.value)} /></label>
          <label>Location<input value={location} onChange={(e) => setLocation(e.target.value)} /></label>
          <label>Skills (comma-separated)<input value={skills} onChange={(e) => setSkills(e.target.value)} /></label>
          <label>Summary<textarea rows={3} value={summary} onChange={(e) => setSummary(e.target.value)} /></label>
          <label>Experience / Highlights<textarea rows={5} value={experience} onChange={(e) => setExperience(e.target.value)} /></label>
        </div>

        <div className="projectEditor">
          <h2>Projects</h2>
          {projects.map((project, index) => (
            <div className="projectRow" key={`${project.title}-${index}`}>
              <input value={project.title} onChange={(e) => updateProject(index, "title", e.target.value)} placeholder="Project title" />
              <input value={project.description} onChange={(e) => updateProject(index, "description", e.target.value)} placeholder="What did you build?" />
              <input value={project.link} onChange={(e) => updateProject(index, "link", e.target.value)} placeholder="https://..." />
            </div>
          ))}
          <button className="ghost" type="button" onClick={addProject}>+ Add project</button>
        </div>
      </section>

      <section className="panel preview2d">
        <div className="paper">
          <div className="frame" />
          <header>
            <h2>{name}</h2>
            <strong>{role}</strong>
            <p>{email} • {phone} • {location}</p>
          </header>

          <section>
            <h3>{mode === "resume" ? "Professional Summary" : "About"}</h3>
            <p>{summary}</p>
          </section>

          <section>
            <h3>Skills</h3>
            <div className="chips">
              {parsedSkills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </section>

          <section>
            <h3>{mode === "resume" ? "Experience" : "Highlights"}</h3>
            <pre>{experience}</pre>
          </section>

          <section>
            <h3>Projects</h3>
            <div className="cards">
              {projects.map((project, index) => (
                <article key={`${project.title}-${index}`}>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <small>{project.link}</small>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
