import Link from "next/link";
import { notFound } from "next/navigation"

export const dynamicParams = true // default val = true

export async function generateStaticParams() {
    const res = await fetch('http://localhost:4000/tickets')

    const tickets = await res.json()

    return tickets.map((ticket) => ({
        id: ticket.id
    }))
}

async function getTicketData(id) {
    // ! RUN THE JSON SERVER FIRST FOR THE FAKE API
    const res = await fetch(`http://localhost:4000/tickets/${id}`, {
        next: {
            revalidate: 60
        }
    })

    if (!res.ok) {
        notFound();
    }

    return res.json();
}

async function TicketDetails({ params }) {
    let { id } = params;
    const ticketData = await getTicketData(id);

    return (
        <main>
            <nav className="flex justify-between items-center">
                <h2>Ticket Details</h2>
                <div className="flex justify-center my-8">
                    <Link href="/tickets">
                        <button className="btn-primary">{"<"}BACK</button>
                    </Link>
                </div>
            </nav>
            <div className="card">
                <h3>{ticketData.title}</h3>
                <small>Created by {ticketData.user_email}</small>
                <p>{ticketData.body}</p>
                <div className={`pill ${ticketData.priority}`}>
                    {ticketData.priority} priority
                </div>
            </div>
        </main>
    )
}

export default TicketDetails
