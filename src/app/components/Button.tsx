
interface p {
  text: string;
  className?: string;
}

function Button(props: p) {
  return (
    <section className="hover:text-red-500">
      <button className={`px-10 py-2 mb-5 rounded-lg mt-5 border-none text-xl leading-7 bg-gradient-to-br from-blue-500 to-blue-400 via-yellow-300 text-orange-900 font-bold cursor-pointer transition duration-300 ease-in-out hover:from-blue-500 hover:via-purple-600 hover:to-pink-600 hover:text-white`}>
        {props.text}
      </button>
    </section>
  );
}

export default Button;
