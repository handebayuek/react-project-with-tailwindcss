function About() {
  return (
    <>
      <div className="mx-auto min-h-full px-4 py-8 md:py-12 mt-12 md:mt-16">
        <div className=" text-center m-6">
          <h1 className=" text-darkColor text-3xl font-bold md:text-4xl">
            ABOUT <span className="text-accentColor">OUR</span> PRODUCTS
          </h1>
          <h3 className="text-base text-left pt-6 text-textColor md:text-lg">
            Our organic skincare line offers a range of natural, eco-friendly
            products designed to nourish and rejuvenate your skin without the
            use of harmful chemicals. Made from the finest botanical
            ingredients, each product is carefully crafted to enhance your
            skin&apos;s natural beauty while promoting overall health and wellness.
          </h3>
        </div>
        <div className="grid m-12 gap-8 sm:grid-cols-1 md:grid-cols-2">
          <div className="rounded-lg border p-4 shadow-sm">
            <h4 className="mb-2 text-accentColor text-lg font-semibold md:text-xl">safe and gentle</h4>
            <p className="text-sm text-darkColor md:text-base">
              Unlike conventional skincare products that often contain harsh
              chemicals and synthetic ingredients, our organic products are free
              from toxins, making them safe for all skin types, including
              sensitive skin.
            </p>
          </div>
          <div className="rounded-lg border p-4 shadow-sm">
            <h4 className="mb-2 text-lg text-accentColor font-semibold md:text-xl">
              eco-<span className="text-darkGreenColor">friendly</span>
            </h4>
            <p className="text-sm text-darkColor md:text-base">
              Our commitment to sustainability ensures that our products are not
              only good for your skin but also for the planet. We use
              environmentally responsible packaging and ethically sourced
              ingredients.
            </p>
          </div>
          <div className="rounded-lg border p-4 shadow-sm">
            <h4 className="mb-2 text-lg text-accentColor font-semibold md:text-xl">
              nutrient-<span className="text-darkGreenColor">rich</span>
            </h4>
            <p className="text-sm text-darkColor md:text-base">
              Organic skincare ingredients are packed with vitamins,
              antioxidants, and essential fatty acids that help repair and
              protect your skin, giving you a healthy, radiant glow.
            </p>
          </div>
          <div className="rounded-lg border p-4 shadow-sm">
            <h4 className="mb-2 text-accentColor text-lg font-semibold md:text-xl">
              ethical and <span className="text-darkGreenColor">cruelty-free</span>
            </h4>
            <p className="text-sm text-darkColor md:text-base">
              We prioritize ethical practices, ensuring our products are
              cruelty-free, vegan, and not tested on animals.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
