import {TQuiz} from '../../../types'

const BASE_URL = "http://quizz-wp.local/wp-json/wp/v2";

export async function getAllquizzes(): Promise<TQuiz[]> {

    const response = await fetch (`${BASE_URL}/quiz?status=publish`);
    if (!response.ok){
        throw new Error (`HTTP error! status: ${response.status}`);
    }
    const data = await response.json ();
    return data as TQuiz [];
}