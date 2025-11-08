import { Link } from "react-router-dom";

import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemGroup,
    ItemMedia,
    ItemTitle
} from "@/components/ui/item";

import { Fragment } from "react/jsx-runtime";
import { useState } from "react";

export function SelecaoProcessos(){
    const [processos, setProcessos] = useState([{nome: "ABC"}, {nome: "XYZ"}]);

    return (
        <ItemGroup>
            {
                processos.map((processo, index) => {
                    return (
                        <Fragment key={index}>
                            <Item asChild>
                                <Link to="/processoSeletivo">
                                    <ItemMedia>
                                        <img src="vite.svg"/>
                                    </ItemMedia>
                                    <ItemContent>
                                        <ItemTitle>Processo Seletivo {processo.nome}</ItemTitle>
                                        <ItemDescription>Processo incrível e etc.</ItemDescription>
                                    </ItemContent>
                                    <ItemActions />
                                </Link>
                            </Item>
                        </Fragment>
                    );
                })

            }
        </ItemGroup>
    );
}
