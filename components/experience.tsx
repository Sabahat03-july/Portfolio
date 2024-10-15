import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  // My Business Experience here
  let experience = [
    {
      company: "Daraz Pakistan",
      joinDate: "Jan 2022",
      lastDate: "Present",
      position: "Senior Product Manager",
      description:
        "Leading the product development team for Daraz's e-commerce platform. Focused on enhancing the customer experience and optimizing the user journey by integrating AI-driven recommendations and streamlining checkout processes. Spearheaded initiatives that resulted in a 20% increase in sales conversion.",
    },
    {
      company: "OLX Pakistan",
      joinDate: "Mar 2019",
      lastDate: "Dec 2021",
      position: "Business Development Manager",
      description:
        "Oversaw the development and expansion of OLX's marketplace services in Pakistan. Worked closely with sellers and vendors to enhance listings and promote a seamless buying and selling experience. Successfully led campaigns that boosted user engagement by 30%.",
    },
    {
      company: "Ali Baba Group",
      joinDate: "Aug 2016",
      lastDate: "Feb 2019",
      position: "Operations Manager",
      description:
        "Managed cross-functional teams to improve logistics and supply chain operations for Alibaba's international marketplace. Optimized shipment processes, reducing delivery time by 15% while maintaining high customer satisfaction. Coordinated between multiple regions to streamline global product flows.",
    },
    {
      company: "Petnet",
      joinDate: "Jan 2014",
      lastDate: "Jul 2016",
      position: "Marketing Lead",
      description:
        "Developed and executed digital marketing strategies to increase brand visibility for Petnet, a pet-care e-commerce platform. Led social media campaigns and partnership initiatives that grew the platform’s user base by 25% within a year. Worked closely with the product team to improve user interface and engagement.",
    },
    {
      company: "E-Commerce Ventures",
      joinDate: "Aug 2010",
      lastDate: "Dec 2013",
      position: "Business Analyst",
      description:
        "Worked with cross-functional teams to gather insights and improve product offerings on an e-commerce platform. Focused on analyzing customer feedback and market trends to propose new features and optimize the site’s performance. Contributed to a 35% increase in customer retention by streamlining the purchase process.",
    },
  ];

  return (
    <Card data-aos="zoom-in" className="h-[85vh] overflow-y-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight uppercase">
          Business Experience
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {experience.map((item, i) => (
            <div key={i} className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700 uppercase">
                  {item.position}
                </span>
                <span className="mt-1 text-gray-500 text-sm">
                  {`${item.joinDate} - ${item.lastDate}`}
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-xl font-medium text-gray-900 title-font mb-2 uppercase">
                  {item.company}
                </h2>
                <p className="leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Experience;
