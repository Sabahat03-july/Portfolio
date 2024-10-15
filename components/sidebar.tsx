import Image from "next/image";
import { Button } from "./ui/button";
import Typewriter from "typewriter-effect";
import { FaCloudDownloadAlt, FaGithubSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";
import Link from "next/link";

export function Sidebar() {
  return (
    <div className="h-screen flex flex-col items-center align-middle justify-center p-3">
      {/* image */}
      <Image
        src="/assets/sabaat-profile.jpg"
        alt="profile-pic"
        width={200}
        height={200}
        className="rounded-md"
      />

      {/* Name here */}
      <div className="mt-2">
        <h1 className="text-2xl font-bold tracking-tight uppercase">
          SABAHAT
        </h1>
        <h2 className="text-md text-center font-semibold tracking-tight text-gray-600 ">
          <Typewriter
            options={{
              strings: [
                "Web Developer",
                "UI/UX Designer",
                "Enginier",
                "GIS Analyst",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
      </div>

      {/* Social Media Account */}
      <div className="grid grid-cols-3 gap-2">
        {/* linkedin */}
        <div className="mt-4">
          <Link
            href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public"
            target="_blank"
            className="text-gray-600 hover:text-[#0762C8]"
          >
            <FaLinkedin className="text-4xl" />
          </Link>
        </div>
        {/* youtube */}
        <div className="mt-4">
          <Link
            href="https://www.youtube.com/"
            target="_blank"
            className="text-gray-600 hover:text-[#FF0000]"
          >
            <FaYoutubeSquare className="text-4xl" />
          </Link>
        </div>
        {/* github */}
        <div className="mt-4">
          <Link
            href="https://github.com/Sabahat03-july"
            target="_blank"
            className="text-gray-600 hover:text-[#6e5494]"
          >
            <FaGithubSquare className="text-4xl" />
          </Link>
        </div>
      </div>

      {/* Download CV Button */}
      <Link href={'/assets/cv/cv.pdf'} className="mt-4" target="_blank">
      <Button>
        <FaCloudDownloadAlt className="mr-2 h-4 w-4" /> Download CV
      </Button>
      </Link>
    </div>
  );
}
