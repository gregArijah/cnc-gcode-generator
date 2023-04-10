//import bgImage from '../assets/images/background.jpg';

function Main() {
  return (
    <div
      className="h-screen bg-cover flex flex-col justify-center items-center"
     // style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-4xl text-white font-bold mb-8">Coming Soon!</h1>
      <p className="text-xl text-white font-medium text-center max-w-md">
        We're working hard to bring you an amazing application. Stay tuned for
        updates!
      </p>
    </div>
  );
}

export default Main;
