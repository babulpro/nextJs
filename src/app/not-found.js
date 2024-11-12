// app/not-found.js
export default function NotFound() {
    return (
       <div className="container m-auto bg-slate-800 mt-14 py-10">
            <div className="w-4/5 m-auto py-10 min-h-1/2  shadow-2xl">
                <div className="flex justify-center items-center  text-sky-400">
                    <h1 className="text-2xl underline">Comming Soon</h1>
                    
                    <span class="relative flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                    </span><br/>
                 
                </div>
            </div> 

       </div>
    );
  }
  