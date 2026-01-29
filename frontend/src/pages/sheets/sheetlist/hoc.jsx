import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getsheets } from "../../../api/sheets";
import Loading from "../../../components/utils/Loading"
export const HOCSheets = (Component) => {

  return function UpdatedComponent() {
    const dispatch = useDispatch();
    const sheets = useSelector(state => state.dsasheet.sheets)
    const [loading, setLoading] = useState(() => !sheets || sheets.length === 0);
    useEffect(() => {
      const loadSheets = async () => {
        if (!sheets || sheets.length == 0)
          dispatch(getsheets());
        setLoading(false);
      };
      loadSheets();
    }, []);
    if (loading) {
      return <Loading />
    }
    return (
      <>
        <Component sheets={sheets}></Component>
      </>
    )
  }

}