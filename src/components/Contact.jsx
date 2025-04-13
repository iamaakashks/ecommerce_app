export default function Conatact(){
    return (
        <div className="w-full px-20 py-10 flex">
            <form className="rounded-md p-10 mx-auto w-[40%] shadow-2xl">
                <div className="flex justify-between items-center mb-8">
                    <label className="font-bold" for="email">Email </label>
                    <input className="w-[80%] bg-transparent outline-none border-[1px] border-black px-3 py-2 rounded-full" id="email" name="e" required placeholder="Email" />
                </div>
                <label className="font-bold" for="msg">Send Message</label>
                <textarea className="mt-2 flex justify-end w-full bg-transparent border-[1px] border-black rounded-md outline-none p-2 resize-none" rows={8} name="msg" id="msg"></textarea>
                <button type="submit" className="px-4 py-1.5 bg-black rounded-md text-white mt-8">Send</button>
            </form>
        </div>
    )
}