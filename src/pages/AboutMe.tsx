/**
 * AboutMe component, this is a functional component which talks about me
 * 
 * @returns AboutMe component
 */
const AboutMe = () => {
  return (
    <div className="flex">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-lg mx-auto mt-40">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">About Me</h1>
        <h2 className="text-xl font-semibold text-gray-600 text-center mb-2">Hello! I'm Cornet Benjamin</h2>
        <p className="text-gray-700 text-justify leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, non architecto vero animi vitae repellat laudantium explicabo, atque hic tempore autem totam doloremque odit nisi.
        </p>
      </div>
      <div className="mt-40">
        <p className="text-blue-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ipsum?</p>
      </div>
    </div>
    
  );
}

export default AboutMe;
