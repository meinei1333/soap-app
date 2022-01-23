import React from "react";
import { Input, Typography } from 'antd';
import Oil from "./Oil";
import "./OilUnit.css"

interface Props {
    id: string;
    oil: Oil;
}

export const OilUnit: React.FC<Props> = (props: Props) => {
    const { Title, Text } = Typography;
    return (
        <div id={props.id} className="oilUnit">
            <Title level={2}>{props.oil.name}</Title>
            <Input className="input"></Input>
            <Text>%</Text>
        </div>
    )
}