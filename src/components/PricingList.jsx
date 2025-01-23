import { pricing } from "../constants";

const PricingList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 max-w-screen-lg mx-auto">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center w-[calc(33.33% - 1rem)] max-w-[19rem] px-6 py-8 bg-n-8 border border-n-6 rounded-[2rem] text-center [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-auto mb-4 rounded-[1rem]"
          />

          <h4 className="text-xl font-semibold mb-2">{item.title}</h4>

          <p className="text-xs mb-4">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
