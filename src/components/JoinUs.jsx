function JoinUs() {
  return (
    <div className="w-full bg-cover bg-center py-20 px-24 lazyload mt-20">
      <div className="flex p-10 rounded-4xl bg-primary">
        <div className="flex flex-col text-center justify-center w-2/4 ">
          <div className="flex justify-center items-center mb-5">
            <h1 className="mb-5 text-white font-extrabold ">JOIN US!</h1>
          </div>
          <div>
            <p className="paragraph-footer text-white text-center justify-center lazyload">
              Check out open roles and apply to be part of the Nutzy team.  
            </p>
          </div>
        </div>
        <div>
          <img
            className="lazyload w-full max-h-max"
            src="./imgs/join-us.png"
            alt="Peanut Butter Served"
          />
        </div>
        <div className="flex justify-center items-center mt-10 w-1/4">
          <h3>
            <a
              href="/apply"
              className="text-white text-4xl font-extrabold hover:underline cursor-pointer"
            >
              APPLY NOW
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
