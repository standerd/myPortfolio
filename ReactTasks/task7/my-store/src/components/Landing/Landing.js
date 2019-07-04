import React from "react";
import "./Landing.css";

const Landing = props => {
  return (
    <div className="Landing">
      <h1>About Our Service</h1>
      <p>
        We are a bike transport company that specialises in getting your beloved
        bike to the race of your choice
      </p>
      <br />
      <p>
        We make use of our own trailer that can carry up to 48 bikes at a time.
        Your bike will be securely loaded by one of our drivers personally. The
        bikes are securely fastened and supported to prevent any damages.
      </p>
      <br />
      <p>
        As an additional extra, you are allocated a plastic crate where you can
        load you helmet and other small lose items that you do not want to carry
        with you during your travels to the race.
      </p>
      <br />
      <p>
        Upon arrival at the race destination your bike will be unpacked from the
        trailor by our driver again and you will be able to pickup the bike at
        the advised location prior to the race.
      </p>
      <br />
      <p>
        Your confirmation e-mail will contain a barcode, on collection of your
        bike you need to have this confirmation with the barcode on you as we
        will not be able to release any bikes without this. This ensures
        security of your beloved bike and ensures that you can have your bike
        travel with us with peace of mind.
      </p>
      <br />
      <p>If you have any questions please feel free to contact us.</p>
    </div>
  );
};

export default Landing;
