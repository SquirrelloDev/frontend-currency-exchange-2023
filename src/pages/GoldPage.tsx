import Wrapper from "../components/UI/Wrapper";
import GoldList from "../components/Gold/GoldList";
import GoldChart from "../components/Gold/GoldChart";
import {useLoaderData} from "react-router-dom";
import GoldProvider from "../context/GoldProvider";
 export type goldEntries = {data: Date, cena: number}[]
const GoldPage = () => {
    const loaderData = useLoaderData();
    const entries = loaderData as goldEntries;
  return (
      <Wrapper>
          <GoldProvider data={entries}>
              <GoldList goldEntries={entries}/>
              <GoldChart/>
          </GoldProvider>
      </Wrapper>
  )
}
export default GoldPage;