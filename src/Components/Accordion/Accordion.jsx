const Accordion = () => {
  return (
    <div className="my-24 max-w-screen-xl mx-auto px-2 space-y-2 ">
      <h1 className="text-4xl font-Bebas-neue font-bold text-center text-red-700 my-4">
        FAQ
      </h1>
      <div className="collapse bg-base-200 dark:bg-blue-900">
        <input type="radio" name="my-accordion-1" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          What is suruFLEX?
        </div>
        <div className="collapse-content">
          <p>
            suruFLEX is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries, and more on
            thousands of internet-connected devices. You can watch as much as
            you want, whenever you want without a single commercial – all for
            one low monthly price. There's always something new to discover and
            new TV shows and movies are added every week!
          </p>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          How much does suruFLEX cost?
        </div>
        <div className="collapse-content">
          <p>
            Watch suruFLEX on your smartphone, tablet, Smart TV, laptop, or
            streaming device, all for one fixed monthly fee. Plans range from
            USD2.99 to USD9.99 a month. No extra costs, no contracts.
          </p>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          Is suruFLEX good for kids?
        </div>
        <div className="collapse-content">
          <p>
            The suruFLEX Kids experience is included in your membership to give
            parents control while kids enjoy family-friendly TV shows and movies
            in their own space. Kids profiles come with PIN-protected parental
            controls that let you restrict the maturity rating of content kids
            can watch and block specific titles you don’t want kids to see.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
