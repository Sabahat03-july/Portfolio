import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  // My Education here
  let education = [
    {
      uniName: "Bahria University Karachi Campus",
      date: "April 2021",
      field: "BS Computer Science",
      details:
        "Completed my Bachelor of Science in Computer Science with a focus on software development, algorithms, and data structures. I worked on various projects using technologies such as Java, Python, and SQL.",
    },
    {
      uniName: "University of Karachi",
      date: "November 2018",
      field: "Intermediate in Pre-Engineering",
      details:
        "Studied core engineering subjects, including Mathematics, Physics, and Chemistry. Developed a strong foundation in problem-solving and analytical thinking.",
    },
    {
      uniName: "D.A. Degree College for Women",
      date: "June 2016",
      field: "Matriculation in Science",
      details:
        "Graduated from the Science stream with a focus on Mathematics, Physics, Chemistry, and Biology. Excelled in the analytical components of these subjects.",
    },
    {
      uniName: "International University of Technology",
      date: "June 2023",
      field: "MS Software Engineering",
      details:
        "Pursuing my Master's degree in Software Engineering with a focus on Agile methodologies, DevOps practices, and full-stack development. Worked on multiple industry-level projects involving cloud computing and big data.",
    },
    {
      uniName: "Online Course - Coursera",
      date: "2024",
      field: "Advanced JavaScript & React.js",
      details:
        "Completed an online certification in Advanced JavaScript and React.js. Gained hands-on experience building dynamic single-page applications with React and integrating third-party APIs.",
    },
    {
      uniName: "Udemy",
      date: "2024",
      field: "Data Science with Python",
      details:
        "Gained practical skills in data analysis, visualization, and machine learning using Python and popular libraries such as Pandas, NumPy, and Scikit-learn.",
    },
  ];

  return (
    <Card data-aos="zoom-in" className="h-[85vh] overflow-y-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight uppercase">
          Education
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {/* Education */}
          {education.map((item, i) => (
            <div key={i} className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700 uppercase">
                  {item.field}
                </span>
                <span className="mt-1 text-gray-500 text-sm">{item.date}</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-xl font-medium text-gray-900 title-font mb-2 uppercase">
                  {item.uniName}
                </h2>
                <p className="leading-relaxed">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Education;
