import calander from "../assets/calander.png";
import invoice from "../assets/invoice.png";
import users from "../assets/users.png";
import Card from "../components/Card";

const AllinOne = () => {
    const cardData = [
        {
            icon: invoice,
            title: "Online Billing, Invoicing, & Contracts",
            description: "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts",
            bgColor: "#5B72EE"
        },
        {
            icon: calander,
            title: "Easy Scheduling & Attendance Tracking",
            description: "Schedule and track appointments, classes, and events with our easy-to-use calendar interface. Monitor attendance and manage time effectively",
            bgColor: "#00CBB8"
        },
        {
            icon: users,
            title: "Customer Tracking",
            description: "Automate and track emails to individuals or groups. Skilline's built-in system helps organize your organization",
            bgColor: "#29B9E7"
        }
    ];

    return (
        <section className="py-10 md:py-7 ">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-[#2F327D]">All-In-One </span>
                        <span className="text-green-600">Cloud Software.</span>
                    </h2>

                    <p className="text-gray-600">
                        TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.

                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {cardData.map((card, index) => (
                        <CardWrapper
                            key={index}
                            icon={card.icon}
                            title={card.title}
                            description={card.description}
                            bgColor={card.bgColor}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};


const CardWrapper = ({ icon, title, description, bgColor }) => {
    return (
        <div className="flex justify-center">
            <Card
                icon={icon}
                title={title}
                description={description}
                bgColor={bgColor}
            />
        </div>
    );
};

export default AllinOne;