function cactus(props) {
  var date = new Date();
  var today =
    date.getUTCDate().toString() +
    "/" +
    (date.getUTCMonth() + 1).toString() +
    "/" +
    date.getUTCFullYear().toString();

  const { name, pathimg, water, image } = props;
  const checkday = water === today ? `text-checkday font-bold`:'text-white'
  return (
    <div>
      <div className="w-3/4 h-72 xl:h-96 center m-auto mt-16 flex bg-background-ele rounded-3xl flex-col xl:flex-row xl:rounded-full justify-around items-center xl:px-44">
        <img
          src={image[`${pathimg}.jpg`]}
          className="rounded-3xl xl:rounded-2xl h-40 xl:h-80"
          alt=""
        />
        <div className="leading-10 xl:leading-15">
            <h1 className="text-2xl text-white xl:text-4xl xl:font-semibold">ชื่อ : <span className=" underline underline-offset-4 decoration-red-400 decoration-dashed ">{name}</span></h1>
            <span className={`text-xl  xl:text-3xl xl:font-normal relative xl:right-12 text-white `}>รดน้ำวันที่ : <span className={`${checkday}`}>{water}</span></span>
        </div>
      </div>
    </div>
  );
}
export default cactus;

