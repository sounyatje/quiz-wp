import { TQuiz } from '../../../types';

const BASE_URL = "http://quizz-wp.local/wp-json/wp/v2";

export async function getAllquizzes(): Promise<TQuiz[]> {
    const response = await fetch(`${BASE_URL}/quiz?status=publish`);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data as TQuiz[];
}

export async function getQuizById(id: number): Promise<TQuiz> {
    const response = await fetch(`${BASE_URL}/quiz/${id}`);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data.scoreboard && Array.isArray(data.scoreboard)) {
        const scoreboardPromises = data.scoreboard.map(async (sbItem: any) => {
            if (sbItem.id) {
                const response = await fetch(`${BASE_URL}/scoreboard/${sbItem.id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const sbData = await response.json();
                return {
                    ...sbItem,
                    utilisateur: sbData.utilisateur,
                };
            }
            return sbItem;
        });

        data.scoreboard = await Promise.all(scoreboardPromises);
    }
    return data as TQuiz;
}
