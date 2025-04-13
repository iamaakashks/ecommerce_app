import { useState } from "react"

export default function Contact(){
    const [isSubmitted, setIsSubmitted] = useState(false);
    return (
        <div className="w-full px-20 py-10 flex">
            <form
            onClick={()=>setIsSubmitted(true)}
            action="https://api.web3forms.com/submit"
            method="POST"
            className="rounded-md p-10 mx-auto w-[40%] shadow-2xl">
                <input type="hidden" name='access_key' value="86be57eb-e398-42e9-ac9c-2842a8d2fd0c" />
                <div className="flex justify-between items-center mb-8">
                    <label className="font-bold" for="email">Email </label>
                    <input className="w-[80%] bg-transparent outline-none border-[1px] border-black px-3 py-2 rounded-full" id="email" name="Email" required placeholder="Email" />
                </div>
                <label className="font-bold" for="msg">Send Message</label>
                <textarea className="mt-2 flex justify-end w-full bg-transparent border-[1px] border-black rounded-md outline-none p-2 resize-none" rows={8} name="Message" id="msg"></textarea>
                <input type="hidden" name="redirect" value="https://web3forms.com/success"></input>
                <button type="submit" className="px-4 py-1.5 bg-black rounded-md text-white mt-8">Send</button>
            </form>
        </div>
    )
}