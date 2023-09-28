import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Sectioneight = () => {
  return (
    <>
      <Header />

      <div className="flex justify-center text-center m-6">
        <h1 className=" text-[#0d0c22] text-6xl font-bold w-2/5">
          The #1 job board for graphic design jobs
        </h1>
      </div>
      <div className="flex justify-center m-8">
        <p className="w-2/4 text-center text-xl">
          Dribbble is the heart of the design community and the best resource to
          discover and connect with designers and jobs worldwide.
        </p>
      </div>
      <div className="flex  gap-8 justify-center text-lg">
        <button className="bg-[#0d0c22] w-28 h-10 rounded-3xl text-white">
          +Post a Job
        </button>
        <button className="border w-28 rounded-3xl h-10">Learn more</button>
      </div>
      <div className="flex justify-center mt-2 mb-16">
        <p className=" text-gray-400">Just $25/week (billed monthly)</p>
      </div>
      <div className="flex gap-8 p-6 text-xl">
        <button className="w-48 rounded-3xl h-10 bg-gray-100 border">
          Full-time job Board
        </button>
        <button>Freelance Jobs </button>
        <button>Designer Search </button>
      </div>
      <div className="flex gap-1 ml-14 mt-16 h-10 border rounded-xl w-[56%]  ">
        <img src="/images/search.png" className="ml-4 w-6 h-6 mt-2" />
        <p className="text-gray-500 mt-2">
          Search by company, skill, tag,.....
        </p>
      </div>
      <div className="flex gap-6 p-6 ml-10">
        <div className="w-3/5">
          <h1 className="text-lg font-bold m-4">Recent Posts</h1>
          <p className="m-4">1 new opportunity posted today!</p>
          <div className="flex gap-8 border p-4 rounded-xl">
            <img
              src="https://cdn.dribbble.com/users/10053163/avatars/normal/a356d6637c635b08f99fb202a8bcc947.png?1666199554&resize=84x84"
              className="w-14 h-14"
            />
            <div>
              <div className="flex w-full gap-32 ">
                <p className="w-2/4">Reel Unlimited</p>
                <div className="flex gap-2">
                  <div className="w-4 h-4 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                      viewBox="0 0 24 24"
                      role="img"
                      className="icon location-icon fill-current"
                    >
                      <path d="m12.001 0c-6.001 0-9.001 4.5-9.001 9s9.001 15 9.001 15 8.999-10.5 8.999-15-3-9-8.999-9zm-.001 12c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path>
                    </svg>
                  </div>
                  <p className="">Remote</p>
                </div>
              </div>
              <div className="flex w-full gap-72">
                <h1 className="">Web Flow Designer</h1>
                <p className="">Posted 26 minutes ago</p>
              </div>
            </div>
          </div>
          <div className="flex gap-8 border p-4 rounded-xl mt-4 mb-4">
            <img
              src="https://cdn.dribbble.com/userupload/10247659/file/original-20fe7fb90289fb8fd1b65f6257222ea6.png?resize=64x64"
              className="w-14 h-14"
            />
            <div>
              <div className="flex w-full gap-28 ">
                <p className="w-2/4">Minimax Studio</p>
                <div className="flex gap-2">
                  <div className="w-4 h-4 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                      viewBox="0 0 24 24"
                      role="img"
                      className="icon location-icon fill-current"
                    >
                      <path d="m12.001 0c-6.001 0-9.001 4.5-9.001 9s9.001 15 9.001 15 8.999-10.5 8.999-15-3-9-8.999-9zm-.001 12c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path>
                    </svg>
                  </div>
                  <p className="">Remote</p>
                </div>
              </div>
              <div className="flex w-full gap-72">
                <h1 className="">Indie game studio</h1>
                <p className="">Posted about 8 hours ago</p>
              </div>
            </div>
          </div>
          <div className="flex gap-8 border p-4 rounded-xl">
            <img
              src="https://cdn.dribbble.com/userupload/10246444/file/original-dca784592aa7fc5b5eef85478ff3eebd.sa?resize=64x64"
              className="w-14 h-14"
            />
            <div>
              <div className="flex w-full gap-28 ">
                <p className="w-2/4">JOIN Solution</p>
                <div className="flex gap-2">
                  <div className="w-4 h-4 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                      viewBox="0 0 24 24"
                      role="img"
                      className="icon location-icon fill-current"
                    >
                      <path d="m12.001 0c-6.001 0-9.001 4.5-9.001 9s9.001 15 9.001 15 8.999-10.5 8.999-15-3-9-8.999-9zm-.001 12c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path>
                    </svg>
                  </div>
                  <p className="">Remote</p>
                </div>
              </div>
              <div className="flex w-full gap-32">
                <h1 className="">UX/UI for App and E Commerce Website</h1>
                <p className="">Posted about 11 hours ago</p>
              </div>
            </div>
          </div>
          <div className="flex gap-8 border p-4 rounded-xl mt-4 mb-4">
            <img
              src="https://cdn.dribbble.com/userupload/9475300/file/original-90e91766f5477e5f3246f2e82deb140f.com?resize=24x24"
              className="w-14 h-14"
            />
            <div>
              <div className="flex w-full gap-28 ">
                <p className="w-2/4">Give Butter</p>
                <div className="flex gap-2">
                  <div className="w-4 h-4 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                      viewBox="0 0 24 24"
                      role="img"
                      className="icon location-icon fill-current"
                    >
                      <path d="m12.001 0c-6.001 0-9.001 4.5-9.001 9s9.001 15 9.001 15 8.999-10.5 8.999-15-3-9-8.999-9zm-.001 12c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path>
                    </svg>
                  </div>
                  <p className="2/4">Remote</p>
                </div>
              </div>
              <div className="flex w-full gap-72">
                <h1 className="">Product Designer</h1>
                <p className="">Posted about 12 hours ago</p>
              </div>
            </div>
          </div>
          <div className="flex gap-8 border p-4 rounded-xl">
            <img
              src="https://cdn.dribbble.com/userupload/8694282/file/original-62070922351984339746f4ef697a1f54.tv?resize=24x24"
              className="w-14 h-14"
            />
            <div>
              <div className="flex w-full gap-28 ">
                <p className="w-2/4">iSpot.tv</p>
                <div className="flex gap-2">
                  <div className="w-4 h-4 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                      viewBox="0 0 24 24"
                      role="img"
                      className="icon location-icon fill-current"
                    >
                      <path d="m12.001 0c-6.001 0-9.001 4.5-9.001 9s9.001 15 9.001 15 8.999-10.5 8.999-15-3-9-8.999-9zm-.001 12c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path>
                    </svg>
                  </div>
                  <p className="2/4">Remote</p>
                </div>
              </div>
              <div className="flex w-full gap-48">
                <h1 className="">Graphic (Marketing) Designer</h1>
                <p className="">Posted about 12 hours ago</p>
              </div>
            </div>
          </div>
          <div className="flex gap-8 border p-4 rounded-xl mt-4 mb-4">
            <img
              src="https://cdn.dribbble.com/userupload/10191160/file/original-9e4c41db781f900c7a8c785192a7649d.com?resize=64x64"
              className="w-14 h-14"
            />
            <div>
              <div className="flex w-full gap-32 ">
                <p className="w-2/4">Flowform</p>
                <div className="flex gap-2">
                  <div className="w-4 h-4 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                      viewBox="0 0 24 24"
                      role="img"
                      className="icon location-icon fill-current"
                    >
                      <path d="m12.001 0c-6.001 0-9.001 4.5-9.001 9s9.001 15 9.001 15 8.999-10.5 8.999-15-3-9-8.999-9zm-.001 12c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path>
                    </svg>
                  </div>
                  <p className="2/4">Remote</p>
                </div>
              </div>
              <div className="flex w-full gap-72">
                <h1 className="">Product Designer</h1>
                <p className="">Posted 3 days ago</p>
              </div>
            </div>
          </div>
          <div className="flex gap-8 border p-4 rounded-xl">
            <img
              src="https://cdn.dribbble.com/userupload/10173027/file/original-913474181d366a8dfb6de5ad9b1287e5.png?resize=64x64"
              className="w-14 h-14"
            />
            <div>
              <div className="flex w-full gap-32 ">
                <p className="w-2/4">Road to health</p>
                <div className="flex gap-2">
                  <div className="w-4 h-4 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                      viewBox="0 0 24 24"
                      role="img"
                      className="icon location-icon fill-current"
                    >
                      <path d="m12.001 0c-6.001 0-9.001 4.5-9.001 9s9.001 15 9.001 15 8.999-10.5 8.999-15-3-9-8.999-9zm-.001 12c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path>
                    </svg>
                  </div>
                  <p className="2/4">United State</p>
                </div>
              </div>
              <div className="flex w-full gap-56">
                <h1 className="">Senior Product Designer</h1>
                <p className="">Posted 4 days ago</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 w-1/4 p-6 rounded-xl ">
          <h1 className="m-4 font-bold">Specialties</h1>
          <div className="flex gap-2 mt-4">
            <img src="/images/ checkbox.png" />
            <h1>Animation</h1>
          </div>
          <div className="flex gap-2 mt-2 mb-2">
            <img src="/images/ checkbox.png" />
            <h1>Brand/Graphic Design</h1>
          </div>
          <div className="flex gap-2">
            <img src="/images/ checkbox.png" />
            <h1>Illustration</h1>
          </div>
          <div className="flex gap-2 mt-2 mb-2">
            <img src="/images/ checkbox.png" />
            <h1>Leadership</h1>
          </div>
          <div className="flex gap-2">
            <img src="/images/ checkbox.png" />
            <h1>Mobile Design</h1>
          </div>
          <div className="flex gap-2 mt-2 mb-2">
            <img src="/images/ checkbox.png" />
            <h1>Product Design</h1>
          </div>
          <div className="flex gap-2">
            <img src="/images/ checkbox.png" />
            <h1>UX Design/Research</h1>
          </div>
          <div className="flex gap-2 mt-2 mb-2">
            <img src="/images/ checkbox.png" />
            <h1>Web Design</h1>
          </div>
          <hr className="m-4 mb-6 mt-6" />
          <div>
            <h1 className="font-bold">Location</h1>
            <div className="flex justify-center items-center">
              <p className="border w-3/4 h-14 text-center items-center justify-start p-2 rounded-xl mt-2 mb-4 flex">
                Enetr Location...
              </p>
            </div>
            <div className="flex gap-2">
              <img src="/images/ checkbox.png" />
              <h1>Open to Remote</h1>
            </div>
            <hr className="mb-6 mt-6" />
            <div className="flex gap-2 mt-4 mb-4">
              <img src="/images/ checkbox.png" />
              <h1>Full Time</h1>
            </div>
            <div className="flex gap-2 mt-4 mb-4">
              <img src="/images/ checkbox.png" />
              <h1>Freelance/Contract</h1>
            </div>
            <div className="flex justify-center mt-10">
              <button className="w-3/4 border rounded-3xl h-12 text-lg text-white bg-gray-300">
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Sectioneight;
