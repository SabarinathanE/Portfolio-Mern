import React from "react";
import { useSelector } from "react-redux";

function Intro() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { firstName, lastName, welcomeText, description, caption } = intro;

  console.log(firstName, lastName, welcomeText, description, caption)
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-white text-2xl">{welcomeText || ""} </h1>
      <h1 className="text-6xl sm:text-3xl lg:text-4xl text-secondary font-semibold">
        {firstName || ""} {lastName || ""}
      </h1>
      <h1 className="text-6xl sm:text-3xl lg:text-4xl text-white font-semibold">
        {caption || ""}
      </h1>
      <p className="text-white w-2/3">{description || ""}</p>
      <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">
      <a href="https://drive.google.com/file/d/1cJ4JblUZtqjMvLltt7oaeoZtlhmq_4x0/view?usp=drive_link" target="_blank">Resume</a>
      </button>
    </div>
  );
}

export default Intro;