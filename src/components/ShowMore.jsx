import { useState } from "react";
import Button from "./Button";
import Benefits from "./Benefits";

function ShowMore() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button onClick={toggleShowMore}>
          {showMore ? "Show Less" : "More Personal Projects"}{" "}
        </Button>
      </div>
      {showMore && <Benefits />}
    </div>
  );
}

export default ShowMore;
