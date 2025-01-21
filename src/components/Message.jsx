import React from 'react';
import client1 from '../assets/client1.png';
import client2 from '../assets/client2.png';
import client3 from '../assets/client3.png';

const Message = () => {
    const clients = [
        {
            msg : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            img : client1 ,
            name : 'Nouhaila',
            adress : 'Tanger, Morocco'
        },
        {
            msg : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            img : client2 ,
            name : 'Kawtar',
            adress : 'Taza, Morocco'
        },
        {
            msg : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            img : client3 ,
            name : 'Zineb',
            adress : 'Rabat, Morocco'
        },
    ];

  return (
    <div className="flex justify-around flex-wrap">
      {clients.map(client => (
        <div key={client.name} className="p-4 bg-rose-50 drop-shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
           </svg>

          <p className="pb-4">{client.msg}</p>
          <div className="flex items-center space-x-3">
           <img src={client.img} alt={client.name} className="w-12 h-12 rounded-full"/>
           <div>
              <p className="text-md font-semibold"> {client.name} </p>
              <p> {client.adress} </p>
           </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Message
