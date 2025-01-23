import { useState } from "react";
import Button from "./Button";
import ExperienceContent from "./ExperienceContent";

function Experience() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button onClick={toggleShowMore}>
          {showMore ? "Close" : "Work Experience"}{" "}
        </Button>
      </div>
      {showMore && <ExperienceContent />}
    </div>
  );
}

export default Experience;
