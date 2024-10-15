import React from "react";
import Typewriter from "typewriter-effect";
import {
  FaCloudDownloadAlt,
  FaGithubSquare,
  FaLinkedin,
  FaYoutubeSquare,
} from "react-icons/fa";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const MobileCard = () => {
  return (
    <div className="h-[91vh]">
      {/* overlay div */}
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-white/20 z-[1]" />
      {/* bg image */}
      <Image
        src={"/assets/sabaat-profile.jpg"}
        alt="background image"
        layout="fill"
        className="object-cover h-[70vh]"
      />
      {/* content here */}
      <div className="relative z-10 w-full h-screen flex flex-col items-center justify-center">
        <div className="card w-72 glass p-3 flex flex-col items-center justify-center align-middle">
          <Image
            src="/assets/sabaat-profile.jpg"
            alt="profile-pic"
            width={200}
            height={200}
            className="rounded-md mx-auto"
          />
          <div className="card-body">
            {/* Name here */}
            <div className="mt-2 card-title flex-col">
              <h1 className="text-2xl font-bold tracking-tight uppercase">
                SABAHAT
              </h1>
              <h2 className="text-md text-center font-semibold tracking-tight text-gray-700 ">
                <Typewriter
                  options={{
                    strings: [
                      "Web Developer",
                      "UI/UX Designer",
                      "Geophysicist",
                      "GIS Analyst",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
            </div>
            {/* Social Media Account */}
            <div className="mx-auto grid grid-cols-3 gap-3">
              {/* linkedin */}
              <div className="mt-4">
                <Link
                  href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public"
                  target="_blank"
                  className="text-gray-700 hover:text-[#0762C8]"
                >
                  <FaLinkedin className="text-4xl" />
                </Link>
              </div>
              {/* youtube */}
              <div className="mt-4">
                <Link
                  href="https://www.youtube.com"
                  target="_blank"
                  className="text-gray-700 hover:text-[#FF0000]"
                >
                  <FaYoutubeSquare className="text-4xl" />
                </Link>
              </div>
              {/* github */}
              <div className="mt-4">
                <Link
                  href="https://github.com/Sabahat03-july"
                  target="_blank"
                  className="text-gray-700 hover:text-[#6e5494]"
                >
                  <FaGithubSquare className="text-4xl" />
                </Link>
              </div>
            </div>

            {/* Download CV Button */}
            <Link
              href={"/assets/cv/cv.pdf"}
              className="mx-auto mt-4"
              target="_blank"
            >
              <Button>
                <FaCloudDownloadAlt className="mr-2 h-4 w-4" /> Download CV
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
