import React from "react";
import avatar from "./avatar.png";

const leftData = [
  { avatar, name: "LE TAT THANH", data: "MANUAL TESTER" },
  {
    data: [
      "DOB: 18/04/1993",
      "Phone: +84 905 846 700",
      "Email: letatthanh0493@gmail.com",
      "Address: 16 Vu Lang, Cam Le, Ward, Da Nang city, Vietnam",
    ],
  },
  {
    title: "OBJECTIVES",
    data: [
      "I am seeking a vacancy in the Manual Tester position in a professional and well-established environment, where I can develop professional skills and learn new knowledge to further improve my technical competence and become more competitive in the IT field.",
      "My work ethics consists of taking challenges head-on, professionalizing working style, perfecting attitudes and skills, and always being ready to learn from other people.",
    ],
  },
  {
    title: "EDUCATIONS",
    data: [
      {
        text: "2011 – 2016: Bachelor in English Teaching as a Foreign Language",
        caption:
          "University of Foreign Language Studies – UD Da Nang, Vietnam Classification: Very Good",
      },
    ],
  },
];
const rightData = [
  {
    title: "WORK EXPERIENCE",
    data: [
      {
        title: "Network Operation Center Engineer",
        subTitle: "Evizi - 2016",
        data: [
          "- Assist foreign clients with their issues",
          "- Report client activity data to direct manager",
        ],
      },
      {
        title: "Manual Tester",
        subTitle: "Skyhup - 2022",
        data: [
          "- Verify requirements",
          "- Execute test scripts",
          "- Document and report bugs to development teams",
          "- Implement post-release testing",
        ],
      },
    ],
  },
  {
    title: "TECHNICAL SKILLS",
    data: [
      "- Review and analyse system specifications",
      "- Collaborate with QA Engineers to develop effective test plans",
      "- Execute test cases (manual) and analyze results",
      "- Create logs to document testing phases and defects",
      "- Report bugs and errors to development teams",
      "- Help troubleshoot issues",
      "- Conduct post-release / post-implementation testing",
      "- Work with cross-functional teams to ensure quality throughout the software development lifecycle.",
    ],
  },
  {
    title: "NON-TECHNICAL SKILLS",
    data: [
      "- Microsoft Office",
      "- Presentation/Public speaking skill",
      "- Team work and collaboration skills",
      "- Leadership skill",
      "- Critical thinking skill",
      "- Communication and interpersonal skills",
    ],
  },
  {
    title: "CERTIFICATES",
    data: [
      "- 12/2022: Certificate of Manual Tester (classification: Very Good)",
      "- 5/2018: IELTS 8.0 (Speaking 9.0)",
      "- 12/2013: First prize in English Eloquence Contest British Council, Da Nang, Vietnam",
    ],
  },
  {
    title: "ACTIVITIES",
    data: [
      {
        text: "- 11/2017: Liaison officer for the Bruneian Darussalam delegates",
        caption: "APEC 2017, Da Nang, Vietnam",
      },
      {
        text: "- 2011 – 2014: Member of the English 4 U club",
        caption: "Da Nang University of Foreign Language Studies, UD",
      },
      {
        text: "- 2015 and 2016: Coach and Director",
        caption: "Coach for College summer camp",
      },
    ],
  },
  {
    title: "REFERENCES",
    data: [
      "Mr. Ho Hai Au – CEO of Skyhup",
      "Email: auhh@skyhup.com.vn",
      "Phone: +84931949188",
    ],
  },
];

const Item = ({ data, left }) => {
  const text = typeof data === "string" ? data : data?.text;
  const title = data?.title;
  const subTitle = data?.subTitle;
  const caption = data?.caption;
  const items = data?.data;

  const titleClassName = `font-bold ${left ? "text-white" : "text-slate-800"}`;
  const subTitleClassName = `font-medium ${
    left ? "text-slate-200" : "text-slate-600"
  }`;
  const captionClassName = `ml-4 ${left ? "text-slate-300" : "text-slate-500"}`;

  return (
    <>
      {text && <div>{text}</div>}
      {title && <div className={titleClassName}>{title}</div>}
      {subTitle && <div className={subTitleClassName}>{subTitle}</div>}
      {caption && <div className={captionClassName}>{caption}</div>}
      {items && (
        <>
          {items.map((item, index) => (
            <div key={index} className="ml-2">
              {item}
            </div>
          ))}
          <div className="mb-2" />
        </>
      )}
    </>
  );
};

const Section = ({ data: { title: titleProp, avatar, name, data }, left }) => {
  const title = titleProp?.text || titleProp;

  const className = "p-4";
  const leftClassName = left ? "py-4" : "";
  const titleClassName = `font-bold text-lg mb-2 ${
    left ? "text-white" : "text-slate-800"
  } ${title === "ACTIVITIES" ? "print:mt-8" : ""}`;

  if (avatar && name)
    return (
      <div className={`text-center ${titleClassName} ${className}`}>
        <img className="inline w-24 rounded" src={avatar} />
        <div className="mt-4 font-bold">{name}</div>
      </div>
    );

  return (
    <div className={`${leftClassName} ${className}`}>
      {!!title && <div className={`${titleClassName}`}>{title}</div>}
      {data && typeof data === "string" && <Item data={data} left={left} />}
      {data &&
        Array.isArray(data) &&
        data.map((item, index) => <Item data={item} key={index} left={left} />)}
    </div>
  );
};

function App() {
  return (
    <div className="relative">
      <div className="container  mx-auto text-base xl:max-w-[1280px] 2xl:max-w-[1280px] print:max-w-[960px]">
        <div className="flex flex-col md:flex-row print:flex-row">
          <div className="min-h-[100vh] min-w-[320px] flex-[1_1_0%] bg-cyan-800 py-4 text-slate-100 print:bg-cyan-800">
            {leftData.map((section, index) => (
              <Section key={index} data={section} left={true} />
            ))}
          </div>
          <div className="min-h-[100vh] max-w-[65%] py-4 text-slate-700 md:flex-[2_1_0%] lg:flex-[3_1_0%]">
            {rightData.map((section, index) => (
              <Section key={index} data={section} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
