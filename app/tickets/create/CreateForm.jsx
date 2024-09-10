"use client"

import { useRouter } from "next/navigation"
import { useState } from "react";

function CreateForm() {
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [priority, setPriority] = useState('low');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsLoading(true)

        const newTicket = { title, body, priority, user_email: 'test3132@devTEST.dev' }

        const res = await fetch('http://localhost:4000/tickets', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTicket)
        })
        console.log("res");
        console.log(res);
        if (res.status === 201) {
            router.refresh()
            router.push('/tickets')
        }

    }

    return (
        <form onSubmit={handleSubmit} className="w-1/2">
            <label>
                <span>Title:</span>
                <input
                    required
                    type="text"
                    onChange={(event) => setTitle(event.target.value)}
                    value={title}
                />
            </label>
            <label>
                <span>Body:</span>
                <textarea
                    required
                    onChange={(event) => setBody(event.target.value)}
                    value={body}
                />
            </label>
            <label>
                <span>Priority:</span>
                <select
                    onChange={(event) => setPriority(event.target.value)}
                    value={priority}
                >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                </select>
            </label>
            <button
                className="btn-primary"
                disabled={isLoading}
            >
                {isLoading && <span>Adding...</span>}
                {!isLoading && <span>Add Ticket</span>}
            </button>
        </form>
    );
}

export default CreateForm
