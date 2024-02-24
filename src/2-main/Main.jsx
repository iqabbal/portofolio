import Articles from "../components/Articles"
import StayUpToDate from "../components/StayUpToDate"
import Work from "../components/Work"
function Main(){
 return(
    <>
    <div>
        <img src="./icones/avatar.webp"></img>
        <h1> Software designer, founder, and amateur astronaut.</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quam? Maiores consequuntur voluptate possimus itaque dolorem, dolor quos sapiente ut et quo officiis, quidem molestias facilis? Culpa enim sunt aliquam.</p>
        <ul>
            <a href=""><img src="./icones/twitter-alt.svg"></img></a>
            <a href=""><img src="./icones/instagram.svg"></img></a>
            <a href=""><img src="./icones/github.svg"></img></a>
            <a href=""><img src="./icones/linkedin.svg"></img></a>
        </ul>
    </div>
    {/* photos */}
    <div>
        <img src="./icones/image-1.webp" alt="" />
        <img src="./icones/image-2.webp" alt="" />
        <img src="./icones/image-3.webp" alt="" />
        <img src="./icones/image-4.webp" alt="" />
        <img src="./icones/image-5.webp" alt="" />
    </div>
    {/* articles and works */}
    <div>
        {/* articles */}
        <div>
            <Articles/>
            <Articles/>
            <Articles/>
        </div>
        {/* works */}
        <div>
            <StayUpToDate/>
            <Work/>
        </div>
    </div>
    </>
 )

}
export default Main