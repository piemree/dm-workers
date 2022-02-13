import { useRouter } from "next/router";
import React from "react";

const Customerid = () => {
  const router = useRouter();
  const { customerId } = router.query;
  return <div>{customerId}ccasfsdf</div>;
};

export default Customerid;
