import React from "react";

const EpisodeCard = ({ episodeData }) => {
  return (
    <div className="p-2 overflow-scroll border-2 rounded shadow max-h-[35rem]">
      <div className="p-1 text-2xl font-semibold text-center ">Episodes</div>
      <div className="grid grid-cols-3 gap-2 ">
        {episodeData.map((ep, id) => {
          return (
            <div
              key={id}
              className="p-1 text-sm bg-blue-100 border-2 rounded shadow max-w-auto hover:shadow-sm hover:shadow-blue-500 "
            >
              <span className="text-[11px] text-slate-600 block">
                {ep?.episodeNo}
              </span>
              {ep?.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EpisodeCard;
