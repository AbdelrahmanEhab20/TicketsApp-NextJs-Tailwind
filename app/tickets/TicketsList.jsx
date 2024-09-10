import Link from "next/link";

async function getTicketsData() {
    // ! RUN THE JSON SERVER FIRST FOR THE FAKE API
    const res = await fetch("http://localhost:4000/tickets", {
        next: {
            revalidate: 30
        }
    });

    return res.json();
}
async function TicketsList() {
    const ticketsData = await getTicketsData();

    return (
        <>
            {ticketsData.map((singleTicket) => (
                <div key={singleTicket.id} className="card my-5">
                    <Link href={`/tickets/${singleTicket.id}`}>
                        <h3>{singleTicket.title}</h3>
                        <p>{singleTicket.body.slice(0, 200)} ...</p>
                        <div className={`pill ${singleTicket.priority}`}>
                            {singleTicket.priority} priority
                        </div>
                    </Link>
                </div>
            ))}
            {ticketsData.length === 0 && (
                <p className="text-center">There are no open tickets, yay!</p>
            )}
        </>
    );
}

export default TicketsList;
