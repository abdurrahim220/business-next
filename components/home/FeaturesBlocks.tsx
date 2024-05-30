import { IoBusiness,  } from "react-icons/io5";
import FeaturesCard from "../shared/FeaturesCard";
import { RiBook2Fill } from "react-icons/ri";
import { HiThumbUp,HiHeart } from "react-icons/hi";
import { IoIosDocument } from "react-icons/io";
import { LuMenuSquare } from "react-icons/lu";
import { PiBookOpenTextFill } from "react-icons/pi";
export default function FeaturesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Items */}
          <div
            className="relative max-w-sm mx-auto grid gap-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-20 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >

            {/* 1st item */}
            <FeaturesCard
              dTime={400}
              title="bLorem, ipsum."
              description="  Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur."
              icon={
                <IoIosDocument
                  fill="white"
                  className="w-16 h-16 p-3 border bg-blue-600 rounded-full"
                />
              }
            />

            {/* 2nd item */}
            <FeaturesCard
              dTime={400}
              title="bLorem, ipsum."
              description="  Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur."
              icon={
                <IoBusiness
                  fill="white"
                  className="w-16 h-16 p-3 border bg-blue-600 rounded-full"
                />
              }
            />

            {/* 3rd item */}
            <FeaturesCard
              dTime={400}
              title="bLorem, ipsum."
              description="  Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur."
              icon={
                <HiThumbUp
                  fill="white"
                  className="w-16 h-16 p-3 border bg-blue-600 rounded-full"
                />
              }
            />

            {/* 4th item */}
            <FeaturesCard
              dTime={400}
              title="bLorem, ipsum."
              description="  Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur."
              icon={
                <PiBookOpenTextFill
                  fill="white"
                  className="w-16 h-16 p-3 border bg-blue-600 rounded-full"
                />
              }
            />

            {/* 5th item */}

            <FeaturesCard
              dTime={400}
              title="bLorem, ipsum."
              description="  Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur."
              icon={
                <RiBook2Fill
                  fill="white"
                  className="w-16 h-16 p-3 border bg-blue-600 rounded-full"
                />
              }
            />

            {/* 6th item */}
            <FeaturesCard
              dTime={700}
              title="Robust Workflow"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              icon={
                <HiHeart
                  fill="white"
                  className="w-16 h-16 p-3 border bg-blue-600 rounded-full"
                />
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
