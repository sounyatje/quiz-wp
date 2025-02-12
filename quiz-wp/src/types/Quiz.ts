import { TQuestion } from "./Question";
import { TScoreboard } from "./ScoreBoard";

export type TVignette = {
    ID: string;
    guid?:string;
    post_title?:string;
    post_mime_type?:string;
    [key:string]: any;

};

export type TQuiz = {
id: number;
date: string;
date_gmt: string;
slug?: string;
status?: string;
link?: string;
title?: {
    rendered: string;

}
vignette?: TVignette;
description?: string;
difficulte?: string[];
questions?: TQuestion[];
scoreboard?: TScoreboard[];

class_list?: string[];

_link?: {
    self?: Array <{href: string}>;
    [key: string]: any;
};

[key: string]: any;
}