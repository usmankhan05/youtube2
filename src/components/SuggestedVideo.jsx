import React from "react";
import { Link } from "react-router-dom";
import Time from "../loader/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

function SuggestedVideo({ video }) {
  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex flex-row gap-3 items-center mb-3">
          <div className="relative h-24 md:h-20 xl:h-24 w-40 min-w-[168px] lg:w-40 lg:min-w[128px] xl:w-[168px] md:rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img
              className="h-full w-full"
              src={video?.thumbnails[0]?.url}
              alt=""
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          <div className="flex mt-3 space-x-2 ">
            <div>
              <span className="text-sm font-bold line-clamp-2 ">
                {video?.title}
              </span>
              <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-500">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
                )}
              </span>
              <div className="inline-block items-center text-gray-500 text-[12px]">
                <span className="">{`${abbreviateNumber(
                  video?.stats?.views,
                  2
                )} views`}</span>
                <span className="text-[24px] font-bold leading-none relative mx-1">
                  .
                </span>
                <span className="">{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SuggestedVideo;
