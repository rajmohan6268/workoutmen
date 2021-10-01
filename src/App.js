import "./App.css";

function App() {
  return (
    <div className="min-h-screen text-white font-inter bg">
      <nav className="flex items-center justify-between ">
        <div className="">
          <img alt="" src="/WORKOUT.svg" />
        </div>

        <div className="flex items-center space-x-10">
          <div className="">WORKOUTS</div>

          <div className="">PROGRAMS</div>
          <div className="">HEALTHY LIVING</div>

          <div className="">COMMUNITY</div>

          <div className="">ABOUT</div>

          <div className="">STORE</div>
        </div>
      </nav>
      {/*  */}
      <section className="">
        <div className="">
          <div className="font-sans uppercase jumbo">workout with me</div>

          <div className="text-gray">
            A huge selection of health and fitness content, healthy recipes and
            transformation stories to help you get fit and stay fit!
          </div>

          <div className="bg-red">Join Club Now!</div>

          <div className="">
            <div className="text-gray">AS FEATURED IN</div>
            <div className="flex space-x-4">
              <div className="">
                <div className="">
                  <img alt="" src="/3.svg" />
                </div>
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
        </div>

        <div className="">
          <img alt="" src="/hero.svg" />
        </div>
      </section>
      {/*  */}
      <section className="">
        <div className="">Not sure where to start?</div>
        <div className="">
          Programs offer day-to-day guidance on an interactive calendar to keep
          you on track.
        </div>

        <div className="flex items-center">
          <div className="">
            <div className="">Workout Videos</div>
            <div className="">
              Access to hundreds of free, full-length workout videos.
            </div>
          </div>
          <div className="">
            <div className="">Workout Videos</div>
            <div className="">
              Access to hundreds of free, full-length workout videos.
            </div>
          </div>
          <div className="">
            <div className="">Workout Videos</div>
            <div className="">
              Access to hundreds of free, full-length workout videos.
            </div>
          </div>
          <div className="">
            <div className="">Workout Videos</div>
            <div className="">
              Access to hundreds of free, full-length workout videos.
            </div>
          </div>
        </div>
      </section>

      {/*  */}

      <section className="grid grid-cols-2">
        <div className="">
          <div className="">Work out at home for free.</div>

          <div className="">
            We believe fitness should be accessible to everyone, everywhere,
            regardless of income or access to a gym. With hundreds of
            professional workouts, healthy recipes and informative articles, as
            well as one of the most positive communities on the web, you’ll have
            everything you need to reach your personal fitness goals – for free!
          </div>
          <div className="">
            See More <img src="/Group 4.svg" alt="" />
          </div>
        </div>
        <div className="">
          <img src="/Mask Group (5).png" alt="" />
        </div>
      </section>
      {/*  */}
      <section className="grid grid-cols-2">
        <div className="">
          <img src="/Mask Group (5).png" alt="" />
        </div>
        <div className="">
          <div className="">
            Get more with low-cost training programs and advanced features.
          </div>

          <div className="">
            We believe fitness should be accessible to everyone, everywhere,
            regardless of income or access to a gym. With hundreds of
            professional workouts, healthy recipes and informative articles, as
            well as one of the most positive communities on the web, you’ll have
            everything you need to reach your personal fitness goals – for free!
          </div>
          <div className="">
            See More <img src="/Group 4.svg" alt="" />
          </div>
        </div>
      </section>
      {/*Membership  */}

      <div className="">Membership</div>
      <section className="grid grid-cols-2">
        <div className="">
          <div className="">Join for Free</div>
          <div className="">
            Reach your fitness goals or maintain your healthy lifestyle with
            professional training and support from a positive and active online
            community.
          </div>
          <div className="">
            <ul>
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
          <div className="">
            See More <img src="/Group 4.svg" alt="" />
          </div>
        </div>
        {/*  */}
        <div className="">
          <div className="">WO Plus</div>
          <div className="">
            WO Plus includes everything you get with a free membership and adds
            brand new convenience features, fitness tools, and unique content.
          </div>
          <div className="">
            <ul>
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
          <div className="">Join Club Now!</div>
        </div>
      </section>
      <div className="">Back to Top</div>
    </div>
  );
}

export default App;
