import Head from "next/head";
import { firestore } from "../firebase/clientApp";
import { collection, query, where, limit, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import CustomerList from "../components/CustomerList";
import { InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setLoadingState } from "../store/slices/rootSlice";
import Router from "next/router";

const todosCollection = collection(firestore, "todos");

export default function Home() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  Router.onRouteChangeStart = () => dispatch(setLoadingState(true));
  Router.onRouteChangeComplete = () => dispatch(setLoadingState(false));


  return (
    <div>
      <Head>
        <title>Musteriler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div >
        <TextField
          className="mt-7 mb-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <CustomerList filter={search} />
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const todosQuery = query(
    todosCollection,
    where("done", "==", false),
    limit(10)
  );
  // get the todos
  const querySnapshot = await getDocs(todosQuery);

  const result = [];
  querySnapshot.docs.forEach((snapshot) => {
    result.push({ ...snapshot.data(), id: snapshot.id });
  });

  return {
    props: { result },
  };
};
