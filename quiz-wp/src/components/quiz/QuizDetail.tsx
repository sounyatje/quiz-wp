import React, {useState, useEffect, useRef, use} from "react";
import { useParams } from 'react-router-dom';
import { getQuizById } from '../services/quiz/quizService';
import { TQuiz } from '../../types';

const QuizDetail: React.FC =() => {

    const {id} = useParams();
    const [quiz, setQuiz] = useState <TQuiz | null>(null);
    const [error, setError] = useState <string | null>(null);

    const [mode, setMode] = useState< "overview" | "play" | "end">('overview');
    const [finalScore, setFinalScore] = useState <Number | null>(null);
    const [startTime, setStartTime] = useState <Number | null>(null);
    const [elapsedTime, setElapsedTime] =useState <Number | null>(null);

    useEffect (() => {
        if (!id) return;

        (async () => {
            try {
                const quizId = parseInt (id, 10);
                const data = await getQuizById (quizId);
                setQuiz(data);
            }

            catch (error: any) {
                setError(error.message);
            }
            
        })();
    }, [id]);

    const totalQuestions = quiz?.questions?.length || 0;
    const percentage = finalScore !== null && totalQuestions > 0 ? Math.round
    (finalScore / totalQuestions * 100) : 0;

    const elapsedSeconds = elapsedTime ? (elapsedTime /1000).toFixed(2) : null;

    return(
        <div className='page-container quiz-detail-container'>
            <div className='quiz-detail-content'>
                {mode === "overview" && (<QuizOverview quiz = {quiz} onPlay = {handlePlay} />
                
            )}
            </div>
        </div>
    )
}

