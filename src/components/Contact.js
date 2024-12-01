const Contact=()=>{
    return(
       <div>
            <h1 className="font-bold text-2xl p-4 m-4">Contact Us page</h1>
            <form>
                <input type="text" className=" border-black m-2 p-4" placeholder="name" />
                <input type="text" className="border-black m-2 p-4" placeholder="message" />
                <button className="border border-black m-2 p-4 bg-gray-400 rounded-lg">Submit</button>
            </form>
       </div>
    )
}
export default Contact;