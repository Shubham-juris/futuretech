
const Form = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 py-10 ">
            <h1 className='text-5xl text-center text-[#769AA4] font-bold pb-8'>Contact Us</h1>
            <div className='w-16 h-0.5 mb-10 rounded-2xl bg-gray-300 mx-auto text-center'></div>
            <div className='text-center font-semibold mb-4'>Droup us line!</div>
            <form class="max-w-xl mx-auto">
                <div class="mb-5">
                    <input type="text" placeholder='Name' class="block w-full p-2 border border-gray-300 rounded-lg" />
                </div>
                <div class="mb-5">
                    <input type="text" placeholder='Email' id="base-input" class="w-full p-2 border border-gray-300 text-gray-900 text-sm rounded-lg " />
                </div>
                <div>
                    <textarea type="text" placeholder='Massage' class=" w-full p-2 h-40 border border-gray-300 rounded-lg "></textarea>
                </div>
                <div className=' w-full text-center'>
                    <button className=' rounded-sm px-6 py-2 mt-5   bg-[#769AA4]'>Send</button>
                </div>
            </form>
        </div>
    )
}

export default Form