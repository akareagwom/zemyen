import rev from "../images/zem7.jpg"

const Reviews = () => {
    return ( 
        <>
        <div className="w-[20%] flex flex-col justify-center rounded-[10px] items-center bg-[#3B6346]">
            <img className="h-[150px] rounded-t-[10px] brightness-50 w-[100%]"  src={rev} alt="" srcset="" />
            <div className="h-[150px]">
                <h1>Reviews</h1>
                <p>“Your most unhappy customers are your greatest source of learning.” </p>
            </div>
        </div>
        </>
     );
}
 
export default Reviews