import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  // My projects here


  let project = [
    {
      name:"Ecommerce Website",
      description:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      link:"#",
      image:"ecommerce.png",
    },
  ]

  return (
    <Card data-aos="zoom-in" className="h-[85vh] overflow-y-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight uppercase">
          Projects
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex flex-wrap -m-4">
          {/* dynamic */}
          {project.map((item,i)=>(
            <div key={i} className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
            <div className="flex relative">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                width={1000}
                height={1000}
                src={`/assets/projects/${item.image}`}
              />
              <div className="px-8 py-10 duration-300 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="title-font text-lg font-medium text-gray-900 mb-3">
                  {item.name}
                </h2>
                <p className="leading-relaxed line-clamp-2">
                 {item.description}
                </p>
                <Link href={item.link} target="_blank">
                  <p className="mt-2 text-sm font-semibold text-blue-500 hover:underline">
                    View Project..
                  </p>
                </Link>
              </div>
            </div>
          </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Projects;
