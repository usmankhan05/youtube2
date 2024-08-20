import React from "react";
import Sidebar from "./Sidebar";
import Video from "./Video";
import { useAuth } from "../context/AuthProvider";
import ListItems from "./ListItems";
import Loading from "../loader/Loading";

function Home() {
  const { data } = useAuth();
  const { loading } = useAuth();
  console.log(data);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex mt-16">
          <Sidebar />
          <div className="h-[calc(100vh-6.625rem)] w-[100%]  xl:w-[83%] overflow-y-scroll overflow-x-hidden">
            <ListItems />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
              {data.map((item) => {
                if (item.type !== "video") return false;
                return <Video key={item.id} video={item?.video} />;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
