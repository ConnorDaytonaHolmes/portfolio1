import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent } from "react";

interface EmailFormModalProps {
    open: boolean;
    onClose: () => void;
}

export default function EmailFormModal({ open, onClose }: EmailFormModalProps) {
    
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // this is cringe but i cant figure out forms rn and i want to go to bed
        const getInputValue = (index: number) => ((e.target as HTMLFormElement)[index] as HTMLInputElement).value;

        const name = getInputValue(0);
        const email = getInputValue(1);
        const phone = getInputValue(2);
        const message = getInputValue(3);

        console.log(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`);
    }
    
    return (
        <div className={`fixed top-0 left-0 w-screen h-screen bg-black/50 z-50 flex flex-col items-center justify-center ${open ? '' : 'hidden'}`}>
            <div className='relative w-4/5 md:w-1/3 h-auto bg-gray-800 rounded-lg p-8 border-2 border-gray-200' id='email-form-modal'>
                { /* HEADER */ }
                <div className='flex justify-between m-4 mb-12 items-center'>
                    <h1 className='text-lg md:text-2xl font-bold'>Contact Me</h1>
                    <FontAwesomeIcon icon={faClose} onClick={onClose}/>
                </div>
                
                { /* FORM */ }
                <form onSubmit={onSubmit}>
                    <div className='flex flex-col m-4 gap-4'>
                        <input className='bg-white/10 p-2' type='text' placeholder="Name" name='name'/>
                        <input className='bg-white/10 p-2' type='email' placeholder="Email" name='email'/>
                        <input className='bg-white/10 p-2' type='text' placeholder="Phone Number" name='phone'/>
                        <textarea className='bg-white/10 p-2' placeholder="Message" rows={4} name='message'/>
                        <button type='submit' className='bg-linear-to-b from-gray-600 to-gray-700 p-2 rounded-lg mt-8 w-60 self-center duration-500 hover:from-gray-500 hover:to-gray-600 transition-all'>
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
