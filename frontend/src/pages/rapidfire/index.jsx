import { getrandomuniquenumbs } from "../../utils/problemfilter";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getProblems } from "../../api/revproblems";
import { RapidProblemCard } from "../../components/rapidfire";
import Loading from "../../components/utils/Loading"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export const RapidFire = () => {


    const [index, setIndex] = useState(0);
     const [rand, setRand] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { problems, algo } = useSelector(state => state.problem);
const token=localStorage.getItem("token")
    useEffect(() => {
        if (!token) {
            navigate('/login')
            toast.error('Please login to cotinue')
        }
        const loadproblems = async () => {

            if (!problems || problems.length === 0)
              dispatch(getProblems())
            setLoading(false)
        }
        loadproblems()
    }, [token])
    useEffect(() => {
        if (problems && problems.length > 0) {
            const arr = Array.from({ length: problems.length }, (_, i) => i);
            const temp = [];
            for (let i = 0; i < problems.length; i++) {
                temp.push(getrandomuniquenumbs(arr));
            }
            setRand(temp);
        }
    }, [problems]);


    const [loading, setLoading] = useState(() => !problems || problems.length === 0);
    const onNextClick = () => {
        if (index >= problems.length - 1) return
        setIndex(index + 1)
    }
    const onBackClick = () => {
        index <= 0 ? setIndex(0) : setIndex(index - 1)
    }
    // console.log('Redux problem state:', problems[0].problem_statement);

    return (
        <>
            {
                // rand.map((idx)=>(
                // <h1>{problems[idx].problem_statement}</h1>

                // ))

            }

            {loading ? (
                <Loading />
            ) : (
                problems?.length > 0 && rand[index] < problems.length && (
                    <RapidProblemCard
                        problem_statement={problems[rand[index]].problem_statement}
                        onNextClick={onNextClick}
                        onBackClick={onBackClick}
                        link={problems[rand[index]].link}
                    />
                )
            )}

        </>
    )
}