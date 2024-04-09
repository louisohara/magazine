import styles from "../page.module.css";

export default function Footer() {
  return (
    <footer className="relative z-10">
      <div className="bg-orange-500 p-8 flex flex-col md:flex-row gap-4 justify-between">
        <form
          action=""
          className="flex flex-col md:flex-row w-full gap-2 md:gap-4"
        >
          <label
            htmlFor="email"
            className="w-full p-0 m-0 text-balance text-[9vw] md:text-[2rem] md:text-nowrap md:w-fit align-baseline line-through"
          >
            SIGN UP TO OUR NEWSLETTER
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="enter your email address"
            className="bg-transparent font-semi-bold outline-none text-black border-0 border-b-2 border-white w-full border-r-0 appearance-none placeholder:text-black "
          ></input>
        </form>
        <button
          type="submit"
          className="text-nowrap font-bold text-white relative border-2 border-solid w-fit flex justify-around items-center line hover:bg-white hover:text-orange-500 py-2 px-8 gap-4"
        >
          Sign up
          {/* <svg id="right" className={styles.arrow}>
            <path
              d="M0.5 9.35772H20.9956L14.2001 2.29941L16.4134 0L27 11L16.4134 22L14.2001 19.7006L20.9956 12.6423H0.5V9.35772Z"
              fill="#000"
              id="svgPath"
            ></path>
          </svg> */}
        </button>
      </div>
      <div className=" bg-black text-white p-8 flex justify-between items-start">
        <div>
          <a
            href="https://www.instagram.com/arccamagazine/"
            className="hover:text-orange-500 cursor-pointer block"
          >
            INSTAGRAM
          </a>
          <a
            href="mailto:arccamagazine@gmail.com"
            type="email"
            className="hover:text-orange-500 cursor-pointer block"
          >
            arccamagazine@gmail.com
          </a>
        </div>
        <p className="font-semi-bold"> © ARCCA 2024 </p>
      </div>
    </footer>
  );
}
