const Button = ({ text }) => {
  return (
    <button className="bg-primary text-lightsecondary px-6 py-[10px] rounded-full text-lg font-bold hover:scale-90 duration-300 w-max">
      {text}
    </button>
  );
};

export default Button;
