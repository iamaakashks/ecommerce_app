

export default function Card({item}){
    const priceInRs = (item.price*86.22).toFixed(2);
    return (
        <div className="w-64 mx-auto bg-white border border-gray-300 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            
            <div className="w-full h-64 bg-white flex items-center justify-center p-4">
                <img
                    className="max-h-full object-contain"
                    src={item.image}
                    alt={item.title}
                />
            </div>

            <div className="p-4 bg-white">
                <h1 className="text-base font-semibold mb-2">{item.title}</h1>
                <p className="text-sm text-gray-800 font-medium mb-2">₹ {priceInRs}</p>
                <button className="px-3 py-1.5 bg-black text-white rounded-md">Add to Cart</button>
            </div>
        </div>
    )
}