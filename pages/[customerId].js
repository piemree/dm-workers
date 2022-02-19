import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { setLoadingState } from "../store/slices/rootSlice";
import Router from "next/router";
import Head from "next/head";

const Customerid = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  Router.onRouteChangeStart = () => dispatch(setLoadingState(true));
  Router.onRouteChangeComplete = () => dispatch(setLoadingState(false));
  const { customerId } = router.query;
  return (
    <div>
      <Head>
        <title>Musteri Bilgisi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Customerid;

export const getServerSideProps = ({ resolvedUrl }) => {
  return {
    props: {
      customerId: String(resolvedUrl).split("/")[1],
    },
  };
};
