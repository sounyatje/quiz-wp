import React, { useState, useEffect } from "react";
import { getAllquizzes } from "../services/quiz/quizService";
import { TQuiz } from "../../types";

const QuizList: React.FC = () => {
    const [quizzes, setQuizzes] = useState<TQuiz[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const data = await getAllquizzes();
                setQuizzes(data);
            } catch (error: any) {
                setError(error.message);
            }
        })();
    }, []);

    if (error) {
        return <p className="error-message">Erreur: {error}</p>;
    }

    return (
        <div className="page-container quiz-list-page">
            <h1 className="quiz-list-title">Tous les quiz</h1>

            <div className="quiz-card-container">
                {quizzes.map((quiz) => (
                    <div className="quiz-card" key={quiz.id}>
                        <div className="quiz-card-image-wrapper">
                            {quiz.vignette?.guid && (
                                <img 
                                    src={quiz.vignette.guid}
                                    alt={quiz.vignette.post_title || "quiz cover"}
                                />
                            )}
                        </div>
                        <div className="quiz-card-content">
                            <h3 className="quiz-card-title">{quiz.title?.rendered}</h3>
                            <p className="quiz-card-description">{quiz.description}</p>
                            <p className="quiz-card-difficulty">Difficulté: {quiz.difficulte?.[0]}</p>
                            <div className="discover-button-container">
                                <button className="discover-button">Découvrir</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuizList;
