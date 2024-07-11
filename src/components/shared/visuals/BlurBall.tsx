

const BlurBall= ({className,bigBall = true}:{className?:string, bigBall?:boolean}): JSX.Element => {
  return (
       <div className={`${className} ${bigBall && "!h-[800px] bg-[#050900] brightness-200 bg-blend-overlay -right-80  w-[80%] !top-0 " } w-4/12 bg-blend-overlay h-2/6 bg-gradient-to-tr from-[#86fb00b4] to-[#a6bf0255] absolute flex right-[32%] top-72 rounded-full filter blur-3xl -z-10 `}></div>
  );
};

export default BlurBall; 