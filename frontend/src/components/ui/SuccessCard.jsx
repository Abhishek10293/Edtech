import React from "react";
import { assets } from "@/assets/assets";

const SuccessCard = ({ item }) => {
  return (
    <div className="flex justify-center">
      <div
        className="mx-4 my-6 rounded-3xl w-[650px] p-8 shadow-xl bg-white/95 flex gap-6 items-start"
        style={{
          backgroundImage: `url(${assets.star})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* LEFT SIDE: Image + Info */}
        <div className="w-1/3 flex flex-col items-center">
          {/* Circular Image */}
          <div className="w-28 h-28 rounded-full bg-white border-2 border-gray-300 overflow-hidden shadow-md mb-3">
            <img src={item.image} alt="" className="w-full h-full object-cover" />
          </div>

          {/* Name + Company */}
          <p className="text-xl font-bold text-gray-900">{item.name}</p>
          <p className="text-white text-sm">{item.company}</p>

          {/* LinkedIn */}
          {item.linkedin && (
            <a
              href={item.linkedin}
              target="_blank"
              className="text-blue-600 text-sm font-medium underline mt-2"
            >
              LinkedIn →
            </a>
          )}
        </div>

        {/* RIGHT SIDE: Review + Tagline */}
        <div className="w-2/3">
          {/* Tagline */}
          <p className="text-2xl font-semibold text-white mb-4">
            {item.tagline}
          </p>

          {/* Review Box */}
          <p className="text-gray-700 text-base leading-relaxed bg-white/70 p-5 rounded-xl shadow-inner">
            {item.review}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessCard;
