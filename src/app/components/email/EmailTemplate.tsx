import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function EmailTemplate({ name, email, phone, message }: EmailTemplateProps) {
  return (
    <div className='bg-gray-100'>
      <div className="text-white bg-gray-900 p-4 rounded-lg">
        <h1 className='text-2xl font-bold my-2'>{name} has reached out!</h1>

        <p className='my-2'>{message}</p>

        {phone && (
          <span className='flex flex-row items-center gap-4 my-1'>
            <p>📞</p>
            <p>{phone}</p>
          </span>
        )}

        {email && (
          <span className='flex flex-row items-center gap-4 my-1'>
            <p>✉️</p>             
            <p>{email}</p>
            
          </span>
        )}
      </div>
    </div>
  );
}
