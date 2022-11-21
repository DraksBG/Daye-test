import {useEffect, useState} from "react";
import {getData, transformData} from "../../../utils/utils.js";

export const useProduct = () => {
  const [data, setData] = useState([])
  console.log(data)

  useEffect(() => {
    getData(
      "https://front-end-technical-test-bvhzjr6b6a-ew.a.run.app/"
    ).then((data) => setData(transformData(data)));

  }, []);

  return {data}
}