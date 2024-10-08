import React from "react";

function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="https://www.linkedin.com/in/sabari-sam-1747751a6/" target="blank">
            {" "}
            <i class="ri-linkedin-box-line text-gray-400 "></i>
          </a>
          <a href="https://github.com/SabarinathanE" target="blank">
            {" "}
            <i class="ri-github-line text-gray-400 "></i>
          </a>
        </div>
        <div className="w-[1px] h-48 bg-[#125f63] sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSider;
