import TicketsList from "./TicketsList"

function Tickets() {
    return (
        <main>
            <nav>
                <div>
                    <h2>Tickets</h2>
                    <p><small>Currently open tickets.</small></p>
                </div>
            </nav>
            <TicketsList />
        </main>
    )
}

export default Tickets
