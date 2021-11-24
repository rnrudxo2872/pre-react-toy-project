import { memo } from "react";
import { IPrice } from "../interfaces/Price.interface";
import { PriceWrapper } from "../styledComponets/Price.styled";

function Price({krw,usd}:IPrice) {

    return (
        <PriceWrapper>
            {Object.values(krw ?? {}).map(val => <div>{val}</div>)}
        </PriceWrapper>
    )
}

export default memo(Price);