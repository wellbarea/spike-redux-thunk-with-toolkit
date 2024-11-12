"use client";

import { Post } from "@/config/stores/reducers/post/types";

type Props = {
    data: Post[];
}

export const List = ({ data }: Props) => {
    return (
        <div>
            <h1>Dados:</h1>

            <ul>
                {data.map(({ id, title }) => <li key={id}>{title}</li>)}
            </ul>
        </div>
    )
}