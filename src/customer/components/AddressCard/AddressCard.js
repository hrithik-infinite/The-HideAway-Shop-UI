import React from "react";

const AddressCard = () => {
  const address = {
    firstName: "Hrithik",
    lastName: "Agarwal",
    streetAddress: "Bagmane",
    city: "BLR",
    state: "KTK",
    zipCode: "560016",
    mobile: "987654321234",
  };
  return (
    <div>
      {/* <h1 className="text-lg font-semibold py-4">Delivery Adress</h1> */}
      <div className="space-y-3">
        <p className="font-semibold">{`${address?.firstName} ${address?.lastName}`}</p>

        <p>{`${address?.streetAddress} ${address?.city} ${address?.state} ${address?.zipCode}`}</p>

        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>{address?.mobile}</p>
        </div>
      </div>
    </div>
  );
};
export default AddressCard;
