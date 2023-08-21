const CardComponent = () => {
  return (
    <>
      <div style={{ display: "flex", gap: "2rem" }}>
        <div className="card w-96 glass">
          <figure>
            <img src="https://hips.hearstapps.com/hmg-prod/images/little-cute-maltipoo-puppy-royalty-free-image-1652926025.jpg?crop=0.444xw:1.00xh;0.129xw,0&resize=980:*" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Maltipoo</h2>
            <p>
              This cross-breed pup is the result of breeding a miniature poodle
              with a Maltese. They are known to be lively, energetic and just
              plain adorable.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn More!</button>
            </div>
          </div>
        </div>

        <div className="card w-96 glass">
          <figure>
            <img src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-464163411.jpg?crop=1.0xw:1xh;center,top&resize=980:*" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Siberian Hustky</h2>
            <p>
              The only thing better than one adorable husky is an entire sled
              team of 'em. Just be prepared for their outsized energy.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn More!</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardComponent;
