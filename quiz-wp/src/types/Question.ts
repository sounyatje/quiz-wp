export type TQuestion = {

question: string;
contnenu?:string;
reponse_fr?: string;
reponse_en?: string;
reponse_alternative?: string;
quiz_associes?: number[];

    ID: number;
    post_title: string;
    post_author: string;
    post_date: string;
    post_status: string;
   [key: string]: any;

};