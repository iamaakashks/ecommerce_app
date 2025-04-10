import { useEffect } from "react";
import { Link } from "react-router-dom"
import { useNavigate, useLocation } from "react-router-dom"

export default function Footer(){
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(()=>{
        if(location.pathname === '/products'){
            navigate("/api/products")
        }else if(location.pathname === '/office'){
            
        }
    }, [location.pathname, navigate])
    const footerLinks = [
        'about',
        'products',
        'office',
        'company',
        'contact'
    ]
    const officeLink = ()=>{
        window.location.href = 'https://github.com/iamaakashks'
    }
    return (
        <div className="w-full px-20 py-10">
            <ul className="flex justify-center gap-10 h-12">
                {
                    footerLinks.map(
                        (link, index)=>
                            <li className="hover:scale-110 transform-all duration-300" key={index}>
                            {
                                (link === 'office' || link === 'company') ? (
                                    <button onClick={officeLink}>
                                        {link}
                                    </button>
                                ) : (
                                    <Link to={`/${link}`}>{link}</Link>
                                )
                            }
                        </li>
                    )
                }
            </ul>
            <div className="border-b-[1px] border-black"></div>
            <div className="flex justify-between">
                <p>copyright @ 2025 - All Right Reserved</p>
                <div className="text-white w-[30%] bg-black flex py-4 justify-center text-3xl">
                    <Link to='/'>House of Mandal</Link>
                </div>
            </div>
        </div>
    )
}