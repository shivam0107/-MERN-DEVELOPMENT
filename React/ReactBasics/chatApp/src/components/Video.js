import "./Video.css";

//destructuring assigning  {title} as props

function Video({ title , id,channel="shivam singh" , views, time , verified}) {
  

    // let verified = true;

    // let channelJSX;
    // if (verified) {
        
    //     channelJSX = <div className="cha  nnel">{channel} ✅</div>;
    // }
    // else {
    //      channelJSX = <div className="cha  nnel">{channel} </div>;
    // }

  return (
    <>
      <div className="container">
        <div className="pic">
          <img
            className="thumb"
            src={`https://picsum.photos/id/${id}/200/300`}
          ></img>
        </div>

        <div className="title">{title}</div>

        {/* {verified ? (
          <div className="cha  nnel">{channel} ✅</div>
        ) : (
          <div className="cha  nnel">{channel} </div>
              )} */}
        {/* 
        <div className="cha  nnel">
          {channel} {verified ? "✅" : null}{" "}
              </div> */}
        {/* short circuited */}
        <div className="cha  nnel">
          {channel} {verified && "✅"}{" "}
        </div>

        <div className="views">
          {views} views <span>,</span> {time}
        </div>
      </div>
    </>
  );
}

export default Video;
