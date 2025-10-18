function JoinUs() {
  return (
    <div className="w-full bg-cover bg-center py-20 px-6 md:px-24 mt-20">
      <div className="flex flex-col md:flex-row items-center md:items-stretch p-6 md:p-10 rounded-4xl bg-primary gap-6">
        {/* LEFT TEXT CONTENT */}
        <div className="flex flex-col text-center justify-center w-full md:w-2/4">
          <h1 className="text-white font-extrabold text-3xl md:text-4xl mb-5">
            JOIN US!
          </h1>
          <p className="paragraph-footer text-white text-center">
            Check out open roles and apply to be part of the Nutzy team.
          </p>
        </div>

        {/* IMAGE */}
        <div className="w-full md:w-auto flex justify-center">
          <img
            className="lazyload max-w-[200px] md:max-w-full h-auto"
            src="./imgs/join-us.png"
            alt="Peanut Butter Served"
          />
        </div>

        {/* APPLY BUTTON */}
        <div className="flex justify-center items-center w-full md:w-1/4">
          <a
            href="/apply"
            className="text-white text-2xl md:text-4xl font-extrabold hover:underline cursor-pointer"
          >
            APPLY NOW
          </a>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
