import "./App.css";

function App() {
  return (
    <div className="min-h-screen overflow-hidden text-white font-inter bg">
      <nav className="container flex items-center justify-between p-2 mx-auto mb-24 text-sm md:mb-0 md:p-8">
        <div className="mx-auto mt-8 md:m-0">
          <img alt="" src="/WORKOUT.svg" />
        </div>

        <div className="items-center hidden cursor-pointer md:space-x-10 md:flex">
          <div className="pb-1 hred">WORKOUTS</div>

          <div className="pb-1 hpurple">PROGRAMS</div>
          <div className="pb-1 hrorange">HEALTHY LIVING</div>

          <div className="pb-1 hred">COMMUNITY</div>

          <div className="pb-1 hpurple">ABOUT</div>

          <div className="pb-1 hred">STORE</div>
        </div>
      </nav>
      {/*  */}
      <section className="container relative items-center min-h-screen mx-auto md:flex">
        <div className="right-0 md:absolute xl:w-full md:w-72 xl:max-w-xs lg:mr-20 xl:mr-40 2xl:max-w-md 2xl:mr-48">
          <div
            data-aos-easing="linear"
            data-aos-duration="1000"
            data-aos="fade-right"
            className="absolute right-0 hidden px-8 py-4 text-3xl font-bold md:inline-block xl:text-5xl rounded-3xl bg-organge-light"
          >
            <div className="">
              <img alt="" src="/run.svg" />
            </div>
            <div className="">
              4,95 <span className="text-base font-normal">Km</span>
            </div>
          </div>
          {/*  */}
          <div
            data-aos-easing="linear"
            data-aos-duration="1000"
            data-aos="zoom-in"
            className="absolute items-center hidden px-6 py-3 md:inline-flex md:-ml-16 top-1/2 rounded-3xl bg-gray-dark"
          >
            <div className="mr-3">
              <img alt="" src="/play.svg" />
            </div>
            <div className="space-y-2">
              <div className="text-2xl xl:text-3xl text-semibold">350+</div>
              <div className="font-normal text-gray">Video tutorial</div>
            </div>
          </div>
          {/*  */}
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="linear"
            data-aos-duration="2000"
            data-aos-delay="300"
            data-aos-offset="0"
            className="absolute right-0 hidden px-8 py-6 md:inline-block md:-mr-32 bottom-40 bg-violet rounded-3xl"
          >
            <div className="text-2xl xl:text-4xl text-bold">500+</div>
            <div className="font-normal text-gray">Free Workout Videos</div>
          </div>
          {/* <img alt="" src="/hero.svg" /> */}
          <img className="hidden md:flex" alt="" src="/hero.png" />
        </div>

        <div className="p-2 pb-10 space-y-5 md:p-0 md:ml-10 xl:ml-20 2xl:space-y-10">
          <div className="font-sans text-4xl font-bold uppercase jumbo">
            workout <br></br> with me
          </div>

          <div className="max-w-xs xl:max-w-lg text-gray">
            A huge selection of health and fitness content, healthy recipes and
            transformation stories to help you get fit and stay fit!
          </div>

          <div className="md:inline-block text-center mx-auto px-6 transition-all ease-in-out cursor-pointer  duration-1000 2xl:px-8 py-2.5 2xl:py-4 font-medium rounded-xl btn ">
            Join Club Now!
          </div>

          <div className="">
            <div className="mb-4 font-semibold text-gray">AS FEATURED IN</div>
            <div className="flex space-x-3 overflow-x-hidden xl:pace-x-6">
              <div className="">
                <img alt="" src="/3.svg" />
              </div>
              <div className="">
                <img alt="" src="/2.svg" />
              </div>
              <div className="">
                <img alt="" src="/1.svg" />
              </div>
              <div className="">
                <img alt="" src="/5.svg" />
              </div>
              <div className="">
                <img alt="" src="/6.svg" />
              </div>
              <div className="">
                <img alt="" src="/4.svg" />
              </div>
            </div>
          </div>

          <div className="relative pt-20 space-y-3 sm:hidden">
            <img
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-offset="0"
              data-aos-easing="linear"
              data-aos-duration="2000"
              className="absolute right-0 z-20 w-40 "
              alt=""
              src="/hero.png"
            />
            <div
              data-aos-easing="linear"
              data-aos-duration="500"
              data-aos="fade-right"
              className="p-4 bg-organge-light"
            >
              <div className="">
                <img alt="" src="/run.svg" />
              </div>
              <div className="">
                4,95 <span className="text-base font-normal">Km</span>
              </div>
            </div>
            {/*  */}
            <div
              data-aos-easing="linear"
              data-aos-duration="1000"
              data-aos="fade-right"
              className="p-4 bg-gray-dark"
            >
              <div className="mr-3">
                <img alt="" className="w-8" src="/play.svg" />
              </div>
              <div className="flex items-center ">
                <div className="mr-2 text-2xl xl:text-3xl text-semibold">
                  350+
                </div>
                <div className="font-normal text-gray">Video tutorial</div>
              </div>
            </div>
            {/*  */}
            <div
              data-aos-easing="linear"
              data-aos-duration="1500"
              data-aos="fade-right"
              className="p-4 bg-violet"
            >
              <div className="text-2xl xl:text-4xl text-bold">500+</div>
              <div className="font-normal text-gray">Free Workout Videos</div>
            </div>
            {/* <img alt="" src="/hero.svg" /> */}
          </div>
        </div>
      </section>
      {/*  */}
      <section className="container px-4 mx-auto space-y-12 xl:px-0">
        <div className="">
          <div className="text-2xl font-bold md:text-4xl">
            Not sure where to start?
          </div>
          <div className="text-sm text-gray">
            Programs offer day-to-day guidance on an interactive calendar to
            keep you on track.
          </div>
        </div>

        <div className="grid items-center gap-8 md:grid-cols-2 lg:flex">
          <div className="p-8 gray-card rounded-xl">
            <div className="text-xl font-semibold ">Workout Videos</div>
            <div className="flex items-end">
              <div className=" text-gray">
                Access to hundreds of free, full-length workout videos.
              </div>
              <img src="Group 4.svg" alt="arr" />
            </div>
          </div>
          <div className="p-8 gray-card 1 rounded-xl">
            <div className="text-xl font-semibold ">Workout Programs</div>
            <div className="flex items-end">
              <div className="text-gray">
                Affordable and effective workout programs.
              </div>
              <img src="Group 4.svg" alt="arr" />
            </div>
          </div>
          <div className="p-8 gray-card rounded-xl">
            <div className="text-xl font-semibold ">Meal Plans</div>
            <div className="flex items-end">
              <div className=" text-gray">
                Plans built with registered dietitians and nutritionists.
              </div>
              <img src="Group 4.svg" alt="arr" />
            </div>
          </div>
          <div className="p-8 gray-card4 rounded-xl">
            <div className="text-xl font-semibold ">WO Plus ALL ACCESS</div>

            <div className="flex items-end">
              <div className="text-gray">
                Add powerful features to your membership.
              </div>
              <img src="Group 4.svg" alt="arr" />
            </div>
          </div>
        </div>
      </section>

      {/*  */}

      <section className="container grid px-4 mx-auto my-32 space-y-6 md:space-y-0 md:grid-cols-2 xl:px-0 place-items-center">
        <div className="max-w-lg space-y-10 ">
          <div className="text-3xl font-bold xl:text-4xl">
            Work out at home for free.
          </div>

          <div className=" text-gray">
            We believe fitness should be accessible to everyone, everywhere,
            regardless of income or access to a gym. With hundreds of
            professional workouts, healthy recipes and informative articles, as
            well as one of the most positive communities on the web, you’ll have
            everything you need to reach your personal fitness goals – for free!
          </div>
          <div className="flex items-center text-blue-600">
            See More <img className="ml-4" src="/Group 4.svg" alt="" />
          </div>
        </div>
        <div className="">
          <img src="/Mask Group (5).png" alt="" />
        </div>
      </section>
      {/*  */}
      <section className="container grid gap-4 px-4 mx-auto space-y-6 md:space-y-0 md:grid-cols-2 xl:gap-0 xl:px-0 place-items-center">
        <div className="">
          <img src="/Mask Group (6).png" alt="" />
        </div>
        <div className="max-w-lg space-y-10">
          <div className="text-3xl font-bold xl:text-4xl">
            Get more with low-cost training programs and advanced features.
          </div>

          <div className="text-gray">
            We believe fitness should be accessible to everyone, everywhere,
            regardless of income or access to a gym. With hundreds of
            professional workouts, healthy recipes and informative articles, as
            well as one of the most positive communities on the web, you’ll have
            everything you need to reach your personal fitness goals – for free!
          </div>
          <div className="flex items-center text-blue-600">
            See More <img src="/Group 4.svg" className="ml-4" alt="" />
          </div>
        </div>
      </section>
      {/*Membership  */}

      <div className="container px-4 pb-8 mx-auto my-12 text-2xl font-bold border-b border-white md:text-4xl xl:px-0 2xl:my-20 max-w-7xl border-opacity-20">
        Membership
      </div>
      <section className="container grid gap-3 px-2 pb-8 mx-auto text-sm md:text-base md:grid-cols-2 xl:px-0 2xl:pb-16 text-gray xl:gap-0">
        <div className="max-w-lg p-8 mx-auto space-y-4 gray-card1 ">
          <div className="text-3xl font-semibold text-white xl:text-4xl">
            Join for Free
          </div>
          <div className="">
            Reach your fitness goals or maintain your healthy lifestyle with
            professional training and support from a positive and active online
            community.
          </div>
          <div className="">
            <ul className="list-disc list-inside xl:pl-8">
              <li>~600 Full-Length Workout Videos</li>
              <li>Customizable Calendar</li>
              <li>Healthy Recipes</li> <li>Health and Fitness Articles</li>
              <li>Positive and Supportive Online Community</li>
              <li>No Credit Card Needed</li>
            </ul>
          </div>
          <div className="">
            We believe fitness should be accessible to everyone, everywhere,
            regardless of income or access to a gym. With hundreds of
            professional workouts, healthy recipes and informative articles, as
            well as one of the most positive communities on the web, you’ll have
            everything you need to reach your personal fitness goals – for free!
          </div>
          <div className="flex items-center text-blue-600">
            See More <img src="/Group 4.svg" className="ml-4" alt="" />
          </div>
        </div>
        {/*  */}
        <div className="max-w-lg p-8 mx-auto space-y-4 gray-card1">
          <div className="text-3xl font-semibold text-white xl:text-4xl">
            WO Plus
          </div>
          <div className="">
            WO Plus includes everything you get with a free membership and adds
            brand new convenience features, fitness tools, and unique content.
          </div>
          <div className="">
            <ul className="list-disc list-inside xl:pl-8">
              <li>Ads-Free Website and Videos</li>
              <li>Surprise Me Workout Selection Tool</li>
              <li>Statistics for Your Activities</li>
              <li>Enter and Track Custom Workouts</li>
              <li>FB Plus Exclusive Workouts</li>
              <li>Trackers to See Your Progress</li>
              <li>FB Plus Content and Challenges</li>
              <li>Video Tags</li>
              <li>FB Plus Routines</li>

              <li>Rest Day Complete</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="inline-block px-4 py-1.5 text-white bg-blue-500 ">
              Join Club Now!
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
