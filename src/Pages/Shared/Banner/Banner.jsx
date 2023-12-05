const Banner = () => {
  return (

    <div className="hero max-h-[1000px] relative " style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
    <div className="">
    <form className="card-body bg-white rounded">
        <div className="grid md:grid-cols-2 gap-4">

        <div className="form-control">
          <label className="label">
          </label>
          <input type="text" placeholder="বিভাগ নির্বাচন করুন" className=" w-58 input input-bordered text-zinc-700 text-sm font-['Li Ador Noirrit'] leading-normal" required />
        </div>
        <div className="form-control">
          <label className="label">
          </label>
          <input type="text" placeholder="জেলা নির্বাচন করুন" className="input input-bordered text-zinc-700  text-sm font-['Li Ador Noirrit'] leading-normal" required />
        </div>
        <div className="form-control">
          <label className="label">
          </label>
          <input type="text" placeholder="উপজেলা নির্বাচন করুন" className="input input-bordered text-zinc-700 text-sm font-['Li Ador Noirrit'] leading-normal " required />
        </div>
        <div className="form-control">
        <label className="label">
          </label>
          <input type="text" placeholder="নির্বাচনী এলাকা নির্বাচন করুন" className="input input-bordered text-zinc-700 text-sm  font-['Li Ador Noirrit'] leading-normal" required/>
        </div>
        



        </div>
        <div className="form-control justify-center">
          <button className=" btn bg-emerald-800 rounded-lg shadow border justify-center items-center gap-2 inline-flex  text-white text-base font-semibold font-['Li Ador Noirrit'] leading-normal">Login</button>
        </div>
      </form>
    </div>
    <div className="absolute left-3/4 bottom-1/4">
    <div className="grid grid-flow-col gap-3 text-center auto-cols-max">
  <div className="flex flex-col p-2 bg-green-100 rounded-box text-emerald-800">
    <span className="countdown font-['Li Ador Noirrit'] text-4xl">
      <span style={{"--value":15}}></span>
    </span>
    দিন
  </div> 
  <div className="flex flex-col p-1 bg-green-100 rounded-box text-emerald-800">
    <span className="countdown font-['Li Ador Noirrit'] text-4xl">
      <span style={{"--value":10}}></span>
    </span>
    ঘণ্টা
  </div> 
  <div className="flex flex-col p-2 bg-green-100 rounded-box text-emerald-800">
    <span className="countdown font-['Li Ador Noirrit'] text-4xl">
      <span style={{"--value":24}}></span>
    </span>
    মিনিট
  </div> 
  <div className="flex flex-col p-2 bg-green-100 rounded-box text-emerald-800">
    <span className="countdown font-['Li Ador Noirrit'] text-4xl">
      <span style={{"--value":29}}></span>
    </span>
    সেকেন্ড
  </div>
</div>
    </div>
    </div>
  </div>
</div>

  );
};

export default Banner;
