import React from "react";
import avatar from "./avatar.png";
import skyhup from "./skyhup.png";
import evizi from "./evizi.svg";

const titleClassName = "text-lg md:text-xl pb-1 md:pb-2 font-medium";

const data = {
  className: "relative",
  containerClassName:
    "container print:max-w-7xl mx-auto py-4 md:py-16 px-4 md:px-0 print:p-8",
  contact: {
    title: "MANUAL TESTER",
    titleClassName: titleClassName + " mt-6",
    className: "bg-white rounded flex justify-between",
    avatarContainerClassName: "w-28 text-right",
    avatarClassName: "w-full",
    avatar,
    contentClassName: "p-4",
    data: [
      "LE TAT THANH",
      "Date of birth: 18/04/1993",
      "Phone: +84 905 846 700",
      "Email: letatthanh0493@gmail.com",
      "Address: 16 Vu Lang, Cam Le, Ward, Da Nang city, Vietnam",
    ],
  },
  objectives: {
    titleClassName: titleClassName + " mt-6",
    title: "OBJECTIVES",
    className: "bg-white p-4 rounded",
    data: [
      {
        text: "I am seeking a vacancy in the Manual Tester position in a professional and well-established environment, where I can develop professional skills and learn new knowledge to further improve my technical competence and become more competitive in the IT field.",
        className: "text-base md:text-lg py-0.5",
      },
      {
        text: "My work ethics consists of taking challenges head-on, professionalizing working style, perfecting attitudes and skills, and always being ready to learn from other people.",
        className: "text-base md:text-lg py-0.5",
      },
    ],
  },

  works: {
    title: "WORK EXPERIENCE",
    titleClassName: titleClassName + " mt-6",
    className: "bg-white p-4 rounded",
    contentClassName: "flex",
    coverClassName: "content-center",
    logoContainerClassName: "rounded-lg bg-white p-4",
    logoClassName: "w-20 aspect-square",
    infoClassName: "ml-4 font-medium",
    descriptionClassName: "ml-2 font-normal",
    data: [
      {
        year: 2016,
        cover: evizi,
        company: "Evizi",
        position: "Network Operation Center Engineer",
        descriptions: [
          "Assist foreign clients with their issues",
          "Report client activity data to direct manager",
        ],
      },
      {
        year: 2022,
        cover: skyhup,
        company: "Skyhup",
        position: "Manual Tester",
        descriptions: [
          "Verify requirements",
          "Execute test scripts",
          "Document and report bugs to development teams",
          "Implement post-release testing",
        ],
      },
    ],
  },
  techSkills: {
    title: "TECHNICAL SKILLS",
    titleClassName: titleClassName + " mt-6",
    className: "bg-white p-4 rounded",
    data: [
      "Review and analyse system specifications",
      "Collaborate with QA Engineers to develop effective test plans",
      "Execute test cases (manual) and analyze results",
      "Create logs to document testing phases and defects",
      "Report bugs and errors to development teams",
      "Help troubleshoot issues",
      "Conduct post-release / post-implementation testing",
      "Work with cross-functional teams to ensure quality throughout the software development lifecycle.",
    ],
  },
  nonTechSkills: {
    title: "NON-TECHNICAL SKILLS",
    titleClassName: titleClassName + " mt-6 print:pt-8",
    className: "bg-white p-4 rounded",
    data: [
      "Microsoft Office",
      "Presentation/Public speaking skill",
      "Team work and collaboration skills",
      "Leadership skill",
      "Critical thinking skill",
      "Communication and interpersonal skills",
    ],
  },
  certs: {
    title: "CERTIFICATES",
    titleClassName: titleClassName + " mt-6",
    className: "bg-white p-4 rounded",
    data: [
      "12/2022: Certificate of Manual Tester (classification: Very Good)",
      "5/2018: IELTS 8.0 (Speaking 9.0)",
      "12/2013: First prize in English Eloquence Contest British Council, Da Nang, Vietnam",
    ],
  },
  educations: {
    title: "EDUCATIONS",
    titleClassName: titleClassName + " mt-6",
    className: "bg-white p-4 rounded",
    data: [
      {
        title:
          "2011 – 2016: Bachelor in English Teaching as a Foreign Language",
        description:
          "University of Foreign Language Studies – UD Da Nang, Vietnam Classification: Very Good",
      },
    ],
  },
  activities: {
    title: "EDUCATIONS",
    titleClassName: titleClassName + " mt-6",
    className: "bg-white p-4 rounded",
    data: [
      {
        title: "11/2017: Liaison officer for the Bruneian Darussalam delegates",
        description: "APEC 2017, Da Nang, Vietnam",
      },
      {
        title: "2011 – 2014: Member of the English 4 U club",
        description: "Da Nang University of Foreign Language Studies, UD",
      },
      {
        title: "2015 and 2016: Coach and Director",
        description: "Coach for College summer camp",
      },
    ],
  },
  references: {
    title: "REFERENCES",
    titleClassName: titleClassName + " mt-6",
    className: "bg-white p-4 rounded",
    data: [
      "Mr. Ho Hai Au – CEO of Skyhup",
      "Email: auhh@skyhup.com.vn",
      "Phone: +84931949188",
    ],
  },
};

const Page1 = () => (
  <>
    <div className={data.contact.titleClassName}>{data.contact.title}</div>
    <div className={data.contact.className}>
      <div className={data.contact.contentClassName}>
        {data.contact.data.map((text) => (
          <div key={text}>{text}</div>
        ))}
      </div>
      <div className={data.contact.avatarContainerClassName}>
        <img
          alt="avatar"
          src={data.contact.avatar}
          className={data.contact.avatarClassName}
        />
      </div>
    </div>

    <div className={data.objectives.titleClassName}>
      {data.objectives.title}{" "}
    </div>
    <div className={data.objectives.className}>
      {data.objectives.data.map(({ text, className }) => (
        <div className={className} key={text}>
          {text}
        </div>
      ))}
    </div>

    <div className={data.works.titleClassName}>{data.works.title}</div>
    <div className={data.works.className}>
      {data.works.data.map(
        ({ year, cover, company, position, descriptions, className }) => (
          <div className={data.works.contentClassName}>
            <div className={data.works.coverClassName}>
              <div className={data.works.logoContainerClassName}>
                <img
                  className={data.works.logoClassName}
                  src={cover}
                  alt="cover"
                />
              </div>
            </div>
            <div className={data.works.infoClassName}>
              <div>
                {company} - {year}
              </div>
              <div>Position: {position}</div>
              {descriptions.map((text) => (
                <div className={data.works.descriptionClassName} key={text}>
                  - {text}
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  </>
);

const Page2 = () => (
  <>
    <div className={data.techSkills.titleClassName}>
      {data.techSkills.title}
    </div>
    <div className={data.techSkills.className}>
      {data.techSkills.data.map((text) => (
        <div key={text}>- {text}</div>
      ))}
    </div>

    <div className={data.nonTechSkills.titleClassName}>
      {data.nonTechSkills.title}
    </div>
    <div className={data.techSkills.className}>
      {data.nonTechSkills.data.map((text) => (
        <div key={text}>- {text}</div>
      ))}
    </div>

    <div className={data.certs.titleClassName}>{data.certs.title}</div>
    <div className={data.techSkills.className}>
      {data.certs.data.map((text) => (
        <div key={text}>- {text}</div>
      ))}
    </div>

    <div className={data.educations.titleClassName}>
      {data.educations.title}
    </div>
    <div className={data.techSkills.className}>
      {data.educations.data.map(({ title, description }) => (
        <div key={title}>
          <div>- {title}</div>
          <div className="ml-6 font-light">{description}</div>
        </div>
      ))}
    </div>

    <div className={data.activities.titleClassName}>
      {data.activities.title}
    </div>
    <div className={data.techSkills.className}>
      {data.activities.data.map(({ title, description }) => (
        <div key={title}>
          <div>- {title}</div>
          <div className="ml-6 font-light">{description}</div>
        </div>
      ))}
    </div>

    <div className={data.references.titleClassName}>
      {data.references.title}
    </div>
    <div className={data.references.className}>
      {data.references.data.map((text) => (
        <div key={text}>{text}</div>
      ))}
    </div>
  </>
);

const Container = ({ children }) => (
  <div className={data.className}>
    <div className={data.containerClassName}>{children}</div>
  </div>
);

function App() {
  return (
    <Container>
      <Page1 />
      <Page2 />
    </Container>
  );
}

export default App;
