export default function Addblog({onClick}) {
    return (
        <div className="z-10 w-full h-full flex justify-center items-center">
            <form className="w-4/5 h-full flex flex-col justify-center items-center gap-8">
                <div className="mb-10">
                    <h2 className="font-sans font-extrabold text-5xl text-violet-400">
                        Add your story!
                    </h2>
                </div>
                <div className=" w-full h-fit flex justify-evenly items-center gap-4">
                    <div className="w-1/2 h-fit flex items-center gap-2  border-b-4 
                        border-violet-400">
                        <label className="font-sans font-extrabold text-xl">
                            Title
                        </label>
                        <input 
                            type="text"
                            className="w-full bg-transparent px-2 py-1
                            focus:outline-none" 
                            placeholder="Enter the title of your blog!"
                        />
                    </div>

                    <div className="w-2/5 h-fit flex items-center gap-2 border-b-4 
                        border-violet-400">
                        <label className="font-sans font-extrabold text-xl">
                            Category
                        </label>
                        <input 
                            className="w-full bg-transparent px-2 py-1
                            focus:outline-none" 
                            placeholder="Enter the title of your blog!"
                        />
                    </div>
                    
                </div>

                <div className=" w-full h-fit flex justify-evenly items-center gap-4">
                    <div className="w-full h-fit flex flex-col items-start gap-2 mx-12">
                        <label className="font-sans font-extrabold text-xl border-b-4 
                        border-violet-400">
                            Description
                        </label>
                        <textarea id="description" name="description" rows="10" cols="50"
                        className="w-full bg-transparent border-2 border-violet-400 rounded-md px-2 py-1
                        focus:outline-none font-sans font-bolg"
                        placeholder="Enter your story here......"></textarea>
                    </div>                    
                </div>

                <div className=" w-full h-fit flex justify-normal items-center gap-4">
                    <div className="w-1/3 h-fit flex items-center gap-2 mx-12 border-b-4 
                        border-violet-400">
                        <label className="font-sans font-extrabold text-xl ">
                            Image / Video
                        </label>
                        <input 
                            type="file"
                            className="w-fill bg-transparent px-2 py-1
                            focus:outline-none"
                            accept=".jpg,.png,"
                            multiple={true} 
                        />
                    </div>
                    
                </div>
            </form>
        </div>
    )
}