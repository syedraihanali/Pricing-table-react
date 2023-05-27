import { CheckIcon } from "@heroicons/react/24/solid";

const Card = ({
  name='Basic', price = 10, currency = '$', frequency ='month', details ='', features = [], featured = false
}) => (
  
  <div className={`bg-white border border-[#a54bd7] rounded-md shadow-xl  relative ${featured ? 'border-2' : 'border border-opacity-50'}` }  >
  {
    featured ? (
      <span className="bg-indigo-600 text-white rounded-full px-6 py-1 uppercase text-semibold whitespace-nowrap absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Recomended</span>
    ) : null
  } 
  <div className="px-6 py-12 border-b-2 border-gray-100" >
    <div className="flex justify-center items-center">
      <div className="flex items-start">
        <p>{currency}</p>
        <p className="font-bold text-4xl ">{price}</p>
      </div>
      <p className="font-semibold">/{frequency}</p>
    </div>
    <p className="font-bold text-3xl text-center mb-2 p-2">{name}</p>
    <p className=" text-center p-2">{details}</p>
  </div>
  <div className="p-2 bg-gray-100 " >
    <p className="text-semibold text-blue-600 p-2 underline">Features:</p>
    <ul className="space-y-1">
      {
        features.map((feature, index)=>(
          <li key={index} className="flex items-center space-x-1">
            <CheckIcon className="w-3 h-3 text-green-500 flex-shrink-0"/>
            <p className=" text-gray-600">{feature}</p>
          </li>

        ))
      }
    </ul>

      <button className={`mt-12 w-full py-3 px-8 rounded-lg text-lg whitespace-nowrap  cursor-pointer  text-bold focus:text-white  focus:outline-none focus:ring-4 focus:ring-[#a54bd7] focus:bg-[#a54bd7] transition-all ${
        featured ? "bg-indigo-600 hober:bg-indigo-700 text-white hover:scale-110 transform" : "bg-white hover:bg-[#be83fa] text-black"
      }`}>Buy Now</button>
    
  </div>
</div>
)
export default Card;