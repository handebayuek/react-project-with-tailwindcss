const GuidePage = () => {
  return (
    <div className="mx-auto  h-full w-full mt-[64px] pb-[100px] ">
      <div className="flex justify-center items-center flex-col text-left m-auto p-11">
        <div className="text-left pt-[70px]">
        <h1 className="text-3xl font-bold text-darkColor md:text-4xl ">
          Unlock the Power of Pure, <span>99.8% Organic Skincare</span>
        </h1>
        </div>
        <div className="pt-6 border-b-2 m-1 border-accentColor ">
          <h2 className="text-darkGreenColor font-bold text-lg">DAILY ROUTINE</h2>
          <p className="text-darkColor">
            We encourage you to make our organic skincare products a part of
            your daily routine. By consistently using these products, you’ll
            start to notice a healthier, more radiant complexion that reflects
            the purity of our ingredients. Regular use, especially morning and
            night, helps maintain the skin’s natural balance and maximizes the
            long-term benefits of the organic ingredients.
          </p>
        </div>

        <div className="pt-6 border-b-2 m-1 border-accentColor ">
          <h2 className="text-darkGreenColor font-bold text-lg">PROPER APPLICATION ORDER</h2>
          <p className="text-darkColor">
            For the best results, we suggest applying our products in the
            correct order: start with the cleanser, follow with the toner, then
            apply the serum, and finish with the moisturizer. This method
            ensures that each layer works effectively, giving your skin the full
            benefit of our organic ingredients.
          </p>
        </div>

        <div className="pt-6 m-1 border-accentColor">
          <h2 className="text-darkGreenColor font-bold text-lg">PERSONALIZED SKINCARE</h2>
          <p className="text-darkColor">
            We advise performing a patch test before fully integrating any new
            product into your skincare routine. This simple step helps them
            understand how their skin reacts, allowing for personalized use and
            avoiding any potential sensitivities, especially with highly potent
            organic ingredients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuidePage;
