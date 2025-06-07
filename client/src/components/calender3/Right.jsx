import Card from "../../components/calender3/Card";

const Right = () => {
    const cardData = [
        {
            title: "06 Super Coins on the way",
            description: "Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod.",
            bgColor: "bg-blue-50"
        },
        {
            title: "06 Super Coins on the way",
            description: "Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod.",
            bgColor: "bg-orange-50"
        },
        {
            title: "06 Super Coins on the way",
            description: "Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod.",
            bgColor: "bg-red-50"
        }
    ];
    
    return (
        <div className="w-full bg-blue-50 h-[calc(100vh-62px)] sm:h-[calc(100vh-110px)] overflow-auto">
            <div className="bg-white p-3 sm:p-5 md:p-7 m-2 sm:m-3 md:m-6 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">Share and refer</h1>
                <p className="text-gray-500 mb-4 sm:mb-6 text-sm">Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p> 
                <div className="flex flex-col gap-3 sm:gap-4 mt-3 sm:mt-5">
                    {cardData.map((card, index) => (
                        <Card 
                            key={index}
                            title={card.title}
                            description={card.description}
                            bgColor={card.bgColor}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Right;