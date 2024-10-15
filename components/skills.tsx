import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaCheckSquare } from "react-icons/fa";

const Skills = () => {
  const mySkills = [
    { skillName: "HTML", percentage: 100 },
    { skillName: "CSS", percentage: 98 },
    { skillName: "Next JS", percentage: 95 },
    { skillName: "Wordpress", percentage: 97 },
    { skillName: "TypeScript", percentage: 100 },
    { skillName: "Tailwind", percentage: 70 },
    { skillName: "Petrel", percentage: 65 },
  ];

  return (
    <Card data-aos="zoom-in" className="h-[85vh] overflow-y-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight uppercase">
          Skills
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="-my-8 divide-y-2 divide-gray-100">
          <div className="flex flex-wrap -m-4">
            {mySkills.map((item, i) => (
              <div key={i} className="p-4 w-full md:w-1/2 lg:w-1/3">
                <div className="flex rounded-lg h-full p-5 md:p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                      <FaCheckSquare className="text-white text-lg" />
                    </div>
                    <h2 className="text-lg font-semibold tracking-tight">
                      {item.skillName}
                    </h2>
                  </div>
                  <div className="relative w-full h-1 bg-gray-500 rounded-md">
                    <div
                      className="absolute top-0 left-0 h-1 rounded-md"
                      style={{
                        width: `${item.percentage}%`,
                        backgroundColor: "#3b82f6",
                      }} // Use your desired color
                    />
                  </div>
                  <h2 className="text-sm text-blue-500 text-right font-semibold tracking-tight">{`${item.percentage}%`}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Skills;
