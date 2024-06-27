"use client";

const ScoreBanner = ({ score, lives }) => {
  return (
    <div className="max-w-[1200px] h-[60px] flex gap-4 justify-center items-center bg-[#7e7e7e62] rounded-md  mx-auto border-slate-50 border-2 border-opacity-50">
      {Array.from({ length: lives }, (_, i) => (
        <img
          key={i}
          src="/heart.png"
          alt="Heart"
          className="w-[30px] md:w-[40px]
        "
        />
      ))}
    </div>
  );
};

export default ScoreBanner;
