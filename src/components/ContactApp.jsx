// Name , Phone => Contacts 

import React, { useState } from 'react'

const ContactApp = () => {
    const [contacts, setContacts] = useState([
        { id: 1, name: "Police", phone: "123" }
    ])

    const [name, setName] = useState("")

    const [phone, setPhone] = useState("")
    const handleAdd = () => {

        const newContact = {
            id: Date.now(),
            name,
            phone,
        }
        setContacts(prev => [...prev, newContact])
        setName("")
        setPhone("")
    }

    const handleDelete = (id) => {
        setContacts(prev => prev.filter(contacts => contacts.id !== id))
    }


    return (
        <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-2xl'>

            <h1 className='text-2xl font-bold text-center mb-6'> Contact App </h1>
            <div className='space-y-4 mb-6'>

            <input placeholder='name'
            className='w-full p-2 border border-gray-600 rounded-2xl'
                value={name}
                onChange={(e) => setName(e.target.value)}

            />
                <input placeholder='phone'
                    value={phone}
                        className='w-full p-2 border border-gray-600 rounded-2xl'
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
        
            <button  className='w-full bg-gray-500 text-white mb-4 py-2 rounded-3xl hover:bg-gray-700 transition '
            onClick={handleAdd}>
                Add New Contact
            </button>

            <ul className='space-y-4'>
                {contacts.length == 0 && <p>
                    you don't have contact </p>}
                {contacts.map(contacts => (
                    <li key={contacts.id} className='flex justify-between items-center p-4 bg-gray-100 rounded-md'>
                        <div>
                            <p className='font-semibold'>

                                {contacts.name}
                            </p>
                            <p className='text-gray-600 text-sm'>
                                {contacts.phone}
                            </p>
                        </div>
                        <button className= 'bg-red-700 p-1 text-white hover:bg-red-900 transition w-fit rounded-sm' 
                        onClick={() => handleDelete(contacts.id)}>
                            Delete Contact 
                        </button>
                    </li>
                ))}
            </ul>



        </div>
    )
}

export default ContactApp



//conditional render => 3

//1=> ternary operator




//2 => && operator

//3=> if condition 




