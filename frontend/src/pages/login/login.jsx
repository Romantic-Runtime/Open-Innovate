import "./login.css";
import { useState } from "react";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const apiBase = import.meta.env.VITE_API_BASE || "http://localhost:8000";

    const onSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            const res = await fetch(`${apiBase}/api/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data?.message || data?.error || "Login failed");
            // on success - you can navigate or update app state
            window.location.href = "/"; // simple redirect to home
        } catch (err) {
            setError(err.message || "Login failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-black min-h-screen min-w-screen">
            <div className="w-[95vw] h-[80vh] blur-[60px] bg-[#101E39] rounded-t-full absolute bottom-0 left-[2%] "></div>
            <div className=" absolute w-50 h-50 bg-[#61217E] rounded-full left-[25%] z-0"></div>
            <div className=" absolute w-40 h-40 bg-[#61217E] rounded-full left-[65%] top-[15%] z-0"></div>

            {/* <div className="relative bg-linear-to-br from-[#FBE8E8] from-0% to-[#224790] p-[3px] w-fit left-105 top-20 rounded-3xl"> */}

            <div className="bg-[#11111161] backdrop-blur-2xl  relative  left-105 top-15  rounded-3xl size-120 flex flex-col items-center justify-center text-white shadow-2xl/30">
                <h1 className="my-8 text-5xl" >Log In</h1>
                <h2 className="text-center">Login Your Account to dive into thriving ecosystem of OpenInnovation.</h2> 
                <form className="w-full" onSubmit={onSubmit}>
                    <div className="p-px mx-2 my-5 bg-linear-to-br from-[#336DAE] to-[#61217E] relative rounded-3xl">
                    <div className="rounded-3xl p-3 flex bg-[#090909]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                        </svg>
                        <input className="mx-1 outline-none border-none ring-0 text-white" type="email" placeholder=" Enter Your Email" value={email} onChange={(e)=>setEmail(e.target.value)} required></input><br></br>
                    </div>
                    
                    </div>
                     <div className="p-px mx-2  my-5 bg-linear-to-br from-[#336DAE] to-[#61217E] relative rounded-3xl">
                    <div className="rounded-3xl p-3 bg-[#090909] flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd" />
                        </svg>
                        <input className="mx-1 outline-none border-none text-white ring-0" type="password" placeholder="Enter Your Password" value={password} onChange={(e)=>setPassword(e.target.value)} required></input>
                    </div>
                    </div>
                    <div className="bg-linear-to-br from-[#336DAE] to-[#9A9797] p-px mx-2 my-5 rounded-3xl ">
                        <button className="w-full p-2 bg-[#1F1F1F] text-white rounded-3xl" disabled={loading}>
                            {loading ? 'Logging in...' : 'Log In'}
                        </button>
                    </div>
                    {error && <div className="text-red-400 text-center mb-4">{error}</div>}
                </form>

                <div className="w-full px-8 mt-4">
                    <div className="relative mb-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-500"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 text-gray-400 bg-[#11111161]">Or continue with</span>
                        </div>
                    </div>

                    <div className="bg-linear-to-br from-[#336DAE] to-[#61217E] p-px rounded-3xl">
                        <button 
                            onClick={() => window.location.href = `${apiBase}/api/auth/google`}
                            type="button"
                            className="flex items-center justify-center w-full gap-3 p-2 bg-[#1F1F1F] text-white rounded-3xl hover:bg-[#2a2a2a] transition-colors"
                        >
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                            </svg>
                            <span>Continue with Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;